
import React from 'react';
import { CONFIG } from '../data';

interface HeroProps {
  onClaim: () => void;
}

const Hero: React.FC<HeroProps> = ({ onClaim }) => {
  return (
    <section id="home" className="relative p-6 md:p-10 rounded-3xl overflow-hidden bg-gradient-to-br from-black/60 to-black/90 border border-white/5 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            {CONFIG.heroTitle} <br/><span style={{ color: CONFIG.theme.primary }}>{CONFIG.heroHighlight}</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            {CONFIG.heroSubtitle}
          </p>
          <button 
            onClick={onClaim}
            className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl text-xl font-extrabold shadow-2xl hover:scale-105 active:scale-95 transition-all"
            style={{ background: `linear-gradient(to right, ${CONFIG.theme.primary}, ${CONFIG.theme.secondary})` }}
          >
            {CONFIG.heroButtonText}
          </button>
        </div>
        <div className="relative group">
          <img 
            src={CONFIG.categories[0]?.offers[0]?.img || "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800"} 
            alt="hero" 
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/10 group-hover:scale-105 transition-transform duration-500"
          />
          <div 
            className="absolute -top-4 -right-4 text-white font-black px-4 py-2 rounded-xl shadow-lg rotate-12"
            style={{ backgroundColor: CONFIG.theme.primary }}
          >
            HOT DEAL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
