"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-crema-orange uppercase mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white/90 mb-8 leading-tight">
              A legacy of taste, crafted with passion.
            </h3>
            <p className="text-white/60 mb-6 leading-relaxed">
              Founded on the principles of culinary excellence and genuine hospitality, Aster Café is more than a destination—it is a sanctuary for the senses. Every detail, from the sourced ingredients to the architecture, is designed to evoke emotion.
            </p>
            <p className="text-white/60 leading-relaxed">
              We believe in the power of a shared meal and a perfectly brewed cup of coffee. Our spaces are crafted to inspire conversation, connection, and a moment of pause in a fast-paced world.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="relative h-[600px] w-full group"
          >
            <Image 
              src="/gallery/entrance.png" 
              alt="About Aster Cafe" 
              fill 
              className="object-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
