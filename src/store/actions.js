//actions for manipulating cart
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

//Actions for login 
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

export const login=(user)=>{
    return{
        type:'AUTHLOGIN',
        payload:user
    }
}

//Actions for manipulating products

export const products=(products)=>{
    return{
        type:'GETPRODUCTS',
        payload:products

    }
}