import React, { useState } from "react";
import { Close, Smartphone, ArrowForward } from "@mui/icons-material";
import useAuthStore from "../store/authStore";

const LoginModal = () => {
  const { isLoginModalOpen, setLoginModal, setAuth } = useAuthStore();
  const [mobile, setMobile] = useState("");

  if (!isLoginModalOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      // Mock login: In a real app, you'd call an API here
      setAuth("dummy-token-123", { id: 1, name: "Customer", role: "user" });
      setLoginModal(false);
      setMobile("");
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setLoginModal(false)}
      ></div>

      {/* Card */}
      <div className="bg-white w-full max-w-sm rounded-3xl shadow-2xl relative z-10 overflow-hidden transform transition-all duration-300 scale-100">
        {/* Close Button */}
        <button 
          onClick={() => setLoginModal(false)}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <Close />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-600 mb-2">Sethji</h2>
            <p className="text-gray-500 text-sm">Welcome! Please sign in to continue.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">
                Mobile Number
              </label>
              <div className="flex items-center bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3 focus-within:border-green-500 focus-within:bg-white transition-all">
                <span className="text-gray-400 font-medium mr-2">+91</span>
                <input
                  type="tel"
                  placeholder="Enter 10 digit number"
                  maxLength="10"
                  className="bg-transparent w-full outline-none text-gray-700 font-semibold tracking-wider"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  autoFocus
                />
                <Smartphone className="text-gray-300 ml-2" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              Get Started <ArrowForward fontSize="small" />
            </button>
          </form>

          <p className="mt-8 text-center text-[10px] text-gray-400 px-4">
            By clicking "Get Started", you agree to our 
            <span className="text-gray-600 font-medium cursor-pointer mx-1">Terms</span> 
            and 
            <span className="text-gray-600 font-medium cursor-pointer mx-1">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;