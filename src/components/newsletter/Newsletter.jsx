import React, { useState } from "react";
import Button from "../buttons/Button";
import "./Newsletter.css";
export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setmail("");
  };

  const [mail, setmail] = useState("");
  const handleChange = (e) => {
    setmail((mail) => e.target.value);
  };
  return (
    <div className="newsletter">
      <span>Newsletter</span>
      <h2>Do you want to get Special News?</h2>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="email"
            placeholder="Drop your mail"
            onChange={handleChange}
            value={mail}
            required
          />
          <Button text="subscribe" onClick={handleSubmit} type="submit" />
        </div>
      </form>
    </div>
  );
}
