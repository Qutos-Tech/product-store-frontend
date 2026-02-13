import ProductCard from "../ProductCard";
import { newProducts } from "../../data/products";

const FeaturedProducts = () => {
  return (
    <section className="px-3 sm:px-4 py-5 bg-gray-50">

      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
            Featured Products
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {newProducts.length} items
          </p>
        </div>
        <button className="text-xs font-semibold text-green-600 hover:underline">
          See all
        </button>
      </div>

      {}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </section>
  );
};

export default FeaturedProducts;