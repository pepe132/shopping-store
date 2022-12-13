
import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from '../helpers/fetch';
import { authCheckingFinish, authLogout, login } from '../store/actions';

export const startLogin = (correo, contrasena) => {
  
    return async(dispatch) => {
        const resp = await fetchSinToken('auth/login', {correo, contrasena}, 'POST');
        const body = await resp.json()
        //console.log(body);
        

        const success = () => {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
            
        }

        const error = () => {
            Swal.fire({
                icon: 'error',
                title: 'Error en el inicio de sesion',
                text: body.msg,
                
              })
        }

        if(resp.ok === true){
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime());
            
            dispatch(login({
                id: body.usuario._id,
                email: body.usuario.correo,
                nombre: body.usuario.nombre,
                rol:body.usuario.rol,
                
            }))

            success();
        }else{
            error();
        }
            
    }
}

export const autoLogin = () => {
    return async(dispatch) => {
        const resp = await fetchConToken('auth/renew');
        const body = await resp.json();

        if(resp.ok === true){

            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                id: body._id,
                correo: body.correo,
                nombre: body.nombre,
                rol:body.rol,
                
            }))
        }else{
            dispatch(authCheckingFinish());
        }
    }
}

export const startLogout = () => {
    return( dispatch ) => {
        localStorage.clear();
        dispatch(authLogout());
    }
}

export const startSignup = (nombre,correo,contrasena,rol) => {
    return async(dispatch) => {
        const resp = await fetchSinToken('usuarios/registro', {nombre, correo,contrasena,rol}, 'POST');
        const body = await resp.json();

       
        const success = () => {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
              )
            }
            
            const error = () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el registro',
                    text: body.msg,
                    
                })
            }
            
        if(resp.ok === true){
            dispatch(startLogin(correo,contrasena));
            success();
        }else{
            error();
        }

    }
}
