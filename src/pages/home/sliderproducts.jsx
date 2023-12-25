import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import shopping from './../../imgs/icons8-bag-50.png';
import './newproduct.css';
export const SliderProducts = (props) => {
    const { id, title, price, description, img } = props.data;
    const { additem } = useContext(CartContext);
  return (
    <>
    <div className="product-cardx slide">
  <div className="product-imagex">
    <img
      src={img}
      alt="Product 1"
    />
  </div>
  <div className="product-infox">
    <h3 className="product-titlex">{title}</h3>
    <div className="product-pricex">${price}</div>
    <p
      className="product-descriptionx"
      style={{ padding: 0, color: "#70798b", fontSize: 16, fontWeight: 500 }}
    >
      {description}...
    </p>
    <div className="wrapbtnx">
      <button className="btn-add-cartx" onClick={() => additem(id)}>
        <span style={{ width: "80%", marginLeft: 10 ,paddingRight:40}}>add to cart</span>
        <img
          src={shopping}
          alt='product'
          style={{ width: 43, paddingLeft: 0, paddingRight: 20 }}
         
        />
      </button>
    </div>
  </div>
</div>

    </>
  )
}
