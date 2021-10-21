import React from "react";
import "./Testimonial.css";
import foulen from "../../assets/foulen2.jpg";
export default function Testimonial() {
  return (
    <div className="testimonial">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl
        nibh, sagittis ac faucibus sit amet, faucibus vitae lacus. Integer
        elementum at nisi pharetra convallis. Suspendisse potenti. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Mauris vel iaculis dui.
      </p>
      <h3>Foulen ben foulen</h3>
      <div className="img" style={{ backgroundImage: `url(${foulen})` }} />
    </div>
  );
}
