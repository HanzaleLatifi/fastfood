import { useContext, useReducer, createContext } from "react";
import cartReducer from "./CartReducer";

const CartContext=createContext();
const CartContextDispatcher=createContext();

const initialState={
    cart:[]
}

function CartProvider({children}) {
    const [cart, dispatch] = useReducer(cartReducer, initialState)
    return (
        <>
            <CartContext.Provider value={cart}>
                <CartContextDispatcher.Provider value={dispatch}>
                    {children}
                </CartContextDispatcher.Provider>
            </CartContext.Provider>
        </>
    )
}

export default CartProvider ;

export const useCart=()=>useContext(CartContext) ;
export const useCartActions=()=>useContext(CartContextDispatcher);
