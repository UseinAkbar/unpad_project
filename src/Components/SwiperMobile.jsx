import React from "react";
import SwiperCore, { Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoExhibition from "./VideoExhibition";
import data from "../data";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// install Swiper components
SwiperCore.use([Pagination, EffectFade]);

const SwiperMobile = ({images, handlePopUp}) => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    pagination: {
      dynamicBullets: true,
      clickable: true,
    },
  };

  return (
    <Swiper {...params}>
      {data.map((item, i) => {
        const { title, desc } = item;
        return (
          <SwiperSlide key={i+1} id='swipeSlide'>
            <VideoExhibition
              key={i}
              index={i}
              title={title}
              desc={desc}
              img={images[i]}
              handlePopUp={handlePopUp}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperMobile;
