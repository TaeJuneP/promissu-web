import React, { Component } from "react";
import "./App.css";
import MainPage from "./page/MainPage.js";
import SubPage from "./page/SubPage.js";
import SubPage2 from "./page/SubPage2.js";
import Detail from "./page/Detail.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // 스크롤 이벤트 적용
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll = e => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
  };

  render() {
    return (
      <div>
        <MainPage />
        <SubPage />
        <SubPage2 />
        <Detail />
      </div>
    );
  }
}

export default App;
