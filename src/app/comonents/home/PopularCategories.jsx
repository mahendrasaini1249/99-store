"use client";

import CategoryCard from "@/app/commoncomponents/CategoryCard";
import CategorySlider from "@/app/commoncomponents/CategorySlider";

const categories = [
    {
        id: 1,
        name: "Dairy",
        image: "/images/categories/dairy.png",
    },
    {
        id: 2,
        name: "Tea",
        image: "/images/categories/tea.png",
    },
    {
        id: 3,
        name: "Soft Drinks",
        image: "/images/categories/soft-drinks.png",
    },
    {
        id: 4,
        name: "Cleaners",
        image: "/images/categories/cleaners.png",
    },
    {
        id: 5,
        name: "Bath Soaps",
        image: "/images/categories/bath-soaps.png",
    },
    {
        id: 6,
        name: "Toothpaste",
        image: "/images/categories/toothpaste.png",
    },
    {
        id: 7,
        name: "Shampoos",
        image: "/images/categories/shampoos.png",
    },
    {
        id: 8,
        name: "Pooja Needs",
        image: "/images/categories/pooja.png",
    },
    {
        id: 9,
        name: "Biscuits",
        image: "/images/categories/biscuits.png",
    },
    {
        id: 10,
        name: "Chocolates",
        image: "/images/categories/chocolates.png",
    },
    {
        id: 11,
        name: "Snacks",
        image: "/images/categories/snacks.png",
    },
    {
        id: 12,
        name: "Namkeen",
        image: "/images/categories/namkeen.png",
    },
    {
        id: 13,
        name: "Rice",
        image: "/images/categories/rice.png",
    },
    {
        id: 14,
        name: "Flour",
        image: "/images/categories/flour.png",
    },
    {
        id: 15,
        name: "Pulses",
        image: "/images/categories/pulses.png",
    },
    {
        id: 16,
        name: "Spices",
        image: "/images/categories/spices.png",
    },
    {
        id: 17,
        name: "Oils",
        image: "/images/categories/oils.png",
    },
    {
        id: 18,
        name: "Personal Care",
        image: "/images/categories/personal-care.png",
    },
    {
        id: 19,
        name: "Home Care",
        image: "/images/categories/home-care.png",
    },
    {
        id: 20,
        name: "Baby Care",
        image: "/images/categories/baby-care.png",
    },
];

const PopularCategories = () => {
    return (
        <section className="mx-auto max-w-[1300px] px-3 py-2 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6">

                {/* Heading */}
                <div className="mb-5 sm:mb-6">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        Popular Categories
                    </h2>
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