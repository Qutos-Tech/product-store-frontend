import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

const ProductCard = ({ product }) => {
  const qty = useCartStore((s) => s.cart[product.id]?.qty || 0);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pn/${slugify(product.name)}/pvid/${product.id}`);
  };

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  return (

    <div
      onClick={handleCardClick}
      className="bg-white rounded-xl border border-gray-100
                 hover:border-green-400 hover:shadow-md
                 transition-all duration-200 cursor-pointer
                 flex flex-col h-full overflow-hidden
                 transform hover:scale-[1.02]"
    >
      {}
      <div className="relative bg-gray-50 aspect-square overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Discount badge */}
        {discount && (
          <span className="absolute top-1.5 left-1.5 bg-green-500 text-white
                           text-[10px] font-bold px-1.5 py-0.5 rounded-md z-10">
            {discount}% OFF
          </span>
        )}

        {/* Add / Stepper — overlaid on image bottom-right */}
        {qty === 0 ? (
          <button
            onClick={(e) => { e.stopPropagation(); addItem(product); }}
            className="absolute bottom-2 right-2 bg-green-600 text-white
                       w-8 h-8 rounded-full flex items-center justify-center
                       text-xl font-bold shadow-md hover:bg-green-700
                       transition active:scale-95 z-10"
          >
            +
          </button>
        ) : (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-2 right-2 bg-white shadow-md rounded-full
                       flex items-center gap-1 px-1.5 py-0.5
                       border border-green-300 z-10"
          >
            <button
              onClick={() => removeItem(product.id)}
              className="w-6 h-6 flex items-center justify-center rounded-full
                         bg-gray-100 hover:bg-gray-200 font-bold text-gray-700
                         text-sm transition"
            >
              -
            </button>
            <span className="text-sm font-bold text-green-700 min-w-[16px] text-center">
              {qty}
            </span>
            <button
              onClick={() => addItem(product)}
              className="w-6 h-6 flex items-center justify-center rounded-full
                         bg-green-600 text-white hover:bg-green-700
                         font-bold text-sm transition"
            >
              +
            </button>
          </div>
        )}
      </div>

      {/* ── Info — flex-1 so it fills remaining card height ── */}
      <div className="p-2.5 flex flex-col flex-1 gap-1">
        {/* Name — 2-line clamp keeps all cards same height */}
        <h3 className="text-xs sm:text-sm font-semibold text-gray-800
                       line-clamp-2 leading-snug flex-1">
          {product.name}
        </h3>

        {/* Price row — always at the bottom due to mt-auto */}
        <div className="flex items-center gap-1.5 mt-auto pt-1">
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