import React, { useEffect } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout, setLoginModal } = useAuthStore();
  const navigate = useNavigate();

  // PROTECTION LOGIC: If no user is found, redirect home and open login
  useEffect(() => {
    if (!user) {
      navigate("/"); // Send them back to the home page
      setLoginModal(true); // Automatically show the login pop-up
    }
  }, [user, navigate, setLoginModal]);

  if (!user) return null; // Don't render anything while redirecting

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center pt-20">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md text-center">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4">
          {user?.name?.charAt(0)}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
        <p className="text-gray-500 mb-8 uppercase text-xs tracking-widest font-bold">
          {user?.role}
        </p>
        
        <button 
          onClick={() => {
            logout();
            navigate("/");
          }}
          className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-bold py-4 rounded-2xl transition-all active:scale-95"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;