import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import Cart from '../components/Cart'
import { Checkout } from '../components/Checkout'
import { Commerces } from '../components/commerce/Commerces'
import { CommercesById } from '../components/commerce/CommercesById'
import Footer from '../components/Footer'
import { Home } from '../components/Home'
import NavBar from '../components/NavBar'
import { Product } from '../components/Product'
import { Products } from '../components/Products'
import { LodingScreen } from '../components/ui/LodingScreen'
import { UserScreen } from '../components/users/UserScreen'
import { autoLogin } from '../services/auth'
import { PrivateRoute } from './PrivateRoute'

export const AppRouter = () => {

  const { checking} = useSelector(state => state.auth);

  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
   }, [dispatch])

   if (checking){
    return(
        <LodingScreen/>
    )
    
}
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/inicio' element={<Login/>}/>
            <Route path='/registro' element={<Register/>}/>
            <Route path='/productos' element={<Products/>}/>
            <Route path='/productos/:id' element={<Product/>}/>
            <Route path='/comercios' element={<Commerces/>}/>
            <Route path='/comercios/:id' element={<CommercesById/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>

            <Route element={<PrivateRoute/>}>
                <Route path='/usuario' element={<UserScreen/>}/>
                

            </Route>

        </Routes>
        <Footer/>
    </div>
  )
}
