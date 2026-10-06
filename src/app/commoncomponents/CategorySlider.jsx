"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CategorySlider = ({
    items = [],
    renderSlide,
}) => {
    return (
        <div className="category-slider relative w-full">
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".category-next",
                    prevEl: ".category-prev",
                }}
                loop={false}
                slidesPerView={1}
                spaceBetween={12}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 14,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 18,
                    },
                    1280: {
                        slidesPerView: 8,
                        spaceBetween: 20,
                    },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={item.id ?? index}>
                        {renderSlide(item)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Previous Button */}
            <button
                type="button"
                className="
                    category-prev
                    absolute
                    left-0
                    top-[75px]
                    z-20
                    flex
                    h-10
                    w-10
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    shadow-md
                    transition
                    hover:bg-gray-100
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    sm:h-11
                    sm:w-11
                "
            >
                <span className="text-2xl leading-none">
                    ‹
                </span>
            </button>

            {/* Next Button */}
            <button
                type="button"
                className="
                    category-next
                    absolute
                    right-0
                    top-[75px]
                    z-20
                    flex
                    h-10
                    w-10
                    translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    text-gray-700
                    shadow-md
                    transition
                    hover:bg-gray-100
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    sm:h-11
                    sm:w-11
                "
            >
                <span className="text-2xl leading-none">
                    ›
                </span>
            </button>
        </div>
    );
};

export default CategorySlider;