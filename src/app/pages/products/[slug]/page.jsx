"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
    ChevronLeft,
    Minus,
    Plus,
    ShoppingCart,
    Star,
    Zap,
} from "lucide-react";

import Breadcrumb from "@/app/commoncomponents/Breadcrumb";
import products from "@/app/data/productsData";

const ProductDetailsPage = () => {
    const { slug } = useParams();

    const product = products.find(
        (item) => item.slug === slug
    );

    const [quantity, setQuantity] = useState(1);

    /* Product nahi mila */
    if (!product) {
        return (
            <section className="mx-auto max-w-[1300px] px-4 py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-900">
                    Product Not Found
                </h1>

                <Link
                    href="/pages/categories"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#FD9702] px-5 py-3 text-sm font-medium text-white"
                >
                    <ChevronLeft size={18} />
                    Back to Products
                </Link>
            </section>
        );
    }

    /* Discount calculate */
    const discount = product.oldPrice
        ? Math.round(
            ((product.oldPrice - product.price) /
                product.oldPrice) *
            100
        )
        : 0;

    return (
        <main className="bg-gray-50 min-h-screen">

            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    {
                        label: "Categories",
                        href: "/pages/categories",
                    },
                    {
                        label: product.category,
                        href: `/pages/categories/${product.category}`,
                    },
                    {
                        label: product.name,
                    },
                ]}
            />

            {/* Product Details */}
            <section className="mx-auto max-w-[1300px] px-4 py-6 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 gap-8 rounded-xl border border-gray-200 bg-white p-4 sm:p-6 lg:grid-cols-2 lg:p-8">

                    {/* ================= IMAGE ================= */}
                    <div className="flex min-h-[350px] items-center justify-center rounded-xl bg-gray-50 p-6 sm:min-h-[450px]">

                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            priority
                            className="h-[300px] w-full object-contain sm:h-[400px]"
                        />

                    </div>

                    {/* ================= DETAILS ================= */}
                    <div className="flex flex-col justify-center">

                        {/* Category */}
                        <p className="mb-2 text-sm font-medium capitalize text-[#FD9702]">
                            {product.category.replace("-", " ")}
                        </p>

                        {/* Product Name */}
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="mt-4 flex items-center gap-2">

                            <span className="flex items-center gap-1 rounded bg-green-600 px-2 py-1 text-sm font-medium text-white">
                                {product.rating}

                                <Star
                                    size={13}
                                    fill="currentColor"
                                />
                            </span>

                            <span className="text-sm text-gray-500">
                                {product.reviews} Reviews
                            </span>

                        </div>

                        {/* Price */}
                        <div className="mt-5 flex flex-wrap items-center gap-3">

                            <span className="text-3xl font-bold text-gray-900">
                                ₹{product.price}
                            </span>

                            {product.oldPrice && (
                                <>
                                    <span className="text-lg text-gray-400 line-through">
                                        ₹{product.oldPrice}
                                    </span>

                                    <span className="rounded bg-red-50 px-2 py-1 text-sm font-semibold text-red-500">
                                        {discount}% OFF
                                    </span>
                                </>
                            )}

                        </div>

                        {/* Description */}
                        <div className="mt-6">

                            <h2 className="mb-2 text-lg font-semibold text-gray-900">
                                Description
                            </h2>

                            <p className="text-sm leading-6 text-gray-600 sm:text-base">
                                {product.description}
                            </p>

                        </div>

                        {/* Quantity */}
                        <div className="mt-6">

                            <p className="mb-2 text-sm font-medium text-gray-700">
                                Quantity
                            </p>

                            <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300">

                                {/* Minus */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setQuantity((prev) =>
                                            Math.max(1, prev - 1)
                                        )
                                    }
                                    className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:bg-gray-100"
                                >
                                    <Minus size={16} />
                                </button>

                                {/* Quantity */}
                                <span className="flex h-10 w-12 items-center justify-center border-x border-gray-300 text-sm font-semibold">
                                    {quantity}
                                </span>

                                {/* Plus */}
                                <button
                                    type="button"
                                    onClick={() =>
                                        setQuantity((prev) =>
                                            Math.min(15, prev + 1)
                                        )
                                    }
                                    className="flex h-10 w-10 items-center justify-center text-gray-700 transition hover:bg-gray-100"
                                >
                                    <Plus size={16} />
                                </button>

                            </div>

                        </div>

                        {/* Buttons */}
                        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

                            {/* Add Cart */}
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-lg border border-[#FD9702] bg-white py-3 font-semibold text-[#FD9702] transition hover:bg-orange-50"
                            >
                                <ShoppingCart size={19} />
                                Add to Cart
                            </button>

                            {/* Buy Now */}
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 rounded-lg bg-[#FD9702] py-3 font-semibold text-white transition hover:bg-orange-600"
                            >
                                <Zap size={19} />
                                Buy Now
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </main>
    );
};

export default ProductDetailsPage;