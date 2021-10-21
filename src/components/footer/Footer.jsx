import React from "react";
import "./Footer.css";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import location from "../../assets/location.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div style={{ textAlign: "center" }}>
            <h3>Logo.</h3>
            <p style={{ fontSize: "31px" }}>Stay in touch</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>About</li>
              <li>Home</li>
              <li>Training</li>
              <li>Location</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Hours</h3>
            <div>
              <span>Monday:</span>
              <span>9:00 - 18:00</span>
            </div>
            <div>
              <span>Tuesday:</span>
              <span>9:00 - 18:00</span>
            </div>
            <div>
              <span>Wednesday</span>
              <span>9:00 - 18:00</span>
            </div>
            <div>
              <span>Thursday</span>
              <span>9:00 - 18:00</span>
            </div>
            <div>
              <span>Friday</span>
              <span>9:00 - 18:00</span>
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <p style={{ display: "flex", gap: "10px" }}>
              <img src={phone} alt="icon " /> 000-000-0000
            </p>
            <p style={{ display: "flex", gap: "10px" }}>
              <img src={mail} alt="icon " /> info@email.com
            </p>
            <p style={{ display: "flex", gap: "10px" }}>
              <img src={location} alt="icon " /> Tunis,TN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
