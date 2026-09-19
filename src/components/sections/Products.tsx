"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ProductItem {
  id: string;
  name: string;
  property: string;
  desc: string;
  specs: {
    thickness: string;
    width: string;
    insulation: string;
    uvRating: string;
    warranty: string;
  };
  colors: { name: string; hex: string }[];
}

const productsData: ProductItem[] = [
  {
    id: "trapezoidal",
    name: "Trapezoidal Rib Profile",
    property: "Highly wind-resistant and leak-proof jointing profile engineered for industrial spans.",
    desc: "Designed for commercial warehouses and factories requiring wide support spans and maximum structural rigidity under extreme wind loads.",
    specs: {
      thickness: "2.0mm · 2.5mm · 3.0mm",
      width: "1070mm overall [960mm cover]",
      insulation: "Thermal: 0.17 W/m·K · Acoustic: 30dB",
      uvRating: "ASA Co-extruded UV-Block [Delta E < 5 at 10yrs]",
      warranty: "20-Year Material Integrity Warranty",
    },
    colors: [
      { name: "Charcoal Black", hex: "#1A1C1E" },
      { name: "Royal Blue", hex: "#1D3B6C" },
      { name: "Forest Green", hex: "#1D4E3A" },
      { name: "Ivory White", hex: "#E8E7DD" },
    ],
  },
  {
    id: "roma-tile",
    name: "Roma Classico Profile",
    property: "Excellent thermal insulation reducing interior temperature by up to 15°C under direct sunlight.",
    desc: "A stylized Spanish-tile corrugated profile suitable for high-end architecture, premium storage depots, and residential slopes.",
    specs: {
      thickness: "2.5mm · 3.0mm",
      width: "1050mm overall [960mm cover]",
      insulation: "Thermal: 0.16 W/m·K · Acoustic: 35dB",
      uvRating: "ASA Co-extruded UV-Block [Delta E < 5 at 10yrs]",
      warranty: "25-Year Material Integrity Warranty",
    },
    colors: [
      { name: "Terracotta Red", hex: "#B84A39" },
      { name: "Charcoal Black", hex: "#1A1C1E" },
      { name: "Ivory White", hex: "#E8E7DD" },
    ],
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const swatchesRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>({
    trapezoidal: "#1A1C1E",
    "roma-tile": "#B84A39",
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Swatch strip scroll-linked reveal
      gsap.from(".swatch-strip-item", {
        scrollTrigger: {
          trigger: swatchesRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });

      // Section cards rise stagger
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: ".product-cards-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 35,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="bg-chalk-50 text-ink-700 py-24 px-6 md:px-8 border-b border-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs uppercase text-lemon-600 tracking-widest font-semibold block mb-2">
              High-Performance Materials
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal-950 uppercase leading-none">
              3-Layer ASA Co-Extruded UPVC Sheets
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm text-charcoal-600 max-w-lg leading-relaxed">
              We design our structures with ASA-UPVC co-extruded sheets. The outer acrylic layer resists UV degradation and color-fading, the core structure dampens loading impact and acoustic vibration, and the inner lining resists chemical erosion.
            </p>
          </div>
        </div>

        {/* Color Swatch Strip (Scroll-linked) */}
        <div ref={swatchesRef} className="mb-16 border border-border bg-chalk-100 p-6 rounded-lg">
          <span className="font-mono text-[10px] tracking-wider text-charcoal-600 font-bold uppercase block mb-4">
            Color Swatch Range · ASA-Acrylic Finish Protection
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "Terracotta Red", hex: "#B84A39", desc: "Traditional terracotta tile matching" },
              { name: "Royal Blue", hex: "#1D3B6C", desc: "Corporate and commercial styling" },
              { name: "Forest Green", hex: "#1D4E3A", desc: "Industrial and landscape blend" },
              { name: "Charcoal Black", hex: "#1A1C1E", desc: "Premium architectural tone" },
              { name: "Ivory White", hex: "#E8E7DD", desc: "High albedo thermal reflective shade" },
            ].map((swatch, index) => (
              <div
                key={index}
                className="swatch-strip-item bg-chalk-50 p-4 border border-border rounded flex flex-col justify-between"
              >
                <div
                  className="w-full h-12 rounded border border-border/50 mb-3"
                  style={{ backgroundColor: swatch.hex }}
                />
                <div>
                  <h4 className="font-display font-bold text-xs text-charcoal-950 leading-tight">
                    {swatch.name}
                  </h4>
                  <span className="font-mono text-[9px] text-charcoal-600 block mt-1">
                    {swatch.hex}
                  </span>
                  <span className="text-[10px] text-ink-700/60 block mt-2 font-mono leading-none">
                    {swatch.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Cards Grid */}
        <div className="product-cards-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="product-card bg-chalk-100 border border-border hover:border-lemon-500 rounded-xl p-6 md:p-8 flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg group"
            >
              <div>
                {/* Title */}
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-charcoal-950 uppercase">
                    {product.name}
                  </h3>
                  <span className="font-mono text-[10px] text-charcoal-600 border border-border px-2 py-1 bg-chalk-50 font-bold uppercase">
                    ASA-UPVC
                  </span>
                </div>

                {/* Primary property leading text */}
                <p className="font-display font-bold text-sm text-charcoal-950 border-l-2 border-lemon-500 pl-3 mb-4 leading-snug">
                  {product.property}
                </p>

                <p className="text-xs text-charcoal-600 mb-6 leading-relaxed">
                  {product.desc}
                </p>

                {/* Spec Monospace Grid */}
                <div className="border border-border rounded bg-chalk-50 p-4 mb-6">
                  <span className="font-mono text-[9px] text-charcoal-600 uppercase tracking-widest font-semibold block mb-3 border-b border-border/60 pb-1">
                    Engineering Specs
                  </span>
                  <table className="w-full text-[11px] font-mono text-charcoal-800">
                    <tbody className="divide-y divide-border/60">
                      <tr>
                        <td className="py-2 text-charcoal-600 font-semibold uppercase pr-4">Thickness</td>
                        <td className="py-2 text-right">{product.specs.thickness}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-charcoal-600 font-semibold uppercase pr-4">Width</td>
                        <td className="py-2 text-right">{product.specs.width}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-charcoal-600 font-semibold uppercase pr-4">Insulation</td>
                        <td className="py-2 text-right">{product.specs.insulation}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-charcoal-600 font-semibold uppercase pr-4">UV Block</td>
                        <td className="py-2 text-right">{product.specs.uvRating}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-charcoal-600 font-semibold uppercase pr-4">Warranty</td>
                        <td className="py-2 text-right text-lemon-600 font-bold">{product.specs.warranty}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Card Footer: Color selection & CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/60">
                {/* Available Colors */}
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-600 block mb-2 font-bold">
                    Profile Colors
                  </span>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.hex}
                        onClick={() =>
                          setSelectedColor((prev) => ({ ...prev, [product.id]: color.hex }))
                        }
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${selectedColor[product.id] === color.hex
                            ? "border-lemon-500 scale-110"
                            : "border-border/60 hover:scale-105"
                          }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      >
                        {selectedColor[product.id] === color.hex && (
                          <Check
                            className={`h-3 w-3 ${color.hex === "#E8E7DD" ? "text-charcoal-950" : "text-chalk-50"
                              }`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ghost button animating fill from edge */}
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "default" }),
                    "relative overflow-hidden group border-charcoal-600 hover:border-lemon-500 text-charcoal-950 py-4 px-6 focus-visible:ring-2 focus-visible:ring-lemon-500 font-bold h-auto flex items-center justify-center"
                  )}
                >
                  <span className="relative z-10 transition-colors group-hover:text-charcoal-950 flex items-center">
                    Spec Sheet Request
                    <ArrowRight className="ml-1.5 h-4 w-4 text-lemon-600" />
                  </span>
                  <span className="absolute inset-0 bg-lemon-500/10 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
