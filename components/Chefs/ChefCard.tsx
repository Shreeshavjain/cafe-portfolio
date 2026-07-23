"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
const FacebookIcon = ({ size = 20, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20, strokeWidth = 1.5 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);
import Link from "next/link";

interface ChefCardProps {
  chef: {
    id: string;
    name: string;
    role: string;
    cuisine: string;
    experience: string;
    speciality: string;
    description: string;
    imageUrl: string;
    social: {
      facebook: string;
      instagram: string;
    };
  };
}

// Framer motion variants
const cardVariants: Variants = {
  rest: { },
  hover: { }
};

const imageVariants: Variants = {
  rest: { scale: 1, filter: "brightness(1)" },
  hover: { 
    scale: 1.05, 
    filter: "brightness(1.1)",
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] } 
  }
};

const overlayVariants: Variants = {
  rest: { y: "100%", opacity: 0 },
  hover: { 
    y: "0%", 
    opacity: 1,
    transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
  }
};

const iconVariants: Variants = {
  rest: { y: 20, opacity: 0 },
  hover: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.3, 
      ease: [0.33, 1, 0.68, 1], 
      delay: i * 0.05 + 0.1 
    }
  })
};

export function ChefCard({ chef }: ChefCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-lg flex flex-col h-[500px] w-full bg-card"
      initial="hidden"
      whileInView="rest"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        rest: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
        hover: { opacity: 1, y: 0 }
      }}
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 w-full h-full" variants={imageVariants}>
        <Image
          src={chef.imageUrl}
          alt={chef.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </motion.div>

      {/* Hidden Overlay Information */}
      <motion.div
        className="absolute inset-x-0 bottom-0 flex flex-col justify-end overflow-hidden z-10"
        variants={overlayVariants}
      >
        <div className="bg-[#1F1A17]/80 backdrop-blur-md border-t border-[#1F1A17]/20 p-6 flex flex-col gap-3">
          
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-heading text-3xl text-[#FDFBF7] drop-shadow-md">
                {chef.name}
              </h3>
              <p className="text-[#B96D40] font-medium text-sm tracking-wider uppercase mt-1">
                {chef.role}
              </p>
            </div>
          </div>

          <div className="text-[#FDFBF7]/90 text-sm space-y-1 font-sans">
            <p><span className="text-[#B96D40] font-medium">Cuisine:</span> {chef.cuisine}</p>
            <p><span className="text-[#B96D40] font-medium">Experience:</span> {chef.experience}</p>
            <p><span className="text-[#B96D40] font-medium">Speciality:</span> {chef.speciality}</p>
          </div>

          <p className="text-[#FDFBF7]/80 text-sm italic mt-2 leading-relaxed font-sans line-clamp-3">
            "{chef.description}"
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 pt-4 border-t border-[#FDFBF7]/20">
            <motion.div custom={0} variants={iconVariants}>
              <Link 
                href={chef.social.facebook}
                className="text-[#FDFBF7] hover:text-[#B96D40] transition-colors duration-300"
              >
                <FacebookIcon size={20} strokeWidth={1.5} />
              </Link>
            </motion.div>
            <motion.div custom={1} variants={iconVariants}>
              <Link 
                href={chef.social.instagram}
                className="text-[#FDFBF7] hover:text-[#B96D40] transition-colors duration-300"
              >
                <InstagramIcon size={20} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
