import React, { useEffect, useState } from 'react';

import "./../components/cards.css";
import { CartContext } from './../context/cart-context';
import { CartItemC } from './cartitemc';
import { Products_h } from '../data/H_product_data';
import { useContext } from 'react';


export const Cart = () => {
  const [cartTotal,setTotal] = useState(0);
const {cartitems} = useContext(CartContext);
const calculatetotal = ()=>{
  let Total=0;
  Products_h.forEach(item => {
    if(cartitems[item.id] !==0 ){
      Total+= item.price * cartitems[item.id];
    }
    
  });
 
  
return Total;

}
useEffect(() => {
  const total1 = calculatetotal();
 setTotal(total1);
  
 }, [calculatetotal])
  return (


    <>




      <div><div className="order_summary" style={{background: "#fff",
    position: "absolute",
    width: "370px",
    marginLeft: "75%",
    right:"20",
    zIndex: "1",
      boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.2)",    borderRadius: "8px",
    padding: "10px"}}>

        {
          Products_h.map((items) => {

            if (cartitems[items.id] !== 0) {

              return <CartItemC data={items}></CartItemC>

            }
            return null;
          })
        }



        <div className="order_total">
          <p>Total Amount</p>
          <h4>${cartTotal}</h4>
        </div>
        <button style={{ marginTop: 30, marginLeft: "14%" }}>
          <span className="transition" />
          <span className="gradient" />
          <span className="label">View Cart</span>
        </button>
        <button
          style={{
            marginTop: 10,
            marginLeft: "14%",
            color: "#fff",
            background: "linear-gradient(98deg, #4f56db 0%, #0c19b7 100%)"
          }}
        >
          <span className="transition" />
          <span className="gradient" />
          <span className="label">ChechOut</span>
        </button>
      </div>
      </div>


    </>)
}
