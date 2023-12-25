import React from 'react'
// import { useEffect } from 'react';
import { Cards } from './../../components/cards';
import { Products_h } from './../../data/H_product_data';
import { SingleProduct } from './../../components/single_product';
import { NewArrivalProduct } from './new_arrival_product';
import {Footer} from './../../components/footer';
import './../../components/footer.css';
import './home.css';
import './../../components/single_product.css'
export const Home = () => {
  return (
    <div>

      <Cards />
      <div style={{ width: "100%", height: "100px" }}>
        <div style={{ textAlign: "center", padding: 20 }}>
          <h2
            style={{
              fontSize: 45,
              fontWeight: 700,
              letterSpacing: "-1.35px",
              color: "#000000",
              height: "98px",
              margin: "0 0 -20px"

            }}
          >
            Best Seller Products
          </h2>
          <h3 style={{ fontSize: 18 }}>
            <span style={{ color: "#636363", fontSize: 14, padding: 15 }}>
              There are many variations passages
            </span>
          </h3>
        </div>

      </div>
      <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>

        {
          Products_h.map((items) => {
            return (
              <div>
                <SingleProduct data={items} />
              </div>
            )

          })
        }
      </div>
      <div
        style={{
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(180deg,#4A4B4C 0%,#000 100%)",
          width: "97%",
          margin: "auto",
          borderRadius: 30,
          height: 400
        }}
      >
        <section
          className="elementor-section"
          style={{
            backgroundImage:
              "url(https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-23.png)",
            padding: "0 35px",
            marginTop: 100,
            marginBottom: 0,
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            opacity: 1
          }}
        >
          <div
            className="elementor-container"
            style={{
              margin: "0 auto",
              width: "auto",
              height: 400,
              maxWidth: 1600,
              display: "flex",
              flexWrap: "wrap",
              alignContent: "flex-end",
              justifyContent: "flex-end"
            }}
          >
            <div
              className="elementor-row"
              style={{
                paddingTop: "58px",
                left: "20%",
                position: "absolute",
                height: "fit-content"
              }}
            >
              <div className="elementor-column elementor-col-100">
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    textTransform: "capitalize",
                    letterSpacing: "-.6px",
                    color: "#fff",
                    padding: "20px"
                  }}
                >
                  {" "}
                  ASUS Zenbook Duo
                </h2>
                <h3
                  style={{
                    fontSize: 55,
                    fontWeight: 700,
                    textTransform: "capitalize",
                    lineHeight: "1.2em",
                    letterSpacing: "-1.65px",
                    maxWidth: 360,
                    color: "#fff",

                  }}
                >
                  The Laptop of Tomorrow
                </h3>
                <a
                  href="https://demo.phlox.pro/shop-digital-2/shop/"
                  style={{
                    display: "inline-block",
                    marginTop: 20,
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "12px 30px",
                    textDecoration: "none",
                    fontSize: 16,
                    borderRadius: 4
                  }}
                >
                  Shop Pre Order
                </a>
              </div>
            </div>
            <div className="elementor-row">
              <div
                className="elementor-column elementor-col-100"
                style={{
                  textAlign: "center",
                  marginTop: 50,
                  width: "fit-content",
                  height: "fit-content"
                }}
              >
                <img
                  src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Free-Mockup-Scene.png"
                  alt="Free Mockup Scene"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    border: "none",
                    borderRadius: 0,
                    boxShadow: "none"
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <NewArrivalProduct></NewArrivalProduct>

      <section id='section_cam' style={{ marginTop: "10%" }}>
        <div>
          <div
            className="wrap-con"
            style={{
              // width: "63%",
              paddingLeft: "38%",
              backgroundColor: "#000",
              borderRadius: 50,
              height: 350
            }}
          >
            <div>
              <div>
                <img
                  decoding="async"
                  loading="lazy"
                  width={457}
                  height={390}
                  style={{ position: "relative", top: "-75px" }}
                  src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-15.png"
                  alt="Mask Group 15"
                />
              </div>
            </div>
            <div style={{ position: "relative", top: "-320px", left: "-72%" }}>
              <h2
                style={{
                  ontSize: 20,
                  fontWeight: 400,
                  letterSpacing: "-.6px",
                  color: "#fff"
                }}
              >
                camera Accessories
              </h2>
              <h3
                style={{
                  fontSize: 40,
                  fontWeight: 700,
                  textTransform: "capitalize",
                  lineHeight: "1.2em",
                  letterSpacing: "-1.2px",
                  color: "#fff"
                }}
              >
                launch party <br /> nice photos
              </h3>
              <button className='button_cam'>Shop By Catagorey</button>
            </div>
          </div>
        </div>
        <div>
          <div
            className="wrap-con"
            style={{
              // width: "63%",
              paddingLeft: "38%",
              backgroundColor: "#0c19b7",
              borderRadius: 50,
              height: 350
            }}
          >
            <div>
              <div>
                <img

                  width={457}
                  height={390}
                  style={{ position: "relative", bottom: "-62px" }}
                  src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-16.png"
                  alt="Mask Group 15"
                />
              </div>
            </div>
            <div style={{ position: "relative", top: "-254px", left: "-69%" }}>
              <h2
                style={{
                  ontSize: 20,
                  fontWeight: 400,
                  letterSpacing: "-.6px",
                  color: "#fff"
                }}
              >
                camera Accessories
              </h2>
              <h3
                style={{
                  fontSize: 40,
                  fontWeight: 700,
                  textTransform: "capitalize",
                  lineHeight: "1.2em",
                  letterSpacing: "-1.2px",
                  color: "#fff"
                }}
              >
                launch party <br /> nice photos
              </h3>
              <button className='button_cam'>Shop By Catagorey</button>
            </div>
          </div>
        </div>
      </section>


      <div style={{ padding: 20, fontFamily: "Arial, sans-serif", height: 650,marginTop: 80 }}>
        <div
          className="container"
          style={{
            display: "flex",
            height: 600,
            backgroundImage:
              "url(https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/macos-big-sur-apple-layers-fluidic-colorful-wwdc-stock-1920x1080-1455.jpg)",
            backgroundRepeat: "no-repeat",
            borderRadius: 35,
            backgroundSize: "cover"
          }}
        >
          <div
            className="row"
            style={{
              width: "fit-content",
              justifyContent: "center",
              alignSelf: "center",
              margin: "auto"
            }}
          >
            <div className="column newsletter-column" style={{ padding: 20 }}>
              <div className="widget-wrap">
                <h2
                  className="main-heading"
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: "-.6px",
                    color: "#fff",
                    margin: "0 0 40px",
                    textAlign: "center"
                  }}
                >
                  Sign Up for Newsletter &amp; Promotions!
                </h2>
                <h3
                  className="sub-heading"
                  style={{
                    fontSize: 60,
                    fontWeight: 700,
                    textTransform: "capitalize",
                    lineHeight: "1em",
                    letterSpacing: "-1.8px",
                    color: "#fff",
                    maxWidth: 750,
                    textAlign: "center"
                  }}
                >
                  Get 25% discount <br />
                  <span>on your next purchase</span>
                </h3>
              </div>
              <div className="widget-wrap" style={{ marginTop: 20 }}>
                {/* <form action="your-form-action-url" method="post">
                      <input type="email" name="EMAIL" placeholder="Enter Your E-mail" required
                          style="width: 250px; padding: 10px; font-size: 16px;">
                      <input type="submit" value="Get Started"
                          style="padding: 10px 20px; background-color: #007bff; color: #ffffff; font-size: 16px; border: none; cursor: pointer;">
                  </form> */}
                <div className="input-group">
                  <input
                    type="email"
                    className="inputxx1"
                    id="Email"
                    name="Email"
                    placeholder="enter you email adress"
                    autoComplete="off"
                  />
                  <input
                    className="button--submitxx"
                    defaultValue="Get Started"
                    type="submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                  {/* footer section   */}

                  <Footer></Footer>

    </div>
  )
}
