import React from "react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import '../assets/css/Home.css'
import maknaLogo from "../maknaLogo";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// install Swiper components
SwiperCore.use([Pagination, Navigation, Autoplay]);

const SwiperLogo = () => {
    return (
        <Swiper 
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            navigation
            pagination={{
            dynamicBullets: false,
            clickable: true
        }}>
            {maknaLogo.map((item, i) => {
                const {title, image, desc} = item
                return (
                    <SwiperSlide key={i}>
                        <img src={image} alt={title} className='makna-logo__img' />
                        <h1 className="makna-logo__title">{title}</h1>
                        <p className="makna-logo__desc">{desc}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperLogo