import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/branding/logo.png";

export function Footer() {
  return (
    <footer className="bg-espresso text-oat-milk py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <Link href="/">
            <Image 
              src={logoImg} 
              alt="Aster Café" 
              width={160} 
              height={40} 
              className="object-contain"
            />
          </Link>
          <p className="text-sm text-latte-gray font-sans max-w-xs">
            Where culinary craftsmanship meets an unforgettable dining experience.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-heading text-xl text-crema-orange">Explore</h4>
          <nav className="flex flex-col space-y-2 font-sans text-sm text-latte-gray">
            <Link href="/#about" className="hover:text-crema-orange transition-colors">About Us</Link>
            <Link href="/#menu" className="hover:text-crema-orange transition-colors">Our Menu</Link>
            <Link href="/chefs" className="hover:text-crema-orange transition-colors">Meet the Chefs</Link>
            <Link href="/#locations" className="hover:text-crema-orange transition-colors">Locations</Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="font-heading text-xl text-crema-orange">Contact</h4>
          <div className="flex flex-col space-y-2 font-sans text-sm text-latte-gray">
            <p>123 Culinary Avenue, NY 10001</p>
            <p>+1 (555) 123-4567</p>
            <p>reservations@astercafe.com</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-latte-gray font-sans">
        <p>&copy; {new Date().getFullYear()} Aster Café. All rights reserved.</p>
      </div>
    </footer>
  );
}
