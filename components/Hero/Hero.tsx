import Link from "next/link";
import Image from "next/image";
import { HeroAmbientGlow } from "./HeroAmbientGlow";
import { AnimatedElement } from "./AnimatedElement";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#1F1B18]">
        <Image
          src="/images/hero/hero1.png"
          alt="Aster Café Interior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#1F1B18]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1F1B18]/80" />
      </div>

      {/* Ambient Glow */}
      <HeroAmbientGlow />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24">
        <AnimatedElement as="h1" delay={0.15} duration={0.8} yOffset={30} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#F8F5F0] tracking-wide mb-6 leading-tight">
          A Symphony of <br className="hidden sm:block" />
          <span className="text-[#B8893C] italic">Taste & Elegance</span>
        </AnimatedElement>
        
        <AnimatedElement as="p" delay={0.3} duration={0.6} yOffset={20} className="max-w-2xl text-base sm:text-lg md:text-xl text-[#F8F5F0]/90 font-light mb-10 leading-relaxed">
          Step into a cinematic culinary journey. From artisanal coffee and brunch 
          to luxurious dinners, experience hospitality that feels editorial.
        </AnimatedElement>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          <AnimatedElement delay={0.45} duration={0.5} yOffset={20} className="flex w-full sm:w-auto">
            <Link
              href="#reservation"
              className="inline-flex w-full items-center justify-center bg-[#B8893C] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#a07632] transition-colors uppercase tracking-[0.2em]"
            >
              Book a Table
            </Link>
          </AnimatedElement>
          <AnimatedElement delay={0.55} duration={0.5} yOffset={20} className="flex w-full sm:w-auto">
            <Link
              href="#menu"
              className="inline-flex w-full items-center justify-center border border-[#F8F5F0]/50 bg-transparent px-8 py-3.5 text-sm font-medium text-[#F8F5F0] hover:bg-[#F8F5F0] hover:text-[#1F1B18] transition-colors uppercase tracking-[0.2em]"
            >
              Explore Menu
            </Link>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

