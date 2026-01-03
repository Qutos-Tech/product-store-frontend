import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Person } from "@mui/icons-material";
import useCartStore from "../store/cartStore";
import useAuthStore from "../store/authStore"; // Import Auth Store

const Navbar = () => {
  // Get cart item count
  const totalCount = useCartStore((s) =>
    Object.values(s.cart).reduce((a, i) => a + i.qty, 0)
  );

  // Auth Store hooks
  const setLoginModal = useAuthStore((s) => s.setLoginModal);
  const user = useAuthStore((s) => s.user);

  return (
    <nav className="bg-white shadow-md px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between sticky top-0 z-20">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-lg sm:text-2xl font-bold text-green-600 app-title cursor-pointer">
          Sethji
        </h1>
      </Link>

      {/* Search (hidden on mobile, visible on sm+) */}
      <input
        type="text"
        placeholder="Search for products..."
        className="hidden sm:block w-1/2 lg:w-1/3 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
      />

      {/* Icons */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Cart Icon Wrapper */}
        <div className="relative">
          <Link to="/cart">
            <ShoppingCart className="cursor-pointer text-gray-600 hover:text-green-600 transition-colors" />
            {totalCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center border-2 border-white">
                {totalCount}
              </span>
            )}
          </Link>
        </div>

        {/* Profile/Login Icon */}
        <div 
          className="flex items-center justify-center p-1 rounded-full hover:bg-green-50 transition-all cursor-pointer"
          onClick={() => (user ? null : setLoginModal(true))} // Open modal only if not logged in
        >
          {user ? (
            // If logged in, show the green icon (or link to profile)
            <Link to="/profile">
              <Person className="text-green-600" />
            </Link>
          ) : (
            // If not logged in, clicking triggers the login pop-up
            <Person className="text-gray-600 hover:text-green-600" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;