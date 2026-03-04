import { motion } from 'motion/react';
import { Calendar, Clock, User, MessageSquare, Phone } from 'lucide-react';

export default function Booking() {
  return (
    <section id="contact" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 bg-charcoal text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <span className="text-gold font-medium tracking-[0.3em] uppercase text-sm block mb-4">Reservation</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Begin Your <br />Journey</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Call Us</h4>
                    <p className="text-white/60 font-light">012-638 2408</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1">Opening Hours</h4>
                    <p className="text-white/60 font-light">Daily: 10:30 AM - 8:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-gold/10 border border-gold/20">
                <p className="text-sm font-light italic leading-relaxed text-gold-light">
                  "The best time to relax is when you don't have time for it. Let us create that space for you."
                </p>
              </div>
            </div>
          </div>

          <div className="p-12 lg:p-20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-cream border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-gold transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="tel" 
                      placeholder="+60 12 345 6789"
                      className="w-full bg-cream border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-gold transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Preferred Treatment</label>
                <select className="w-full bg-cream border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-gold transition-all text-sm appearance-none">
                  <option>Bridal Package</option>
                  <option>Full Body Massage</option>
                  <option>Totok Facial</option>
                  <option>Scalp Treatment</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="date" 
                      className="w-full bg-cream border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-gold transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      type="time" 
                      className="w-full bg-cream border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-gold transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Special Requests</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-300" />
                  <textarea 
                    placeholder="Tell us about any specific needs..."
                    rows={4}
                    className="w-full bg-cream border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-gold transition-all text-sm resize-none"
                  ></textarea>
                </div>
              </div>

              <button className="w-full gold-gradient text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-gold/20 hover:shadow-gold/40 transition-all hover:-translate-y-1">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
