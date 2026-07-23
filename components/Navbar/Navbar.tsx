"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/branding/logo.png";
import { AnimatedElement } from "../Hero/AnimatedElement";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "menu", "chefs", "contact"];
    const observers = new Map();

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Use a negative root margin to trigger the intersection when the section is near the middle of the screen
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.set(id, element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = observers.get(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const isLight = isScrolled;
  
  const textColor = isLight ? "text-espresso" : "text-white/90";
  const hoverColor = "hover:text-crema-orange";
  const btnBorder = isLight ? "border-espresso/30" : "border-white/30";
  const btnBg = isLight ? "bg-espresso/5" : "bg-white/10";
  const btnText = isLight ? "text-espresso" : "text-white";
  const btnHoverBg = "hover:bg-crema-orange";
  const btnHoverBorder = "hover:border-crema-orange";
  const btnHoverText = "hover:text-white";

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Menu", id: "menu" },
    { name: "Chefs", id: "chefs" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-black/5" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <AnimatedElement yOffset={-20} duration={0.8} className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${isScrolled ? "h-20" : "h-28 pt-6"}`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="#hero" onClick={(e) => handleClick(e, "hero")} className="outline-none">
            <Image 
              src={logoImg} 
              alt="Aster Café" 
              width={isScrolled ? 140 : 170} 
              height={isScrolled ? 35 : 42} 
              className={`object-contain transition-all duration-500 ease-in-out ${isLight ? "brightness-0" : "brightness-100"}`}
              priority
            />
          </Link>
        </div>

        {/* Navigation links (Desktop only) */}
        <nav className="hidden lg:flex lg:gap-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={`#${item.id}`} 
              onClick={(e) => handleClick(e, item.id)}
              className={`relative text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 group outline-none ${
                activeSection === item.id 
                  ? "text-crema-orange" 
                  : `${textColor} hover:text-crema-orange`
              }`}
            >
              {item.name}
              {/* Elegant underline animation for hover/active */}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-crema-orange transition-all duration-300 ${
                activeSection === item.id ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }`} />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex md:items-center">
          <Link 
            href="#contact" 
            onClick={(e) => handleClick(e, "contact")}
            className={`inline-flex items-center justify-center border ${
              activeSection === "contact" ? "border-crema-orange bg-crema-orange text-white" : `${btnBorder} ${btnBg} ${btnText}`
            } px-7 py-3 text-xs font-semibold hover:bg-crema-orange hover:border-crema-orange hover:text-white transition-all duration-500 uppercase tracking-[0.15em] outline-none shadow-sm hover:shadow-md`}
          >
            Reservation
          </Link>
        </div>
      </AnimatedElement>
    </header>
  );
};
