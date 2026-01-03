import { Link } from "react-router-dom";

const categories = [
  { name: "All", icon: "⚡️" },
  { name: "Fruits", icon: "🍎" },
  { name: "Vegetables", icon: "🥦" },
  { name: "Dairy", icon: "🥛" },
  { name: "Snacks", icon: "🍪" },
  { name: "Beverages", icon: "🥤" },
];

const Category = ({ activeCat, onCategoryChange }) => {
  return (
    <div className="flex gap-4 overflow-x-auto px-3 py-3 bg-white shadow-sm sticky top-[100px] sm:top-[64px] z-10 scroll-smooth snap-x">
      {categories.map((cat) => (
        <div
          key={cat.name}
          onClick={() => onCategoryChange(cat.name)}
          className={`flex flex-col items-center justify-center min-w-[64px] cursor-pointer snap-start transition ${
            activeCat === cat.name
              ? "text-green-600 border-b-2 border-green-600"
              : "text-gray-700"
          }`}
        >
          <span className="text-xl sm:text-2xl">{cat.icon}</span>
          <p className="text-xs sm:text-sm font-medium">{cat.name}</p>
        </div>
      ))}
      <Link
        to="/categories"
        onClick={() => onCategoryChange("See All →")}
        className={`flex flex-col items-center justify-center min-w-[64px] cursor-pointer snap-start transition ${
          activeCat === "See All →"
            ? "text-green-600 border-b-2 border-green-600"
            : "text-gray-700"
        }`}
      >
        <p className="text-xs sm:text-sm font-medium">See All →</p>
      </Link>
    </div>
  );
};

export default Category;