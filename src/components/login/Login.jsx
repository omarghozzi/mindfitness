import React from "react";
import logo from "../../assets/Logo.png";
import "./Login.css";
import { useHistory } from "react-router";
export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };
  let history = useHistory();
  return (
    <div className="login">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="mindfitness logo" />
          <input type="email" name="" id="" placeholder="Email..." required />
          <input type="password" name="" id="" placeholder="password" />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}
