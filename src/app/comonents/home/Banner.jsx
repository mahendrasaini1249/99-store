"use client";

import ReusableSlider from "@/app/commoncomponents/ReusableSlider";

export const banners = [
    {
        id: 1,
        image: "https://cdn.dmart.in/images/rwd/banners/hmpg/30dec25-crsl-daily-saving.jpg",
    },
    {
        id: 2,
        image: "https://cdn.dmart.in/images/rwd/banners/hmpg/1aug24-crsl-kitchenmela.jpg",
    },
    {
        id: 3,
        image: "https://cdn.dmart.in/images/rwd/banners/hmpg/1oct24-crsl-dg-mum.jpg",
    },
];

const HomeBanner = () => {
    return (
        <section className="mt-2 mb-2 w-full p-0">
            <ReusableSlider
                items={banners}
                autoplay={true}
                autoplayDelay={3000}
                navigation={true}
                pagination={true}
                loop={true}
                renderSlide={(banner) => (
                    <div className="relative h-[145px] w-full overflow-hidden sm:h-[200px] md:h-[270px] lg:h-[380px] xl:h-[420px]">

                        <img
                            src={banner.image}
                            alt="99 Store Banner"
                            className="block h-full w-full object-center object-center"
                        />

                        {/* Overlay Content */}
                        {(banner.title || banner.description) && (
                            <div className="absolute inset-0 flex items-center">
                                <div className="px-5 sm:px-10 md:px-16">
                                    {banner.title && (
                                        <h2 className="text-xl font-bold text-white sm:text-3xl md:text-5xl">
                                            {banner.title}
                                        </h2>
                                    )}

                                    {banner.description && (
                                        <p className="mt-2 text-xs text-white sm:mt-3 sm:text-base">
                                            {banner.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                )}
            />
        </section>
    );
};

export default HomeBanner;