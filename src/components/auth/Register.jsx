import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { startSignup } from '../../services/auth';


export const Register = () => {

    const options = [
        { value: 'OWNER_ROLE', label: 'Vendedor' },
        { value: 'USER_ROLE', label: 'Cliente' },
        { value: 'ADMIN_ROLE', label: 'Administrador' },
    ];

    const dispatch=useDispatch();

    const navigate=useNavigate()

    const [nombre, setNombre] = useState('');

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);
    const [contrasena2, setContrasena2] = useState('')

    const handleRegister=(e)=>{
        e.preventDefault();
        if (contrasena===contrasena2){
            dispatch(startSignup(nombre,correo,contrasena,selectedOption.value))
            navigate('/')

            
        }else{
            Swal.fire('Las contraseñas deben coincidir')
        }

    }


  return (
    <div>
        <section className="">
        
            <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: 'hsl(0, 0%, 96%)'}}>
                <div className="container">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                    <h1 className="my-5 display-3 fw-bold ls-tight">
                        The best offer <br />
                        <span className="text-primary">for your business</span>
                    </h1>
                    <p style={{color:'hsl(217, 10%, 50.8%)'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card">
                        <div className="card-body py-5 px-md-5">

                        <form onSubmit={handleRegister}>
                        
                            <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                <input type="text" id="nombre" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                                <label className="form-label" htmlFor="nombre">Nombre</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                <Select
                                    defaultValue={selectedOption}
                                    onChange={setSelectedOption}
                                    options={options}
                                    />
                                </div>
                            </div>
                            </div>

                        
                            <div className="form-outline mb-4">

                                <input type="email" id="correo" className="form-control"  value={correo} onChange={(e)=>setCorreo(e.target.value)}/>
                                <label className="form-label" htmlFor="correo">Correo electronico</label>
                            </div>

                        
                            <div className="form-outline mb-4">
                                <input type="password" id="contrasena" className="form-control"  value={contrasena} onChange={(e)=>setContrasena(e.target.value)}/>
                                <label className="form-label" htmlFor="contrasena">Contraseña</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="password" id="contrasena2" className="form-control"  value={contrasena2} onChange={(e)=>setContrasena2(e.target.value)} />
                                <label className="form-label" htmlFor="contrasena2">Confirma tu Contraseña</label>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">
                                Registrarse
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        
        </section>

    </div>
  )
}
