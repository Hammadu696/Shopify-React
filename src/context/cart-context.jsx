import React, { createContext, useState, } from 'react';
 
import { Products_h } from './../data/H_product_data';

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Products_h.length+1; i++) {

        cart[i] =0;
    }
    return cart;
}
export const CartContext = createContext(getDefaultCart());
export const CartContextProvider = (props) => {
    const [cartitems, setCartItems] = useState(getDefaultCart());
    const additem = (itemid)=> {
        setCartItems((prev)=>({...prev,[itemid]: prev[itemid]+1}));

    };
    const removeitems = (itemid)=> {
        setCartItems((prev)=>({...prev,[itemid]: prev[itemid]-1}));

    };

const cartContextValue = {cartitems,additem,removeitems}
    return (
        <CartContext.Provider value={cartContextValue}> {props.children}   </CartContext.Provider>
    )
};
