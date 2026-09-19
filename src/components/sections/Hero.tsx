"use client";

import React, { useRef } from "react";
import { ArrowRight, Droplets, Wind, Zap, Activity, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-charcoal-950 pt-32 pb-24 flex flex-col items-center overflow-hidden dark font-mono"
    >
      {/* Premium Dark Tech Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#23262A_0%,transparent_70%)] opacity-60"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(#35393E 1px, transparent 1px), linear-gradient(90deg, #35393E 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 w-full z-10 flex flex-col gap-12 text-center">

        {/* ROW 1: Typography & Content */}
        <div className="w-full max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-lemon-500/30 bg-lemon-500/10 px-4 py-1.5 font-mono text-xs font-semibold text-lemon-500 uppercase tracking-widest shadow-[0_0_20px_rgba(196,239,23,0.15)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lemon-500 animate-pulse"></span>
            Advanced Protection & Generation
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-black leading-[1.2] tracking-tight uppercase text-chalk-50">
            <span className="text-lemon-500 drop-shadow-[0_0_15px_rgba(196,239,23,0.3)]">High Performance</span> <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-[#89c565] to-lemon-500 inline-block drop-shadow-[0_0_15px_rgba(196,239,23,0.3)]">UPVC Sheets</span> <br className="hidden sm:block" />
            <span className="text-lemon-500 drop-shadow-[0_0_15px_rgba(196,239,23,0.2)]">and Solar System</span>
          </h1>

          <p className="text-lg text-white max-w-2xl mx-auto font-medium leading-relaxed mt-6">
            Upgrade your industrial facility with a dual-layer approach. Combining the structural integrity of thermal-shielding UPVC roofing sheets with high-yield decentralized solar energy systems for absolute efficiency.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a
              href="#quote"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-transparent text-chalk-50 border border-lemon-500 hover:bg-lemon-500/10 hover:border-lemon-400 transition-all duration-300 py-6 px-8 text-sm font-bold tracking-widest uppercase rounded-sm group relative overflow-hidden"
              )}
            >
              <div className="absolute inset-0 w-1/4 bg-lemon-500/20 -skew-x-12 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              Project Analysis
              <ArrowRight className="ml-2 h-4 w-4 text-lemon-500" />
            </a>

            <a
              href="#specs"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "bg-lemon-500 text-charcoal-950 font-bold hover:bg-lemon-400 border border-lemon-500 hover:shadow-[0_0_20px_rgba(196,239,23,0.4)] transition-all duration-300 py-6 px-8 text-sm tracking-widest uppercase rounded-sm"
              )}
            >
              Live Diagnostics
            </a>
          </div>
        </div>

        {/* ROW 2: Practical Technical Slider Matrix */}
        <div className="w-full mt-10">
          <TechnicalSliderPanel />
        </div>

      </div>
    </section>
  );
}

