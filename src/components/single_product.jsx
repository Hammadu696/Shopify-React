import React from 'react'
import { useContext } from 'react';
import './single_product.css';
import { CartContext } from './../context/cart-context';
import shoppping from './../imgs/icons8-bag-50.png';
export const SingleProduct = (props) => {
  
  const { additem } = useContext(CartContext);
  const { id, title, price, description, img } = props.data;


  return (


    <div className="product-card">
      <div className="product-image">
        <img
          src={img}
          alt="Product 1"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-price">${price}</div>
        <p
          className="product-description"
          style={{ padding: 0, color: "#70798b", fontSize: 16, fontWeight: 500 }}
        >
          {description} ...
        </p>
        <div className="wrapbtn">
          <button className="btn-add-cart" onClick={() => additem(id)}>
            <span style={{ width: "80%", marginLeft: 10 ,paddingRight: 40}}>add to cart</span>
            <img
              src={shoppping}
              style={{ width: 43, paddingLeft: 0, paddingRight: 20 }}
              srcSet=""
              alt=''
            />
          </button>
        </div>
      </div>
    </div>


  )
}
