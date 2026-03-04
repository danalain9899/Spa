import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Spa Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-gold font-medium tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
            Escape to Serenity
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">
            Elevate Your <br />
            <span className="italic font-light">Natural Beauty</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed">
            Experience the pinnacle of luxury aesthetic treatments and traditional spa rituals at Kuala Lumpur's premier beauty sanctuary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full text-sm font-bold tracking-[0.2em] uppercase transition-all flex items-center gap-3 shadow-2xl shadow-gold/30">
              Book Treatment Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center gap-4 text-white hover:text-gold transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-gold transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase">Watch Experience</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </motion.div>
    </section>
  );
}
