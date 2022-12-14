import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { addCart } from '../store/actions'

export const Product = () => {

    const {id}=useParams()

    const dispatch=useDispatch();

    const [product, setProduct] = useState({})

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`http://localhost:8080/api/products/${id}`)
        .then((response) => response.json())
        .then((actualData) =>{
            console.log(actualData);
            setProduct(actualData.producto)
            setLoading(false)
        })
        .catch((err) => {
            console.log(err.message);
    });
     
    }, [id])

    const addProduct=(product)=>{
        dispatch(addCart(product))

    }
    const Loading=()=>{
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />

                </div>

                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={150} width={100} style={{marginLeft:6}}/>

                </div>
            </>
        )
    }

    const ShowProduct=()=>{
       return(
        <>
            <div className="col-md-6">
                <img src='https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy.jpg' alt='hola' height={450} width={450}/>
            </div>
            <div className="col-md-6">
                <h3 className="lead text-black-50">Producto elaborado por: {product.comercio.nombre_comercio}</h3>
                <h1 className="text-uppercase text-black-50">{product.nombre_producto}</h1>
                <p className='lead'>{product.descripcion}</p>
                <h2 className='lead fw-bolder my-4' >Precio: $ {product.precio}</h2>
                {product.disponible ? (
                    <>
                        <h3 className=' my-4' >Disponible</h3>
                    </>

                ) : (
                    <h3 className='lead fw-bolder my-4' >No hay en existencia</h3>
                )}
                <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addProduct(product)}>
                   A??adir a carrito
                </button>
                <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
                    Ir al carrito
                </NavLink>
            </div>
        </>
       ) 
    }
    
  return (
    <div>
        <div className="container py-5">
            <div className="row py-5">
                {loading ? <Loading/> : <ShowProduct/>} 
            </div>
        </div>
    </div>
  )
}
