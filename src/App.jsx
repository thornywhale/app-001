import React from "react";
import "./App.css";
import Note from "./components/Note";
import SignInForm from './components/SignInForm/SignInForm';
// import Ciao from "./components/CiaoSection/Ciao";
// import CardUser from "./components/CardSection/CardUser";
// import CiaoSection from './components/CiaoSection';

const List = (props) => {
  return (
    <article>
      <h3>List title</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </article>
  );
};
const CardUserObject = {
  id: 45,
  firstName: "Carl",
};
function App() {
  return (
    <>
      {/* <Note>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi iusto repellendus blanditiis recusandae corporis odit facere! Omnis maxime corporis tempore.
        </p>
      </Note> */}
      {/* <List /> */}
      {/* <CiaoSection /> */}
      {/* <CardUser user={CardUserObject} /> */}
      <SignInForm/>
    </>
  );
}

export default App;
