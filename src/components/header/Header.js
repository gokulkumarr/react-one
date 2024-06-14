import React, { useState } from "react";
import './header.css';

const HeaderComponent = () => {
  const [btnTxt, setBtnTxt] = useState('Login');
  return (
    <header className="header-container">
        <div className="header-left p-1">
            <img src={require("../../resources/images/logo-2.png")} alt="logo" />
        </div>
        <div className="header-right d-flex align-items-center">
           <ul className="navItems m-0">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <button className="login-Btn" onClick={() => {
              btnTxt === 'Login'? setBtnTxt('Logout') : setBtnTxt('Login'); }}>{btnTxt}</button>
        </div>
    </header>
  );
}

export default HeaderComponent;
