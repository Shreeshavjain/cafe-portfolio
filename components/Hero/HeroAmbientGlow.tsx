"use client";

import { motion } from "framer-motion";

export const HeroAmbientGlow = () => {
  return (
    <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none overflow-hidden">
      <motion.div
        className="pointer-events-none rounded-full"
        style={{
          width: "min(120vw, 1000px)",
          height: "min(120vw, 1000px)",
          // Center at 0.18 opacity = rgba(230,190,90,0.18)
          // Middle (0.55) at 0.18 opacity ~ rgba(214,170,72,0.10)
          background:
            "radial-gradient(circle, rgb(230, 190, 90) 0%, rgba(214, 170, 72, 0.55) 40%, transparent 70%)",
          filter: "blur(140px)",
          willChange: "transform, opacity",
        }}
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.18, 0.24, 0.18],
        }}
        transition={{
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};
