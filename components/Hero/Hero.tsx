import Link from "next/link";
import Image from "next/image";

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

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#F8F5F0] tracking-wide mb-6 leading-tight">
          A Symphony of <br className="hidden sm:block" />
          <span className="text-[#B8893C] italic">Taste & Elegance</span>
        </h1>
        
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#F8F5F0]/90 font-light mb-10 leading-relaxed">
          Step into a cinematic culinary journey. From artisanal coffee and brunch 
          to luxurious dinners, experience hospitality that feels editorial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          <Link
            href="#reservation"
            className="inline-flex items-center justify-center bg-[#B8893C] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#a07632] transition-colors uppercase tracking-[0.2em]"
          >
            Book a Table
          </Link>
          <Link
            href="#menu"
            className="inline-flex items-center justify-center border border-[#F8F5F0]/50 bg-transparent px-8 py-3.5 text-sm font-medium text-[#F8F5F0] hover:bg-[#F8F5F0] hover:text-[#1F1B18] transition-colors uppercase tracking-[0.2em]"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

