
import React, { useState, useMemo, useCallback } from 'react';
import { CONFIG } from './data';
import { Offer } from './types';
import Header from './components/Header';
import Banner from './components/Banner';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import OfferSection from './components/OfferSection';
import OfferModal from './components/OfferModal';
import AdBanner from './components/AdBanner';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredCategories = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return CONFIG.categories;

    return CONFIG.categories.map(cat => ({
      ...cat,
      offers: cat.offers.filter(offer => 
        offer.title.toLowerCase().includes(q) || 
        offer.short.toLowerCase().includes(q) ||
        offer.desc.toLowerCase().includes(q)
      )
    })).filter(cat => cat.offers.length > 0);
  }, [searchQuery]);

  const handleOpenOffer = useCallback((offer: Offer) => {
    setSelectedOffer(offer);
  }, []);

  const handleCloseOffer = useCallback(() => {
    setSelectedOffer(null);
  }, []);

  const scrollToCategory = useCallback((catId: string) => {
    const el = document.getElementById(catId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center transition-all duration-700" 
        style={{ backgroundImage: `url(${CONFIG.bgImageUrl})` }}
      >
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: CONFIG.theme.backgroundOverlay, backdropFilter: 'brightness(0.6) contrast(0.9)' }}
        ></div>
      </div>

      {/* Top Notice */}
      <div 
        className="text-white text-center text-sm py-2 px-3 font-bold z-50 transition-colors"
        style={{ backgroundColor: `${CONFIG.theme.accent}cc` }}
      >
        {CONFIG.noticeText}
      </div>

      <Header 
        onScrollTo={scrollToCategory} 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen}
      />

      <main className="flex-grow container mx-auto px-4 lg:px-6 max-w-[1200px]">
        <Banner onOfferClick={handleOpenOffer} />

        <div className="sticky top-[73px] z-30 py-6 -mx-4 px-4 lg:-mx-6 lg:px-6">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
            onClear={() => setSearchQuery('')} 
          />
        </div>

        <div className="mt-8">
          <Hero onClaim={() => scrollToCategory(CONFIG.categories[0]?.id)} />
        </div>

        <div className="space-y-12 my-12">
          {filteredCategories.length > 0 ? (
            filteredCategories.map(cat => (
              <OfferSection 
                key={cat.id} 
                category={cat} 
                onOfferClick={handleOpenOffer} 
              />
            ))
          ) : (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-xl text-gray-400">No offers found matching your search.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-4 font-bold hover:underline"
                style={{ color: CONFIG.theme.primary }}
              >
                Show All Offers
              </button>
            </div>
          )}
        </div>

        <AdBanner />
      </main>

      <Footer />

      <OfferModal 
        offer={selectedOffer} 
        onClose={handleCloseOffer} 
      />
    </div>
  );
};

export default App;
