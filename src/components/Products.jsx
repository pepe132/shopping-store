import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

export const Products = () => {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://todo-cerca-backend-production.up.railway.app/api/products/todos`)
    .then((response) => response.json())
    .then((actualData) =>{
      
      setData(actualData.productos)
      setFilter(actualData.productos)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err.message);
  });

    
}, [])

const filterProduct=(category)=>{

  const updatedList=data.filter((x)=>x.nombre_producto===category)
  setFilter(updatedList)

}


  const Loading=()=>{
    return (
      <div className="col-md-3">
        <Skeleton height={350}/>
        <Skeleton height={350}/>
        <Skeleton height={350}/>
        <Skeleton height={350}/>
      </div>
    )

  }

  const ShowProducts=()=>{
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>Todos</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('Sillas')}>Sillas</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('Pan')}>Audifonos</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('Mouses')}>Mouses</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct('Monitores')}>Monitores</button>

        </div>

        { filter && filter.map((product)=>{
          return(
            <>
              <div className="col-md-3 mb-4" key={product._id}>

                <div className="card h-100 text-center p-4" key={product._id}>
                <img src='https://i5.walmartimages.com.mx/mg/gm/3pp/asr/cd447a2c-acf0-401e-8b02-e10b051f7b67.a51ae248866d7e6dae69064d894b2fdb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' alt='hola' height={250} width={250}/>
                  
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.nombre_producto.substring(0,12)}</h5>
                    <p className="card-text lead fw-bold">$ {product.precio}</p>
                    <NavLink to={`/productos/${product._id}`} className="btn btn-outline-dark">Comprar ahora</NavLink>
                  </div>
                </div>

              </div>
            </>
          )
        })}
      </>
    )
  }
  
  return (
    <div>
      <div className="container my-5 py-5">

        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Disfruta de todos nuestros productos</h1>
            <hr/>
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowProducts/>}
        </div>
      </div>
    </div>
  )
}

