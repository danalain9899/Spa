import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alia Maisarah",
    role: "Local Guide",
    content: "It was a really good experience and the bridal package which includes massage, sauna, body scrub and flower bath were so good! The staff Miss Hanum is very friendly as well, definitely gonna repeat and so recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Nur Syuhada",
    role: "Verified Client",
    content: "Recommended !! First time cut & wash kat sini..besttt!!!! Memang akan repeat lgi lepas ni. Yg penting spa bersih dan selesa.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Wani Mustafar",
    role: "Local Guide",
    content: "Besttt dan saya berpuas hati dengan service. Boleh repeat insyaallah. Bilik untuk package bridal memang ada bilik khas, so semua dalam tu je senang.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm block mb-4">Client Voices</span>
            <h2 className="text-4xl md:text-6xl font-serif">Stories of Transformation</h2>
          </div>
          <div className="flex items-center gap-2 bg-cream px-6 py-3 rounded-full border border-gold/10">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-sm font-bold">4.8/5</span>
            <span className="text-xs text-gray-400 font-light">(168 Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-cream p-10 rounded-[2rem] relative group hover:bg-charcoal hover:text-white transition-all duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors" />
              
              <div className="flex text-gold mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>

              <p className="text-lg font-serif italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest">{testimonial.name}</h4>
                  <span className="text-xs opacity-50 font-light">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
