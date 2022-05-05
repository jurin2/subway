import React, { component } from 'react'
import {  Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
  return (
    <Swiper
        modules={[ Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, loop: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={require("./images/main_banner_01.jpg")}/></SwiperSlide>
      <SwiperSlide><img src={require("./images/main_banner_02.jpg")}/></SwiperSlide>
      <SwiperSlide><img src={require("./images/main_banner_03.jpg")}/></SwiperSlide>
      <SwiperSlide><img src={require("./images/main_banner_04.jpg")}/></SwiperSlide>
    </Swiper>
  );
};