import React from "react";
import "../App.css";
import sub01 from "../img/sub01.png";
import sdw from "../img/iphone_sdw.png";
const SubPage = ({ ...props }) => {
  return (
    <div className="sub_page">
      <div className="sub_container">
        <h4 className="sub_slogan">몇일 남았지? 내 약속</h4>
        <h5 className="explanation">한눈에 관리하는 약속일정들</h5>
      </div>
      <div className="sub_imagecontainer">
        <img className="sub_image" alt="" src={sub01} />
        <div className="hindenpage" />
      </div>
    </div>
  );
};

export default SubPage;
