import React from "react";
import CardUser from "../CardUser";

const CardList = (props) => {
  const { users, setSelectUsers } = props;

  const selectorUser = (id) => {
    const newUsers = JSON.parse(JSON.stringify(users));
    const newUsersWithSelect = newUsers.map((user) => ({
      ...user,
      isChoosen: user.id === id ? !user.isChoosen : user.isChoosen,
    }));
    setSelectUsers(newUsersWithSelect);
  };

  const createCard = (user) => (
    <CardUser key={user.id} user={user} selectorUser={selectorUser} />
  );

  return <section>{users.map(createCard)}</section>;
};

export default CardList;
