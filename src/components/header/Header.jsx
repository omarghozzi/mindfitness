import React from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";
export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>service</li>
        <li>training</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
