import React from "react";
import PropTypes from "prop-types";
import Slide from "./slide/slide.js";
import Indicator from "./slide/indicator.js";
import "./slide/styles.css";

const AUTO_SLIDE_INTERVAL = 3000;

class SmartSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1
    };
  }

  componentDidMount() {
    const { autoSlide, autoSlideInterval } = this.props;
    const autoSlideIntVal =
      autoSlideInterval && autoSlideInterval >= AUTO_SLIDE_INTERVAL
        ? autoSlideInterval
        : AUTO_SLIDE_INTERVAL;
    this.timer = autoSlide
      ? setInterval(this.autoSlide.bind(this), autoSlideIntVal)
      : null;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  prevSlide() {
    const { activeIndex } = this.state;
    const { slides } = this.props;

    this.setState({
      activeIndex: activeIndex - 1
    });
    if (activeIndex === 1) {
      this.setState({
        activeIndex: activeIndex + slides.length - 1
      });
    }
  }

  nextSlide() {
    const { activeIndex } = this.state;
    const { slides } = this.props;

    this.setState({
      activeIndex: activeIndex + 1
    });
    if (activeIndex === slides.length) {
      this.setState({
        activeIndex: activeIndex - slides.length + 1
      });
    }
  }

  clickIndicator(index) {
    this.setState({
      activeIndex: index
    });
  }

  autoSlide() {
    const { activeIndex } = this.state;
    const { slides } = this.props;
    this.setState({
      activeIndex: activeIndex < slides.length ? activeIndex + 1 : 1
    });
  }

  render() {
    const { activeIndex } = this.state;
    const { slides, showIndicator } = this.props;

    return (
      <div className="mainContainer">
        <div>
          {slides.map((item, index) => (
            <Slide
              key={index}
              currentIndex={index}
              activeIndex={activeIndex}
              item={item}
            />
          ))}
        </div>
        {showIndicator && (
          <Indicator
            slider={slides}
            activeIndex={activeIndex}
            onClickIndicator={this.clickIndicator.bind(this)}
          />
        )}
      </div>
    );
  }
}

SmartSlider.propTypes = {
  slides: PropTypes.array.isRequired,
  showIndicator: PropTypes.bool,
  autoSlide: PropTypes.bool,
  autoSlideInterval: PropTypes.number,
  captionStyle: PropTypes.object,
  buttonShape: PropTypes.string
};

// Specifies the default values for props:
SmartSlider.defaultProps = {
  slides: [
    {
      title: "Original Image 1",
      url: "https://i.imgur.com/ehKbQ0F.jpg",
      customCaptionStyle: {}
    },
    {
      title: "Original Image 2",
      url: "https://i.imgur.com/t2a1zLi.jpg",
      customCaptionStyle: {}
    },
    {
      title: "Original Image 3",
      url: "https://i.imgur.com/e1aY1E5.jpg",
      customCaptionStyle: {}
    }
  ],
  showIndicator: false,
  autoSlide: false,
  autoSlideInterval: AUTO_SLIDE_INTERVAL,
  captionStyle: {},
  buttonShape: "square"
};

export default SmartSlider;
