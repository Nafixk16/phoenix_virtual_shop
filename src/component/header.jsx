import React, { Component } from "react";
import "../css/nav.css";

class Header extends Component {
  state = {};
  displaySocialIcons = (iconName) => {
    iconName = "fa fa-" + iconName;
    return (
      <button className="icon-btn btn-ripple">
        <i className={iconName}></i>
      </button>
    );
  };
  render() {
    return (
      <React.Fragment>
        <div className="header-wrapper">
          <div className="column col-first">
            <div className="buttons-wrap">
              <button type="button" className="btn btn-danger btn-ripple">
                Hall#1
              </button>
              <br />
              <button type="button" className="btn btn-danger btn-ripple">
                Booth#22
              </button>
            </div>
            <div className="content-wrap">
              Join Live Webinar <br />
              <strong>March 19, 2020 | 11.30 AM</strong>
              <br />
              <span>Duration: 20 min</span>
            </div>
          </div>
          <div className="column col-second">
            <h1>Diagast</h1>
          </div>
          <div className="column col-third">
            <div className="social-icons-wrap">
              {this.displaySocialIcons("whatsapp")}
              {this.displaySocialIcons("facebook")}
              {this.displaySocialIcons("linkedin")}
              {this.displaySocialIcons("twitter")}
            </div>
            <div className="visitors-info">
              {this.displaySocialIcons("group")}
              <span className="total-visitors">
                Total visitors
                <br />
                <i>1</i>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
