import React from "react";
import "./Header.css";
import logo from "../../img/logoipsum-logo-8.svg";

const Header = () => {
  return (
    <div>
      <nav className="main-menu">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
            <h1>My Type Buyer</h1>
          </div>
          <div className="menu">
            <a href="/">Home</a>
            <a href="/">Orders</a>
            <a href="/">Dashboard</a>
            <a href="/">Login</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
