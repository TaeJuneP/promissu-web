import React from "react";
import "../App.css";
import logo from "../img/logo_copy.png";
import and from "../img/android.png";
import ios from "../img/ios.png";
const androidUrl =
  "https://play.google.com/store/apps/details?id=com.simsimhan.promissu&hl=ko";
const iosUrl = " https://itunes.apple.com/kr/app/promiseu/id1449948254?mt=8";
const Detail = ({ ...props }) => {
  return (
    <div className="detail">
      <div className="detail_logo_container">
        <img className="detail_logo" src={logo} alt="promissu" />
      </div>
      <div className="detail_main">
        <div className="detail_container">
          <p className="detail_name">고객센터</p>
          <p className="detail_sub">이메일 : contact@simsimhan.co.kr</p>
          <p className="detail_sub">카카오톡 : 프라미슈</p>
        </div>
        <div className="detail_blank" />
        <div className="detail_container">
          <p className="detail_name">심심한컴퍼니</p>
          <p className="detail_sub">서비스이용약관</p>
          <p className="detail_sub">이용자의 권리 및 유의사항</p>
          <p className="detail_sub">개인정보 처리방침</p>
        </div>
        <div className="detail_button_container">
          <div className="and_button">
            <a className="button_a" href={androidUrl} />
            <img className="detail_button" src={and} alt="android" />
          </div>
          <div className="and_button">
            <a className="button_a" href={iosUrl} />
            <img className="detail_button" src={ios} alt="ios"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
