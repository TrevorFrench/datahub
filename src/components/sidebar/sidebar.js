import React from "react";
import PropTypes from "prop-types";
import logo from "./DATA.svg"

import "./sidebar.css";

export default class Sidebar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <img className="sidebar-logo" src={logo} alt="Logo" />
        <div className="sidebar-welcome">{this.props.value}</div>
        <div className="sidebar-item">Profile</div>
        <div className="sidebar-item"></div>
        <div className="sidebar-item"></div>
        <div className="sidebar-item"></div>
        <div className="sidebar-item"></div>
        <div className="sidebar-item"></div>
        <div className="sidebar-item"></div>
        <div className="sidebar-item"></div>
        <div className="sidebar-item"></div>
      </div>
    );
  }
}