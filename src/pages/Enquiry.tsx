import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-24 bg-dark-teal min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-md mx-4"
        >
          <div className="w-20 h-20 bg-premium-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-premium-gold" size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Enquiry Sent!</h2>
          <p className="text-gray-400 mb-8">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
          <button onClick={() => setSubmitted(false)} className="btn-primary">Send Another</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-dark-teal min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Project <span className="text-premium-gold">Enquiry</span></h1>
          <p className="text-gray-400 text-lg">
            Tell us about your requirements and we'll provide a custom quote tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3">Your Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-premium-gold transition-colors" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3">Phone Number</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-premium-gold transition-colors" placeholder="Enter your number" />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3">Email Address</label>
              <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-premium-gold transition-colors" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-3">Your Requirements</label>
              <textarea required rows={6} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-premium-gold transition-colors" placeholder="Describe what you need (Web Design, CV, Graphics, etc.)"></textarea>
            </div>

            <button type="submit" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
              Submit Enquiry <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
