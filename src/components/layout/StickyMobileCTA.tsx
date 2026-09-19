"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 500px (past the hero fold)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-charcoal-950/95 border-t border-charcoal-800 p-4 lg:hidden backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <a
              href="tel:+918147130721"
              className={cn(
                buttonVariants({ variant: "outline", size: "default" }),
                "flex-1 border-charcoal-600 text-chalk-50 hover:bg-charcoal-800 hover:text-chalk-50 font-semibold h-auto py-2 flex items-center justify-center"
              )}
            >
              <Phone className="mr-2 h-4 w-4 text-lemon-500" />
              Call Expert
            </a>
            <button
              onClick={scrollToContact}
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "flex-[2] bg-lemon-500 text-charcoal-950 hover:bg-lemon-400 font-bold shadow-[0_-4px_10px_rgba(130,184,0,0.15)] h-auto py-2 flex items-center justify-center cursor-pointer"
              )}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Free Assessment
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
