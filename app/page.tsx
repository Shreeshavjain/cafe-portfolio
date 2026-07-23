import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { SignatureSection } from "@/components/Signature/SignatureSection";
import { MenuPreviewSection } from "@/components/MenuPreview/MenuPreviewSection";
import { ChefsSection } from "@/components/Chefs/ChefsSection";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        
        <SignatureSection />
        
        {/* Prepared Architecture for future sections */}
        <div id="about" className="scroll-mt-20">
          {/* <AboutSection /> */}
        </div>

        <MenuPreviewSection />
        
        <ChefsSection />

        <div id="gallery" className="scroll-mt-20">
          {/* <GallerySection /> */}
        </div>

        <div id="testimonials" className="scroll-mt-20">
          {/* <TestimonialsSection /> */}
        </div>

        <div id="contact" className="scroll-mt-20">
          {/* <ContactSection /> */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
