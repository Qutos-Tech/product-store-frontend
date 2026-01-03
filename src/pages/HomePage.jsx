import React, { useState } from "react";
import useCartStore from "../store/cartStore";
import HeroBanner from "../components/HeroBanner";
import CategorySection from "../components/7/CategorySection";
import {
  dairySubCategories,
  electronicsSubCategories,
  grocerySubCategories,
  kidsSubCategories,
  partySubCategories,
  studySubCategories
} from "../data/categories";
import DailyItems from "../components/4/DailyItems";
import Category from "../components/1/Category";
import Subcategory from "../components/2/Subcategory";
import NewInStore from "../components/3/NewInStore";
import Everything99 from "../components/5/Everything99";
import FeaturedProducts from "../components/6/FeaturedProducts";

const HomePage = () => {
  const clearCart = useCartStore((state) => state.clearCart);

  // 1. Lifted State: Manages the active category and subcategory globally on this page
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("");

  // 2. Data Mapping: Dynamically links category names to their imported data arrays
  const categoryDataMap = {
    "Grocery": grocerySubCategories,
    "Dairy": dairySubCategories,
    "Study": studySubCategories,
    "Party": partySubCategories,
    "Kids": kidsSubCategories,
    "Electronics": electronicsSubCategories,
  };

  // Get the subcategories for the current selection, default to empty array
  const currentSubItems = categoryDataMap[activeCategory] || [];

  // 3. Change Handler: Resets subcategory when the main category changes
  const handleCategoryChange = (catName) => {
    setActiveCategory(catName);
    setActiveSubCategory(""); // Reset sub-selection when switching main categories
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Search */}
      <div className="sm:hidden px-3 py-2 bg-white sticky top-[56px] z-10 shadow-sm">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
        />
      </div>

      {/* Main Category Bar */}
      <Category
        activeCat={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* 4. Dynamic Subcategory Bar: Shows whenever a category with sub-items is selected */}
      {activeCategory !== "All" && currentSubItems.length > 0 && (
        <Subcategory
          items={currentSubItems}
          activeSub={activeSubCategory}
          onSubChange={setActiveSubCategory}
        />
      )}

      {/* 5. Conditional Rendering: Minimal switch between 'All' view and 'Filtered' view */}
      {activeCategory === "All" ? (
        <>
          <HeroBanner />
          <NewInStore />
          <DailyItems />
          <Everything99 />
          <FeaturedProducts />

          <div>
            <CategorySection
              title="Grocery & Kitchen"
              subCategories={grocerySubCategories}
            />
            <CategorySection
              title="Dairy & Breakfast"
              subCategories={dairySubCategories}
            />
            <CategorySection
              title="Study Essentials"
              subCategories={studySubCategories}
            />
            <CategorySection
              title="Party Essentials"
              subCategories={partySubCategories}
            />
            <CategorySection
              title="Kids Collection"
              subCategories={kidsSubCategories}
            />
            <CategorySection
              title="Electronics and Appliances"
              subCategories={electronicsSubCategories}
            />
          </div>
        </>
      ) : (
        /* Category-Specific View */
        <div className="p-6 bg-white min-h-[400px]">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {activeCategory} Products
          </h2>
          <p className="text-gray-500 mb-6 italic">
            Showing items for {activeCategory} {activeSubCategory ? `> ${activeSubCategory}` : ""}
          </p>

          {/* Placeholder for filtered Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* ProductCard components would be mapped here in a future task */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;