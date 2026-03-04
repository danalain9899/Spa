import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white font-serif text-xl font-bold">
                JS
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wider uppercase">
                Jelita Sari
              </span>
            </div>
            <p className="text-white/40 font-light leading-relaxed">
              Kuala Lumpur's premier destination for luxury aesthetic treatments and traditional wellness rituals. Experience the art of beauty.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Treatments', 'Gallery', 'Pricing', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-gold transition-colors font-light text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Treatments</h4>
            <ul className="space-y-4">
              {['Bridal Packages', 'Full Body Massage', 'Totok Facial', 'Scalp Treatment', 'Cut & Wash'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 hover:text-gold transition-colors font-light text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/40 font-light text-sm">
                  32A, 1, Jalan Dwitasik, Dataran Dwitasik, 56000 Kuala Lumpur
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/40 font-light text-sm">012-638 2408</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/40 font-light text-sm">hello@jelitasari.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-light tracking-widest uppercase">
            © 2026 Jelita Sari Spa and Beauty. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-widest hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
