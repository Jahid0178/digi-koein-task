import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { features } from "../../data/data";
import FeaturedCard from "../Cards/FeaturedCard/FeaturedCard";

interface FeatureSliderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  swiperRef?: any;
}

const FeatureSlider = ({ swiperRef }: FeatureSliderProps) => {
  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
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
