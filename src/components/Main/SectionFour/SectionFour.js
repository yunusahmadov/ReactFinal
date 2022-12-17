import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../styles/style.css";

// import required modules
import {Autoplay, Pagination, Navigation,Scrollbar } from "swiper";
import SliderCard from "./SliderCard";

export default function Slide() {
  return (
    <div className='swiper-container'>
        <div className="swiper-text-container">
            <p>An enterprise template to ramp up your company website</p>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        slidesPerGroup={1}
        speed={1000}
        loop={true}
        scrollbar={{draggable:true }}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.5": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 10,
            }
          }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
            <SliderCard
            swiper_text={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            profile_img={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            user_name={'Albus Dumbledore'}
            user_work={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SliderCard
            swiper_text={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            profile_img={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            user_name={'Albus Dumbledore'}
            user_work={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SliderCard
            swiper_text={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            profile_img={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            user_name={'Albus Dumbledore'}
            user_work={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SliderCard
            swiper_text={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            profile_img={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            user_name={'Albus Dumbledore'}
            user_work={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SliderCard
            swiper_text={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            profile_img={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            user_name={'Albus Dumbledore'}
            user_work={'Manager @ Howarts'}
            />
        </SwiperSlide>
        <SwiperSlide>
        <SliderCard
            swiper_text={'“Buyer buzz partner network disruptive non-disclosure agreement business”'}
            profile_img={'https://assets.website-files.com/61f3090502b5c6b41663e657/61f42be88d0978e9043b2a3d_Boldo-testimonial-1.png'}
            user_name={'Albus Dumbledore'}
            user_work={'Manager @ Howarts'}
            />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}