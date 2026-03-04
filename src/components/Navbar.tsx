import { motion } from 'motion/react';
import { Menu, X, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-serif text-xl font-bold">
            JS
          </div>
          <span className={cn(
            "font-serif text-xl font-semibold tracking-wider uppercase",
            isScrolled ? "text-charcoal" : "text-charcoal md:text-white"
          )}>
            Jelita Sari
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-widest uppercase transition-colors hover:text-gold",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold hover:bg-gold-dark text-white px-6 py-2 rounded-full text-sm font-semibold tracking-widest uppercase transition-all shadow-lg hover:shadow-gold/20">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? "text-charcoal" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-charcoal text-lg font-serif border-b border-gray-100 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold text-white py-3 rounded-xl font-semibold uppercase tracking-widest">
            Book Treatment
          </button>
        </motion.div>
      )}
    </nav>
  );
}
