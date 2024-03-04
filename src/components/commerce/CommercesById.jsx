import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'

export const CommercesById = () => {

    const {id}=useParams()

    const dispatch=useDispatch();

    const [commerce, setCommerce] = useState({})

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://todo-cerca-backend-production.up.railway.app/api/commerce/${id}`)
        .then((response) => response.json())
        .then((actualData) =>{
          console.log(actualData);
          setCommerce(actualData.comercio)
          setLoading(false)
        })
        .catch((err) => {
          console.log(err.message);
      });
    
        
    }, [id])

    const ShowCommerce=()=>{
        return(
         <>
             <div className="col-md-6">
                 <img src='https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg' alt='hola' height={450} width={450}/>
             </div>
             <div className="col-md-6">
                
                 <h1 className="text-uppercase text-black-50">{commerce.nombre_comercio}</h1>
                
                 {commerce.estado ? (
                     <>
                         <h3 className=' my-4' >Disponible</h3>
                     </>
 
                 ) : (
                     <h3 className='lead fw-bolder my-4' >Negocio no disponible</h3>
                 )}
                 <button className='btn btn-outline-dark px-4 py-2' >
                    Ir a otro boton
                 </button>
                 <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                     Ir al carrito
                 </NavLink>
             </div>

             <div className="row">
                <div className="col-12 mb-5 ">
                    <h1 className='display-6 fw-bolder text-center mt-8'>Ve los productos que ofrece dicho negocio</h1>
                    <hr/>
                </div>
            </div>
         </>
        ) 
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
    
    
  return (
    <div>
        <div className="row justify-content-center">
            {loading ? <Loading/> : <ShowCommerce/>}
        </div>
        
    </div>
  )
}
