import React from "react";
import "./Dashboard.css";
import logo from "../../assets/Logo.png";
import icon from "../../assets/carbon_user-avatar-filled.svg";
export default function DashboardHeader({ handleClick }) {
  return (
    <div className="dashboardHeader">
      <div className="container">
        <img src={logo} alt="mindfitness logo" />
        <ul>
          <li>Dashboard</li>
          <li onClick={handleClick}>Ajouter une formation</li>
          <li>
            <img src={icon} alt="" srcset="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
