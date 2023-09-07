import React, { Component } from "react";
import { getUsers } from "../../api";
import styles from "./UsersLoader.module.scss";
import Error from "../Error";
import { isDisabled } from "@testing-library/user-event/dist/utils";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: false,
      currentPage: 1,
      currentResults: 5,
    };
  }

  load = () => {
    const { currentPage, currentResults } = this.state;
    this.setState({ isFetching: true });
    getUsers({ page: currentPage, results: currentResults })
      .then((data) => {
        // console.log(data.results);
        this.setState({ users: data.results });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ error: error });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage, currentResults } = this.state;
    if (
      currentPage !== prevState.currentPage ||
      currentResults !== prevState.currentResults
    ) {
      this.load();
    }
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState((state, props) => {
        return { currentPage: state.currentPage - 1 };
      });
    }
  };
  nextPage = () => {
    this.setState((state, props) => {
      return { currentPage: state.currentPage + 1 };
    });
  };

  currentResultsHandler = (event) => {
    this.setState({ currentResults: event.target.value });
    // event.target.option.disabled = true;
  };

  render() {
    const { isFetching, error, users, currentPage, currentResults } =
      this.state;
    if (error) {
      return <Error />;
    }
    return (
      <section>
        <h2>Users: </h2>
        <div>
          <button onClick={this.prevPage}>&lt;</button>
          <span>&nbsp;{currentPage}&nbsp;</span>
          <select value={currentResults} onChange={this.currentResultsHandler}>
            <option value={5} selected>
              5
            </option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <button onClick={this.nextPage}>&gt;</button>
        </div>
        <ul>
          {isFetching && <h2>Loading...</h2>}
          {isFetching ||
            users.map((user) => (
              <li key={user.login.uuid}>
                <strong>{user.login.username},</strong> {user.email}
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

export default UsersLoader;
