import React, { useState } from "react";
import './header.css';
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btnTxt, setBtnTxt] = useState('Login');
  return (
    <header className="header-container">
        <div className="header-left p-1">
        <Link to="/"><img src={require("../../resources/images/logo-2.png")} alt="logo" /></Link>
        </div>
        <div className="header-right d-flex align-items-center">
           <ul className="navItems m-0">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <button className="login-Btn" onClick={() => {
              btnTxt === 'Login'? setBtnTxt('Logout') : setBtnTxt('Login'); }}>{btnTxt}</button>
        </div>
    </header>
  );
}

export default HeaderComponent;
