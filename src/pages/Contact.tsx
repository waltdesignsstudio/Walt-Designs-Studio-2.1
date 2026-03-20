import { motion } from 'motion/react';
import { Phone, Mail, MapPin, User, Building } from 'lucide-react';

export default function Contact() {
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
    <div className="py-24 bg-dark-teal min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Get In <span className="text-premium-gold">Touch</span></h1>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Have a project in mind? We'd love to hear from you. Reach out to us directly or visit our office in New Delhi.
            </p>

            <div className="space-y-6">
              {contactDetails.map((detail, i) => (
                <div key={i} className="flex items-center gap-6 p-4 glass-card">
                  <div className="p-3 bg-white/5 rounded-lg">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs text-premium-gold uppercase tracking-widest mb-1">{detail.label}</p>
                    <p className="text-lg font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10"
          >
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-premium-gold transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-premium-gold transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Subject</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-premium-gold transition-colors" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-premium-gold transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
