
const cart=[];

export const cartReducer=(state=cart,action)=>{
    switch (action.type) {
        case 'ADDCART':
            //Revisar si el producto ya existe
            const exist=state.find((x)=>x._id===action.payload._id)
            if (exist) {
                //Increase the quantity
                return state.map(x=>
                    x._id===action.payload._id ? {...x,qty: x.qty+1} : x

                )
                
            }else{
                return[
                    ...state,
                    {
                        ...action.payload,
                        qty:1,
                    }
                ]
            }

            

        case 'DELCART':
            const existOne=state.find((x)=>x._id===action.payload._id)
            if (existOne.qty===1) {
                return state.filter(x=>x._id !== existOne._id)
                
            }else{
                return state.map((x)=>
                    x._id===action.payload._id ? {...x, qty: x.qty-1} : x
                )
            }
    
        default:
            return state;
    }
}

