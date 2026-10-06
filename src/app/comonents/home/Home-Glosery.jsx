

import Link from "next/link";
import React from "react";


export default function HomeGlosery() {
    return (
        <section className="mx-auto max-w-[1300px] px-4 py-2 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-gray-200 p-3 sm:p-4">
                {/* Heading */}
                <div className="rounded-lg bg-[#FCE9BE] p-3 sm:p-4">
                    <h2 className="mb-3 text-center text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl">
                        Home & Household Essentials
                    </h2>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
                        {/* Left Side */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {/* Card 1 */}
                            <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md">
                                <div className="relative h-[140px] overflow-hidden sm:h-[180px] lg:h-[190px]">
                                    <img
                                        src="/image/WhatsApp Image 2026-10-05 at 3.52.56 PM.jpeg"
                                        alt="Home Care Essentials"
                                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-2.5 text-center sm:p-3">
                                    <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                                        Home Care Essentials
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                        Everyday home essentials
                                    </p>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md">
                                <div className="relative h-[140px] overflow-hidden sm:h-[180px] lg:h-[190px]">
                                    <img
                                        src="/image/WhatsApp Image 2026-10-05 at 3.53.16 PM.jpeg"
                                        alt="Cleaning & Household"
                                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-2.5 text-center sm:p-3">
                                    <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                                        Cleaning & Household
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                        Keep your home fresh
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <Link href="/pages/shop">
                            <div className="group relative min-h-[280px] overflow-hidden rounded-lg bg-white sm:min-h-[320px] lg:min-h-[380px]">

                                {/* Image - Full Card */}
                                <img
                                    src="/image/Golden Crystal Candle Holders on Wooden Bases.png"
                                    alt="Golden Crystal Candle Holders"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/30"></div>

                                {/* Content - Image ke upar */}
                                <div className="relative z-10 flex h-full min-h-[280px] flex-col items-center justify-end p-4 text-center sm:min-h-[320px] sm:p-6 lg:min-h-[380px] lg:p-8">

                                    <span className="text-xs font-medium text-white sm:text-sm">
                                        Explore More
                                    </span>

                                    <h3 className="mt-1 text-lg font-bold text-white sm:text-xl lg:text-2xl">
                                        Home & Daily Essentials
                                    </h3>


                                    <button className="mt-3 rounded-lg bg-gray-900 px-4 py-2 text-xs font-medium text-white transition hover:bg-gray-700 sm:px-5 sm:text-sm">
                                        Shop Now
                                    </button>


                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
