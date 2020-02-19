import React from "react";
import "./card-style.css";
// import img2 from "../assets/frontend.jpg";
// import img3 from "../assets/mobile.jpg";

const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">{props.Description}</p>
        <a href={props.link} className="btn btn-outline-success">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
