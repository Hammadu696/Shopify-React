import React from 'react'
import { useContext } from 'react';
import { CartContext } from './../context/cart-context';
import "./../components/cards.css";
import crossbtn from './../imgs/cross.png';

export const CartItemC = (props) => {
    const {removeitems} = useContext(CartContext);
    const {id, title, price, description, img } = props.data;
    return (
        
            <div className="summary_card">
                <div className="card_item">
                    <div
                        className="product_img"
                        style={{
                            marginRight: 5,
                            border: "1px solid #707070",
                            borderRadius: 30,
                            width: 100
                        }}
                    >
                        <img src={img} style={{ borderRadius: "30px" }} alt="" />
                    </div>
                    <div className="product_info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <div className="close-btn">
                            <i className="fa fa-close" />
                        </div>
                        <div className="product_rate_info">
                            <h1>$ {price}</h1>
                        </div>
                    </div>
                    <div
                        className="close-btn"
                        
                        style={{
                            color: "#707070",
                            position: "absolute",
                            right: 10,
                            top: "-15px",
                            cursor: "pointer",
                            fontSize: "2em",
                            fontWeight: 100,
                            padding: 0,
                            margin: 0,
                            lineHeight: 1
                        }}
                    >
                        <img src={crossbtn} onClick={()=>{removeitems(id)}}   style={{ width: 20 }} alt="" srcSet="" />
                    </div>
                </div>
                <hr />
            </div>
        

    )
}
