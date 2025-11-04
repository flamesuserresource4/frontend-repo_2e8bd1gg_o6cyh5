import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-white font-bold">DF</span>
          <span className="font-semibold text-lg tracking-tight">DryFruit Delight</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#products" className="hover:text-amber-700 transition-colors">Products</a>
          <a href="#contact" className="hover:text-amber-700 transition-colors">Contact</a>
        </nav>
        <a href="#products" className="inline-flex items-center justify-center rounded-md bg-amber-600 text-white px-4 py-2 text-sm font-medium hover:bg-amber-700 transition-colors">
          Shop Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;
