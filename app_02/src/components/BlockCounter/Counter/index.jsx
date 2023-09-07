import React, { Component } from "react";
import styles from "./Conter.module.css";
import PropTypes from "prop-types";

/**
 * @param {number} state.count
 * @param {boolean} state.isAdd
 * @param {number} props.stepValue
 */

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  clickHandler = () => {
    this.setState((state, props) => {
      if (state.isAdd) {
        return { count: state.count + props.stepValue };
      }
      return { count: state.count - props.stepValue };
    });
  };

  checkboxHandler = ({ target: { checked } }) => {
    this.setState({ isAdd: checked });
  };

  render() {
    const { count, isAdd } = this.state;
    const { stepValue } = this.props;
    return (
      <section>
        <h2>Result: {count}</h2>
        <h2>Step: {stepValue}</h2>
        <button onClick={this.clickHandler}>
          {isAdd ? "add" : "subtract"}
        </button>
        <label>
          Change mode
          <input
            type="checkbox"
            checked={isAdd}
            onChange={this.checkboxHandler}
          />
        </label>
      </section>
    );
  }
}

Counter.propTypes = {
  stepValue: PropTypes.number.isRequired,
};

Counter.defaultProps = {
  stepValue: 10,
};

export default Counter;
