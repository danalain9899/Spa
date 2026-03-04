import { motion } from 'motion/react';
import React, { useState } from 'react';
import useMeasure from 'react-use-measure';

const comparisons = [
  {
    title: "Skin Rejuvenation",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800&blur=2",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    description: "Visible reduction in fine lines and improved skin texture after 3 sessions of our Premium Glow treatment."
  },
  {
    title: "Hair Transformation",
    before: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800&grayscale=1",
    after: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800",
    description: "Restored vitality and shine with our intensive scalp and hair therapy."
  }
];

function ComparisonSlider({ before, after }: { before: string, after: string }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [ref, { width }] = useMeasure();

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <div 
      ref={ref}
      className="relative aspect-[4/3] overflow-hidden rounded-3xl cursor-ew-resize group"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      
      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gold rounded-full"></div>
            <div className="w-1 h-1 bg-gold rounded-full"></div>
            <div className="w-1 h-1 bg-gold rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur px-4 py-1 rounded-full text-[10px] text-white uppercase tracking-widest font-bold">Before</div>
      <div className="absolute bottom-6 right-6 bg-gold/80 backdrop-blur px-4 py-1 rounded-full text-[10px] text-white uppercase tracking-widest font-bold">After</div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm block mb-4">Real Results</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Visible Transformation</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <ComparisonSlider before={item.before} after={item.after} />
              <div className="text-center">
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-gray-500 font-light text-sm max-w-md mx-auto">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
