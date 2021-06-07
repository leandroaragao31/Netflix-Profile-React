import React, { Component } from "react";
import Logo from "./assets/logo-netflix.jpg";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container-logo">
          <img className="logo" src={Logo} alt="netflix-logo" />
        </div>
      </header>
    );
  }
}

export default Header;
