import { motion } from 'motion/react';
import { Award, Users, Zap, Shield, Sparkles, Globe, Cpu, Star } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "150+", icon: <Globe size={20} /> },
    { label: "Happy Clients", value: "50+", icon: <Users size={20} /> },
    { label: "Modern Technologies", value: "10+", icon: <Cpu size={20} /> }
  ];

  const values = [
    {
      title: "Innovation First",
      desc: "We leverage the latest technologies to give our clients a competitive edge.",
      icon: <Zap className="text-premium-gold" />
    },
    {
      title: "Premium Quality",
      desc: "Every pixel and every line of code is crafted with meticulous attention to detail.",
      icon: <Award className="text-premium-gold" />
    },
    {
      title: "Client Centric",
      desc: "Your vision is our mission. We work closely with you to bring your ideas to life.",
      icon: <Users className="text-premium-gold" />
    },
    {
      title: "Secure & Reliable",
      desc: "We ensure your digital assets are built on robust, secure foundations.",
      icon: <Shield className="text-premium-gold" />
    }
  ];

  return (
    <div className="bg-navy-dark min-h-screen relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 opacity-10 text-white"
      >
        <Sparkles size={100} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-20 right-10 opacity-10 text-white"
      >
        <Star size={120} />
      </motion.div>

      {/* About Hero */}
      <section className="py-24 border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8">About <span className="text-premium-gold">Walt Designs</span></h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded by <span className="text-white font-bold">Priyanshu Kumar</span>, Walt Designs & Studio is a New Delhi-based creative powerhouse dedicated to redefining digital standards.
              </p>
              <p className="text-gray-400 leading-relaxed mb-16">
                We believe that great design is a blend of art and technology. We harness the latest tools to create websites that aren't just beautiful, but are optimized for the future of the web.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((s, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 group hover:border-premium-gold/50 transition-all relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                      {s.icon}
                    </div>
                    <p className="text-5xl font-bold text-premium-gold mb-2">{s.value}</p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-premium-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center group hover:bg-white/5 transition-all"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit mx-auto group-hover:bg-premium-gold/20 transition-colors">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
