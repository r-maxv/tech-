
import React, { useState, useEffect } from 'react';
import { CONFIG } from '../data';
import { Offer } from '../types';

interface BannerProps {
  onOfferClick: (offer: Offer) => void;
}

const Banner: React.FC<BannerProps> = ({ onOfferClick }) => {
  // Collect ALL offers from all categories to cycle through them
  const allOffers = CONFIG.categories.flatMap(c => c.offers).filter(Boolean);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (allOffers.length === 0) return;
    const timer = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setIndex(prev => (prev + 1) % allOffers.length);
        setFade(true); // Fade in with new content
      }, 500); // Wait for fade out duration
    }, 8000); // Change every 8 seconds
    return () => clearInterval(timer);
  }, [allOffers.length]);

  const current = allOffers[index];

  if (!current) return null;

  return (
    <div 
      className={`relative w-full h-[320px] md:h-[450px] mt-6 rounded-3xl overflow-hidden bg-cover bg-center transition-all duration-700 ease-in-out shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] group border border-white/10 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{ backgroundImage: `url('${current.img}')` }}
    >
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>
      
      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
        <div className="transform transition-transform duration-700 group-hover:-translate-y-2">
          <span 
            className="text-white text-[10px] md:text-xs font-black uppercase px-3 py-1 rounded-full w-fit mb-5 inline-block tracking-tighter shadow-lg"
            style={{ backgroundColor: CONFIG.theme.primary }}
          >
            {CONFIG.featuredOfferLabel}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-2xl leading-tight">
            {current.title}
          </h2>
          <p className="text-gray-300 text-sm md:text-xl max-w-2xl mb-8 line-clamp-2 font-medium">
            {current.short}
          </p>
          <button 
            onClick={() => onOfferClick(current)}
            className="w-fit bg-white text-black px-10 py-4 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            {CONFIG.bannerButtonText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full">
        {/* Only show up to 15 dots for UI cleanliness if there are many offers */}
        {allOffers.slice(0, 15).map((_, idx) => (
          <button 
            key={idx}
            onClick={() => { setFade(false); setTimeout(() => { setIndex(idx); setFade(true); }, 300); }}
            className={`transition-all duration-500 rounded-full ${idx === index ? 'bg-white w-6 h-1.5' : 'bg-white/20 w-1.5 h-1.5 hover:bg-white/50'}`}
          />
        ))}
        {allOffers.length > 15 && <span className="text-[8px] text-white/50 self-center ml-1">+{allOffers.length - 15} more</span>}
      </div>
    </div>
  );
};

export default Banner;
