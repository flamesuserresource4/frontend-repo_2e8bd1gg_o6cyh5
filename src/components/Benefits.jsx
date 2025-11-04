import React from 'react';

const benefits = [
  {
    title: 'Heart Healthy',
    desc: 'Rich in good fats, minerals, and antioxidants to keep your heart happy.',
  },
  {
    title: 'Energy Dense',
    desc: 'A handful powers you through busy days with clean, long-lasting energy.',
  },
  {
    title: 'Clean & Fresh',
    desc: 'We prioritize quality sourcing, minimal processing, and airtight packing.',
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Why Choose Dry Fruits?</h2>
        <p className="mt-2 text-neutral-600 max-w-2xl">Small snacks with big benefits. Add them to breakfast bowls, desserts, or enjoy them straight from the pack.</p>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-neutral-900">{b.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
