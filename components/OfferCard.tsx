
import React from 'react';
import { Offer } from '../types';
import { CONFIG } from '../data';

interface OfferCardProps {
  offer: Offer;
  onClick: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer, onClick }) => {
  return (
    <article 
      className="group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:translate-y-[-8px] hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={offer.img} 
          alt={offer.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow items-center text-center">
        <h3 className="text-lg font-extrabold mb-2 line-clamp-1">{offer.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-6">{offer.short}</p>
        
        <div className="mt-auto w-full">
          <button 
            className="w-full text-white px-6 py-2.5 rounded-xl font-extrabold text-sm shadow-xl hover:scale-105 transition-transform animate-bouncy"
            style={{ background: `linear-gradient(to right, ${CONFIG.theme.primary}, ${CONFIG.theme.secondary})` }}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default OfferCard;
