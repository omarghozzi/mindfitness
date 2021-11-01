import React from "react";
import "./Button.css";
export default function Button({ text, handleSubmit, bgColor }) {
  return (
    <div
      className="button"
      onClick={handleSubmit}
      style={{ backgroundColor: bgColor }}
    >
      <p>{text}</p>
    </div>
  );
}
