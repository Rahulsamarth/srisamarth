"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PenTool, Compass, FileText, ClipboardCheck, Ruler, Activity, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Site Assessment & Wind Load Auditing",
    desc: "We analyze local wind zone velocity (up to 180 km/h parameters), building height, and terrain category to calculate specific design pressure coefficients.",
    icon: <Compass className="h-5 w-5 text-lemon-500" />,
  },
  {
    number: "02",
    title: "Structural & Purlin Layout Design",
    desc: "Calculate maximum allowable purlin spacing (typically 1.0m to 1.2m) based on sheet thickness and local load conditions to prevent deflection.",
    icon: <Ruler className="h-5 w-5 text-lemon-500" />,
  },
  {
    number: "03",
    title: "Integrated Solar Jointing & Drawing Plans",
    desc: "Draft structural drawings specifying the exact location of solar mounts relative to the underlying purlins. Every mount aligns with structural nodes.",
    icon: <PenTool className="h-5 w-5 text-lemon-500" />,
  },
  {
    number: "04",
    title: "Material Spec & Fastener Layouts",
    desc: "Specify heavy-duty EPDM gasket self-drilling screws and anodized structural rails. No generic fasteners. Corrosion risk is completely engineered out.",
    icon: <FileText className="h-5 w-5 text-lemon-500" />,
  },
  {
    number: "05",
    title: "Load Calculation & Peer Sign-Off",
    desc: "Final structural checks ensuring dead load (UPVC + solar panels), live load (maintenance crews), and wind uplift safety factors (minimum 1.5).",
    icon: <ClipboardCheck className="h-5 w-5 text-lemon-500" />,
  },
];

const stepDetails = [
  {
    category: "WIND ZONE CAPACITY & DESIGN PRESSURE",
    title: "Site Structural Meteorology",
    parameters: [
      { name: "Basic Wind Velocity (V_b)", value: "39 - 44 m/s (Zone 3/4)" },
      { name: "Terrain Category", value: "Category 2 (Open Terrain)" },
      { name: "Risk Coefficient (k1)", value: "1.00 (50-Year Structural)" },
      { name: "Topography Factor (k3)", value: "1.00 (Roof Flatness)" },
      { name: "Design Wind Pressure (p_d)", value: "1.25 kPa (Calculated)" },
    ],
    standard: "IS 875 (Part 3) : 2015",
    calculus: "p_z = 0.6 * (V_b * k1 * k2 * k3)^2",
  },
  {
    category: "STRUCTURAL STEEL WORK & PURLINS",
    title: "Steel Span Geometry",
    parameters: [
      { name: "Standard Purlin Profile", value: "IS 2062 Cold Formed C / Z Section" },
      { name: "Material Yield Strength", value: "YS 250 / YS 350 MPa" },
      { name: "Allowable Deflection", value: "L / 150 (Span Wind Uplift)" },
      { name: "Recommended Spacing", value: "1.00 Meter to 1.20 Meters max" },
      { name: "Support Connection", value: "M12 High Tensile Class 8.8 bolts" },
    ],
    standard: "IS 800 : 2007 (Steel Design Code)",
    calculus: "Deflection Δ = (5 * w * L^4) / (384 * E * I) <= L/150",
  },
  {
    category: "INTEGRATION ANCHOR NODES",
    title: "Solar Sub-Structure Fastening",
    parameters: [
      { name: "Bracket Interface", value: "Anodized Aluminum L-Foot Adapter" },
      { name: "Purlin Penetration", value: "Direct crest fastening with metal seal" },
      { name: "Sealing Rubber Gasket", value: "EPDM dual-layer compression ring" },
      { name: "Rigid Fastener Torque", value: "12 Nm to 15 Nm calibrated limit" },
      { name: "Static Shear Resistance", value: "3.20 kN pullout force rating" },
    ],
    standard: "MNRE Structural Guidelines / ASME",
    calculus: "F_uplift_limit = n * R_tensile * FOS_Multiplier(1.5)",
  },
  {
    category: "MATERIAL CLADDING SPECIFICATION",
    title: "Corrosion Proofing & Shell Quality",
    parameters: [
      { name: "Roof Profile Thickness", value: "2.5mm / 3.0mm Multi-layer ASA-UPVC" },
      { name: "Structural Width", value: "1050mm (Effective Width: 960mm)" },
      { name: "Crest Peak Altitude", value: "40mm (High runoff channels)" },
      { name: "Coeff of Thermal Expansion", value: "4.8 x 10^-5 mm/mm/°C" },
      { name: "Sound Damping Index", value: "Up to 30 dB reduction" },
    ],
    standard: "ASTM D638 / ISO 9001 certified",
    calculus: "Material Extension ΔL = L * α * (T_max - T_min)",
  },
  {
    category: "FINAL AUDIT AND UPLIFT CALCULATION",
    title: "Total Load Audit Ledger",
    parameters: [
      { name: "Roof Dead Load (DL)", value: "0.18 kN/m² (UPVC Cladding & Rails)" },
      { name: "Solar Array Dead Load", value: "0.15 kN/m² (550Wp Tier-1 Panels)" },
      { name: "Structural Live Load (LL)", value: "0.75 kN/m² (Maintenance crews)" },
      { name: "Design Safety Coefficient", value: "1.65 (Required safety margin: 1.5)" },
      { name: "Uplift Resistance Check", value: "1.85 safety multiple check passed" },
    ],
    standard: "IIT structural certification peer audit",
    calculus: "Total Factored Load = 1.2 * DL + 1.5 * LL - 1.5 * Wind_Uplift",
  },
];

