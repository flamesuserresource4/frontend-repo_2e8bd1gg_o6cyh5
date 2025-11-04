import React from 'react';

const products = [
  {
    id: 'almonds',
    name: 'Almonds',
    description: 'Crunchy and nutrient-rich California almonds.',
    price: 14.99,
    color: 'from-amber-200 to-amber-50',
    emoji: '🌰',
  },
  {
    id: 'cashew',
    name: 'Cashew',
    description: 'Buttery cashews packed with good fats.',
    price: 16.49,
    color: 'from-yellow-200 to-orange-50',
    emoji: '🥜',
  },
  {
    id: 'raisins',
    name: 'Raisins',
    description: 'Naturally sweet sun-dried raisins.',
    price: 9.99,
    color: 'from-purple-200 to-rose-50',
    emoji: '🍇',
  },
  {
    id: 'fig',
    name: 'Fig',
    description: 'Soft, fiber-rich dried figs.',
    price: 13.49,
    color: 'from-rose-200 to-amber-50',
    emoji: '🫐',
  },
  {
    id: 'walnut',
    name: 'Walnut',
    description: 'Omega-3 rich crunchy walnuts.',
    price: 15.99,
    color: 'from-amber-300 to-yellow-100',
    emoji: '🌰',
  },
  {
    id: 'dates',
    name: 'Dates',
    description: 'Caramel-sweet premium dates.',
    price: 11.49,
    color: 'from-orange-200 to-amber-100',
    emoji: '🍯',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`h-36 bg-gradient-to-tr ${product.color} relative`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl" aria-hidden>{product.emoji}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-900">{product.name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-amber-700 font-semibold">${product.price.toFixed(2)} / 500g</span>
          <button className="rounded-md bg-amber-600 text-white px-3 py-2 text-sm font-medium hover:bg-amber-700">Add</button>
        </div>
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Bestsellers</h2>
            <p className="mt-2 text-neutral-600">Premium, fresh, and full of goodness.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">Bulk Orders</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
