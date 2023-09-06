import React, { Component } from "react";
import Counter from "./Counter";

class BlockCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 10,
    };
  }

  inputHandler = (event) => {
    const inputValue = Number(event.target.value);
    if (inputValue >= 1 && inputValue <= 1000000) {
      this.setState({ step: inputValue });
    }
  };
  autoClickHandler = () => {
    setInterval(() => {
      {
      }
    }, 1000);
  };
  render() {
    const { step } = this.state;
    return (
      <>
        <div>
          <Counter stepValue={step} />
        </div>
        <input
          type="number"
          value={this.state.step}
          onChange={this.inputHandler}
        />
        <button onClick={this.autoClickHandler}>autoClick</button>
      </>
    );
  }
}

export default BlockCounter;
