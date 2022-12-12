import React, { Component } from "react";
import { getAuth } from "firebase/auth";

export default class Dashboard extends Component {
  render() {
    return <div>Hello, {getAuth().currentUser.displayName}</div>;
  }
}
