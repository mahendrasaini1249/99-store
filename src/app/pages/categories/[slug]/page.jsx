"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import Breadcrumb from "@/app/commoncomponents/Breadcrumb";
import ProductCard from "@/app/commoncomponents/ProductCard";
import products from "@/app/data/productsData";


const categories = {
    kitchen: {
        name: "Kitchen",
        description: "Useful and affordable products for your modern kitchen.",
        image: "https://99wholesale.com/cdn/shop/files/Plastic_Oil_Spill_Spoon_Resting_Tray.png?v=1762340811&width=600",
        subCategories: [
            "Kitchen Tools",
            "Storage",
            "Cookware",
            "Organizers",
            "Lunch Boxes",
        ],
    },

    "for-women": {
        name: "For Women",
        description: "Trendy and useful products specially selected for women.",
        image: "https://99wholesale.com/cdn/shop/files/16_Cavity_Cosmetic_Organiser.png?v=1763642075&width=533",
        subCategories: [
            "Beauty",
            "Makeup",
            "Accessories",
            "Bags",
            "Jewellery",
        ],
    },

    "for-men": {
        name: "For Men",
        description: "Useful fashion and lifestyle products for men.",
        image: "https://99wholesale.com/cdn/shop/collections/WD0348-1-Folding-Shopping-Bag-Duffle-Bag-Style_All_951_1_ec5e9abe-389d-4e68-8bb5-284ba06da665.jpg?v=1742297161&width=270",
        subCategories: [
            "Wallets",
            "Belts",
            "Bags",
            "Accessories",
            "Grooming",
        ],
    },

    bags: {
        name: "Bags",
        description: "Shop useful and stylish bags for everyday use.",
        image: "https://99wholesale.com/cdn/shop/files/BAG_COVER.png?v=1765944487&width=360",
        subCategories: [
            "Hand Bags",
            "Travel Bags",
            "Shopping Bags",
            "Backpacks",
        ],
    },

    electronics: {
        name: "Electronics",
        description: "Explore useful electronic products and smart gadgets.",
        image: "https://99wholesale.com/cdn/shop/files/Untitled_design_35_1d929437-dff1-46f7-864e-84c9f88a523e.png?v=1765364200&width=600",
        subCategories: [
            "Mobile Accessories",
            "Chargers",
            "Earphones",
            "Speakers",
            "Gadgets",
        ],
    },

    "personal-care": {
        name: "Personal Care",
        description: "Everyday personal care and grooming products.",
        image: "https://99wholesale.com/cdn/shop/files/ice1.webp?v=1762846344&width=533",
        subCategories: [
            "Hair Care",
            "Skin Care",
            "Grooming",
            "Bath & Body",
        ],
    },

    "office-stationery": {
        name: "Office Stationery",
        description: "Useful stationery products for office, school and home.",
        image: "https://99wholesale.com/cdn/shop/files/61tTZ2F3pfL.jpg?v=1785991391&width=533",
        subCategories: [
            "Writing",
            "Notebooks",
            "Office Supplies",
            "School Supplies",
        ],
    },

    "baby-care": {
        name: "Baby Care",
        description: "Useful and essential products for babies and kids.",
        image: "https://99wholesale.com/cdn/shop/files/81M8Ko1ueoL._SL1500.jpg?v=1760435183&width=1426",
        subCategories: [
            "Baby Toys",
            "Baby Care",
            "Feeding",
            "Baby Accessories",
        ],
    },

    jewelry: {
        name: "Jewelry",
        description: "Beautiful and stylish jewellery for every occasion.",
        image: "https://99wholesale.com/cdn/shop/files/Untitled_design_23_c157c417-0c3f-450a-ab17-fb252dbd9066.png?v=1770097181&width=713",
        subCategories: [
            "Earrings",
            "Necklaces",
            "Bracelets",
            "Rings",
        ],
    },

    sports: {
        name: "Sports",
        description: "Sports and fitness products for an active lifestyle.",
        image: "https://99wholesale.com/cdn/shop/files/61EipzdgiLL._SL1500.jpg?v=1765001335&width=533",
        subCategories: [
            "Fitness",
            "Exercise",
            "Outdoor Sports",
            "Sports Accessories",
        ],
    },
};

const CategoryPage = () => {
    const { slug } = useParams();

    const category = categories[slug];

    const categoryProducts = useMemo(() => {
        const filteredProducts = products.filter(
            (product) => product.category === slug
        );


        return filteredProducts;
    }, [slug, sort]);

    if (!category) {
        return (
            <section className="mx-auto max-w-[1300px] px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    Category Not Found
                </h1>

                <p className="mt-3 text-gray-500">
                    The category you are looking for does not exist.
                </p>

                <Link
                    href="/pages/categories"
                    className="mt-6 inline-block rounded-lg bg-[#FD9702] px-6 py-3 font-medium text-white"
                >
                    View All Categories
                </Link>
            </section>
        );
    }

    return (
        <main className="bg-gray-50">
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    {
                        label: "Categories",
                        href: "/pages/categories",
                    },
                    {
                        label: category.name,
                    },
                ]}
            />
            {/* Category Header */}
            <section className="mx-auto max-w-[1300px] px-4 py-5 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-6 rounded-xl border border-gray-200 bg-white p-5 sm:p-8 md:flex-row">

                    <div className="flex h-[180px] w-full items-center justify-center sm:h-[220px] md:w-[280px]">
                        <Image
                            src={category.image}
                            alt={category.name}
                            width={250}
                            height={250}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            {category.name}
                        </h1>

                        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                            {category.description}
                        </p>

                        <p className="mt-4 font-medium text-gray-700">
                            {categoryProducts.length} Products
                        </p>
                    </div>
                </div>
            </section>

            {/* Sub Categories */}
            <section className="mx-auto max-w-[1300px] px-4 pb-5 sm:px-6 lg:px-8">
                <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">

                    <h2 className="mb-4 text-lg font-bold text-gray-900">
                        Shop by Category
                    </h2>

                    <div className="flex gap-3 overflow-x-auto pb-2">
                        {category.subCategories.map((subCategory) => (
                            <button
                                key={subCategory}
                                type="button"
                                className="shrink-0 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-[#FD9702] hover:bg-orange-50 hover:text-[#FD9702]"
                            >
                                {subCategory}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="mx-auto max-w-[1300px] px-4 pb-10 sm:px-6 lg:px-8">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            {category.name} Products
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            {categoryProducts.length} products found
                        </p>
                    </div>

                </div>

                {/* Product Grid */}
                <div
                    className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                >
                    {categoryProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>

                {categoryProducts.length === 0 && (
                    <div className="rounded-xl border border-gray-200 bg-white py-16 text-center">
                        <h3 className="text-lg font-semibold text-gray-900">
                            No products found
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            There are currently no products in this category.
                        </p>
                    </div>
                )}

            </section>
        </main>
    );
};

export default CategoryPage;