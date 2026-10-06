"use client";

import ReusableSlider from "@/app/commoncomponents/ReusableSlider";

export const banners = [
    {
        id: 1,
        image: "https://cdn.dmart.in/images/rwd/banners/hmpg/30dec25-crsl-daily-saving.jpg",
        // title: "Daily Saving",
        // description: "Discover our latest collection",
    },
    {
        id: 2,
        image: "https://cdn.dmart.in/images/rwd/banners/hmpg/1aug24-crsl-kitchenmela.jpg",
        // title: "Kitchen Collection",
        // description: "Designed for every occasion",
    },
    {
        id: 3,
        image: "https://cdn.dmart.in/images/rwd/banners/hmpg/1oct24-crsl-dg-mum.jpg",
        // title: "Kitchen Collection",
        // description: "Make every moment special",
    },
];

const HomeBanner = () => {
    return (
        <section className="mt-2 w-full p-0 mb-2">
            <ReusableSlider
                items={banners}
                autoplay={true}
                autoplayDelay={3000}
                navigation={true}
                pagination={true}
                loop={true}
                renderSlide={(banner) => (
                    <div className="relative m-0 h-[300px] w-full p-0 sm:h-[200px] md:h-[300px] lg:h-[400px]">
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="block h-full w-full object-center"
                        />

                        <div className="absolute inset-0 flex items-center">
                            <div className="px-6 sm:px-10 md:px-16">
                                <h2 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl">
                                    {banner.title}
                                </h2>

                                <p className="mt-3 text-sm text-white sm:text-base">
                                    {banner.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            />
        </section>
    );
};

export default HomeBanner;