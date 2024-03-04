import React from 'react'
import logo from '../../src/assets/gaming.jpg';
import { FaSignInAlt, FaUserPlus, FaCartPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../services/auth';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    const state=useSelector(state=>state.cart)
    const {id,nombre}=useSelector(state=>state.auth)

    const dispatch=useDispatch()

    const handleLogout=()=>{
        dispatch(startLogout())
    }
  return (
    // <div>

    //     <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
    //     <div className="container">
    //         <img src={logo} alt='logo' width={70}/>

    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">

    //             <ul className="navbar-nav mx-auto mb-2 mb-lg-0">


    //                 <li className="nav-item">
    //                     <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link" to='/productos'>Productos</NavLink>
    //                 </li>
                
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link" to='/comercios'>Comercios</NavLink>
    //                 </li>

    //             </ul>

    //             <div className="buttons">
                
    //                 {
    //                     (id) ? (
    //                         <>  
                                
    //                             <button type="button" className="btn btn-info" onClick={handleLogout}>Cerrar sesion</button>
    //                         </>
    //                     ) : (
    //                         <>
    //                             <NavLink className="btn btn-outline-dark" to='/inicio'>
    //                                 <FaSignInAlt/> Login
    //                             </NavLink>
    //                             <NavLink className="btn btn-outline-dark ms-2" to='/registro'>
    //                                 <FaUserPlus/> Registrarse
    //                             </NavLink>
    //                         </>

    //                     )
    //                 }
    //                 <NavLink className="btn btn-outline-dark ms-2" to='/cart'>
    //                     <FaCartPlus/> Cart ({state.length})
    //                 </NavLink>
    //             </div>

    //         </div>
            
    //     </div>
    //     </nav>
   
    // </div>

    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand><img src={logo} alt='logo' width={70}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos">Nuestros productos</Nav.Link>

        </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">

            <div className="buttons">
                    
                {
                    (id) ? (
                        <>  
                                                
                            <button type="button" className="btn btn-info" onClick={handleLogout}>Cerrar sesion</button>
                        </>
                    ) : (
                        <>
                            <NavLink className="btn btn-outline-dark" to='/inicio'>
                                <FaSignInAlt/> Ingresar
                            </NavLink>
                            <NavLink className="btn btn-outline-dark ms-2" to='/registro'>
                                <FaUserPlus/> Registrarse
                            </NavLink>
                        </>
                
                    )
                }
                <NavLink className="btn btn-outline-dark ms-2" to='/cart'>
                    <FaCartPlus/> Carro ({state.length})
                </NavLink>
            </div>
             
        </Navbar.Collapse>

    </Container>
  </Navbar>
  )
}

export default NavBar;