import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import LoginModal from "./components/LoginModal";
import ProfilePage from "./pages/ProfilePage";
import MaintenanceCard from "./components/MaintenanceCard";

// FS-05: New imports
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

// Pages that show Footer at the bottom
// AboutPage and ContactPage already include Footer internally.
// For all other pages, we wrap content in a flex-col layout
// and render Footer at the bottom.

const PageWithFooter = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-1 pt-14 sm:pt-16 w-full overflow-x-hidden">
      {children}
    </main>
    {/* FS-05: Footer visible on all pages, no overlap */}
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden min-h-screen w-full">

        <MaintenanceCard />
        <Navbar />
        <LoginModal />

        <Routes>
          {/* Customer pages — all wrapped with Footer */}
          <Route path="/"          element={<PageWithFooter><HomePage /></PageWithFooter>} />
          <Route path="/profile"   element={<PageWithFooter><ProfilePage /></PageWithFooter>} />
          <Route path="/cart"      element={<PageWithFooter><CartPage /></PageWithFooter>} />
          <Route path="/categories" element={<PageWithFooter><AllCategoriesPage /></PageWithFooter>} />

          {/* FS-05: New static pages */}
          <Route path="/about"   element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin / Staff — no Footer needed */}
          <Route path="/admin"  element={<AdminDashboard />} />
          <Route path="/staff"  element={<StaffDashboard />} />

          {/* Dynamic routes */}
          <Route
            path="/cn/:categorySlug/:subCategorySlug/cid/:categoryId/scid/:subCategoryId"
            element={<PageWithFooter><SubCategoryPage /></PageWithFooter>}
          />
          <Route
            path="/pn/:slug/pvid/:productId"
            element={<PageWithFooter><ProductDetailPage /></PageWithFooter>}
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;