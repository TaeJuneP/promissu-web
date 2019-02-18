import React, { Component } from "react";
import ReactDOM from "react";
import "./App.css";
import MainPage from "./page/MainPage.js";
import SubPage from "./page/SubPage.js";
import SubPage2 from "./page/SubPage2.js";
import Detail from "./page/Detail.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <MainPage />
        <SubPage />
        <SubPage2 />
        <Detail />
      </div>
    );
  }
}

export default App;
