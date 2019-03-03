import React, { Component } from "react";
import "../App.css";
import sub01 from "../img/sub01.png";
class SubPage extends Component {
  state = {
    y: 0
  };
  scrollHandler = () => {
    this.setState({
      y: window.pageYOffset
    });
    this.changeitem();
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  changeitem = () => {
    if (this.state.y > 600) {
      return <img className="sub_image" alt="" src={sub01} />;
    } else {
      return <img className="sub_image_no" alt="" src={sub01} />;
    }
  };
  render() {
    return (
      <div className="sub_page">
        <div className="sub_container">
          <h4 className="sub_slogan">몇일 남았지? 내 약속</h4>
          <h5 className="explanation">한눈에 관리하는 약속일정들</h5>
        </div>
        <div className="sub_imagecontainer">
          {this.changeitem()}
          <div className="hindenpage" />
        </div>
      </div>
    );
  }
}

export default SubPage;
