const cartReducer=(state , action)=>{
    switch(action.type){
        case "ADD_TO_CART" : {
            console.log(action)
            const updatedCart=[...state.cart] ;
            const foundIndex = updatedCart.findIndex(
                (item) => item.id === action.payload.id
              );      
            if(foundIndex<0){
                updatedCart.push({...action.payload ,quantity:1 })
            }else{
                const updatedItem={...updatedCart[foundIndex]};
                updatedItem.quantity++;
                updatedCart[foundIndex]=updatedItem;
            }
            return {...state , cart:updatedCart}
        }
    }

}
export default cartReducer