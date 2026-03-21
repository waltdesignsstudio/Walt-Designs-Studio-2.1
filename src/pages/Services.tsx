import { motion, AnimatePresence } from 'motion/react';
import { Globe, FileText, Layout, Image as ImageIcon, CheckCircle, Sparkles, ArrowRight, X, PartyPopper } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openEnquiryModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const services = [
    {
      title: "AI Optimized Web Design",
      desc: "We create cutting-edge websites that are AI-optimized for performance, SEO, and user experience. Every site is published with a custom domain to ensure your professional identity.",
      features: ["AI Performance Tuning", "Custom Domain Publishing", "Responsive Layouts", "SEO Optimization"],
      icon: <Globe className="text-premium-gold" size={32} />,
      img: "https://picsum.photos/seed/webdesign/800/600"
    },
    {
      title: "Professional Resume & CV",
      desc: "Your career deserves a premium presentation. We design high-impact Resumes and CVs that pass ATS systems and capture recruiter attention immediately.",
      features: ["ATS Friendly Design", "Modern Layouts", "Content Optimization", "PDF & Editable Formats"],
      icon: <FileText className="text-premium-gold" size={32} />,
      img: "https://picsum.photos/seed/cv/800/600"
    },
    {
      title: "License & Registration Forms",
      desc: "Streamline your administrative tasks with professionally designed license and registration forms. Clean, functional, and ready for print or digital use.",
      features: ["Functional Layouts", "Digital Fillable Forms", "Print-Ready Designs", "Branded Forms"],
      icon: <Layout className="text-premium-gold" size={32} />,
      img: "https://picsum.photos/seed/forms/800/600"
    },
    {
      title: "Thumbnails & Postures",
      desc: "Capture your audience's attention with stunning thumbnails and postures. Perfect for YouTube, social media, and marketing campaigns.",
      features: ["High CTR Thumbnails", "Marketing Postures", "Social Media Assets", "Custom Illustrations"],
      icon: <ImageIcon className="text-premium-gold" size={32} />,
      img: "https://picsum.photos/seed/graphics/800/600"
    }
  ];

  return (
    <div className="py-24 bg-dark-teal min-h-screen relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-premium-gold/5 blur-[120px] rounded-full -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-gold/5 blur-[120px] rounded-full -ml-48 -mb-48 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-premium-gold">Premium</span> Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive design solutions crafted with precision and powered by modern technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => openEnquiryModal(s.title)}
              className="glass-card overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:border-premium-gold/40 transition-all"
            >
              <div className="md:w-1/2 overflow-hidden relative">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-premium-gold text-black px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">Enquire Now</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    {s.icon}
                    <PartyPopper size={20} className="text-premium-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle size={14} className="text-premium-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="text-premium-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Get Started <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 md:p-16 bg-gradient-to-br from-black/60 to-premium-gold/5 border-premium-gold/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Sparkles size={120} className="text-premium-gold" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-premium-gold" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold">AI Optimized <span className="text-premium-gold">Web Design</span></h2>
              </div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our AI-optimized web design service goes beyond traditional development. We integrate advanced machine learning models to analyze user behavior, optimize conversion paths, and ensure lightning-fast performance.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-premium-gold/20 rounded-full">
                    <CheckCircle size={16} className="text-premium-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Predictive UX Design</h4>
                    <p className="text-gray-400 text-sm">Interfaces that adapt to user needs before they even click.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-premium-gold/20 rounded-full">
                    <CheckCircle size={16} className="text-premium-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Automated SEO Engine</h4>
                    <p className="text-gray-400 text-sm">Real-time content optimization for search engine dominance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-premium-gold/20 rounded-full">
                    <CheckCircle size={16} className="text-premium-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Dynamic Asset Compression</h4>
                    <p className="text-gray-400 text-sm">AI-driven media optimization for sub-second load times.</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => openEnquiryModal("AI Optimized Web Design")}
                className="btn-primary inline-flex items-center gap-3 px-8 py-4 text-lg"
              >
                Get a Free Consultation <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-premium-gold/10 blur-3xl rounded-full animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="AI Web Design" 
                className="relative z-10 rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
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
    </div>
  );
}
