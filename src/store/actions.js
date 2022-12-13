export const addCart=(product)=>{
    return {
        type:'ADDCART',
        payload: product
    }
}

export const deleteCart=(product)=>{
    return {
        type:'DELCART',
        payload: product
    }
}

export const login=(user)=>{
    return{
        type:'AUTHLOGIN',
        payload:user
    }
}

export const authCheckingFinish=()=>{
    return{
        type:'AUTHFINISH'
    }
}

export const authLogout=()=>{
    return{
        type:'AUTHLOGOUT'
    }
}
