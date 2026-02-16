import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Person } from '@mui/icons-material';
import useCartStore from '../../store/cartStore';
import useAuthStore from '../../store/authStore';

const NavActions = () => {
    const totalCount = useCartStore((s) =>
        Object.values(s.cart).reduce((a, i) => a + i.qty, 0)
    );

    const setLoginModal = useAuthStore((s) => s.setLoginModal);
    const user = useAuthStore((s) => s.user);

    const handleProfileClick = () => {
        if (!user) {
            setLoginModal(true);
        }
    };

    return (
        <div className="flex items-center gap-4 sm:gap-6">
            <Link
                to="/cart"
                className="relative flex items-center justify-center p-2 rounded-full hover:bg-background transition-colors"
            >
                <ShoppingCart className="text-secondary hover:text-primary transition-colors" />
                {totalCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-secondary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {totalCount}
                    </span>
                )}
            </Link>

            {user ? (
                <Link
                    to="/profile"
                    className="flex items-center justify-center p-2 rounded-full hover:bg-background transition-colors"
                >
                    <Person className="text-primary" />
                </Link>
            ) : (
                <button
                    onClick={handleProfileClick}
                    className="flex items-center justify-center p-2 rounded-full hover:bg-background transition-colors"
                    aria-label="Login"
                >
                    <Person className="text-secondary hover:text-primary transition-colors" />
                </button>
            )}
        </div>
    );
};

export default NavActions;
