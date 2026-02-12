import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const ProductCard = ({ product }) => {
  // ✅ Correct: matches cartStore.js which uses addItem/removeItem (not addToCart)
  const qty = useCartStore((s) => s.cart[product.id]?.qty || 0);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);

  const navigate = useNavigate();

  // ✅ Correct: matches App.jsx route → /pn/:slug/pvid/:productId
  const handleCardClick = () => {
    navigate(`/pn/${slugify(product.name)}/pvid/${product.id}`);
  };

  // Optional discount badge
  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200
                 transform hover:scale-[1.02] flex flex-col cursor-pointer overflow-hidden
                 border border-gray-100 hover:border-green-400"
    >
      {/* Image */}
      <div className="relative bg-gray-50">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-28 sm:h-32 md:h-36 object-cover"
          loading="lazy"
        />

        {discount && (
          <span className="absolute top-1.5 left-1.5 bg-green-500 text-white
                           text-[10px] font-bold px-1.5 py-0.5 rounded-md">
            {discount}% OFF
          </span>
        )}

        {/* Add / Stepper */}
        {qty === 0 ? (
          <button
            onClick={(e) => { e.stopPropagation(); addItem(product); }}
            className="absolute bottom-2 right-2 bg-green-600 text-white
                       w-8 h-8 rounded-full flex items-center justify-center
                       text-xl font-bold shadow hover:bg-green-700 transition"
          >
            +
          </button>
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-2 right-2 bg-white shadow-md rounded-full
                       flex items-center gap-1.5 px-2 py-1 border border-green-200"
          >
            <button
              onClick={() => removeItem(product.id)}
              className="w-6 h-6 flex items-center justify-center rounded-full
                         bg-gray-100 hover:bg-gray-200 font-bold"
            >
              -
            </button>
            <span className="text-sm font-bold text-green-700 min-w-[14px] text-center">
              {qty}
            </span>
            <button
              onClick={() => addItem(product)}
              className="w-6 h-6 flex items-center justify-center rounded-full
                         bg-green-600 text-white hover:bg-green-700 font-bold"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5 flex flex-col gap-0.5">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-gray-900">
            &#8377;{product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              &#8377;{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;