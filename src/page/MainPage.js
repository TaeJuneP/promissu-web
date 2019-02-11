import React, { Component } from "react";
import logo from "../img/logo_white.png";
import "../App.css";
import sdw from "../img/iphone_sdw.png";
import iphone from "../img/iphone.png";
import img01 from "../img/img_01.png";
import { isMobile, isIOS } from "react-device-detect";
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
        //앱스토어 아직 미출시라서 구분할려고 네이버 해놈
        return <a className="down_href" href="http://naver.com" />;
      } else {
        return <a className="down_href" href={androidUrl} />;
      }
    } else {
      return (
        <a
          className="down_href"
          href="https://TaeJuneP.github.io/promissu-web"
        />
      );
    }
  };
  render() {
    return (
      <div className="mainpage">
        <div className="logocontainer">
          <img src={logo} className="App-logo" alt="logo" />
          <h5 className="App-name">프라미슈</h5>
        </div>
        <div className="main_container">
          <h3 className="main_slogan">약속을 약속하세요</h3>
        </div>
        <div className="image_container">
          <img className="iphone_image" src={iphone} alt=" " />
          <img className="main_image" src={img01} alt="" />
          <img className="shw_image" alt="" src={sdw} />
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
