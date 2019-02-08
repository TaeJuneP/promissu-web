import React, { Component } from "react";
import "./App.css";
//import MainPage from "./page/MainPage.js";
import SubPage from "./page/SubPage.js";
import SubPage2 from "./page/SubPage2.js";
//import appicon from "./512_512.png";
import logo from "./img/logo.png";
import iosButtonImg from "./img/button_download_ios.png";
import androidButtonImg from "./img/button_download_android.png";
import fir from "./img/04.png";
import fir1 from "./img/05.png";
import styled, { keyframes } from "styled-components";
import {
  BrowserView,
  MobileView,
  isMobile,
  isIOS,
  isAndroid
} from "react-device-detect";
const androidUrl =
  "https://play.google.com/store/apps/details?id=com.simsimhan.promissu&hl=ko";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent = () => {
    if (isMobile) {
      if (isIOS) {
        return <a className="downhref" href="http://naver.com" />;
      } else {
        return <a className="downhref" href={androidUrl} />;
      }
    } else {
      return <a className="downhref" href="http://localhost:3000/" />;
    }
  };
  render() {
    return (
      <div>
        <div className="mainpage">
          <div className="logocontainer">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="main_container">
            <h3 className="mainh3">지금, 약속을 약속하세요</h3>
          </div>
          <div className="imagecontainer">
            <img className="main_image" src={fir} alt=" " />
          </div>
          <div className="buttoncontain">
            {this.renderContent()}
            <button className="downbutton">앱 다운로드</button>
          </div>
        </div>
        <SubPage />
        <SubPage2 />
      </div>
    );
  }
}

export default App;
