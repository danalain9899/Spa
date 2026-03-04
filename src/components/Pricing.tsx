import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: "Classic Glow",
    price: "189",
    duration: "90 Mins",
    features: ["Deep Cleansing Facial", "Scalp Massage", "Eye Treatment", "Hydrating Mask"],
    recommended: false
  },
  {
    name: "Royal Bridal",
    price: "499",
    duration: "4 Hours",
    features: ["Full Body Massage", "Aromatic Sauna", "Traditional Body Scrub", "Luxury Flower Bath", "Totok Facial"],
    recommended: true
  },
  {
    name: "Ultimate Zen",
    price: "299",
    duration: "2.5 Hours",
    features: ["Hot Stone Massage", "Premium Facial", "Hair Spa Treatment", "Hand & Foot Care"],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm block mb-4">Pricing & Packages</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Investment in Yourself</h2>
          <p className="text-gray-500 max-w-xl mx-auto font-light">Choose from our curated selection of premium treatment packages designed for maximum rejuvenation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-3xl transition-all duration-500 ${
                pkg.recommended 
                ? 'bg-charcoal text-white shadow-2xl scale-105 z-10' 
                : 'bg-white text-charcoal shadow-xl hover:shadow-2xl'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white px-6 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-light opacity-60">RM</span>
                  <span className="text-5xl font-serif">{pkg.price}</span>
                </div>
                <span className="text-xs uppercase tracking-widest opacity-60">{pkg.duration}</span>
              </div>

              <div className="space-y-4 mb-10">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${pkg.recommended ? 'bg-gold/20 text-gold' : 'bg-gold/10 text-gold'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-light opacity-80">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                pkg.recommended 
                ? 'bg-gold hover:bg-gold-light text-white' 
                : 'border border-gold text-gold hover:bg-gold hover:text-white'
              }`}>
                Book Package
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
