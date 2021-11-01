import React, { useState } from "react";
import "./Input.css";
export default function Input({ name, id, type }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue((value) => e.target.value);
  };
  return (
    <div className="input">
      <label for={name}>{name || "label"}</label>
      <input
        type={type || "text"}
        name={name}
        id={id}
        placeholder={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
