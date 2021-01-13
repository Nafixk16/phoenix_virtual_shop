import React, { Component } from "react";
import PIC1 from "../image/pic1.JPG";
import PIC2 from "../image/pic2.JPG";

class IntroSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="intro-portion-wrapper">
          <div id="intro-box1">
            <div className="left-col">
              <h4>WHO WE ARE</h4>
              <h1>DIAGAST</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                perspiciatis maiores accusamus nihil dicta consectetur maxime?
                Vero non minima ad optio, iste similique aperiam minus dolore
                illo ipsa aut repudiandae.
              </p>
            </div>
            <div className="right-col-intro">
              <button className="zoom-btn">
                <i className="fa fa-video-camera"></i>
              </button>
              <h1 id="zoom-title">Zoom</h1>
              <h4>Register Now >></h4>
            </div>
          </div>
          <div id="intro-box2">
            <div className="image1">
              <img className="img1" alt="ss" src={PIC1}></img>
            </div>
            <div className="image2">
              <img className="img2" alt="ss" src={PIC2}></img>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IntroSection;
