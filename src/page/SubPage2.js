import React from "react";
import "../App.css";
import sub02 from "../img/sub02.png";
import point from "../img/location.png";
const SubPage2 = ({ ...props }) => {
  return (
    <div className="sub_page1">
      <div className="sub_container">
        <h4 className="sub_slogan1">출발이 반 입니다.</h4>
        <h5 className="explanation">“어디야? 아직 집이야?”</h5>
        <h5 className="explanation1">친구들의 위치를 확인하세요</h5>
      </div>
      <div className="sub_imagecontainer01">
        <img className="sub_image01" alt="" src={sub02} />
        <div className="radar" />
        <div className="radar-middle" />
        <div className="radar-center" />
        <img className="location_point" alt="" src={point} />
      </div>
    </div>
  );
};

export default SubPage2;
