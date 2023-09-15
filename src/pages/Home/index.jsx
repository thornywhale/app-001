import React, { useContext } from "react";
import CardUser from "../../components/CardSection/CardUser";
import { LANG } from "./../../constants";
import { LangContext } from "../../contexts";

const Home = (lang) => {
  return (
    <div>
      <h1>{lang === LANG.ENG ? "Home:" : "Головна:"}</h1>
      <CardUser />
    </div>
  );
};

export default Home;
