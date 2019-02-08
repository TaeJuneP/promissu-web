import React from "react";
import "../App.css";
import demo from "../img/05.png";
const SubPage2 = ({ ...props }) => {
  return (
    <div className="sub_page">
      <div className="sub_container">
        <h4 className="sub_slogan">출발이 반입니다.</h4>
        <h5 className="explanation">“어디야? 아직 집이야?”</h5>
        <h5 className="explanation">친구들의 위치를 확인하세요</h5>
      </div>
      <div className="sub_imagecontainer">
        <img className="sub_image" alt="" src={demo} />
      </div>
    </div>
  );
};

export default SubPage2;
