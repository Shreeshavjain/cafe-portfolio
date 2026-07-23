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
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <AnimatedElement yOffset={-20} duration={0.6} className={`mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "h-20" : "h-24 pt-4"}`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="#hero" onClick={(e) => handleClick(e, "hero")}>
            <Image 
              src={logoImg} 
              alt="Aster Café" 
              width={isScrolled ? 150 : 180} 
              height={isScrolled ? 37 : 45} 
              className={`object-contain transition-all duration-300 ${isLight ? "brightness-0" : ""}`}
              priority
            />
          </Link>
        </div>

        {/* Navigation links (Desktop only) */}
        <nav className="hidden md:flex md:gap-x-12">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={`#${item.id}`} 
              onClick={(e) => handleClick(e, item.id)}
              className={`text-sm font-medium transition-colors uppercase tracking-widest ${
                activeSection === item.id 
                  ? "text-crema-orange" 
                  : `${textColor} ${hoverColor}`
              }`}
            >
              {item.name}
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
            } px-6 py-2.5 text-sm font-medium hover:bg-crema-orange hover:border-crema-orange hover:text-white transition-colors uppercase tracking-widest`}
          >
            Reservation
          </Link>
        </div>
      </AnimatedElement>
    </header>
  );
};
