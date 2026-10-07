"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const CategoryFilter = ({
    categories = [],
}) => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <aside className="h-fit w-full rounded-xl border border-gray-200 bg-white p-4 sm:p-5">

            {/* Header */}
            <div className="mb-2 flex items-center gap-2 border-b border-gray-200 pb-2">
                <SlidersHorizontal
                    size={19}
                    className="text-[#FD9702]"
                />

                <h2 className="text-base font-bold text-gray-900 sm:text-lg">
                    Categories
                </h2>
            </div>

            {/* Search */}
            <div className="relative mb-2">
                <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search category..."
                    className="h-11 w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 pr-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#FD9702] focus:bg-white focus:ring-2 focus:ring-orange-100"
                />
            </div>

            {/* Category List */}
            <div>
                <div className="max-h-[450px] overflow-y-auto pr-1">

                    {/* All Categories */}
                    <button
                        type="button"
                        onClick={() => setSelectedCategory("all")}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${
                            selectedCategory === "all"
                                ? "bg-orange-50 text-[#FD9702]"
                                : "text-gray-600 hover:bg-orange-50 hover:text-[#FD9702]"
                        }`}
                    >
                        <span>
                            All Categories
                        </span>

                        <span
                            className={`rounded-full px-2 py-0.5 text-xs ${
                                selectedCategory === "all"
                                    ? "bg-orange-100 text-[#FD9702]"
                                    : "bg-gray-100 text-gray-500"
                            }`}
                        >
                            {categories.length}
                        </span>
                    </button>

                    {/* Categories From Data */}
                    {categories.map((category) => {
                        const isActive =
                            selectedCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() =>
                                    setSelectedCategory(category.id)
                                }
                                className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium transition ${
                                    isActive
                                        ? "bg-orange-50 font-semibold text-[#FD9702]"
                                        : "text-gray-600 hover:bg-orange-50 hover:text-[#FD9702]"
                                }`}
                            >
                                <span className="truncate pr-3">
                                    {category.name}
                                </span>
                            </button>
                        );
                    })}

                </div>
            </div>

        </aside>
    );
};

export default CategoryFilter;