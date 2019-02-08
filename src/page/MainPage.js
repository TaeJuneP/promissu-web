import React from "react";
import logo from "../img/logo.png";
import "../App.css";
import iosButtonImg from "../img/button_download_ios.png";
import androidButtonImg from "../img/button_download_android.png";
import fir from "../img/04.png";
import fir1 from "../img/05.png";
import changeImg from "../App.css";
import styled, { keyframes } from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";

const androidUrl =
  "https://play.google.com/store/apps/details?id=com.simsimhan.promissu&hl=ko";
const renderContent = () => {
  if (BrowserView) {
    return <button className="downbutton">앱 다운로드</button>;
  }
  return <div> ...content </div>;
};
const MainPage = ({ ...props }) => {
  return (
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
      <div className="buttoncontain" />
    </div>
  );
};

export default MainPage;
