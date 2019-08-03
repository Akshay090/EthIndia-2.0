import React, { Component } from "react";
import TempImage from "../../../src/assets/ethGlobal.jpg";
import AksImage from "../../../src/assets/aks.png";

import "./index.css";
import ListCard from "../ListCard";

export default class Listing extends Component {
  render() {
    return (
      <div className="grid-container">
        <ListCard TempImage={TempImage} />
        <ListCard TempImage={AksImage} />
        <ListCard TempImage={TempImage} />
        <ListCard TempImage={AksImage} />
        <ListCard TempImage={TempImage} />
        <ListCard TempImage={TempImage} />
      </div>
    );
  }
}
