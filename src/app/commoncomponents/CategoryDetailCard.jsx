"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

const CategoryDetailCard = ({
    category,
    productCount = 0,
}) => {
    return (
        <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md">

            {/* Image */}
            <div className="flex h-[140px] items-center justify-center overflow-hidden bg-gray-50 p-3 sm:h-[160px]">
                <Image
                    src={category.image}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-3">

                {/* Category Name */}
                <h3 className="line-clamp-1 text-sm font-bold text-gray-900 sm:text-base">
                    {category.name}
                </h3>

                {/* Product Count */}
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
                    <Package size={14} />

                    <span>
                        {productCount}{" "}
                        {productCount === 1
                            ? "Product"
                            : "Products"}
                    </span>
                </div>

                {/* View Products */}
                <div className="mt-3 border-t border-gray-100 pt-3">
                    <Link
                        href={`/pages/categories/${category.slug}`}
                        className="flex w-full items-center justify-center gap-1.5 rounded-md bg-orange-50 py-2 text-xs font-semibold text-[#FD9702] transition-all duration-300 hover:bg-[#FD9702] hover:text-white sm:text-sm"
                    >
                        <span>View Products</span>

                        <ArrowRight
                            size={15}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CategoryDetailCard;