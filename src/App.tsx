/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative overflow-x-hidden"
      >
        <Navbar />
        <main>
          <Hero />
          <Services />
          <BeforeAfter />
          <Gallery />
          <Pricing />
          <Team />
          <Testimonials />
          <Booking />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
