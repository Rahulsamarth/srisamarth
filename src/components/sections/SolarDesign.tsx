"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { Zap, DollarSign, Calendar, Sliders, ShieldAlert, BadgeCheck } from "lucide-react";

// Technical specs of materials used in solar
const solarEquipment = [
  { category: "Solar Modules", model: "Mono-PERC Half-cut 550Wp", brands: "Waaree / Vikram / Adani" },
  { category: "Grid Inverters", model: "On-Grid Smart Inverters (IP65)", brands: "Growatt / Sungrow / Solis" },
  { category: "BOS Hardware", model: "Anodized rails, XLPE cables, MC4", brands: "Sri Samarth Engineered Assembly" },
  { category: "Safety System", model: "SPD Type-II, LA, Dual Earthing", brands: "OBO Betterman / Engineered Earthing" },
];

export default function SolarDesign() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Calculator states
  const [monthlyBill, setMonthlyBill] = useState(15000); // Default ₹15,000 monthly bill

  // Derived values based on realistic engineering formulas for Western India
  // Average rate: ₹8.5 / kWh. Average production: 120 kWh per kWp per month.
  const estSystemSize = Math.round((monthlyBill / 8.5 / 120) * 2) / 2; // in kW, rounded to nearest 0.5
  const estAnnualSavings = Math.round(estSystemSize * 120 * 12 * 8.5); // Annual generation * rate
  const estPaybackPeriod = 4.2; // Years (constant or slight variation)

  // Motion values for count up
  const systemSizeVal = useMotionValue(0);
  const savingsVal = useMotionValue(0);
  const paybackVal = useMotionValue(0);

  // Rounded values for display
  const dispSystemSize = useTransform(systemSizeVal, (latest) => latest.toFixed(1));
  const dispSavings = useTransform(savingsVal, (latest) => Math.floor(latest).toLocaleString("en-IN"));
  const dispPayback = useTransform(paybackVal, (latest) => latest.toFixed(1));

  useEffect(() => {
    if (isInView) {
      animate(systemSizeVal, estSystemSize, { duration: 1.5, ease: "easeOut" });
      animate(savingsVal, estAnnualSavings, { duration: 1.8, ease: "easeOut" });
      animate(paybackVal, estPaybackPeriod, { duration: 1.2, ease: "easeOut" });
    }
  }, [isInView, estSystemSize, estAnnualSavings]);

  // Re-run animations when the slider value changes
  useEffect(() => {
    animate(systemSizeVal, estSystemSize, { duration: 0.6, ease: "easeOut" });
    animate(savingsVal, estAnnualSavings, { duration: 0.8, ease: "easeOut" });
    animate(paybackVal, estPaybackPeriod, { duration: 0.5, ease: "easeOut" });
  }, [monthlyBill]);

  return (
    <section
      ref={sectionRef}
      id="solar"
      className="bg-olive-100 text-ink-700 py-24 px-6 md:px-8 border-b border-olive-600/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <span className="font-mono text-xs uppercase text-olive-600 tracking-widest font-semibold block mb-2">
              Solar Integration Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-ink-700 uppercase leading-none">
              Precision Engineered PV Systems
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="text-sm text-charcoal-600 max-w-lg leading-relaxed">
              We design, install, and wire high-yield on-grid solar arrays directly onto our structural UPVC roofing panels. No independent sub-contractors, no structural leakage, and a single warranty covering both the roof and the power generated.
            </p>
          </div>
        </div>

        {/* Payback Calculator & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Slider Form */}
          <div className="lg:col-span-5 bg-chalk-50 border border-olive-600/20 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <span className="font-mono text-xs text-olive-600 font-bold uppercase tracking-wider">
                Payback Estimator
              </span>
              <Sliders className="h-4 w-4 text-olive-600" />
            </div>

            <div className="space-y-6">
              <div>
                <label className="font-display font-bold text-sm text-ink-700 block mb-2">
                  Average Monthly Electricity Bill
                </label>
                <div className="font-mono text-2xl font-black text-olive-600 mb-4">
                  ₹{monthlyBill.toLocaleString("en-IN")}
                </div>
                <input
                  type="range"
                  min="2000"
                  max="50000"
                  step="1000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-1.5 bg-olive-100 rounded-lg appearance-none cursor-pointer accent-olive-600 focus:outline-none"
                  style={{
                    background: `linear-gradient(to right, #565C1F 0%, #565C1F ${
                      ((monthlyBill - 2000) / (50000 - 2000)) * 100
                    }%, #E3E6CE ${((monthlyBill - 2000) / (50000 - 2000)) * 100}%, #E3E6CE 100%)`,
                  }}
                />
                <div className="flex justify-between text-[10px] font-mono text-charcoal-600 mt-2">
                  <span>₹2,000</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              <div className="border-t border-olive-600/10 pt-4 text-xs text-charcoal-600 leading-relaxed space-y-2">
                <div className="flex items-start gap-2">
                  <ShieldAlert className="h-4 w-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Calculations based on average solar irradiance of 5.2 kWh/m²/day in Maharashtra.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Savings & Outcomes Outputs */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 h-full">
            {/* Stat 1: System Size */}
            <div className="bg-chalk-50 border border-olive-600/20 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <Zap className="h-6 w-6 text-olive-600 mb-4" />
                <h4 className="font-mono text-[10px] text-charcoal-600 font-bold uppercase tracking-wider">
                  Recommended System
                </h4>
              </div>
              <div className="mt-8">
                <div className="font-mono text-4xl sm:text-5xl font-black text-ink-700 tracking-tight leading-none">
                  <motion.span>{dispSystemSize}</motion.span>
                  <span className="text-lg font-normal ml-1">kWp</span>
                </div>
                <span className="text-[10px] font-mono text-charcoal-600 mt-2 block">
                  EST. PANEL ARRAY
                </span>
              </div>
            </div>

            {/* Stat 2: Annual Savings */}
            <div className="bg-chalk-50 border border-olive-600/20 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <DollarSign className="h-6 w-6 text-olive-600 mb-4" />
                <h4 className="font-mono text-[10px] text-charcoal-600 font-bold uppercase tracking-wider">
                  Annual Bill Savings
                </h4>
              </div>
              <div className="mt-8">
                <div className="font-mono text-3xl sm:text-4xl font-black text-olive-600 tracking-tight leading-none">
                  ₹<motion.span>{dispSavings}</motion.span>
                </div>
                <span className="text-[10px] font-mono text-charcoal-600 mt-2 block">
                  SAVED EACH YEAR
                </span>
              </div>
            </div>

            {/* Stat 3: Payback Period */}
            <div className="bg-chalk-50 border border-olive-600/20 p-6 rounded-xl flex flex-col justify-between">
              <div>
                <Calendar className="h-6 w-6 text-olive-600 mb-4" />
                <h4 className="font-mono text-[10px] text-charcoal-600 font-bold uppercase tracking-wider">
                  Estimated Payback
                </h4>
              </div>
              <div className="mt-8">
                <div className="font-mono text-4xl sm:text-5xl font-black text-ink-700 tracking-tight leading-none">
                  ~<motion.span>{dispPayback}</motion.span>
                  <span className="text-lg font-normal ml-1">Yrs</span>
                </div>
                <span className="text-[10px] font-mono text-charcoal-600 mt-2 block">
                  ROI BREAK-EVEN
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specs & Equipment List */}
        <div className="bg-chalk-50 border border-olive-600/20 rounded-xl p-6 md:p-8">
          <span className="font-mono text-[10px] tracking-wider text-olive-600 font-bold uppercase block mb-6">
            Bill of Materials (BOM) · Tier-1 Equipment Standards
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solarEquipment.map((eq, idx) => (
              <div key={idx} className="border-l border-olive-600/30 pl-4 py-1">
                <h4 className="font-mono text-[10px] text-charcoal-600 font-bold uppercase tracking-wider mb-2">
                  {eq.category}
                </h4>
                <div className="font-display font-bold text-sm text-ink-700 mb-1">
                  {eq.model}
                </div>
                <div className="text-[10px] font-mono text-charcoal-600 flex items-center gap-1">
                  <BadgeCheck className="h-3 w-3 text-olive-600 inline" />
                  {eq.brands}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
