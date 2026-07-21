"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MenuItem } from "./menuData";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <motion.div
      data-cursor="card"
      className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-[#1F1B18]/[0.02] transition-colors duration-300 cursor-pointer"
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Circular Image Container */}
      <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden border border-[#1F1B18]/10 bg-white">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <div className="flex items-baseline justify-between gap-4 mb-1">
          <h3 className="font-serif text-xl text-[#1F1B18] truncate">
            {item.name}
          </h3>
          <span className="font-medium text-[#B8893C] text-lg opacity-90 transition-opacity duration-300 group-hover:opacity-100 shrink-0">
            ₹{item.price}
          </span>
        </div>
        <p className="text-sm font-light text-[#1F1B18]/60 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};
