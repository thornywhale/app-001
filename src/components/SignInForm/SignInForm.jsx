import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";
const initialValues = {
  email: "",
  password: "",
  emailValid: true,
  passwordValid: true,
  loginValid: true,
  check: false,
  radioState: "spam",
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleForm = (event) => {
    event.preventDefault();
    // event.target.reset();
    this.setState({ ...initialValues });
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
      [`${name}Valid`]: value.includes(" ") === false,
    });
  };

  handleCheckbox = ({ target: { name, checked } }) => {
    this.setState({ [name]: checked });
  };
  // handleRadio = (event) => {
  //   this.setState({ option: event.target.value });
  // };
  handleRadio = ({ target: { name, checked } }) => {
    this.setState({ [name]: checked });
  };

  render() {
    const {
      check,
      radioState,
      email,
      login,
      password,
      emailValid,
      loginValid,
      passwordValid,
    } = this.state;
    const classesLogin = cx(styles.input, { [styles.invalid]: !loginValid });
    const classesEmail = cx(styles.input, { [styles.invalid]: !emailValid });
    const classesPassword = cx(styles.input, {
      [styles.invalid]: !passwordValid,
    });

    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <input
          className={classesLogin}
          value={login}
          onChange={this.handleInput}
          type="text"
          name="login"
          placeholder="your login"
          pattern="[a-zA-Z1-9]"
        />
        <input
          className={classesEmail}
          value={email}
          onChange={this.handleInput}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={classesPassword}
          value={password}
          onChange={this.handleInput}
          type="password"
          name="password"
          placeholder="your password"
        />
        <label>
          <input
            onChange={this.handleCheckbox}
            checked={check}
            type="checkbox"
            name="check"
            placeholder="your email"
          />
          check me
        </label>
        <div>
          <input
            value={"antivirus"}
            onChange={this.handleRadio}
            type="radio"
            name="option"
            checked={radioState}
          />
          <p> i need antivirus</p>
        </div>
        <div>
          <input
            value={"cleaner"}
            onChange={this.handleRadio}
            type="radio"
            name="option"
            checked={radioState}
          />
          <p> i need cleaner</p>
        </div>
        <div>
          <input
            value={"spam"}
            onChange={this.handleRadio}
            type="radio"
            name="option"
            checked={radioState}
          />
          <p> i love spam</p>
        </div>
        <button type="submit">send</button>
      </form>
    );
  }
}

export default SignInForm;
