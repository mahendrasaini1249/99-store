import React from "react";

export default function BestSellingProducts() {
    return (
        <section className="mx-auto max-w-[1300px] px-4 py-6 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Best Selling Products
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">

                    {/* Left Column */}
                    <div className="flex flex-col gap-4 lg:col-span-4">

                        {/* Top Banner */}
                        <div className="group overflow-hidden rounded-2xl">
                            <img
                                src="/image/WhatsApp Image 2026-10-05 at 3.52.57 PM (2).jpeg"
                                alt="Half Price Store"
                                className="h-[150px] w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 sm:h-[180px]"
                            />
                        </div>

                        {/* Bottom Banner */}
                        <div className="group overflow-hidden rounded-2xl">
                            <img
                                src="/image/WhatsApp Image 2026-10-05 at 3.53.19 PM.jpeg"
                                alt="Daily Savings"
                                className="h-[150px] w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 sm:h-[180px]"
                            />
                        </div>

                    </div>

                    {/* Middle Column */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-4">

                        {/* Offer Banner */}
                        <div className="group overflow-hidden rounded-2xl">
                            <img
                                src="/image/WhatsApp Image 2026-10-05 at 3.53.17 PM.jpeg"
                                alt="Offers of the Week"
                                className="h-[220px] w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 sm:h-[380px]"
                            />
                        </div>

                        {/* Top 50 Deals */}
                        <div className="group overflow-hidden rounded-2xl">
                            <img
                                src="/image/WhatsApp Image 2026-10-05 at 3.53.17 PM (1).jpeg"
                                alt="Top 50 Deals"
                                className="h-[220px] w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 sm:h-[380px]"
                            />
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="group overflow-hidden rounded-2xl lg:col-span-4">
                        <img
                            src="/image/WhatsApp Image 2026-10-05 at 3.53.18 PM.jpeg"
                            alt="Big Pack Big Savings"
                            className="h-[220px] w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105 sm:h-[380px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}