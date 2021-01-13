import React, { Component } from "react";
import "../css/nav.css";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark  ">
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <button className="nav-item nav-link active">Home</button>
              <button className="nav-item nav-link">Our Profile</button>
              <button className="nav-item nav-link">Our Products</button>
              <button className="nav-item nav-link">Brochure</button>
              <button className="nav-item nav-link">Watch Video</button>
              <button className="nav-item nav-link">Gallery</button>
              <button className="nav-item nav-link">Live Chat</button>
              <button className="nav-item nav-link">Contact Us</button>
            </div>
            <div className="navbar-nav ml-auto">
              <button className="nav-item nav-link">Login</button>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
