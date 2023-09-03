import React, { Component } from "react";
import styles from "./StopWatchTimeout.module.css";

class StopWatchTimeout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.idTimeout = null;
    this.isVisible = false; // опорний пропс для зміни властивості display кнопок reset і stop
  }

  tick = () => {
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time);
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  start = () => {
    if (this.idTimeout === null) {
      this.idTimeout = setTimeout(this.tick, 1000);
      const { isVisible } = this.props;
      return (this.isVisible = !isVisible); // інверсія через секунду по факту старту
    }
  };

  stop = () => {
    clearTimeout(this.idTimeout);
    this.idTimeout = null;
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    // this.start();
  }

  componentDidUpdate() {
    const { time } = this.state;
    time.getSeconds() === 0
      ? this.stop()
      : (this.idTimeout = setTimeout(this.tick, 1000));
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;
    return (
      <article>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <div>
          <button onClick={this.start}>start / continue</button>
          <button
            onClick={this.reset}
            style={this.isVisible ? { display: "inline" } : { display: "none" }} // зміна властивості
          >
            reset
          </button>
          <button
            onClick={this.stop}
            style={this.isVisible ? { display: "inline" } : { display: "none" }} // зміна властивості
          >
            pause
          </button>
        </div>
      </article>
    );
  }
}

export default StopWatchTimeout;
