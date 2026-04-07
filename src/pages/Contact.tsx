import { motion } from 'motion/react';
import { Phone, Mail, MapPin, User, Building, Send, Star, Globe } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    {
      label: "Founder",
      value: "Priyanshu Kumar",
      icon: <User className="text-premium-gold" />
    },
    {
      label: "Company",
      value: "Walt Designs & Studio",
      icon: <Building className="text-premium-gold" />
    },
    {
      label: "Phone",
      value: "+91 7303942175",
      icon: <Phone className="text-premium-gold" />
    },
    {
      label: "Email",
      value: "waltdesignsstudio@gmail.com",
      icon: <Mail className="text-premium-gold" />
    },
    {
      label: "Head Office",
      value: "New Delhi, India",
      icon: <MapPin className="text-premium-gold" />
    }
  ];

  return (
    <div className="py-24 bg-bright-yellow min-h-screen relative overflow-hidden text-black">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920" 
          alt="World Map" 
          className="w-full h-full object-cover mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-black/5 blur-[120px] rounded-full -ml-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 blur-[120px] rounded-full -mr-48 -mb-48 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Details Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-4 p-2 bg-black/10 rounded-full"
          >
            <Star className="text-black" size={24} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-black"
          >
            Contact <span className="text-dark-red">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black/80 text-lg max-w-2xl mx-auto font-medium"
          >
            Connect with us directly or visit our office. We are here to help you elevate your digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {contactDetails.map((detail, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 p-6 bg-white/40 backdrop-blur-md border border-black/10 rounded-2xl group hover:border-black/30 transition-all shadow-sm"
            >
              <div className="p-4 bg-black/5 rounded-xl group-hover:bg-black/10 transition-colors">
                <div className="text-black">
                  {detail.icon}
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-black/60 uppercase tracking-widest mb-1 font-bold">{detail.label}</p>
                <p className="text-lg font-bold text-black break-all">{detail.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enquiry Form Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/60 backdrop-blur-lg border border-black/10 p-8 md:p-12 relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Globe size={200} className="text-black" />
            </div>

            {submitted ? (
              <div className="text-center py-12 relative z-10">
                <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-black" size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-black">Enquiry Sent!</h2>
                <p className="text-black/60 mb-8 font-medium">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-900 transition-all">Send Another</button>
              </div>
            ) : (
              <div className="relative z-10">
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-black">Project <span className="text-dark-red">Enquiry</span></h2>
                  <p className="text-black/60 font-medium">Tell us about your requirements and we'll provide a custom quote tailored to your needs.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs uppercase tracking-widest text-black/60 mb-3 font-bold group-focus-within:text-black transition-colors">Your Name</label>
                      <input required type="text" className="w-full bg-black/5 border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-all text-black placeholder:text-black/30" placeholder="Enter your full name" />
                    </div>
                    <div className="group">
                      <label className="block text-xs uppercase tracking-widest text-black/60 mb-3 font-bold group-focus-within:text-black transition-colors">Phone Number</label>
                      <input required type="tel" className="w-full bg-black/5 border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-all text-black placeholder:text-black/30" placeholder="Enter your number" />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-black/60 mb-3 font-bold group-focus-within:text-black transition-colors">Email Address</label>
                    <input required type="email" className="w-full bg-black/5 border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-all text-black placeholder:text-black/30" placeholder="Enter your email" />
                  </div>

                  <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-black/60 mb-3 font-bold group-focus-within:text-black transition-colors">Your Requirements</label>
                    <textarea required rows={6} className="w-full bg-black/5 border border-black/10 rounded-xl px-5 py-4 focus:outline-none focus:border-black transition-all text-black resize-none placeholder:text-black/30" placeholder="Describe what you need (Web Design, CV, Graphics, etc.)"></textarea>
                  </div>

                  <button type="submit" className="bg-black text-white w-full py-5 text-lg flex items-center justify-center gap-3 group shadow-xl hover:bg-gray-900 transition-all font-bold rounded-xl">
                    Submit Enquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
