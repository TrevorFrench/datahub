import React from "react";
import PropTypes from "prop-types";

import "./Welcome.css";

export default class Welcome extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}