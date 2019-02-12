import React, { Component } from "react";
import "./App.css";
import MainPage from "./page/MainPage.js";
import SubPage from "./page/SubPage.js";
import SubPage2 from "./page/SubPage2.js";
import Slideshow from "./page/Slideshow.js";
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
