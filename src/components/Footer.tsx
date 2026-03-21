import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3d2b1f] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle texture or gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <img 
                src="https://i.ibb.co/WNZCQtTR/IMG-20260312-041840.jpg" 
                alt="Walt Designs & Studio Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-premium-gold shadow-lg group-hover:scale-110 transition-transform"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-black tracking-tighter uppercase">
                Walt Designs <span className="text-premium-gold">&</span> Studio
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Premium design solutions tailored for the modern era. From AI-optimized websites to professional branding.
            </p>
          </div>

          <div>
            <h4 className="text-premium-gold font-black mb-8 uppercase tracking-[0.2em] text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60 font-bold">
              <li><a href="/" className="hover:text-premium-gold transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-premium-gold transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-premium-gold transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-premium-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-premium-gold font-black mb-8 uppercase tracking-[0.2em] text-xs">Contact Info</h4>
            <ul className="space-y-5 text-sm text-white/60 font-bold">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-premium-gold shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone size={20} className="text-premium-gold shrink-0" />
                <span>+91 7303942175</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail size={20} className="text-premium-gold shrink-0" />
                <span>waltdesignsstudio@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-premium-gold font-black mb-8 uppercase tracking-[0.2em] text-xs">Follow Us</h4>
            <div className="flex space-x-5">
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-premium-gold hover:text-black transition-all hover:-translate-y-1 shadow-lg">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-premium-gold hover:text-black transition-all hover:-translate-y-1 shadow-lg">
                <Facebook size={24} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-2xl hover:bg-premium-gold hover:text-black transition-all hover:-translate-y-1 shadow-lg">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 text-center">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black">
            © {new Date().getFullYear()} Walt Designs & Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
