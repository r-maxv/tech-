
import React from 'react';
import { CONFIG } from '../data';

interface HeaderProps {
  onScrollTo: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollTo, isOpen, setIsOpen }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="container mx-auto max-w-[1200px] flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={CONFIG.logoUrl} alt="logo" className="w-10 h-10 rounded-lg shadow-lg" />
          <div>
            <h1 className="text-lg font-extrabold leading-tight">{CONFIG.siteName}</h1>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">{CONFIG.siteTagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-1">
            {CONFIG.categories.map(item => (
              <button
                key={item.id}
                onClick={() => onScrollTo(item.id)}
                className="px-3 py-2 text-sm font-semibold rounded-lg hover:bg-white/5 transition-colors"
              >
                {item.navTitle || item.title}
              </button>
            ))}
            <a 
              href={CONFIG.featuredRewardUrl} 
              className="ml-4 text-white px-4 py-2 rounded-xl text-sm font-extrabold shadow-xl hover:scale-105 transition-all text-center whitespace-nowrap"
              style={{ background: `linear-gradient(to right, ${CONFIG.theme.primary}, ${CONFIG.theme.secondary})` }}
            >
              {CONFIG.featuredRewardText}
            </a>
          </nav>

          <button 
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black/95 border-b border-white/10 py-4 px-4 space-y-2">
          {CONFIG.categories.map(item => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="block w-full text-left px-4 py-3 text-lg font-bold hover:bg-white/10 rounded-xl"
            >
              {item.navTitle || item.title}
            </button>
          ))}
          <a 
            href={CONFIG.featuredRewardUrl} 
            className="block w-full text-center text-white px-4 py-3 rounded-xl text-lg font-extrabold mt-4"
            style={{ background: `linear-gradient(to right, ${CONFIG.theme.primary}, ${CONFIG.theme.secondary})` }}
          >
            {CONFIG.featuredRewardText}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
