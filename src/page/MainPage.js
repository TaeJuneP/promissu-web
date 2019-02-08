import React, { Component } from "react";
import logo from "../img/logo.png";
import "../App.css";
import iosButtonImg from "../img/button_download_ios.png";
import androidButtonImg from "../img/button_download_android.png";
import demo from "../img/04.png";
import changeImg from "../App.css";
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

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent = () => {
    if (isMobile) {
      if (isIOS) {
        return <a className="down_href" href="http://naver.com" />;
      } else {
        return <a className="down_href" href={androidUrl} />;
      }
    } else {
      return <a className="down_href" href="http://localhost:3000/" />;
    }
  };
  render() {
    return (
      <div className="mainpage">
        <div className="logocontainer">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="main_container">
          <h3 className="main_slogan">지금, 약속을 약속하세요</h3>
        </div>
        <div className="image_container">
          <img className="main_image" src={demo} alt=" " />
        </div>
        <div className="button_container">
          {this.renderContent()}
          <button className="download_button">앱 다운로드</button>
        </div>
      </div>
    );
  }
}

export default MainPage;
