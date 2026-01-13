
import React from 'react';
import { Category, Offer } from '../types';
import OfferCard from './OfferCard';

interface OfferSectionProps {
  category: Category;
  onOfferClick: (offer: Offer) => void;
}

const OfferSection: React.FC<OfferSectionProps> = ({ category, onOfferClick }) => {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
          <span className="w-1 h-8 bg-[#ff3629] rounded-full inline-block"></span>
          {category.title}
        </h2>
        <span className="text-sm text-gray-500 font-bold">{category.offers.length} Offers</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.offers.map(offer => (
          <OfferCard 
            key={offer.id} 
            offer={offer} 
            onClick={() => onOfferClick(offer)} 
          />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
