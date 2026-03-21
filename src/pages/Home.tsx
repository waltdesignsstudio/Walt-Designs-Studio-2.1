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
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `You are an expert project planner for "Walt Designs & Studio". 
        Create a detailed step-by-step digital project plan for: "${plannerInput}". 
        Be professional, structured, and helpful.`,
      });
      setAiPlan(response.text || "I couldn't generate a plan right now.");
    } catch (error) {
      console.error("AI Planner Error:", error);
      setAiPlan("Error generating plan. Please try again.");
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-teal via-dark-teal/80 to-dark-teal"></div>
          {/* Digital Background Pattern */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#d4af37 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            alt="Digital Tech Background"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6 bg-black/30 w-fit px-4 py-2 rounded-full border border-white/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <span className="text-white text-sm font-bold tracking-widest uppercase">Since 2026 in business</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Elevate Your <span className="text-premium-gold">Digital Presence</span> With Precision.
            </h1>

            <div className="mb-8 relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-premium-gold via-yellow-400 to-premium-gold rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg leading-none flex items-center gap-4">
                <span className="text-2xl">🌸</span>
                <span className="flex items-center space-x-5 divide-x divide-white/20">
                  <span className="flex items-center gap-2">
                    <Sparkles className="text-white animate-pulse" />
                    <span className="text-white font-black uppercase tracking-widest text-lg">
                      Navratri Festive offer <span className="inline-block animate-bounce-subtle text-yellow-300">30%</span> off
                    </span>
                  </span>
                  <span className="pl-6 text-white uppercase font-black text-sm animate-pulse-scale">Limited Time!</span>
                </span>
                <span className="text-2xl">🌼</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Walt Designs & Studio specializes in AI-optimized web solutions, premium branding, and professional documentation. We don't just design; we create impact.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="/services.html" className="btn-primary flex items-center gap-2 group">
                Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact.html" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all font-semibold">
                Contact Founder
              </a>
            </div>

            {/* Stats Section at Hero Ending */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-wrap gap-6 md:gap-12 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black text-premium-gold">50+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Projects</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-premium-gold">India</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Available Nationwide</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-premium-gold">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-premium-gold">4.3</span>
                  <Star size={16} className="text-premium-gold fill-premium-gold" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Star Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dark Purple to Dark Magenta Animated Background Wrapper */}
      <div className="animate-purple-magenta-pulse bg-[#2d004d]">
        {/* Quick Services Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Core Expertise</h2>
              <div className="h-1 w-20 bg-premium-gold mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  onClick={() => openEnquiryModal(f.title)}
                  className="glass-card p-8 group bg-black/40 border-white/10 relative overflow-hidden cursor-pointer hover:border-premium-gold/50 transition-all"
                >
                  {/* Balloon Decoration */}
                  <div className="absolute -top-4 -right-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                    <PartyPopper size={64} className="text-premium-gold rotate-12" />
                  </div>
                  
                  <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-premium-gold/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{f.desc}</p>
                  <div className="overflow-hidden rounded-lg mb-6">
                    <img 
                      src={f.img} 
                      alt={f.title} 
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-premium-gold font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Enquire Now <ArrowRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Project Planner Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-10 bg-black/60 border-premium-gold/30">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-premium-gold/20 rounded-2xl">
                  <Calendar className="text-premium-gold" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">AI Project Planner</h2>
                  <p className="text-gray-400 text-sm">Let our AI architect your next big idea</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <textarea 
                    value={plannerInput}
                    onChange={(e) => setPlannerInput(e.target.value)}
                    placeholder="Describe your project (e.g., 'A modern e-commerce site for a fashion brand')..."
                    className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-premium-gold transition-all min-h-[120px]"
                  />
                </div>
                <button 
                  onClick={handleAIPlan}
                  disabled={isPlanning}
                  className="w-full py-4 bg-premium-gold text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-50"
                >
                  {isPlanning ? <Sparkles className="animate-spin" /> : <Sparkles />}
                  {isPlanning ? 'Architecting Plan...' : 'Generate AI Project Plan'}
                </button>

                {aiPlan && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-4 text-premium-gold font-bold uppercase tracking-widest text-xs">
                      <Layout size={16} />
                      AI Generated Roadmap
                    </div>
                    <div className="text-gray-200 leading-relaxed whitespace-pre-wrap prose prose-invert max-w-none">
                      {aiPlan}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/80">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <p className="text-premium-gold font-mono tracking-widest uppercase mb-10">Start your journey with us today</p>
            <a href="/contact.html" className="btn-primary text-2xl px-12 py-6">
              Contact Us
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