export default function Architecture() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger steps entrance anim
      gsap.from(".arch-step", {
        scrollTrigger: {
          trigger: ".arch-steps-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: -30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeDetail = stepDetails[activeStep];

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="bg-charcoal-950 text-chalk-50 py-24 px-6 md:px-8 border-b border-charcoal-800 dark"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Information Steps */}
        <div className="lg:col-span-6 space-y-12">
          <div>
            <span className="font-mono text-xs uppercase text-lemon-400 tracking-widest font-semibold block mb-2 font-black">
              Engineering Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-chalk-50 uppercase leading-none mb-4">
              We design structures, not just supply sheets.
            </h2>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Every roof is an engineered system. Our in-house technical draftsmen calculate dead loads, wind uplifts, and thermal expansion properties prior to procurement. This ensures the roof structure seamlessly supports solar mounting rails without structural stress.
            </p>
          </div>

          {/* Steps Timeline (Clickable buttons) */}
          <div className="arch-steps-container space-y-4 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[1px] before:bg-charcoal-800">
            {steps.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "arch-step w-full text-left flex gap-6 relative group p-3 border rounded transition-all duration-300 cursor-pointer",
                  activeStep === idx
                    ? "bg-charcoal-800/60 border-lemon-500/50 shadow-[0_0_15px_rgba(232,212,0,0.05)]"
                    : "bg-transparent border-transparent hover:bg-charcoal-950/20"
                )}
              >
                {/* Step number marker */}
                <div
                  className={cn(
                    "flex-shrink-0 w-12 h-12 rounded border flex items-center justify-center font-mono text-sm font-bold transition-all duration-300 z-10",
                    activeStep === idx
                      ? "border-lemon-500 bg-lemon-500 text-charcoal-950 font-black scale-105"
                      : "border-charcoal-600 bg-charcoal-950 text-charcoal-600 group-hover:border-lemon-500 group-hover:text-lemon-500"
                  )}
                >
                  {step.number}
                </div>
                <div className="pt-1 select-none">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={cn("transition-colors duration-300", activeStep === idx ? "text-lemon-400" : "text-charcoal-600")}>
                      {step.icon}
                    </span>
                    <h3
                      className={cn(
                        "font-display font-bold text-sm uppercase tracking-wide transition-colors duration-300",
                        activeStep === idx ? "text-chalk-50" : "text-chalk-50/70 group-hover:text-chalk-50"
                      )}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Spec Detail Inspector (Addresses 'no drawings') */}
        <div className="lg:col-span-6 w-full h-full min-h-[480px]">
          <div className="bg-charcoal-800 border border-charcoal-600 rounded-xl p-6 md:p-8 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-lemon-500/5 blur-2xl rounded-full pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-charcoal-600 pb-4 mb-6">
                <div>
                  <span className="font-mono text-[9px] uppercase text-lemon-400 tracking-widest font-semibold block mb-1">
                    {activeDetail.category}
                  </span>
                  <h3 className="text-lg font-display font-black text-chalk-50 uppercase tracking-tight">
                    {activeDetail.title}
                  </h3>
                </div>
                <Terminal className="h-5 w-5 text-charcoal-600" />
              </div>

              {/* Specifications Parameters List */}
              <div className="space-y-4 font-mono">
                {activeDetail.parameters.map((param, i) => (
                  <div key={i} className="flex justify-between items-start border-b border-charcoal-600/30 pb-2.5">
                    <span className="text-[10px] text-charcoal-600 flex items-center font-bold">
                      <span className="w-1.5 h-1.5 bg-lemon-500 mr-2 rounded-full inline-block"></span>
                      {param.name}
                    </span>
                    <span className="text-[10px] font-bold text-chalk-50 text-right leading-tight max-w-[200px]">
                      {param.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculations and Code Reference */}
            <div className="mt-8 bg-charcoal-950 border border-charcoal-600 rounded-lg p-4 font-mono text-[10px]">
              <div className="flex items-center gap-2 mb-2 text-charcoal-600 font-bold uppercase tracking-wider text-[8px]">
                <Activity className="h-3 w-3 text-lemon-500 animate-pulse" />
                Structural Physics Equation
              </div>
              <div className="bg-charcoal-950/80 border border-charcoal-600/40 p-2.5 rounded font-black text-lemon-400 overflow-x-auto whitespace-nowrap scrollbar-thin">
                <code>{activeDetail.calculus}</code>
              </div>
              <div className="mt-3 flex items-center justify-between text-[8px] text-charcoal-600">
                <span>VERIFICATION REFERENCE STANDARD</span>
                <span className="text-chalk-50/80 font-bold block">{activeDetail.standard}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
