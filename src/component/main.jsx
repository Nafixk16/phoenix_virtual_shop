import React, { Component } from "react";
import CoverImage from "./coverImg";
import Header from "./header";
import IntroSection from "./intro";
import Navbar from "./navbar";
import "../css/main.css";
class MainPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="main-page-wrapper">
          <Header />
          <Navbar />
          <CoverImage />
          <IntroSection />
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
