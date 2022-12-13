import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { startLogin } from '../../services/auth';

export const Login = () => {

  const dispatch=useDispatch()

  const navigate=useNavigate()

  const [correo, setCorreo] = useState('');
  const [contrasena, setcontrasena] = useState('')

  const handleSubmit=(event)=>{
    event.preventDefault()
    dispatch(startLogin(correo,contrasena))
    navigate('/')

    

  }
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="mbysv"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

              <form onSubmit={handleSubmit}>
                
                <div className="form-outline mb-4">
                  <input type="email" id="correo" className="form-control form-control-lg"
                    placeholder="Ingresa un correo electronico valido" value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
                  <label className="form-label" htmlFor="correo">Correo electrónico</label>
                </div>

              
                <div className="form-outline mb-3">
                  <input type="password" id="contrasena" className="form-control form-control-lg"
                    placeholder="Ingresa tu contraseña" value={contrasena} onChange={(e)=>setcontrasena(e.target.value)}/>
                  <label className="form-label" for="contrasena">Contraseña</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                
                  <a href="#!" className="text-body">Olvidaste tu contraseña?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">

                  <button type='submit' className="btn btn-primary btn-lg">Iniciar sesion</button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">¿No tienes una cuenta? <Link to='/registro'>Registrate</Link></p>
                </div>

              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
