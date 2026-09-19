"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Products", href: "#products" },
  { name: "Architecture", href: "#architecture" },
  { name: "Solar", href: "#solar" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-charcoal-950/90 backdrop-blur-md py-4 border-b border-charcoal-800"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lemon-500 rounded-sm"
            onClick={(e) => scrollToSection(e, "#")}
          >
            <span className="font-display font-black text-xl tracking-tight text-chalk-50 uppercase flex items-center">
              Sri Samarth
              <span className="text-lemon-500 ml-1 font-mono text-sm tracking-widest font-normal">
                [TRADERS]
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-chalk-50/80 hover:text-chalk-50 transition-colors duration-150 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemon-500 rounded-sm"
                onClick={(e) => scrollToSection(e, item.href)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span>{item.name}</span>
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-lemon-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "bg-lemon-500 text-charcoal-950 font-bold hover:bg-lemon-400 hover:shadow-[0_0_15px_rgba(130,184,0,0.5)] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-lemon-600 focus-visible:ring-offset-2 h-auto py-2"
              )}
            >
              Get a Free Site Assessment
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-chalk-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemon-500 rounded-sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] bg-charcoal-950 z-30 lg:hidden flex flex-col p-6 justify-between"
          >
            <nav className="flex flex-col gap-6 pt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-display font-bold text-chalk-50 border-b border-charcoal-800 pb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemon-500 rounded-sm"
                  onClick={(e) => scrollToSection(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="pb-12">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "w-full bg-lemon-500 text-charcoal-950 font-bold hover:bg-lemon-400 py-6 text-lg h-auto flex items-center justify-center"
                )}
              >
                Get a Free Site Assessment
                <ArrowUpRight className="ml-1 h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
