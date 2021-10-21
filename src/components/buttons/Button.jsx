import React from "react";
import "./Button.css";
export default function Button({ text, handleSubmit }) {
  return (
    <div className="button" onClick={handleSubmit}>
      <p>{text}</p>
    </div>
  );
}
