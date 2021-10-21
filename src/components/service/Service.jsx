import React from "react";
import Button from "../buttons/Button";
import "./Service.css";
export default function Service({ src, title, text }) {
  return (
    <div className="service">
      <img src={src} alt="icon" />
      <h3>{title}</h3>
      <p>{text}</p>
      <Button text="see more" />
    </div>
  );
}
