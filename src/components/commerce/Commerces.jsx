import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'

export const Commerces = () => {

  const [data, setData] = useState([])
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://todo-cerca-backend-production.up.railway.app/api/commerce`)
    .then((response) => response.json())
    .then((actualData) =>{
      setData(actualData.commerce)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err.message);
  });

    
}, [])



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

        { data && data.map((product)=>{
          return(
            <>
              <div className="col-md-3 mb-4" key={product._id}>

                <div className="card h-100 text-center p-4" key={product._id}>
                <img src='https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg' alt='hola' height={250} width={250}/>
                  
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.nombre_comercio}</h5>
                    <p className="card-text lead fw-bold">Giro de negocio: {product.giro_negocio}</p>
                    <NavLink to={`/comercios/${product._id}`} className="btn btn-outline-dark">Ir a vista del negocio</NavLink>
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
            <h1 className='display-6 fw-bolder text-center'>Nuestros comercios inscritos y avalados</h1>
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

