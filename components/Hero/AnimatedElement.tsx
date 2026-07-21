"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export const AnimatedElement = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  className = "",
  as = "div",
}: AnimatedElementProps) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionComponent = motion[as as keyof typeof motion] as any;

  return (
    <MotionComponent
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.4 : duration, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
