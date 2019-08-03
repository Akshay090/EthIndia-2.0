import React, { Component } from "react";
import "./index.css";

export default class ListCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="bg-img">
          <img src={this.props.TempImage} />
        </div>

        <div className="content">
          <h4>Card title</h4>
          <p>Content....</p> <button>Readmore</button>{" "}
        </div>
      </div>
    );
  }
}
