import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { SignatureSection } from "@/components/Signature/SignatureSection";
import { MenuPreviewSection } from "@/components/MenuPreview/MenuPreviewSection";
import { ChefsSection } from "@/components/Chefs/ChefsSection";
import { Footer } from "@/components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <SignatureSection />
        
        {/* Placeholder for About Section */}
        <section id="about" className="relative w-full bg-background flex flex-col items-center justify-center py-32 lg:py-48 text-center px-4 sm:px-6">
          <h2 className="font-heading text-4xl md:text-5xl text-espresso mb-8">
            Our Story
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-latte-gray font-sans font-light leading-relaxed">
            Founded with a passion for excellence, Aster Café bridges the gap between classic culinary traditions and modern gastronomy. Every cup of coffee and every plate we serve is a testament to our dedication to quality, sourcing the finest ingredients to create unforgettable experiences.
          </p>
        </section>

        <MenuPreviewSection />
        
        <ChefsSection />

        {/* Placeholder for Testimonials Section */}
        <section id="testimonials" className="relative w-full bg-[#FAF8F4] flex flex-col items-center justify-center py-32 lg:py-40 text-center px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-crema-orange" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-crema-orange">
              Testimonials
            </span>
            <div className="w-8 h-[1px] bg-crema-orange" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl text-espresso mb-12">
            Words From Our Guests
          </h2>
          <div className="max-w-2xl mx-auto italic text-xl md:text-2xl text-latte-gray font-serif font-light leading-relaxed">
            "A revelation in flavor. The attention to detail is evident in every bite, and the atmosphere feels like a warm embrace. Truly a Michelin-level experience."
          </div>
          <p className="mt-8 text-sm uppercase tracking-widest font-medium text-espresso">— Jonathan H.</p>
        </section>

        {/* Placeholder for Contact Section */}
        <section id="contact" className="relative w-full bg-background flex flex-col items-center justify-center py-32 lg:py-48 text-center px-4 sm:px-6">
          <h2 className="font-heading text-4xl md:text-5xl text-espresso mb-6">
            Join Us at the Table
          </h2>
          <p className="max-w-md mx-auto text-lg text-latte-gray font-sans font-light leading-relaxed mb-10">
            We invite you to experience the harmony of taste and elegance. Secure your reservation today.
          </p>
          <Link 
            href="mailto:reservations@astercafe.com" 
            className="inline-flex items-center justify-center border border-espresso bg-espresso px-10 py-4 text-sm font-medium text-oat-milk hover:bg-crema-orange hover:border-crema-orange transition-all duration-300 uppercase tracking-widest rounded-none"
          >
            Contact Reservations
          </Link>
        </section>

      </main>
      <Footer />
    </div>
  );
}
