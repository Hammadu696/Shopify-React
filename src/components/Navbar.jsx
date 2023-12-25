import React from 'react'
import { useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import '../components/navbar.css';
// import  Searchicon  from '';

import { Products_h } from './../data/H_product_data';
import { Cart } from './../components/cart';
import { CartContext } from '../context/cart-context';



export const Navbar = () => {
  const {cartitems} =useContext(CartContext);
  useEffect(() => {
    const menuIcon = document.getElementById('menu-icon');
    const navigationMenu = document.getElementById('navigation-menu');
    const closeBtn = document.getElementById('close-btn');
    const checkbox = document.getElementById('checkbox');
    const carticon = document.getElementById('cart-por');
    carticon.addEventListener('mouseover', () => {


    })

    menuIcon.addEventListener('click', () => {
      navigationMenu.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      navigationMenu.style.display = 'none';

    });

    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        navigationMenu.style.display = 'flex';
      } else {
        navigationMenu.style.display = 'none';
      }
    });
    return () => {
      menuIcon.removeEventListener('click', () => {
        navigationMenu.style.display = 'flex';
      });

      closeBtn.removeEventListener('click', () => {
        navigationMenu.style.display = 'none';
      });

      checkbox.removeEventListener('click', () => {
        if (checkbox.checked) {
          navigationMenu.style.display = 'flex';
        } else {
          navigationMenu.style.display = 'none';
        }
      });
    }
  }, [])

  return (
    <>
      <div className="container-n">
        <nav className="navbar">
          <div className="logo">
            <img
              src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10047.png"
              alt="Logo"
            />
          </div>
          <div className="liness" id="spec_line" />
          <div className="menu" id="menu">
            <div className="links-wrap-n">
              <a className="nav-links-n" href="#home">
                Home
              </a>
              <a className="nav-links-n" href="#about">
                About
              </a>
              <a className="nav-links-n" href="#contact">
                Contact
              </a>
              <a className="nav-links-n" href="#blog">
                Blog
              </a>
              <a className="nav-links-n" href="#shop">
                Shop
              </a>
            </div>
          </div>
          <div className="right-side-wrap">
            <div className="right-side-items-n" id="login_div">
              <a href="#login">
                <div id="login-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                  >
                    <g transform="translate(0)">
                      <path
                        d="M6.676,19.964c-.121,0-.206,0-.284,0l-.144-.005a2.214,2.214,0,0,1-.4-.047,15.4,15.4,0,0,1-2.333-.338l-.256-.054a3.961,3.961,0,0,1-2.975-1.9A2.936,2.936,0,0,1,0,16.363,2.876,2.876,0,0,1,.287,15.1a4.333,4.333,0,0,1,3.2-1.948,16.741,16.741,0,0,1,2.339-.331c.718-.063,1.448-.095,2.17-.095s1.452.031,2.17.095l.461.039a17.216,17.216,0,0,1,1.873.292c1.727.356,2.748.979,3.215,1.962a2.912,2.912,0,0,1,0,2.5c-.463.978-1.512,1.616-3.2,1.949l-.468.1a15.711,15.711,0,0,1-1.88.245c-.715.061-1.442.092-2.158.092C7.562,20,7.113,19.988,6.676,19.964Zm-.733-5.7a15.526,15.526,0,0,0-2.156.305,3.209,3.209,0,0,0-2.2,1.168,1.417,1.417,0,0,0-.139.624,1.452,1.452,0,0,0,.139.627c.255.527,1.025.93,2.227,1.165l.353.075a15.5,15.5,0,0,0,1.874.249,1.84,1.84,0,0,0,.287.033l.393.006c.429.023.866.035,1.3.035.678,0,1.366-.029,2.046-.087a14.342,14.342,0,0,0,2.162-.315l.225-.048c1.061-.24,1.743-.624,1.973-1.108a1.463,1.463,0,0,0,0-1.259c-.245-.516-1.008-.92-2.208-1.167a15.573,15.573,0,0,0-2.152-.3l-.013,0c-.675-.059-1.361-.089-2.037-.089S6.627,14.2,5.942,14.264ZM2.692,5.335A5.312,5.312,0,1,1,8,10.671,5.33,5.33,0,0,1,2.692,5.335Zm1.442,0A3.871,3.871,0,1,0,8,1.448,3.883,3.883,0,0,0,4.133,5.335Z"
                        fill="#200e32"
                      />
                    </g>
                    {/* Add the login icon SVG path here */}
                  </svg>
                </div>
              </a>
              <div id="login-text">
                <a href="login">Login</a>
              </div>
              <div className="liness" />
            </div>
            <div className="right-side-items-n" id="search-por">
              <a href="index.html">
                <div id="search-icon">
                  <img
                    style={{ width: 22 }}
                    src="\assest\magnifying-glass.png"
                    alt="Search Icon"
                  />
                </div>
              </a>
              <div id="seaech-text">
                <a href="index.html">Search</a>
              </div>
              <div className="liness" />
            </div>
            <div id="cart-por" style={{ display: "flex" }}>
              <a href="index.html">
                <div id="cart-icon">
                  <img style={{ width: 22 }} src="\assest\shopping-bag.png" alt="Cart Icon" />
                </div>
              </a>
              <div id="cart-text">
                <a href="index.html">Cart</a>
              </div>
            </div>
            <div className="menu-icon" id="menu-icon">
              <span id="menuToggle">
                <input id="checkbox" type="checkbox" />
                <label className="toggle" htmlFor="checkbox">
                  <div className="bar bar--top" />
                  <div className="bar bar--middle" />
                  <div className="bar bar--bottom" />
                </label>
              </span>
            </div>
          </div>
        </nav>
        <div className="navigation-menu" id="navigation-menu">
          <span className="close-btn" id="close-btn">
            ×
          </span>
          <ul className="menu-list">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Contact</a>
            </li>
            <li>
              <a href="index.html">Blog</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
          </ul>
        </div>
      </div>

      {
       <Cart></Cart>
      }

    </>

  )
}
