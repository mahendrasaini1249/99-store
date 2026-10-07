import CategoryFilter from "@/app/commoncomponents/CategoryFilter";
import CategoryGrid from "@/app/commoncomponents/CategoryGrid";
import Breadcrumb from "@/app/commoncomponents/Breadcrumb";

import categories from "@/app/data/categoriesData";

const CategoriesPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">

      <Breadcrumb
        items={[
          {
            label: "Categories",
          },
        ]}
      />

      {/* Page Header */}
      <section className="mx-auto max-w-[1300px] px-4 py-5 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            All Categories
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Explore all our product categories and find the
            products you are looking for.
          </p>
        </div>
      </section>

      {/* Categories Content */}
      <section className="mx-auto max-w-[1300px] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[260px_1fr]">

          {/* Left Filter */}
          <CategoryFilter
            categories={categories}
          />

          {/* Right Categories */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Browse Categories
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {categories.length} categories available
                </p>
              </div>
            </div>

            <CategoryGrid
              categories={categories}
            />

          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoriesPage;