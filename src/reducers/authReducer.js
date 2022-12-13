
const initialState={
    checking: true
}

export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'AUTHLOGIN':
            return{
                ...state,
                ...action.payload,
                checking:false

            }
        
        case 'AUTHFINISH':
            return{
                ...state,
                checking:false
            }
        
        case 'AUTHLOGOUT':
             return{
        
                checking:false
            }

           
    
        default:
            return state;
    }
}