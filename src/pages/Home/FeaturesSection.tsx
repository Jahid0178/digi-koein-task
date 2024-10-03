import { useRef } from "react";
import FeatureSlider from "../../components/Slider/FeatureSlider";
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right.png";

const FeaturesSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-wrapper">
          <div className="feature-content">
            <h2>What we do with Blockchain DLT/ Bank</h2>
            <p>
              Join a first-growing community of developers and innovators
              connected all over the world, building the new era of the
              internet.
            </p>
            <div className="feature-slider-btn-wrapper">
              <button onClick={() => swiperRef.current.slidePrev()}>
                <img src={arrowRight} />
              </button>
              <button onClick={() => swiperRef.current.slideNext()}>
                <img src={arrowLeft} />
              </button>
            </div>
          </div>
          <div className="feature-slider-container">
            <div className="feature-slider-wrapper">
              <FeatureSlider swiperRef={swiperRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
