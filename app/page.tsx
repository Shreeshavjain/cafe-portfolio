import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { SignatureSection } from "@/components/Signature/SignatureSection";
import { MenuPreviewSection } from "@/components/MenuPreview/MenuPreviewSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5F0] font-sans">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <SignatureSection />
        <MenuPreviewSection />
      </main>
    </div>
  );
}
