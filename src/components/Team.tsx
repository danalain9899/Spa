import { motion } from 'motion/react';
import { Instagram, Linkedin } from 'lucide-react';

const team = [
  {
    name: "Miss Hanum",
    role: "Senior Aesthetician",
    specialty: "Bridal & Body Rituals",
    image: "https://images.unsplash.com/photo-1594744803329-a584af1cae24?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Siti Sarah",
    role: "Hair Specialist",
    specialty: "Scalp & Color Therapy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Elena",
    role: "Consultant",
    specialty: "Skin Rejuvenation",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm block mb-4">The Experts</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Crafted by Hands <br />of Excellence</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-10 max-w-lg">
              Our team of certified professionals brings years of experience and a passion for holistic beauty to every treatment. We believe in a personalized approach that honors your unique features.
            </p>
            <button className="bg-charcoal text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gold transition-colors">
              Meet the Full Team
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="relative h-96 overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-xl font-serif text-white mb-1">{member.name}</h4>
                    <p className="text-gold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                    <div className="flex gap-3">
                      <Instagram className="w-4 h-4 text-white hover:text-gold cursor-pointer" />
                      <Linkedin className="w-4 h-4 text-white hover:text-gold cursor-pointer" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
