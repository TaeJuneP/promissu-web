import React, { Component } from "react";
import "./App.css";
import MainPage from "./page/MainPage.js";
import SubPage from "./page/SubPage.js";
import SubPage2 from "./page/SubPage2.js";
//import appicon from "./512_512.png";
class App extends Component {
  render() {
    return (
      <div>
        <MainPage />
        <SubPage />
        <SubPage2 />
      </div>
    );
  }
}

export default App;
