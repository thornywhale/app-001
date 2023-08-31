import { Component } from "react";
import CiaoList from "./CiaoList";
import CiaoSort from "./CiaoSort";
import Heading from "./Heading";
import { USERS } from "../../constants";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: USERS,
      isSortIdUp: true,
      isSortFirstNameUp: true,
      isSortLastNameUp: true,
    };
  }

  render() {
    const { users, isSortIdUp, isSortFirstNameUp, isSortLastNameUp } =
      this.state;
    return (
      <>
        <Heading></Heading>
        <CiaoSort
          users={users}
          isSortIdUp={isSortIdUp}
          isSortFirstNameUp={isSortFirstNameUp}
          isSortLastNameUp={isSortLastNameUp}
        />

        <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
