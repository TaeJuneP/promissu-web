import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import iosButtonImg from "./button_download_ios.png";
import androidButtonImg from "./button_download_android.png";
class App extends Component {
  render() {
    return (
      <div className="mainpage">
        <div className="main_container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="buttoncontain">
          <img src={androidButtonImg} className="iosbutton"  alt="Ios" />
          <img src={iosButtonImg} className="iosbutton"  alt="Ios" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
