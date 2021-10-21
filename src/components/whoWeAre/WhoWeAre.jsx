import React from "react";
import Button from "../buttons/Button";
import "./WhoWeAre.css";
import illustration from "../../assets/undraw_creative_team_r90h.svg";
export default function WhoWeAre() {
  return (
    <div className="whoWeAre">
      <div className="container">
        <img src={illustration} alt="" srcset="" />
        <div>
          <span>Mindfitness</span>
          <h3>Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            diam nulla, pulvinar nec finibus id, semper scelerisque massa.
            Vestibulum et arcu laoreet, ornare risus vel, mollis nunc. In
            consectetur pharetra sem. Suspendisse varius, sem vitae dictum
            consectetur, lorem nunc laoreet quam, quis porttitor purus lacus
            tempor leo. Nullam tempus quam ipsum, a dapibus nunc dictum in.
            Integer vel dolor sem. Ut iaculis hendrerit orci id sagittis.
          </p>
          <Button text="see more" />
        </div>
      </div>
    </div>
  );
}
