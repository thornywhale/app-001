import React from "react";
import { LANG } from "./../../constants";
import { LangContext } from "../../contexts";

const SwitchLang = () => {
  const render = ([lang, changeLang]) => {
    return (
      <div onClick={changeLang}>{lang === LANG.ENG ? LANG.UKR : LANG.ENG}</div>
    );
  };
  return <LangContext.Consumer>{render}</LangContext.Consumer>;
};

export default SwitchLang;
