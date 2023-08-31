import React, { Component } from "react";

class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: "sort presets",
    };
  }
  render() {
    const { textContent } = this.state;
    return <h1>{textContent}</h1>;
  }
}

export default Heading;
