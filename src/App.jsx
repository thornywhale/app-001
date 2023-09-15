import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserContext, ThemeContext, LangContext } from "./contexts";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import Page404 from "./pages/Page404";
import LoaderPage from "./pages/LoaderPage";
import UsersBlock from "./pages/LoaderPage/UsersBlock";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import ProductsBlock from "./pages/LoaderPage/ProductsBlock";

import { LANG, THEMES } from "./constants";
import FlexContainer from "./components/FlexContainer";
// import TestYUP from "./pages/TestYUP";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        firstName: "Brad",
        lastName: "Pitt",
        isSelect: false,
        avatar: "https://cdn-icons-png.flaticon.com/128/3641/3641963.png",
      },
      theme: THEMES.LIGHT,
      lang: LANG.ENG,
    };
  }

  changeTheme = () => {
    this.setState({
      theme: this.state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
    });
  };
  changeLang = () => {
    this.setState({
      lang: this.state.lang === LANG.ENG ? LANG.UKR : LANG.ENG,
    });
  };

  selectorUser = (id) => {
    this.setState({
      user: { ...this.state.user, isSelect: !this.state.user.isSelect },
    });
  };

  render() {
    const { user, theme, lang } = this.state;
    return (
      <LangContext.Provider value={[lang, this.changeLang]}>
        <ThemeContext.Provider value={[theme, this.changeTheme]}>
          <UserContext.Provider
            value={{ user, selectorUser: this.selectorUser }}
          >
            <BrowserRouter>
              <Header />
              <main>
                {/* <TestYUP /> */}
                <Routes>
                  <Route path="/" element={<Home  />} />
                  <Route path="/users" element={<UsersPage />} />
                  <Route path="/loader/" element={<LoaderPage />}>
                    <Route path="users" element={<UsersBlock />} />
                    <Route path="events" element={<EventsBlock />} />
                    <Route path="products" element={<ProductsBlock />} />
                  </Route>
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </main>
              <Footer />
            </BrowserRouter>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </LangContext.Provider>
      // <FlexContainer/>
    );
  }
}

export default App;
