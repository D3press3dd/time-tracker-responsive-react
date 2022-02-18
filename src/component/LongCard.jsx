import React from "react";
import Jeremy from "../images/image-jeremy.png";

const LongCard = () => {
  return (
    <div className="card-1">
      <img src={Jeremy} alt="Jeremy profile picture" />
      <div>
        <p>Report for</p>
        <p className="name">Jeremy Robson</p>
      </div>
      <div className="time">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
};

export default LongCard;
