
import React from 'react';
import { CONFIG } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black/60 border-t border-white/5 py-12 px-4 mt-20">
      <div className="container mx-auto max-w-[1200px] flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          {CONFIG.socials.map(icon => (
            <a 
              key={icon.name}
              href={icon.url} 
              title={icon.name}
              className="w-10 h-10 p-2.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300"
            >
              <img 
                src={icon.icon} 
                alt={icon.name} 
                className="w-full h-full filter invert"
              />
            </a>
          ))}
        </div>
        
        <p className="text-gray-500 font-semibold text-center mb-2">
          © 2025 {CONFIG.siteName} — {CONFIG.siteTagline}
        </p>
        <p className="text-gray-600 text-[10px] tracking-widest uppercase text-center">
          Verified Deals • Secure Rewards • Global Access
        </p>
      </div>
    </footer>
  );
};

export default Footer;
