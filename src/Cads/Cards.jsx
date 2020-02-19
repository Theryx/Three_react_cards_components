import React, { Component } from "react";
import Card from "./CardUI";

import img1 from "../assets/UI.jpg";
import img2 from "../assets/frontend.jpg";
import img3 from "../assets/mobile.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card
              imgsrc={img1}
              title="UI/UX"
              Description="UX design refers to user experience design, while UI design stands for user interface design. Both of these are crucial..."
              link="https://hackernoon.com/what-is-ui-ux-design-1f01e9dbbf02"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img2}
              title="FRONTEND-DEV"
              Description="Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript..."
              link="https://en.wikipedia.org/wiki/Front-end_web_development"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img3}
              title="MOBILE-DEV"
              Description="Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal..."
              link="https://en.wikipedia.org/wiki/Mobile_app_development"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