function TechnicalSliderPanel() {
  const leftLayerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  // Hardware accelerated, zero-rerender smooth sliding
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (leftLayerRef.current) leftLayerRef.current.style.clipPath = `polygon(0 0, ${val}% 0, ${val}% 100%, 0 100%)`;
    if (handleRef.current) handleRef.current.style.left = `${val}%`;
  };

  return (
    <div className="w-full bg-charcoal-900/40 border border-charcoal-700/60 rounded-2xl p-4 md:p-8 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] relative flex flex-col mt-6 max-w-7xl mx-auto">

      {/* Header Parameters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-charcoal-800/80 pb-6 mb-8 gap-4">
        <div className="flex items-center gap-3">
          <Activity className="h-6 w-6 text-blue-500 animate-[spin_4s_linear_infinite]" />
          <h3 className="text-2xl font-mono font-bold text-chalk-50 tracking-wider uppercase">
            Facility Architecture Analysis
          </h3>
        </div>

        <div className="flex gap-6 font-mono text-[11px] text-charcoal-600 uppercase tracking-widest font-bold">
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span> UPVC Weather Shell</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-lemon-500 animate-pulse"></span> Integrated Solar Gen</div>
        </div>
      </div>

      {/* Main Interactive Diagram Window (Massive cinematic structure) */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[21/9] min-h-[400px] md:min-h-[550px] bg-[#1a1c20] rounded-xl overflow-hidden border border-charcoal-800 flex items-center justify-center select-none group shadow-inner">

        {/* Baseline Engineering Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="w-full h-full bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        {/* RIGHT LAYER: SOLAR SYSTEM SHED (Base Layer) */}
        <div className="absolute inset-0 w-full h-full p-4 sm:p-10">
          <div className="w-full h-full relative">
            <svg viewBox="0 0 1000 500" className="w-[100%] h-[100%] absolute inset-0">
              <defs>
                <linearGradient id="solarCell" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="50%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="sunRay" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c4ef17" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c4ef17" stopOpacity="0" />
                </linearGradient>
                <filter id="solarGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Simulated Sun Rays */}
              <polygon points="350,0 650,0 600,200 400,200" fill="url(#sunRay)" className="animate-pulse" />
              <line x1="500" y1="0" x2="500" y2="200" stroke="url(#sunRay)" strokeWidth="4" strokeDasharray="15 15" className="animate-[move_10s_linear_infinite]" />

              {/* Large Industrial Shed Base */}
              <path d="M 250 250 L 750 250 L 750 450 L 250 450 Z" fill="#1C1D22" stroke="#2a313a" strokeWidth="3" />
              <path d="M 200 250 L 500 100 L 800 250 Z" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />

              {/* Shed Door & Details */}
              <rect x="425" y="320" width="150" height="130" fill="#141518" stroke="#2a313a" strokeWidth="2" />
              <line x1="500" y1="320" x2="500" y2="450" stroke="#2a313a" strokeWidth="2" />

              {/* Right Side Slope Solar Array */}
              <path d="M 500 90 L 820 250 L 795 265 L 500 115 Z" fill="url(#solarCell)" stroke="#c4ef17" strokeWidth="2" />
              <line x1="600" y1="140" x2="650" y2="225" stroke="#c4ef17" strokeWidth="1" strokeOpacity="0.8" />
              <line x1="700" y1="190" x2="745" y2="270" stroke="#c4ef17" strokeWidth="1" strokeOpacity="0.8" />

              {/* Left Side Slope Solar Array */}
              <path d="M 500 90 L 180 250 L 205 265 L 500 115 Z" fill="url(#solarCell)" stroke="#c4ef17" strokeWidth="2" />
              <line x1="400" y1="140" x2="350" y2="225" stroke="#c4ef17" strokeWidth="1" strokeOpacity="0.8" />
              <line x1="300" y1="190" x2="255" y2="270" stroke="#c4ef17" strokeWidth="1" strokeOpacity="0.8" />

              {/* Energy Transfer Cables (Glowing) */}
              <path d="M 500 250 L 500 400 L 400 400" fill="none" stroke="#c4ef17" strokeWidth="4" strokeDasharray="15 10" filter="url(#solarGlow)" className="animate-[move_1s_linear_infinite]" />
              <circle cx="400" cy="400" r="15" fill="#1e3a8a" stroke="#c4ef17" strokeWidth="3" filter="url(#solarGlow)" />
              <text x="382" y="405" fill="#c4ef17" fontSize="14" fontFamily="monospace" fontWeight="bold">INV</text>
            </svg>

            {/* Technical Parameter Cards (Solar) */}
            <div className="absolute top-[8%] right-[5%] z-30 pointer-events-none">
              <div className="bg-charcoal-950/90 border border-charcoal-700/50 rounded-xl p-4 backdrop-blur-md shadow-2xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-lemon-500"></div>
                <div className="flex items-center gap-2 mb-2 text-lemon-500">
                  <Zap className="h-4 w-4" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Active Output Array</span>
                </div>
                <div className="font-mono font-black text-chalk-50 text-2xl tracking-tight">MegaShed Integration</div>
                <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-charcoal-800">
                  <div>
                    <div className="text-[9px] font-mono text-charcoal-600 uppercase">Yield</div>
                    <div className="font-bold text-lemon-400 text-sm">~450 kWp</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-charcoal-600 uppercase">Mount Type</div>
                    <div className="font-bold text-chalk-50 text-sm">Non-Penetrative</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT LAYER: UPVC SHED + RAIN (Clipped Layer via DOM ref for 120hz smooth) */}
        <div
          ref={leftLayerRef}
          className="absolute inset-0 w-full h-full p-4 sm:p-10 z-10 border-r-2 border-blue-500/50 shadow-[5px_0_30px_rgba(59,130,246,0.2)] bg-[#1a1c20]"
          style={{ clipPath: `polygon(0 0, 50% 0, 50% 100%, 0 100%)`, willChange: "clip-path" }}
        >
          {/* Baseline Engineering Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-full bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          </div>

          <div className="w-full h-full relative">

            <svg viewBox="0 0 1000 500" className="w-[100%] h-[100%] absolute inset-0">
              <defs>
                <linearGradient id="rainSpray" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              <g className="opacity-80">
                {/* Heavy Rain Vectors */}
                <line x1="200" y1="0" x2="200" y2="250" stroke="url(#rainSpray)" strokeWidth="3" strokeDasharray="40 100" className="animate-[move_0.8s_linear_infinite]" />
                <line x1="380" y1="0" x2="380" y2="150" stroke="url(#rainSpray)" strokeWidth="2" strokeDasharray="30 150" className="animate-[move_0.6s_linear_infinite]" />
                <line x1="500" y1="0" x2="500" y2="100" stroke="url(#rainSpray)" strokeWidth="3" strokeDasharray="50 120" className="animate-[move_0.9s_linear_infinite]" />
                <line x1="700" y1="0" x2="700" y2="200" stroke="url(#rainSpray)" strokeWidth="2" strokeDasharray="40 100" className="animate-[move_1.1s_linear_infinite]" />
                <line x1="800" y1="0" x2="800" y2="250" stroke="url(#rainSpray)" strokeWidth="3" strokeDasharray="40 150" className="animate-[move_0.7s_linear_infinite]" />

                {/* Impact Splashes */}
                <path d="M 190 240 Q 200 220 210 240" fill="none" stroke="#60a5fa" strokeWidth="2" className="animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <path d="M 490 90 Q 500 70 510 90" fill="none" stroke="#60a5fa" strokeWidth="2" className="animate-[ping_1.2s_cubic-bezier(0,0,0.2,1)_infinite_0.3s]" />
                <path d="M 690 190 Q 700 170 710 190" fill="none" stroke="#60a5fa" strokeWidth="2" className="animate-[ping_0.9s_cubic-bezier(0,0,0.2,1)_infinite_0.1s]" />
              </g>

              {/* Large Industrial Shed Base */}
              <path d="M 250 250 L 750 250 L 750 450 L 250 450 Z" fill="#1C1D22" stroke="#2a313a" strokeWidth="3" />
              <path d="M 200 250 L 500 100 L 800 250 Z" fill="#2d3748" stroke="#4a5568" strokeWidth="2" />

              {/* Shed Door & Details */}
              <rect x="425" y="320" width="150" height="130" fill="#141518" stroke="#2a313a" strokeWidth="2" />
              <line x1="500" y1="320" x2="500" y2="450" stroke="#2a313a" strokeWidth="2" />

              {/* Right Side Slope UPVC Sheet */}
              <path d="M 500 90 L 820 250 L 795 265 L 500 115 Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="3" />
              {/* Left Side Slope UPVC Sheet */}
              <path d="M 500 90 L 180 250 L 205 265 L 500 115 Z" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="3" />

              {/* Water Deflection Arrows */}
              <path d="M 300 200 L 250 250" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="10 5" className="animate-[move_1.5s_linear_infinite]" />
              <path d="M 700 200 L 750 250" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="10 5" className="animate-[move_1.5s_linear_infinite]" />
            </svg>

            {/* Technical Parameter Cards (UPVC) */}
            <div className="absolute top-[8%] left-[5%] z-30 pointer-events-none">
              <div className="bg-charcoal-900/95 border border-charcoal-700/50 rounded-xl p-4 backdrop-blur-md shadow-2xl relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest">Envelope Shielding</span>
                </div>
                <div className="font-mono font-black text-chalk-50 text-2xl tracking-tight">Weather Shell Base</div>
                <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-charcoal-800">
                  <div>
                    <div className="text-[9px] font-mono text-charcoal-600 uppercase">Protection</div>
                    <div className="font-bold text-blue-400 text-sm">100% Anti-Corrode</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-charcoal-600 uppercase">Sound Dampening</div>
                    <div className="font-bold text-chalk-50 text-sm">32 dB Drop</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[10%] left-[5%] z-30 pointer-events-none font-mono text-[11px] text-charcoal-600 border border-charcoal-800 bg-charcoal-950/80 p-3 rounded-lg backdrop-blur shadow-xl">
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-blue-500" />
                <span>Zero Moisture Intake on Large Sheds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Draggable Handle for Slider (Hardware Accelerated via DOM ref) */}
        <div
          ref={handleRef}
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-[#89c565] to-lemon-500 z-20 shadow-[0_0_20px_rgba(196,239,23,0.6)] flex items-center justify-center pointer-events-none"
          style={{ left: `50%`, willChange: "left" }}
        >
          <div className="flex bg-charcoal-950 border border-charcoal-600 rounded-full shadow-2xl p-2 gap-1.5 items-center transition-transform group-hover:scale-125">
            <div className="w-1.5 h-10 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <div className="w-1.5 h-10 bg-lemon-500 rounded-full shadow-[0_0_8px_rgba(196,239,23,0.8)]" />
          </div>
        </div>

        {/* Invisible Range Input spanning the whole container */}
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          onChange={handleInput}
          className="absolute inset-0 opacity-0 cursor-ew-resize z-50 w-full h-full touch-pan-x"
          aria-label="Structural and Solar Analysis Slider"
        />
      </div>

    </div>
  );
}
