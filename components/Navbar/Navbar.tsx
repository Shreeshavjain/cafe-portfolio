import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/branding/logo.png";

export const Navbar = () => {
  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 pt-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src={logoImg} 
              alt="Aster Café" 
              width={180} 
              height={45} 
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navigation links (Desktop only) */}
        <nav className="hidden md:flex md:gap-x-12">
          <Link href="#about" className="text-sm font-medium text-white/90 hover:text-[#B8893C] transition-colors uppercase tracking-widest">
            About
          </Link>
          <Link href="#menu" className="text-sm font-medium text-white/90 hover:text-[#B8893C] transition-colors uppercase tracking-widest">
            Menu
          </Link>
          <Link href="#locations" className="text-sm font-medium text-white/90 hover:text-[#B8893C] transition-colors uppercase tracking-widest">
            Locations
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex md:items-center">
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white hover:bg-[#B8893C] hover:border-[#B8893C] transition-colors uppercase tracking-widest"
          >
            Reservation
          </Link>
        </div>
      </div>
    </header>
  );
};

