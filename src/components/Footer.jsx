import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-lg font-semibold">DryFruit Delight</h3>
          <p className="mt-2 text-sm text-neutral-600 max-w-md">
            Freshness sealed at source. We deliver premium dry fruits with transparent sourcing and fair prices.
          </p>
        </div>
        <div className="sm:text-right">
          <p className="text-sm text-neutral-700">Questions or bulk inquiries?</p>
          <a href="mailto:hello@dryfruitdelight.store" className="text-amber-700 font-medium hover:underline">hello@dryfruitdelight.store</a>
          <div className="mt-4 text-xs text-neutral-500">© {new Date().getFullYear()} DryFruit Delight. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
