import { motion } from 'motion/react';
import { Award, Users, Zap, Shield } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "120+" },
    { label: "Years Experience", value: "5+" },
    { label: "AI Models Used", value: "10+" }
  ];

  const values = [
    {
      title: "Innovation First",
      desc: "We leverage the latest AI technologies to give our clients a competitive edge.",
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
    <div className="bg-dark-teal min-h-screen">
      {/* About Hero */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8">About <span className="text-premium-gold">Walt Designs</span></h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded by <span className="text-white font-bold">Priyanshu Kumar</span>, Walt Designs & Studio is a New Delhi-based creative powerhouse dedicated to redefining digital standards.
              </p>
              <p className="text-gray-400 leading-relaxed mb-10">
                We believe that great design is a blend of art and technology. In an era dominated by AI, we harness its power to create websites that aren't just beautiful, but are optimized for the future of the web.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-premium-gold">{s.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-premium-gold/10 blur-2xl rounded-full"></div>
              <img 
                src="https://picsum.photos/seed/office/800/800" 
                alt="Our Studio" 
                className="relative z-10 rounded-3xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
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
                className="glass-card p-8 text-center"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit mx-auto">
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
