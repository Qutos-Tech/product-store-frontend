import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import NavActions from './NavActions';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4 py-4">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    <div className="flex-1 hidden md:block">
                        <SearchBar />
                    </div>

                    <div className="flex-shrink-0">
                        <NavActions />
                    </div>
                </div>

                <div className="md:hidden pb-4">
                    <SearchBar />
                </div>
            </div>
        </header>
    );
};

export default Header;
