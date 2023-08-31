import React from "react";

const CardSelectList = ({ users }) => {
  const filterSelectUser = (user) => user.isChoosen;
  const createSelectUser = (user) => <p key={user.id}>{user.firstName}</p>;
  return (
    <section>{users.filter(filterSelectUser).map(createSelectUser)}</section>
  );
};

export default CardSelectList;
