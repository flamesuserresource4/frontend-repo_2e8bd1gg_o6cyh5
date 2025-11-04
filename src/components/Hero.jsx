import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block mb-4 text-amber-700 font-medium bg-amber-100 px-3 py-1 rounded-full">100% Premium Quality</span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Nourish your day with handpicked dry fruits
          </h1>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Explore our selection of almonds, cashews, raisins, figs, walnuts, and dates — sourced with care, packed fresh, and delivered fast.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-md bg-amber-600 text-white px-5 py-3 text-sm font-semibold hover:bg-amber-700 transition-colors">Browse Products</a>
            <a href="#benefits" className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold hover:bg-neutral-50 transition-colors">Why Dry Fruits?</a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-tr from-amber-200 via-orange-100 to-amber-50 shadow-xl" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="grid grid-cols-3 gap-3 p-6 w-full max-w-md">
              {[
                { label: 'Almonds', emoji: '🌰' },
                { label: 'Cashew', emoji: '🥜' },
                { label: 'Raisins', emoji: '🍇' },
                { label: 'Fig', emoji: '🫐' },
                { label: 'Walnut', emoji: '🌰' },
                { label: 'Dates', emoji: '🍯' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center justify-center h-24 rounded-2xl bg-white/80 backdrop-blur shadow-sm">
                  <span className="text-2xl" aria-hidden>{item.emoji}</span>
                  <span className="mt-1 text-xs font-medium text-neutral-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
