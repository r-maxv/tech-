
import React, { useState, useEffect } from 'react';

const AdBanner: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const adUrl = "https://www.revenuecpmgate.com/u1f8ucthj?key=f51c1490c3f53770db7b45b7e8395f2f";

  useEffect(() => {
    const timer = setTimeout(() => {
      // Basic check for iframe loading issues
      const iframe = document.getElementById('ad-frame') as HTMLIFrameElement;
      if (iframe && !iframe.contentWindow) {
        setHasError(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-16 w-full max-w-[1200px] mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl relative h-[320px] md:h-[400px]">
      <iframe 
        id="ad-frame"
        src={adUrl}
        title="Promoted Offer"
        className="w-full h-full border-0"
        loading="lazy"
        onError={() => setHasError(true)}
      />
      
      <a 
        href={adUrl} 
        target="_blank" 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-black/60 border-2 border-white/20 flex items-center justify-center text-white font-black text-2xl hover:scale-110 active:scale-95 transition-all shadow-2xl z-10"
      >
        GO
      </a>

      {hasError && (
        <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-8 text-center z-20">
          <p className="text-xl font-bold mb-4">Ad content failed to load directly</p>
          <a 
            href={adUrl} 
            target="_blank" 
            className="bg-[#044d57] text-white px-8 py-3 rounded-xl font-bold shadow-lg"
          >
            Open Promoted Offer
          </a>
        </div>
      )}
    </div>
  );
};

export default AdBanner;
