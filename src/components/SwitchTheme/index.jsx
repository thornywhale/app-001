import React from "react";
import { ThemeContext } from "../../contexts";
import { THEMES } from "../../constants";
import { LightMode, DarkMode } from "@mui/icons-material";

const SwitchTheme = () => {
  const render = ([theme, changeTheme]) => {
    return (
      <div onClick={changeTheme}>
        {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}
      </div>
    );
  };
  return <ThemeContext.Consumer>{render}</ThemeContext.Consumer>;
};

export default SwitchTheme;
