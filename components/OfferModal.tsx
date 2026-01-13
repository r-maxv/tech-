
import React from 'react';
import { Offer } from '../types';
import { CONFIG } from '../data';

interface OfferModalProps {
  offer: Offer | null;
  onClose: () => void;
}

const OfferModal: React.FC<OfferModalProps> = ({ offer, onClose }) => {
  if (!offer) return null;

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `আসসালামু আলাইকুম।\nআমি আপনাকে এই অফারটির জন্য মেসেজ দিয়েছি: *${offer.title}*\n\nইমেজ লিঙ্ক: ${offer.img}\nবিস্তারিত জানতে চাই।`
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONFIG.whatsappNumber}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative bg-[#0c0c0c] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-5 animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
        >
          <span className="text-3xl font-light text-white leading-none">×</span>
        </button>

        <div className="md:col-span-2 h-72 md:h-full">
          <img 
            src={offer.img} 
            alt={offer.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:col-span-3 p-8 md:p-12 flex flex-col">
          <h3 className="text-3xl md:text-4xl font-black mb-4 text-white leading-tight">{offer.title}</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {offer.desc || offer.short}
          </p>
          
          <div className="bg-white/5 rounded-[2rem] p-8 mb-10 border border-white/5">
            <h4 className="font-black text-xl text-white mb-5 flex items-center gap-3">
              <span className="w-2 h-6 rounded-full" style={{ backgroundColor: CONFIG.theme.primary }}></span>
              Offer Requirements:
            </h4>
            <ul className="space-y-4">
              {(offer.bullets || ['Sign up','Complete offers','Verify email']).map((bullet, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-200 text-lg">
                  <span 
                    className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full text-black text-xs font-bold"
                    style={{ backgroundColor: CONFIG.theme.accent }}
                  >✓</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <button 
              onClick={handleWhatsAppOrder}
              className="flex items-center justify-center gap-4 bg-white text-black py-5 rounded-[1.25rem] font-black text-xl shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order Now
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href={offer.url || '#'}
                target="_blank"
                className="text-white py-5 rounded-[1.25rem] text-center font-black text-xl shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center"
                style={{ background: `linear-gradient(to right, ${CONFIG.theme.primary}, ${CONFIG.theme.secondary})` }}
              >
                Review Visit
              </a>
              <a 
                href={offer.url2 || '#'}
                target="_blank"
                className="text-white py-5 rounded-[1.25rem] text-center font-black text-xl shadow-2xl hover:scale-[1.02] transition-all border border-white/10 bg-white/5 hover:bg-white/10"
              >
                Visit All Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferModal;
