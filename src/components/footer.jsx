import React from 'react'
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer" style={{marginTop: 50}}>
  <div className="footer__addr">
   
    <img
      src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10047.png"
      alt=""
      srcSet=""
    />
    <h2>Contact</h2>
    <address>
      5534 Somewhere In. The World 22193-10212
      <br />
      <a className="footer__btn" href="mailto:example@gmail.com">
        Email Us
      </a>
    </address>
  </div>
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Visit link</h2>
      <ul className="nav__ul">
        <li>
          <a href="index">shop-digital-2</a>
        </li>
        <li>
          <a href="a">Privacy</a>
        </li>
        <li>
          <a href="a">Terms and condition</a>
        </li>
      </ul>
    </li>
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Company</h2>
      <ul className="nav__ul nav__ul">
        <li>
          <a href="a">Home</a>
        </li>
        <li>
          <a href="a">About</a>
        </li>
        <li>
          <a href="a">contacft us</a>
        </li>
      </ul>
    </li>
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Conatct</h2>
      <ul className="nav__ul nav__ul">
        <li>
          <a href="a">+99 (0) 101 0000 888</a>
        </li>
        <li>
          <a href="a">Info@yourdomain.com</a>
        </li>
      </ul>
    </li>
    <li className="nav__item">
      <h2 className="nav__title">Adress</h2>
      <ul className="nav__ul">
        <li>
          <p>
            Info@yourdomain.com Address Patricia Amedee 4401 Waldeck Street
            Grapevine Nashville, Tx 76051
          </p>
        </li>
        {/* <li>
                  <a href="#">Terms of Use</a>
              </li>

              <li>
                  <a href="#">Sitemap</a>
              </li> */}
      </ul>
    </li>
  </ul>
  <div className="legal">
    <p>© 2019 Something. All rights reserved.</p>
  </div>
</footer>

  )
}
