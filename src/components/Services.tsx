import { motion } from 'motion/react';
import { Sparkles, Flower2, Heart, Wind, Scissors, UserCheck } from 'lucide-react';

const services = [
  {
    title: "Bridal Packages",
    description: "Complete transformation for your special day including massage, sauna, body scrub, and flower bath.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Full Body Massage",
    description: "Traditional techniques to release tension and restore balance to your body and mind.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Totok Facial",
    description: "Acupressure facial treatment to improve blood circulation and natural glow.",
    icon: Flower2,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Scalp Treatment",
    description: "Deep cleansing and nourishing treatment for healthy hair and a relaxed mind.",
    icon: Wind,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Cut & Wash",
    description: "Professional hair styling and deep conditioning wash for a fresh new look.",
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Aesthetic Consultation",
    description: "Personalized skin analysis and treatment planning with our expert beauticians.",
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-sm block mb-4"
          >
            Our Signature Treatments
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Curated for Excellence</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-80 mb-6 overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-gold shadow-lg">
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="text-xs font-bold tracking-[0.2em] uppercase text-gold border-b border-gold/30 pb-1 hover:border-gold transition-all">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 rounded-[3rem] bg-cream border border-gold/10 text-center"
        >
          <h3 className="text-3xl font-serif mb-4">Not sure which treatment is right for you?</h3>
          <p className="text-gray-500 mb-8 font-light">Our expert aestheticians are here to guide you through a personalized beauty journey.</p>
          <button className="bg-gold hover:bg-gold-dark text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-xl shadow-gold/20">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
