import { motion } from 'motion/react';
import { ArrowRight, Globe, FileText, Layout, Image as ImageIcon } from 'lucide-react';

export default function Home() {
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
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Elevate Your <span className="text-premium-gold">Digital Presence</span> With Precision.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Walt Designs & Studio specializes in AI-optimized web solutions, premium branding, and professional documentation. We don't just design; we create impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/services.html" className="btn-primary flex items-center gap-2 group">
                Explore Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact.html" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all font-semibold">
                Contact Founder
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-24 bg-dark-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Expertise</h2>
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
                className="glass-card p-8 group"
              >
                <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit group-hover:bg-premium-gold/20 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{f.desc}</p>
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src={f.img} 
                    alt={f.title} 
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">"Design is the silent ambassador of your brand."</h2>
          <p className="text-premium-gold font-mono tracking-widest uppercase mb-10">Start your journey with us today</p>
          <a href="/enquiry.html" className="btn-primary">
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
