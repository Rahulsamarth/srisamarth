"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  projectSpecs: string[];
}

const testimonialsData: Testimonial[] = [
  {
    quote: "We needed a contractor who could guarantee that adding 200kWp of solar wouldn't compromise the structure or result in leaks, which is common in co-contracted jobs. Sri Samarth designed the trusses, supplied ASA-UPVC sheets, and installed the array under one warranty. Deflection is zero, and we have had zero water leaks across two heavy monsoons.",
    author: "Abhay Shelke",
    role: "Managing Director",
    company: "Shelke Agro Foods",
    location: "Indapur, Maharashtra",
    projectSpecs: ["200KWP INTEGRATED SOLAR", "2.5MM UPVC CHEVRON SHEET", "18,500 SQ.FT AREA"],
  },
  {
    quote: "Our monthly refrigeration electricity bill went from ₹1,80,000 to under ₹25,000. Sri Samarth engineered the slope to 15 degrees for maximum solar efficiency, and the white high-albedo UPVC sheets cut roof surface temperature by 15°C. This dual system resulted in substantial additional refrigeration power savings.",
    author: "Ketan Shah",
    role: "Owner",
    company: "Shah Cold Storage",
    location: "Bhosari Industrial Area, Pune",
    projectSpecs: ["120KWP SOLAR SYSTEM", "3.0MM IVORY WHITE UPVC", "12,200 SQ.FT AREA"],
  },
  {
    quote: "The acoustic dampening of the 3-layer UPVC sheets cut factory rain noise by 30dB, improving shop floor communication dramatically during storms. The integrated solar installation was completed in 12 days without disrupting our packaging lines. Highly professional engineering work.",
    author: "Rajesh Mehta",
    role: "VP Infrastructure",
    company: "Chakan Auto Components",
    location: "Chakan Industrial Zone",
    projectSpecs: ["80KWP EXPANSION", "2.5MM CHARCOAL UPVC", "22,000 SQ.FT AREA"],
  },
  {
    quote: "Stitching two contractors (roofing and solar) had failed us on a previous warehouse shed. Sri Samarth took single accountability for the envelope. Excellent drawings and structural load calculations prior to supply. They are now our single partner for all industrial roofs.",
    author: "Milind Gaikwad",
    role: "Operations Head",
    company: "Praj Processing Sheds",
    location: "Nashik, Maharashtra",
    projectSpecs: ["300KWP INTEGRATED", "3.0MM TRAPEZOIDAL UPVC", "32,000 SQ.FT AREA"],
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="testimonials"
      className="bg-charcoal-950 text-chalk-50 py-24 px-6 md:px-8 border-b border-charcoal-800 dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs uppercase text-lemon-400 tracking-widest font-semibold block mb-2">
              Performance Records
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-chalk-50 uppercase leading-none">
              Client Engineering Audits
            </h2>
          </div>

          {/* Carousel Buttons */}
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-3 border border-charcoal-600 hover:border-lemon-500 hover:bg-charcoal-800 text-chalk-50 hover:text-lemon-500 transition-all rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-lemon-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 border border-charcoal-600 hover:border-lemon-500 hover:bg-charcoal-800 text-chalk-50 hover:text-lemon-500 transition-all rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-lemon-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Embla Slider */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {testimonialsData.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4 min-w-0"
              >
                <div className="bg-charcoal-800 border border-charcoal-600 rounded-xl p-6 md:p-8 flex flex-col justify-between h-full hover:border-charcoal-600/85 transition-all">
                  <div>
                    {/* Quotes + Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="h-8 w-8 text-lemon-500/20 fill-lemon-500/10" />
                      <span className="font-mono text-[9px] text-charcoal-600 border border-charcoal-600 px-2 py-1 bg-charcoal-950/40">
                        AUDIT #{idx + 101}
                      </span>
                    </div>

                    <p className="text-xs text-charcoal-600 leading-relaxed mb-8 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </div>

                  {/* Author Card Footer */}
                  <div className="border-t border-charcoal-950 pt-4 mt-auto">
                    <h4 className="font-display font-bold text-sm text-chalk-50 tracking-tight">
                      {testimonial.author}
                    </h4>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal-600 block mt-0.5">
                      {testimonial.role} · {testimonial.company}
                    </span>
                    <span className="font-mono text-[9px] text-charcoal-600/80 block mt-1">
                      {testimonial.location}
                    </span>

                    {/* Specs badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {testimonial.projectSpecs.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[8px] font-bold text-lemon-400 bg-charcoal-950 border border-charcoal-600 px-1.5 py-0.5"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
