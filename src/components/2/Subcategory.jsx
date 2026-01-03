import React from "react";

/**
 * Subcategory Component
 * Receives items, activeSub, and onSubChange from HomePage to ensure
 * the UI updates dynamically when categories are switched.
 */
const Subcategory = ({ items, activeSub, onSubChange }) => {
  return (
    <div className="flex gap-3 overflow-x-auto px-3 py-2 bg-gray-100 sticky top-[160px] sm:top-[112px] z-10 scroll-smooth snap-x">
      {items.map((sub, idx) => (
        <button
          key={idx}
          // Uses sub.name because items come from the categories.js data structure
          onClick={() => onSubChange(sub.name)}
          className={`px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm border whitespace-nowrap transition ${
            activeSub === sub.name
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-700 hover:bg-green-50"
          }`}
        >
          {sub.name}
        </button>
      ))}
    </div>
  );
};

export default Subcategory;