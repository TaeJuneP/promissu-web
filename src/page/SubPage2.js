import React from "react";
import "../App.css";

const SubPage2 = ({ ...props }) => {
  return (
    <div className="mainpage1">
      <div className="main_container2">
        <h1 className="mainh3">출발이</h1>
        <h1 className="mainh3">반 입니다.</h1>
        <h4 className="mainh4">"어디야? 아직 집이야?"</h4>
        <h4 className="mainh4">친구들의 위치를 확인하세요.</h4>
      </div>
      <div className="imagecontainer">
        <img className="main_image" alt="" />
      </div>
    </div>
  );
};

export default SubPage2;
