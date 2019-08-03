import React, { Component } from "react";
import * as FontAwesome from "react-icons/fi";
import "./index.css";
const Icon = props => {
  const { iconName, size, color } = props;
  const icon = React.createElement(FontAwesome[iconName]);
  return (
    <div onClick={() => props.onClick()} style={{ fontSize: size, color: color }}>
      {icon}
    </div>
  );
};

export default class Header extends Component {
  render() {
    return (
      <>
        <div className={"header-wrapper"}>
          <Icon iconName={"FiPlusCircle"} size={42} color="orange" />
          TechMusese
          {this.props.faceAuth ? (
            <Icon iconName={"FiUserCheck"} size={42} color="orange" />
          ) : (
            <Icon
              iconName={"FiUser"}
              size={42}
              color="orange"
              onClick={() => this.props.setModalFxn()}
            />
          )}
        </div>
      </>
    );
  }
}
