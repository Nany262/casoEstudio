import React from "react";
import "./header.css";

export const Header = ({nameScreen, isPrincipal=false}) => (
  <nav>
    <div className="nav-wrapper">
      <div className="container">
        <a href="/" className="brand-logo left">
          {!isPrincipal && <img className="logo-header" src="logo192.png" alt="tatayamba icon" />}
        </a>
        <h2 className="title"> {nameScreen} </h2>
      </div>
    </div>
  </nav>
);
