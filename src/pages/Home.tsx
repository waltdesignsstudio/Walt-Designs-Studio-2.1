import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Globe, FileText, Layout, Image as ImageIcon, Star, Calendar, PartyPopper, X, CheckCircle2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [plannerInput, setPlannerInput] = useState('');
  const [plannerResult, setPlannerResult] = useState<string | null>(null);
  const [isPlanning, setIsPlanning] = useState(false);

  const handlePlan = async () => {
    if (!plannerInput.trim()) return;
    
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'undefined' || apiKey === 'MY_GEMINI_API_KEY') {
      setPlannerResult("### Configuration Error\n\n**GEMINI_API_KEY is missing or not set.**\n\nTo fix this:\n1. Open the **Secrets** panel in the AI Studio UI.\n2. Add a new secret with the key `GEMINI_API_KEY` and your actual Gemini API key as the value.\n3. Refresh the page and try again.");
      return;
    }

    setIsPlanning(true);
    setPlannerResult(null);
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Act as a professional design consultant for "Walt Designs & Studio". 
        Create a detailed project plan for the following request: "${plannerInput}".
        Include:
        1. Project Overview
        2. Suggested Design Style
        3. Key Deliverables
        4. Estimated Timeline
        5. Estimated Budget Range (in INR)
        Format the response in clean Markdown.`,
      });
      
      if (response.text) {
        setPlannerResult(response.text);
      } else {
        throw new Error("Empty response from AI");
      }
    } catch (error: any) {
      console.error("Planning error details:", error);
      setPlannerResult(`### Planning Error\n\nI encountered an error while planning your project: \n\n\`${error.message || "Unknown error"}\`\n\nPlease check your API key and network connection, then try again.`);
    } finally {
      setIsPlanning(false);
    }
  };

  const openEnquiryModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const features = [
    {
      title: "Optimized Web Design",
      desc: "Websites built with the latest technologies for speed and conversion.",
      icon: <Globe className="text-premium-gold" />,
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Professional Resume/CV",
      desc: "Stand out from the crowd with premium, ATS-friendly designs.",
      icon: <FileText className="text-premium-gold" />,
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Digital Branding",
      desc: "Thumbnails, posters, and social media assets that pop.",
      icon: <ImageIcon className="text-premium-gold" />,
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="overflow-hidden bg-navy-dark">
      {/* Hero Section */}
      <section className="relative flex flex-col pt-0">
        {/* Marquee in Hero */}
        <div className="bg-[#FFFF00] text-[#8B0000] py-1.5 overflow-hidden whitespace-nowrap relative z-[40] border-b-2 border-black/20 shadow-inner">
          <div className="flex animate-marquee-slow hover:[animation-play-state:paused] w-max will-change-transform">
            <div className="flex shrink-0 items-center min-w-full">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="mx-4 sm:mx-10 font-black uppercase tracking-tighter text-xs sm:text-base italic drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  ✨ Get AI optimized website for business just at Rs.3999+30% off ✨
                </span>
              ))}
            </div>
            <div className="flex shrink-0 items-center min-w-full">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="mx-4 sm:mx-10 font-black uppercase tracking-tighter text-xs sm:text-base italic drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                  ✨ Get AI optimized website for business just at Rs.3999+30% off ✨
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-dark/80 to-navy-dark"></div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          </div>

          {/* Navratri Wishing Section */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 py-2 text-center relative overflow-hidden border-b border-white/10 z-20"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 flex items-center justify-center gap-2">
              <PartyPopper className="text-yellow-400 animate-bounce" size={14} />
              <h2 className="text-white font-black uppercase tracking-[0.15em] text-[9px] sm:text-xs italic drop-shadow-lg">
                ✨ Happy Navratri to All Our Valued Clients! ✨
              </h2>
              <PartyPopper className="text-yellow-400 animate-bounce" size={14} />
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 pb-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                {/* Since 2026 Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                  </span>
                  <span className="text-white/80 text-[10px] sm:text-xs font-bold tracking-widest uppercase">Since 2026 in business</span>
                </div>

                {/* Offer Text */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 inline-block"
                >
                  <div className="bg-gradient-to-r from-premium-gold via-white to-premium-gold text-black px-6 py-2 rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-shimmer bg-[length:200%_auto]">
                    Get AI optimized website for business just at Rs.3999+30% off
                  </div>
                </motion.div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-6 text-white tracking-tighter">
                  Elevate Your <br />
                  <span className="text-premium-gold drop-shadow-[0_5px_15px_rgba(212,175,55,0.3)]">Digital Presence</span> <br />
                  With Precision.
                </h1>

                <p className="text-base sm:text-lg text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  Walt Designs & Studio specializes in optimized web solutions, premium branding, and professional documentation. We don't just design; we create impact.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a 
                    href="/services" 
                    className="group relative px-8 py-4 bg-premium-gold text-black font-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-premium-gold/20"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-lg uppercase tracking-widest">
                      Explore Services <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </a>
                  <a 
                    href="/contact" 
                    className="text-white font-bold uppercase tracking-widest hover:text-premium-gold transition-colors border-b-2 border-white/20 hover:border-premium-gold py-1 text-sm"
                  >
                    Contact Founder
                  </a>
                </div>
              </motion.div>

              {/* Desktop World Map Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block relative"
              >
                <div className="absolute -inset-4 bg-premium-gold/20 blur-3xl rounded-full animate-pulse"></div>
                <div className="relative glass-card p-4 border-premium-gold/30 rounded-[2.5rem] overflow-hidden group">
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-black/80 backdrop-blur-md text-premium-gold px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-premium-gold/30">
                      Spread through over World
                    </span>
                  </div>
                  <img 
                    src="https://i.ibb.co/7tpZ1RVB/pngtree-abstract-digital-world-map-featuring-global-network-connections-and-central-globe-image-1689.jpg" 
                    alt="Spread through over World" 
                    className="w-full h-auto rounded-[2rem] shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Grow by Digital Section */}
      <section className="py-12 bg-navy-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => openEnquiryModal("Digital Growth Strategy")}
            className="group relative glass-card p-6 md:p-8 border-premium-gold/30 rounded-[2rem] overflow-hidden cursor-pointer hover:border-premium-gold/60 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="text-premium-gold" size={24} />
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                    Grow by <span className="text-premium-gold">Digital</span>
                  </h2>
                </div>
                <p className="text-white/70 text-base mb-8 leading-relaxed font-medium">
                  Harness the power of data visualization and financial insights to scale your business. Our digital-first approach ensures your growth is measurable and sustainable.
                </p>
                <button className="bg-premium-gold text-black px-8 py-4 rounded-xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-premium-gold/20">
                  Enquire Now <ArrowRight size={20} />
                </button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-premium-gold/20 blur-3xl rounded-full animate-pulse"></div>
                <img 
                  src="https://i.ibb.co/qYbPG51Q/business-growth-concept-data-visualization-financial-chart-rising-against-digital-world-background-i.webp" 
                  alt="Grow by digital" 
                  className="relative z-10 w-full h-auto rounded-[1.5rem] shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="bg-navy-dark">
        {/* Quick Services Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Our Core Expertise</h2>
                <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Crafting digital excellence with modern precision</p>
              </div>
              <div className="h-px flex-grow bg-white/10 mb-4 hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  onClick={() => openEnquiryModal(f.title)}
                  className="group relative bg-navy-dark border border-white/5 p-8 rounded-[2rem] cursor-pointer hover:border-premium-gold/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Star size={80} className="text-premium-gold" />
                  </div>
                  
                  <div className="mb-8 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-premium-gold group-hover:text-black transition-all duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-black mb-3 text-white uppercase tracking-tight">{f.title}</h3>
                  <p className="text-white/60 mb-6 text-sm leading-relaxed font-medium">{f.desc}</p>
                  
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                    <img 
                      src={f.img} 
                      alt={f.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a0000] to-transparent opacity-60"></div>
                  </div>

                  <div className="flex items-center gap-2 text-premium-gold font-black text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                    Enquire Now <ArrowRight size={16} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Project Planner Section */}
        <section className="py-20 relative overflow-hidden bg-navy-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">AI Project <span className="text-premium-gold">Planner</span></h2>
              <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Get a detailed design roadmap in seconds</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-6 md:p-10 bg-black/40 border-premium-gold/20">
                <div className="mb-6">
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-3 font-bold">What are you looking to build?</label>
                  <div className="flex flex-col md:flex-row gap-3">
                    <input 
                      value={plannerInput}
                      onChange={(e) => setPlannerInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handlePlan()}
                      type="text" 
                      className="flex-grow bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-premium-gold outline-none transition-all text-sm" 
                      placeholder="e.g., A luxury real estate website..." 
                    />
                    <button 
                      onClick={handlePlan}
                      disabled={isPlanning}
                      className="btn-primary flex items-center justify-center gap-2 px-8 py-3 disabled:opacity-50 text-sm"
                    >
                      {isPlanning ? 'Planning...' : 'Generate Plan'} <Sparkles size={18} />
                    </button>
                  </div>
                </div>

                {plannerResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <div className="markdown-body text-sm">
                      <ReactMarkdown>{plannerResult}</ReactMarkdown>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile World Map Image */}
        <section className="py-12 lg:hidden px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass-card p-3 border-premium-gold/30 rounded-[1.5rem] overflow-hidden"
          >
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-black/80 backdrop-blur-md text-premium-gold px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] border border-premium-gold/30">
                Spread through over World
              </span>
            </div>
            <img 
              src="https://i.ibb.co/7tpZ1RVB/pngtree-abstract-digital-world-map-featuring-global-network-connections-and-central-globe-image-1689.jpg" 
              alt="Spread through over World" 
              className="w-full h-auto rounded-[1rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-premium-gold opacity-5 blur-[120px]"></div>
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter">Ready to Create Impact?</h2>
            <a href="/contact" className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white text-black font-black rounded-full hover:bg-premium-gold transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="text-xl uppercase tracking-widest">Start Project</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-dark-teal border border-premium-gold/30 rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={24} className="text-white" />
                </button>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="text-premium-gold" size={24} />
                  <h2 className="text-2xl font-bold text-white">Service Enquiry</h2>
                </div>
                <p className="text-gray-400 text-sm">Fill in the details below and we'll get back to you.</p>
              </div>

              <form action="https://formspree.io/f/mbdzbvko" method="POST" className="space-y-4">
                <input type="hidden" name="service" value={selectedService || ''} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">Business Name</label>
                    <input name="business_name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-premium-gold outline-none transition-all" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">Person Name</label>
                    <input name="person_name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-premium-gold outline-none transition-all" placeholder="Full Name" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">Service Needed</label>
                  <input name="service_display" value={selectedService || ''} readOnly className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-premium-gold font-bold outline-none" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">Phone Number</label>
                    <input name="phone" required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-premium-gold outline-none transition-all" placeholder="+91 ..." />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1 ml-1">Email Address</label>
                    <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-premium-gold outline-none transition-all" placeholder="email@example.com" />
                  </div>
                </div>

                <button type="submit" className="w-full py-4 bg-premium-gold text-black font-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4 shadow-xl shadow-premium-gold/20">
                  Submit Enquiry <ArrowRight size={18} />
                </button>
              </form>

              {/* Decorative Background */}
              <div className="absolute -bottom-10 -left-10 opacity-5 pointer-events-none">
                <Globe size={200} className="text-white" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 35s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
        @keyframes purple-magenta-pulse {
          0%, 100% { background-color: #2d004d; }
          50% { background-color: #4d004d; }
        }
        .animate-purple-magenta-pulse {
          animation: purple-magenta-pulse 8s ease-in-out infinite;
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.1); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        .animate-pulse-scale {
          animation: pulse-scale 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
