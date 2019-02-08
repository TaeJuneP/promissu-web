import React from "react";
import "../App.css";
import fir1 from "../img/05.png";
const SubPage2 = ({ ...props }) => {
  return (
    <div className="mainpage1">
      <div className="main_container2">
        <h4 className="mainh4">출발이 반입니다.</h4>
        <h5 className="mainh5">“어디야? 아직 집이야?”</h5>
        <h5 className="mainh5">친구들의 위치를 확인하세요</h5>
      </div>
      <div className="imagecontainer2">
        <img className="main_image1" alt="" src={fir1} />
      </div>
    </div>
  );
};

export default SubPage2;
