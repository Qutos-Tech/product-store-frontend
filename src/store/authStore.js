import { create } from "zustand"; // Added curly braces here
import { persist, devtools } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        isLoginModalOpen: false, // This tracks if the pop-up is visible
        
        // Actions
        setAuth: (token, user) => set({ token, user }),
        setLoginModal: (isOpen) => set({ isLoginModalOpen: isOpen }),
        
        logout: () => {
          set({ token: null, user: null });
          // Clear cart on logout
          try {
            // This is a safe way to clear the cart without circular imports
            localStorage.removeItem("sethji-cart"); 
            window.location.href = "/"; // Redirect to home
          } catch (e) {
            console.error(e);
          }
        },
      }),
      { 
        name: "sethji-auth",
        // We only want to save token and user. 
        // We DON'T want to save isLoginModalOpen in localStorage.
        partialize: (state) => ({ token: state.token, user: state.user }),
      }
    )
  )
);

export default useAuthStore;