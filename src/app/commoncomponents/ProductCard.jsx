"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
    const discount = product.oldPrice
        ? Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
        : 0;

    return (
        <div
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-md"
        >
            {/* Discount */}
            {discount > 0 && (
                <span
                    className="absolute left-2 top-2 z-10 rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white"
                >
                    {discount}% OFF
                </span>
            )}

            {/* Wishlist */}
            <button
                type="button"
                aria-label="Add to wishlist"
                className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:text-red-500"
            >
                <Heart size={18} />
            </button>

            {/* Product Image */}
            <Link href={`/pages/products/${product.slug}`}>
                <div
                    className="flex h-[180px] items-center justify-center overflow-hidden p-4 sm:h-[210px]"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={250}
                        height={250}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </div>
            </Link>

            {/* Product Details */}
            <div className="p-3 sm:p-4">

                {/* Rating */}
                <div className="mb-2 flex items-center gap-1">
                    <span
                        className="flex items-center gap-1 rounded bg-green-600 px-1.5 py-0.5 text-xs font-medium text-white"
                    >
                        {product.rating}

                        <Star
                            size={10}
                            fill="currentColor"
                        />
                    </span>

                    {product.reviews && (
                        <span className="text-xs text-gray-400">
                            ({product.reviews})
                        </span>
                    )}
                </div>

                {/* Product Name */}
                <Link href={`/pages/products/${product.slug}`}>
                    <h3
                        className="line-clamp-2 min-h-[40px] text-sm font-medium text-gray-800 transition hover:text-[#FD9702]"
                    >
                        {product.name}
                    </h3>
                </Link>

                {/* Price */}
                <div className="mt-2 flex items-center gap-2">
                    <span
                        className="text-lg font-bold text-gray-900"
                    >
                        ₹{product.price}
                    </span>

                    {product.oldPrice && (
                        <span
                            className="text-sm text-gray-400 line-through"
                        >
                            ₹{product.oldPrice}
                        </span>
                    )}
                </div>

                {/* Add To Cart */}
                <button
                    type="button"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#FD9702] py-2.5 text-sm font-medium text-white transition hover:bg-orange-600"
                >
                    <ShoppingCart size={17} />

                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;