import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import "./App.css"
import LoginModal from "./components/LoginModal";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Navbar />
      <LoginModal />
      <Routes>
        {/* Customer */}
        <Route path="/" element={<HomePage />} />
         
        <Route path="/profile" element={<ProfilePage />} />
        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Staff */}
        <Route path="/staff" element={<StaffDashboard />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/categories" element={<AllCategoriesPage />} />

        {/* cn => category name/navigation , cid =>categoryId, scid => sub category id */}
        <Route
          path="/cn/:categorySlug/:subCategorySlug/cid/:categoryId/scid/:subCategoryId"
          element={<SubCategoryPage />}
        />
        {/* pn => product name , pvid => product viewed id, used in future recommending items to user */}
        <Route
          path="/pn/:slug/pvid/:productId"
          element={<ProductDetailPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
