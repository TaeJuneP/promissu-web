import React from "react";
import "../App.css";

const SubPage = ({ ...props }) => {
  return (
    <div className="mainpage1">
      <div className="main_container2">
        <h1 className="mainh3">몇일남았지?</h1>
        <h1 className="mainh3">내약속</h1>
        <h4 className="mainh4">약속이 몇일 남았는지</h4>
        <h4 className="mainh4">한눈에 관리하세요!</h4>
      </div>
      <div className="imagecontainer">
        <img className="main_image" alt="" />
      </div>
    </div>
  );
};

export default SubPage;
