import React from 'react'
import { Products_h } from './../../data/H_product_data';
import './newproduct.css';
import {SliderProducts} from './sliderproducts';
export const NewArrivalProduct = () => {
  return (

    <>
    

    <div className="heading-n-RRIVAL" style={{marginTop:"8%",overflow: "hidden" ,width: "100%"}}>
        <div className="arrivaltext" style={{ paddingTop: 16, paddingLeft: 153 }}>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-1.2px",
              margin: "0 0 -20px",
              color: "#000"
            }}
          >
            New Arrival Products
          </h1>
          <h3 style={{ color: "#636363" ,marginTop:"3%" }}>
            <span
              style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-.48px" }}
            >
              There are many variations passages
            </span>
          </h3>
        </div>
        <div
          style={{
            width: "auto",
            maxWidth: "auto",
            alignSelf: "center",
            position: "relative",
            top: "-49px",
            animationDuration: "1500ms",
            animationDelay: "250ms",
            animationTimingFunction: "cubic-bezier(.165,.84,.44,1)"
          }}
        >
          <div
            style={{
              transition:
                "background .3s,border .3s,border-radius .3s,box-shadow .3s,transform var(--e-transform-transition-duration,.4s)"
            }}
          >
            <hr
              style={{
                width: 940,
                marginLeft: "39%",
                marginTop: "1em",
                marginBottom: "1em"
              }}
            />
          </div>
        </div>
      </div>
      <div className="slider-container">
        
        {Products_h.map((items) => {
    

          return (              <SliderProducts data={items} />
          )
        }

        )
        }
      </div>





    </>
    )
}
