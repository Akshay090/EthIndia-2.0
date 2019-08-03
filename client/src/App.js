import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Listing from "./components/Listing";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AksImage from "../src/assets/aks.png";
import Webcam from "react-webcam";

export default class App extends Component {
  state = {
    modalShow: false,
    faceAuth: false
  };

  handleClose = () => {
    this.setState({
      modalShow: false
    });
  };

  setModal = () => {
    this.setState({
      modalShow: true
    });
  };

  render() {
    return (
      <>
        <Header faceAuth={this.state.faceAuth} setModalFxn={this.setModal} />
        <Listing />
        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Take A Cool Pic to verify </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Webcam
                ref={node => (this.webcam = node)}
                screenshotFormat="image/jpeg"
                height={350}
                width={350}
                videoConstraints={{
                  facingMode: "user"
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
