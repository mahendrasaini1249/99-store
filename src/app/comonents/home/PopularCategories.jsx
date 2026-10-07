"use client";

import Link from "next/link";
import CategoryCard from "@/app/commoncomponents/CategoryCard";
import CategorySlider from "@/app/commoncomponents/CategorySlider";
import categories from "@/app/data/categoriesData";

const PopularCategories = () => {
    return (
        <section className="mx-auto max-w-[1300px] px-3 py-2 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">

                {/* Heading */}
                <div className="mb-5 flex items-center justify-between sm:mb-6">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        Popular Categories
                    </h2>

                    <Link
                        href="/pages/categories"
                        className="text-sm font-semibold text-[#FD9702] transition hover:text-orange-600 sm:text-base"
                    >
                        View All Categories →
                    </Link>
                </div>

                {/* Category Slider */}
                <CategorySlider
                    items={categories}
                    renderSlide={(category) => (
                        <CategoryCard category={category} />
                    )}
                />

            </div>
        </section>
    );
};

export default PopularCategories;