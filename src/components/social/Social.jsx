import React from "react";
import "./Social.css";
import facebook from "../../assets/003-facebook.svg";
import google from "../../assets/002-google-plus.svg";
import twitter from "../../assets/001-twitter-logo-silhouette.svg";
import insta from "../../assets/instagram.svg";
import line from "../../assets/line.svg";
export default function Social() {
  return (
    <div className="social">
      <img src={facebook} alt="facebook icon" />
      <img src={google} alt="google icon" />
      <img src={twitter} alt="twitter icon" />
      <img src={insta} alt="instagram logo" />
      <img src={line} alt="a line" />
    </div>
  );
}
