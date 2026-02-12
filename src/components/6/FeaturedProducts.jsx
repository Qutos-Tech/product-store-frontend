import ProductCard from "../ProductCard";
import { newProducts } from "../../data/products";

const FeaturedProducts = () => {
  return (
    <section className="px-4 py-4 bg-gray-50">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-gray-800">Featured Products</h2>
      </div>

      {/* 2 cols mobile → 3 sm → 4 md → 5 lg */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;