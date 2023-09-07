import React, { Component } from "react";
import styles from "./Error.module.scss";

class Error extends Component {
  render() {
    return (
      <div className="errorDiv">
        <img
          src="https://assets.hongkiat.com/uploads/funny_error_messages/operation-completed-succesfully-error-funny-error-messages.jpg?newedit"
          alt="error"
        />
      </div>
    );
  }
}

export default Error;
