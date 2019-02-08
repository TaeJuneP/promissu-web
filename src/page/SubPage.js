import React from "react";
import "../App.css";
import img01 from "../img/img_01.png";
import sdw from "../img/iphone_sdw.png";
const SubPage = ({ ...props }) => {
  return (
    <div className="sub_page">
      <div className="sub_container">
        <h4 className="sub_slogan">몇일 남았지? 내 약속</h4>
        <h5 className="explanation">약속이 몇일 남았느지 한눈에 관리</h5>
      </div>
      <div className="sub_imagecontainer">
        <img className="sub_image" alt="" src={img01} />
        <img className="shw_image" alt="" src={sdw} />
      </div>
    </div>
  );
};

export default SubPage;
