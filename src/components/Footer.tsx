import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/WNZCQtTR/IMG-20260312-041840.jpg" 
                alt="Walt Designs & Studio Logo" 
                className="h-10 w-10 rounded-full object-cover border border-premium-gold"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-bold tracking-tighter uppercase">
                Walt Designs <span className="text-premium-gold">&</span> Studio
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium design solutions tailored for the modern era. From AI-optimized websites to professional branding.
            </p>
          </div>

          <div>
            <h4 className="text-premium-gold font-semibold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/services.html" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/about.html" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact.html" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-premium-gold font-semibold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-premium-gold shrink-0" />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-premium-gold shrink-0" />
                <span>+91 7303942175</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-premium-gold shrink-0" />
                <span>waltdesignsstudio@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-premium-gold font-semibold mb-6 uppercase tracking-widest text-sm">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-premium-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-premium-gold hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-premium-gold hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Walt Designs & Studio. All rights reserved. Founded by Priyanshu Kumar.</p>
        </div>
      </div>
    </footer>
  );
}
