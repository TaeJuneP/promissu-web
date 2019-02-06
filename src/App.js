import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import iosButtonImg from "./button_download_ios.png";
import androidButtonImg from "./button_download_android.png";
const androidUrl =   "https://play.google.com/store/apps/details?id=com.simsimhan.promissu&hl=ko"
class App extends Component {
  render() {
    return (
      <div className="mainpage">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main_container">
          <h1 className="mainh3">지각쟁이들</h1>
          <h1 className="mainh3">안돼요안돼</h1>
          <h4 className="mainh4">약속은 약속이다.</h4>
          <div className="buttoncontain">
            <a href={androidUrl}>
              <img src={androidButtonImg} className="iosbutton" alt="Ios" />
            </a>
              <a href={androidUrl}>
              <img src={iosButtonImg} className="iosbutton" alt="Ios" />
            </a>
          </div>
          <img className="main_image" alt='image1'/>
        </div>
      </div>
    );
  }
}

export default App;
