import React from "react";
import "./App.css";
// import SignInForm from './components/SignInForm/SignInForm';
// import Ciao from "./components/CiaoSection/Ciao";
// import CardUser from "./components/CardSection/CardUser";
import SignInForm from "./components/SignInForm/SignInForm";

const CardUserObject = {
  id: 45,
  firstName: "Carl",
};
function App() {
  return (
    <>
      {/* <Ciao name="jack" /> */}
      {/* <CardUser user={CardUserObject} /> */}
      <SignInForm/>
    </>
  );
}

export default App;
