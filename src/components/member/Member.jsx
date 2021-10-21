import React from "react";
import "./Member.css";
import user from "../../assets/user.svg";
export default function Member({ name, src, occupation }) {
  return (
    <div className="member">
      <img src={src ? src : user} className="member__photo" />
      <div className="member__info">
        <h4>{occupation ? occupation : "occupation"}</h4>
        <p>{name ? name : "name"}</p>
      </div>
    </div>
  );
}
