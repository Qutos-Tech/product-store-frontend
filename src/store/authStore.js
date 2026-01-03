import { create } from "zustand"; // CHANGED: Added curly braces
import { persist, devtools } from "zustand/middleware";

const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null, // {id, name, role}
        
        // --- NEW: Modal State ---
        isLoginModalOpen: false, 
        setLoginModal: (isOpen) => set({ isLoginModalOpen: isOpen }),
        
        setAuth: (token, user) => set({ token, user }),
        logout: () => {
          set({ token: null, user: null });
          try {
            // Use a dynamic import or ensure cartStore is handled correctly
            const useCartStore = require("./cartStore").default;
            useCartStore.getState().clearCart();
          } catch (e) {
            console.error("Logout clear cart error:", e);
          }
        },
      }),
      { name: "sethji-auth" }
    )
  )
);

export default useAuthStore;