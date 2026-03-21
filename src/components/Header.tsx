import { Menu, X, Search, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef, FormEvent } from 'react';
import { GoogleGenAI } from "@google/genai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services.html' },
    { name: 'Contact Us', path: '/contact.html' },
    { name: 'About Us', path: '/about.html' },
  ];

  const siteContent = [
    { title: 'Home', path: '/', description: 'Welcome to Walt Designs & Studio. We create premium digital experiences.' },
    { title: 'Services', path: '/services.html', description: 'AI Optimized Web Design, Resume/CV, License Forms, Thumbnails & Postures.' },
    { title: 'Contact Us', path: '/contact.html', description: 'Get in touch with founder Priyanshu Kumar. Enquiry form and contact details.' },
    { title: 'About Us', path: '/about.html', description: 'Learn about Walt Designs & Studio and our mission to elevate digital presence.' },
    { title: 'Web Design', path: '/services.html', description: 'AI optimized web designing and publishing with custom domains.' },
    { title: 'Resume/CV', path: '/services.html', description: 'Professional ATS-friendly resume and CV design services.' },
  ];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // AI Suggestion as you type
  useEffect(() => {
    if (!isSearchOpen || !searchQuery.trim()) {
      setAiResponse('');
      return;
    }

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      setIsSearching(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `You are an assistant for "Walt Designs & Studio". 
          The company provides: AI Optimized Web Design (Rs. 1299/- with domain), Resume/CV creation, License & Register forms, Thumbnails & Postures.
          Founder: Priyanshu Kumar. Location: New Delhi, India.
          Provide a very brief (1-2 sentences) suggestion or answer for the user's current search query: "${searchQuery}"`,
        });
        setAiResponse(response.text || "");
      } catch (error) {
        console.error("AI Suggestion Error:", error);
      } finally {
        setIsSearching(false);
      }
    }, 600); // 600ms debounce

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery, isSearchOpen]);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an assistant for "Walt Designs & Studio". 
        The company provides: AI Optimized Web Design (Rs. 1299/- with domain), Resume/CV creation, License & Register forms, Thumbnails & Postures.
        Founder: Priyanshu Kumar. Location: New Delhi, India.
        User question: ${searchQuery}`,
      });
      setAiResponse(response.text || "I couldn't find an answer to that.");
    } catch (error) {
      console.error("AI Search Error:", error);
      setAiResponse("Sorry, I encountered an error while searching with AI.");
    }
    setIsSearching(false);
  };

  const normalResults = searchQuery.trim() 
    ? siteContent.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header className="bg-[#1a0033] sticky top-0 z-50 shadow-2xl animate-header-pulse border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-premium-gold rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <img 
                  src="https://i.ibb.co/WNZCQtTR/IMG-20260312-041840.jpg" 
                  alt="Walt Designs & Studio Logo" 
                  className="relative h-12 w-12 rounded-full object-cover border-2 border-premium-gold shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white uppercase">
                Walt Designs <span className="text-premium-gold">&</span> Studio
              </span>
            </a>

            {/* Desktop Menu & Search */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  onClick={() => setIsSearchOpen(true)}
                  readOnly
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white focus:outline-none focus:border-premium-gold transition-all cursor-pointer w-48 group-hover:w-64"
                />
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-premium-gold transition-colors" />
              </div>
              <nav className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.path} 
                    className="text-white hover:text-premium-gold font-bold transition-colors text-sm uppercase tracking-widest"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-white p-2 hover:text-premium-gold transition-colors"
              >
                <Search size={24} />
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:text-premium-gold transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#1a0033] border-t border-white/10 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-white hover:bg-white/5 rounded-md text-base font-medium uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-dark-teal/95 backdrop-blur-xl p-4 md:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Search Studio</h2>
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                  setAiResponse('');
                }}
                className="text-white/60 hover:text-white p-2"
              >
                <X size={32} />
              </button>
            </div>

            <form onSubmit={handleSearch} className="relative mb-8">
              <input 
                ref={searchInputRef}
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, pages, or ask AI anything..."
                className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-5 text-xl text-white focus:outline-none focus:border-premium-gold transition-all pr-16"
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-premium-gold text-black rounded-xl hover:scale-105 transition-transform"
              >
                <ArrowRight size={24} />
              </button>
            </form>

            <div className="space-y-6">
              {isSearching && (
                <div className="flex items-center gap-3 py-4 text-premium-gold animate-pulse">
                  <Sparkles size={18} className="animate-spin" />
                  <span className="text-sm font-bold uppercase tracking-widest">AI is thinking...</span>
                </div>
              )}

              {aiResponse && (
                <div className="glass-card p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 border-premium-gold/30">
                  <div className="flex items-center gap-3 mb-4 text-premium-gold">
                    <Sparkles size={20} />
                    <span className="font-bold uppercase tracking-widest text-sm">AI Response</span>
                  </div>
                  <div className="text-gray-200 leading-relaxed whitespace-pre-wrap text-lg">
                    {aiResponse}
                  </div>
                </div>
              )}

              {searchQuery && (
                <div className="space-y-4">
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-4">Quick Links ({normalResults.length})</p>
                  {normalResults.length > 0 ? normalResults.map((result, i) => (
                    <a 
                      key={i}
                      href={result.path}
                      className="block glass-card p-6 hover:border-premium-gold/50 transition-all group"
                    >
                      <h3 className="text-xl font-bold mb-2 group-hover:text-premium-gold transition-colors">{result.title}</h3>
                      <p className="text-gray-400 text-sm">{result.description}</p>
                    </a>
                  )) : !isSearching && !aiResponse && (
                    <div className="text-center py-12 text-white/40 italic">
                      No matching pages found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee-normal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes header-pulse {
          0%, 100% { background-color: #1a0033; }
          50% { background-color: #0d001a; }
        }
        .animate-marquee-normal {
          animation: marquee-normal 20s linear infinite;
        }
        .animate-header-pulse {
          animation: header-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
