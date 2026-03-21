import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Globe, FileText, Layout, Image as ImageIcon, Sparkles, Calendar, PartyPopper, X, Star, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export default function Home() {
  const [plannerInput, setPlannerInput] = useState('');
  const [aiPlan, setAiPlan] = useState('');
  const [isPlanning, setIsPlanning] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiryModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleAIPlan = async () => {
    if (!plannerInput.trim()) return;
    setIsPlanning(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Gemini API Key is missing. Please ensure it's set in your environment variables.");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an expert project planner for "Walt Designs & Studio". 
        Create a detailed step-by-step digital project plan for: "${plannerInput}". 
        Be professional, structured, and helpful.`,
      });
      
      if (!response.text) {
        throw new Error("No response received from AI.");
      }
      
      setAiPlan(response.text);
    } catch (error: any) {
      console.error("AI Planner Error:", error);
      setAiPlan(`Error generating plan: ${error.message || "Please try again."}`);
    }
    setIsPlanning(false);
  };

  const features = [
    {
      title: "AI Optimized Web Design",
      desc: "Websites built with the latest AI tech for speed and conversion.",
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
    <div className="overflow-hidden bg-[#2a0000]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col pt-0">
        {/* Marquee in Hero */}
        <div className="bg-[#FFFF00] text-[#8B0000] py-3 overflow-hidden whitespace-nowrap relative z-[40] border-b-2 border-black/20 shadow-inner">
          <div className="flex animate-marquee-normal">
            <div className="flex shrink-0 items-center">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8 font-black uppercase tracking-tighter text-lg italic drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  ✨ Web Designing at Rs.3999/- only ✨
                </span>
              ))}
            </div>
            <div className="flex shrink-0 items-center">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-8 font-black uppercase tracking-tighter text-lg italic drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  ✨ Web Designing at Rs.3999/- only ✨
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a0000] via-[#2a0000]/80 to-[#2a0000]"></div>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          </div>

          {/* Navratri Wishing Section */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 py-4 text-center relative overflow-hidden border-b border-white/10 z-20"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 flex items-center justify-center gap-4">
              <PartyPopper className="text-yellow-400 animate-bounce" size={20} />
              <h2 className="text-white font-black uppercase tracking-[0.2em] text-xs sm:text-sm italic drop-shadow-lg">
                ✨ Happy Navratri to All Our Valued Clients! ✨
              </h2>
              <PartyPopper className="text-yellow-400 animate-bounce" size={20} />
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-20 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              {/* Since 2026 Badge */}
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <span className="text-white/80 text-xs sm:text-sm font-bold tracking-widest uppercase">Since 2026 in business</span>
              </div>

              {/* Offer Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-8 inline-block"
              >
                <div className="bg-gradient-to-r from-premium-gold to-yellow-500 text-black px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm shadow-xl animate-pulse">
                  Get a website just at Rs.3999/- + 30% off
                </div>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-8 text-white tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000">
                Elevate Your <br />
                <span className="text-premium-gold drop-shadow-[0_5px_15px_rgba(212,175,55,0.3)]">Digital Presence</span> <br />
                With Precision.
              </h1>

              <p className="text-lg sm:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto md:mx-0 font-medium">
                Walt Designs & Studio specializes in AI-optimized web solutions, premium branding, and professional documentation. We don't just design; we create impact.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                <a 
                  href="/services" 
                  className="group relative px-10 py-5 bg-premium-gold text-black font-black rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-premium-gold/20"
                >
                  <span className="relative z-10 flex items-center gap-3 text-xl uppercase tracking-widest">
                    Explore Services <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </a>
                <a 
                  href="/contact" 
                  className="text-white font-bold uppercase tracking-widest hover:text-premium-gold transition-colors border-b-2 border-white/20 hover:border-premium-gold py-2"
                >
                  Contact Founder
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="bg-[#1a0000]">
        {/* Quick Services Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Our Core Expertise</h2>
                <p className="text-white/40 text-lg uppercase tracking-widest font-bold">Crafting digital excellence with AI precision</p>
              </div>
              <div className="h-px flex-grow bg-white/10 mb-4 hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  onClick={() => openEnquiryModal(f.title)}
                  className="group relative bg-[#2a0000] border border-white/5 p-10 rounded-[2.5rem] cursor-pointer hover:border-premium-gold/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Sparkles size={120} className="text-premium-gold" />
                  </div>
                  
                  <div className="mb-10 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-premium-gold group-hover:text-black transition-all duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">{f.title}</h3>
                  <p className="text-white/60 mb-8 text-base leading-relaxed font-medium">{f.desc}</p>
                  
                  <div className="relative overflow-hidden rounded-3xl mb-8 aspect-video">
                    <img 
                      src={f.img} 
                      alt={f.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a0000] to-transparent opacity-60"></div>
                  </div>

                  <div className="flex items-center gap-3 text-premium-gold font-black text-sm uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                    Enquire Now <ArrowRight size={18} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Project Planner Section */}
        <section className="py-32 border-t border-white/5 bg-[#0d0000]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#1a0000] p-12 rounded-[3rem] border border-white/5 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div className="p-5 bg-premium-gold rounded-[2rem] text-black shadow-xl shadow-premium-gold/20">
                  <Calendar size={40} />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-2">AI Project Planner</h2>
                  <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Architect your vision with intelligence</p>
                </div>
              </div>

              <div className="space-y-8">
                <textarea 
                  value={plannerInput}
                  onChange={(e) => setPlannerInput(e.target.value)}
                  placeholder="Describe your project vision..."
                  className="w-full bg-white/5 border-2 border-white/10 rounded-3xl px-8 py-6 text-white focus:outline-none focus:border-premium-gold transition-all min-h-[160px] text-lg font-medium"
                />
                <button 
                  onClick={handleAIPlan}
                  disabled={isPlanning}
                  className="w-full py-6 bg-premium-gold text-black font-black rounded-3xl flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 text-xl uppercase tracking-widest shadow-xl shadow-premium-gold/20"
                >
                  {isPlanning ? <Sparkles className="animate-spin" /> : <Sparkles />}
                  {isPlanning ? 'Architecting...' : 'Generate Roadmap'}
                </button>

                {aiPlan && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-12 p-10 bg-white/5 rounded-[2rem] border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-6 text-premium-gold font-black uppercase tracking-widest text-sm">
                      <Layout size={20} />
                      AI Generated Strategy
                    </div>
                    <div className="text-white/80 leading-relaxed whitespace-pre-wrap prose prose-invert max-w-none font-medium">
                      {aiPlan}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-premium-gold opacity-5 blur-[120px]"></div>
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 uppercase tracking-tighter">Ready to Create Impact?</h2>
            <a href="/contact" className="group relative inline-flex items-center gap-4 px-16 py-8 bg-white text-black font-black rounded-full hover:bg-premium-gold transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <span className="text-2xl uppercase tracking-widest">Start Project</span>
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
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
                  <Sparkles className="text-premium-gold" size={24} />
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
        @keyframes marquee-normal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-normal {
          animation: marquee-normal 20s linear infinite;
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
