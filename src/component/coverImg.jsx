import React, { Component } from "react";
import "../css/main.css";
import Modal from "react-awesome-modal";

// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

// import PIC from "../image/cover2.webp";
class CoverImage extends Component {
  state = {
    visible: false,
    selectedVideo: null,
    windWidth: window.innerWidth,
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({ windWidth: window.innerWidth });
  };
  displayVideo = () => {
    return (
      <React.Fragment>
        <div className="popup-modal-wrapper">
          <div className="header">
            <button
              type="button"
              className="btn btn-ripple closeBtn"
              onClick={() => this.setState({ visible: false })}
            >
              <i className="fa fa-close"></i> Close
            </button>
          </div>
          <div className="video-frame">
            <iframe
              width="100%"
              height="100%"
              title="Video1"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div>
      </React.Fragment>
    );
  };
  displayPDF = () => {
    // const defaultLayout = new defaultLayoutPlugin();
    return (
      <React.Fragment>
        <div className="popup-modal-wrapper">
          <div className="header">
            <button
              type="button"
              className="btn btn-ripple closeBtn"
              onClick={() => this.setState({ visible: false })}
            >
              <i className="fa fa-close"></i> Close
            </button>
          </div>
          <div className="info-frame">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
              <div style={{ height: "100%", width: "100%" }}>
                <Viewer
                  fileUrl={
                    "https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf"
                  }
                />
              </div>
            </Worker>
            {/* https://arxiv.org/pdf/quant-ph/0410100.pdf */}
          </div>
        </div>
      </React.Fragment>
    );
  };
  render() {
    console.log("aa=>", this.state.windWidth);

    // const backImg = "./images/bg-main.JPG";
    return (
      <React.Fragment>
        <div className="cover-image-wrapper">
          {/* <div className="imgDiv"></div> */}
          <button
            id="play-video1"
            className="video-play-button"
            onClick={() =>
              this.setState({ visible: true, selectedVideo: "video1" })
            }
          >
            <span></span>
          </button>

          {/* info btn */}
          <button
            id="info1"
            title="Info about"
            className="video-play-button infoBtn"
            onClick={() =>
              this.setState({ visible: true, selectedVideo: "info" })
            }
          >
            <span className="fa fa-info"></span>
          </button>
          <button
            id="info2"
            title="Info about"
            className="video-play-button infoBtn"
            onClick={() =>
              this.setState({ visible: true, selectedVideo: "info" })
            }
          >
            <span className="fa fa-info"></span>
          </button>
          <button
            id="info3"
            className="video-play-button infoBtn"
            onClick={() =>
              this.setState({ visible: true, selectedVideo: "info" })
            }
          >
            <span className="fa fa-info"></span>
          </button>
          <button
            id="info4"
            className="video-play-button infoBtn"
            onClick={() =>
              this.setState({ infoVisible: true, selectedVideo: "info" })
            }
          >
            <span className="fa fa-info"></span>
          </button>
        </div>
        {this.state.visible ? (
          <Modal
            visible={this.state.visible}
            width={this.state.windWidth < "600" ? "100%" : "60%"}
            height={this.state.selectedVideo === "info" ? "90%" : "60%"}
            effect="fadeInUp"
            onClickAway={() => this.setState({ visible: false })}
          >
            {this.state.selectedVideo === "info"
              ? this.displayPDF()
              : this.displayVideo()}
          </Modal>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

export default CoverImage;
