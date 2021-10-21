import React from "react";
import Service from "../service/Service";
import "./OurServices.css";
import svg1 from "../../assets/001-process.svg";
import svg2 from "../../assets/002-social-media.svg";
import svg3 from "../../assets/003-responsive.svg";
export default function OurServices() {
  return (
    <div className="ourServices">
      <div className="container">
        <span>our services</span>
        <h2>What We Offer</h2>
      </div>
      <div className="services">
        <div className="container">
          <Service
            src={svg1}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam nulla, pulvinar nec finibus id, semper scelerisque massa. Vestibulum et arcu laoreet, ornare risus vel, mollis nunc. In consectetur pharetra sem."
            }
            title="Coaching w fazet"
          />
          <Service
            src={svg2}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam nulla, pulvinar nec finibus id, semper scelerisque massa. Vestibulum et arcu laoreet, ornare risus vel, mollis nunc. In consectetur pharetra sem."
            }
            title="Formation pour les entreprises"
          />
          <Service
            src={svg3}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam nulla, pulvinar nec finibus id, semper scelerisque massa. Vestibulum et arcu laoreet, ornare risus vel, mollis nunc. In consectetur pharetra sem."
            }
            title="E-learning courses"
          />
        </div>
      </div>
    </div>
  );
}
