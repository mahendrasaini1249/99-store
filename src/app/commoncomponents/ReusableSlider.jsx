"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ReusableSlider = ({
    items = [],
    autoplay = true,
    autoplayDelay = 3000,
    navigation = true,
    pagination = false,
    loop = true,
    slidesPerView = 1,
    spaceBetween = 0,
    renderSlide,
}) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            navigation={navigation}
            pagination={pagination}
            loop={loop}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            autoplay={
                autoplay
                    ? {
                        delay: autoplayDelay,
                        disableOnInteraction: false,
                    }
                    : false
            }
            className="w-full home-slider"
        >
            {items.map((item, index) => (
                <SwiperSlide key={item.id || index}>
                    {renderSlide(item, index)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ReusableSlider;