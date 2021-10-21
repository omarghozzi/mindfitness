import React from "react";
import "./OurTeam.css";
import Facebook from "../../assets/Facebook.jsx";
import Member from "../member/Member";
export default function OurTeam() {
  return (
    <div className="ourTeam">
      <div className="organization">
        <h2>Organizations that trust us:</h2>
        <div className="organizations">
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
        </div>
      </div>
      <div className="team">
        <div className="team__presentation">
          <h2>Learn From</h2>
          <h3>The Top Experts in Human Transformation</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            diam nulla, pulvinar nec finibus id, semper scelerisque massa.
            Vestibulum et arcu laoreet, ornare risus vel, mollis nunc.
          </p>
        </div>
        <div className="team__members">
          {/* {data.map((item) => (
            <Member
              id={item.id}
              key={item.id}
              src={item.img}
              name={item.name}
              occupation={item.occupation}
            />
          ))} */}
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
          <Member />
        </div>
      </div>
    </div>
  );
}
