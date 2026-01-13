
import React, { useRef, useEffect, useState } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onClear }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [lang, setLang] = useState<'en-US' | 'bn-BD'>('en-US');
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    // Cleanup recognition on unmount
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handleVoiceSearch = () => {
    // If already listening, stop it.
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Your browser does not support voice search. Please use Google Chrome or a modern browser.");
      return;
    }

    // Create a new instance
    const recognition = new SpeechRecognition();
    recognition.lang = lang; 
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onChange(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      if (event.error !== 'aborted') {
        console.error("Speech recognition error", event.error);
        if (event.error === 'not-allowed') {
          alert("Microphone permission denied. Please enable it in browser settings.");
        } else if (event.error === 'network') {
          alert("Network error. Please check your connection.");
        }
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    try {
      recognition.start();
    } catch (e) {
      console.warn("Failed to start recognition:", e);
      setIsListening(false);
    }
  };

  const toggleLang = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLang(prev => prev === 'en-US' ? 'bn-BD' : 'en-US');
  };

  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="w-full max-w-[920px] flex flex-wrap md:flex-nowrap gap-3 p-1.5 border border-white/20 rounded-2xl transition-all">
        <div className="relative flex-grow flex items-center">
          <input 
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={lang === 'en-US' ? "Search offers..." : "অফার খুঁজুন..."} 
            className="w-full bg-transparent border-none outline-none text-white pl-4 pr-24 py-3 placeholder:text-gray-500 text-base md:text-lg"
          />
          
          <div className="absolute right-2 flex items-center gap-1">
            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              type="button"
              className="text-[10px] font-bold bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors text-gray-300"
              title="Switch Language"
            >
              {lang === 'en-US' ? 'EN' : 'BN'}
            </button>

            {/* Mic Button */}
            <button 
              onClick={handleVoiceSearch}
              type="button"
              className={`p-2 rounded-full transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'hover:bg-white/10 text-gray-400'}`}
              title={isListening ? (lang === 'en-US' ? "Stop Listening" : "বন্ধ করুন") : (lang === 'en-US' ? "Voice Search" : "ভয়েস সার্চ")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex w-full md:w-auto gap-2">
          {value && (
            <button 
              onClick={onClear}
              type="button"
              className="flex-1 md:flex-none px-4 py-2 text-sm font-bold bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
            >
              {lang === 'en-US' ? 'Clear' : 'মুছুন'}
            </button>
          )}
          
          <button type="button" className="flex-1 md:flex-none bg-[#1a73e8] px-6 py-2 rounded-xl text-white font-extrabold hover:bg-[#1557b0] transition-colors shadow-lg">
            {lang === 'en-US' ? 'Search' : 'খুঁজুন'}
          </button>
        </div>
      </div>
      
      {isListening && (
        <div className="flex items-center gap-2 text-[#4ae603] text-sm font-bold bg-black/40 px-3 py-1 rounded-full border border-[#4ae603]/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ae603] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ae603]"></span>
          </span>
          {lang === 'en-US' ? 'Listening... Please speak' : 'শুনছি... দয়া করে কথা বলুন'}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
