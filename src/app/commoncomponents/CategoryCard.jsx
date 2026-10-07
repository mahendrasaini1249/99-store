"use client";

import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
    return (
        <Link
            href={`/pages/categories/${category.slug}`}
            className="group block"
        >
            <div
                className=" flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-md ">
                <Image
                    src={category.image}
                    alt={category.name}
                    width={140}
                    height={140}
                    className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105" />
            </div>

            <h3
                className=" mt-4 truncate text-center text-base font-semibold text-gray-700 transition-colors duration-300 group-hover:text-[#FD9702] " >
                {category.name}
            </h3>

        </Link>
    );
};

export default CategoryCard;