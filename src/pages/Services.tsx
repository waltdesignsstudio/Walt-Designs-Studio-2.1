import { motion } from 'motion/react';
import { Globe, FileText, Layout, Image as ImageIcon, CheckCircle } from 'lucide-react';

export default function Services() {
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
    <div className="py-24 bg-dark-teal min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="mb-4">{s.icon}</div>
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
                <button className="text-premium-gold font-semibold text-sm hover:underline flex items-center gap-2">
                  Learn More <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
