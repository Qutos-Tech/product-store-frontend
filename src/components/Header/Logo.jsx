import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-heading font-bold text-primary">
                General Store
            </h1>
        </Link>
    );
};

export default Logo;
