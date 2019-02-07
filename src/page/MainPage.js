import React from "react";
import logo from "../img/logo.png";
import "../App.css";
import iosButtonImg from "../img/button_download_ios.png";
import androidButtonImg from "../img/button_download_android.png";
import fir from "../img/04.png";
import fir1 from "../img/05.png";
import changeImg from "../App.css";
import styled, { keyframes } from "styled-components";
const androidUrl =
  "https://play.google.com/store/apps/details?id=com.simsimhan.promissu&hl=ko";
const MainPage = ({ ...props }) => {
  return (
    <div className="mainpage">
      <div className="logocontainer">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="main_container">
        <h1 className="mainh3">지각쟁이들</h1>
        <h1 className="mainh3">안돼요안돼</h1>
        <h4 className="mainh4">약속은 약속이다.</h4>
        <div className="buttoncontain">
          <a href={androidUrl}>
            <img src={androidButtonImg} className="iosbutton" alt="Ios" />
          </a>
          <div className="iosbuttonblank" />
          <a href={androidUrl}>
            <img src={iosButtonImg} className="iosbutton" alt="Ios" />
          </a>
        </div>
      </div>
      <div className="imagecontainer">
        <Box />
      </div>
    </div>
  );
};
const Box = styled.div`
  display: inline-block;
  background-image:fir
  width: 200px;
  height: 200px;
  position: relative;
  animation: ${keyFrameExampleOne} 2s ease-in-out 0s infinite;
`;
const keyFrameExampleOne = keyframes`
  0% {
   transition:none;
  }
  100% {
    background-image:url(fir1);
  }
`;
export default MainPage;
