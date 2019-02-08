import React from "react";
import "../App.css";
import fir1 from "../img/05.png";
const SubPage = ({ ...props }) => {
  return (
    <div className="mainpage1">
      <div className="main_container2">
        <h4 className="mainh4">몇일 남았지? 내 약속</h4>
        <h5 className="mainh5">약속이 몇일 남았느지 한눈에 관리</h5>
      </div>
      <div className="imagecontainer2">
        <img className="main_image1" alt="" src={fir1} />
      </div>
    </div>
  );
};

export default SubPage;
