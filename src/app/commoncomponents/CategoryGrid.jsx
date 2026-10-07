"use client";

import CategoryDetailCard from "@/app/commoncomponents/CategoryDetailCard";

const CategoryGrid = ({
    categories = [],
    products = [],
}) => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {

                const productCount = products.filter(
                    (product) =>
                        product.category === category.slug
                ).length;

                return (
                    <CategoryDetailCard
                        key={category.id}
                        category={category}
                        productCount={productCount}
                    />
                );
            })}
        </div>
    );
};

export default CategoryGrid;