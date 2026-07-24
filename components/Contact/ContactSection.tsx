"use client";

import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-white/90 mb-6">
              Join Us at Aster
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[1px] bg-crema-orange mx-auto mb-10"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Experience culinary artistry in an atmosphere of refined elegance. We invite you to reserve your table and become part of our story.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-crema-orange tracking-[0.15em] text-sm uppercase mb-4">Location</h4>
            <p className="text-white/80">123 Luxury Avenue<br/>Metropolis, NY 10001</p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-crema-orange tracking-[0.15em] text-sm uppercase mb-4">Hours</h4>
            <p className="text-white/80">Mon - Sun: 8am - 11pm<br/>Dinner service starts at 5pm</p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="text-crema-orange tracking-[0.15em] text-sm uppercase mb-4">Contact</h4>
            <p className="text-white/80">reservations@astercafe.com<br/>+1 (555) 123-4567</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <button className="px-12 py-5 bg-crema-orange text-white text-sm font-semibold tracking-[0.2em] uppercase hover:bg-white hover:text-background transition-all duration-500 shadow-lg hover:shadow-xl outline-none">
            Reserve a Table
          </button>
        </motion.div>
      </div>
    </section>
  );
};
