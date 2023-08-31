import { Component } from "react";

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  handleBtn = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };
  render() {
    const { name, lname, id } = this.props;
    const { isHi } = this.state;
    return (
      <h2>
        <button onClick={this.handleBtn}>switch</button>
        {isHi ? "hi" : "bye"}, {name} {lname} (id = {id})
      </h2>
    );
  }
}

export default Ciao;
