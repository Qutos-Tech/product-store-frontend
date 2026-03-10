import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLoginPage from "./pages/AdminLoginPage";
import StaffDashboard from "./pages/StaffDashboard";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AllCategoriesPage from "./pages/AllCategoriesPage";
import "./App.css"
import LoginModal from "./components/LoginModal";
import ProfilePage from "./pages/ProfilePage";
import MaintenanceCard from "./components/MaintenanceCard";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Footer from "./components/layout/Footer/Footer";
import About from "./pages/static/About";
import Contact from "./pages/static/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <MaintenanceCard />
        <Navbar />
        <LoginModal />

        <main className="flex-grow">
          <Routes>
            {/* Customer */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

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
            <Route
              path="/pn/:slug/pvid/:productId"
              element={<ProductDetailPage />}
            />
            {/* FS-03 Example Usage */}
            <Route path="/fs03" element={
              <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="text-2xl font-bold mb-4">Fs-03 Product Card Demo</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ProductCard product={{
                    id: 101,
                    name: "Wireless Headphones",
                    price: 2999,
                    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
                  }} />
                  <ProductCard product={{
                    id: 102,
                    name: "Smart Watch",
                    price: 4999,
                    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60"
                  }} />
                  <ProductCard product={{
                    id: 103,
                    name: "Running Shoes",
                    price: 3499,
                    img: "" // Test missing image
                  }} />
                </div>
              </div>
            } />
            {/* FS-04 Product Grid Example */}
            <Route path="/fs04" element={
              <div className="min-h-screen bg-gray-50">
                <header className="bg-white shadow-sm py-6 mb-8">
                  <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-gray-900 text-center">FS-04 Product Grid Component</h1>
                  </div>
                </header>

                <div className="mb-12">
                  <div className="container mx-auto px-4">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Full Grid Display</h2>
                  </div>
                  <ProductGrid products={[
                    { id: 1, name: "Premium Wireless Headphones", price: 12999, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
                    { id: 2, name: "Smart Watch Series 7", price: 34999, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
                    { id: 3, name: "Mechanical Gaming Keyboard", price: 8499, img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60" },
                    { id: 4, name: "Ergonomic Office Chair", price: 15999, img: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&auto=format&fit=crop&q=60" },
                    { id: 5, name: "4K Gaming Monitor 27\"", price: 42000, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60" },
                    { id: 6, name: "Portable SSD 1TB", price: 7999, img: "https://images.unsplash.com/photo-1597872200382-0bf5c3fcd104?w=500&auto=format&fit=crop&q=60" },
                    { id: 7, name: "Wireless Mouse", price: 2499, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60" },
                    { id: 8, name: "Laptop Stand", price: 1999, img: "https://images.unsplash.com/photo-1517336714460-d15042450ae4?w=500&auto=format&fit=crop&q=60" }
                  ]} />
                </div>

                <div className="mb-12">
                  <div className="container mx-auto px-4">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Empty State</h2>
                  </div>
                  <ProductGrid products={[]} />
                </div>
              </div>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
