import React from "react";
import './header.css';

const HeaderComponent = () => {
  return (
    <header className="header-container">
        <div className="header-left p-1">
            <img src={require("../../resources/images/logo-2.png")} alt="logo" />
        </div>
        <div className="header-right">
           <ul className="navItems">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </header>
  );
}

export default HeaderComponent;
