import React, { Component } from "react";

import BootstrapAlert from "react-bootstrap/Alert";

export default class Alert extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BootstrapAlert>{this.props.children}</BootstrapAlert>;
  }
}
