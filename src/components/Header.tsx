import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Enquiry Us', path: '/enquiry' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="bg-dark-red sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.ibb.co/WNZCQtTR/IMG-20260312-041840.jpg" 
              alt="Walt Designs & Studio Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-premium-gold shadow-lg"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              Walt Designs <span className="text-premium-gold">&</span> Studio
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-white/90 hover:text-premium-gold font-medium transition-colors text-sm uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-red border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-white hover:bg-red-900 rounded-md text-base font-medium uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
