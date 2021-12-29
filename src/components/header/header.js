import React from "react";
import "./header.css";

export const Header = (props) => (
  <nav>
    <div className="nav-wrapper">
      <div className="container">
        <a href="#!" className="brand-logo left">
          <img className="logo-header" src="logo192.png" alt="tatayamba icon" />
        </a>
        <h2 className="title"> Ventana Principal </h2>
      </div>
    </div>
  </nav>
);

export const PrincipalHeader = (props) => (
  <nav>
    <div className="nav-wrapper">
      <div className="container">
        <h2 className="title"> Ventana Principal </h2>
      </div>
    </div>
  </nav>
);
