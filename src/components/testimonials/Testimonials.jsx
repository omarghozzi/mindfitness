import React from "react";
import Testimonial from "../testimonial/Testimonial";
import "./Testimonials.css";
export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container">
        <span>Testimonials</span>
        <h2>See what our Partners has to say :</h2>
        <div className="testimonials__reviews">
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
        <div className="dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </div>
  );
}
