import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import { features } from "../../data/data";
import FeaturedCard from "../Cards/FeaturedCard/FeaturedCard";

interface FeatureSliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  swiperRef: any;
}

const FeatureSlider = ({ swiperRef }: FeatureSliderProps) => {
  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={3}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
      }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["490%", 0, -400],
          opacity: 0.3,
        },
        next: {
          translate: ["100%", 0, 0],
        },
        limitProgress: 4,
      }}
      modules={[EffectCreative]}
    >
      {features.map((feature) => (
        <SwiperSlide key={feature.id}>
          <FeaturedCard feature={feature} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeatureSlider;
