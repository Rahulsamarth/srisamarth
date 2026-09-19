"use client";

import React, { useState } from "react";
import { Sun, Shield, Settings, Zap } from "lucide-react";

interface SpecDetail {
  title: string;
  desc: string;
  icon: React.ReactNode;
  specs: string[];
}

const specData: Record<string, SpecDetail> = {
  purlin: {
    title: "Structural Purlins",
    desc: "Heavy-duty cold-rolled steel structure acting as the backbone of the roof envelope.",
    icon: <Settings className="h-5 w-5 text-lemon-500" />,
    specs: ["2.0mm IS 2062 Grade Steel", "Rust-resistant red oxide coat", "Engineered for L/150 deflection"],
  },
  upvc: {
    title: "Multi-Layer UPVC Sheet",
    desc: "3-layer co-extruded UPVC corrugated sheets offering superior weather and heat protection.",
    icon: <Shield className="h-5 w-5 text-lemon-500" />,
    specs: ["2.5mm overall thickness", "Cuts heat transmission by up to 15°C", "Corrosion & acid proof profile"],
  },
  rail: {
    title: "Solar Mounting Rails",
    desc: "Anodized aluminum rail systems attached securely to peaks with water-tight gaskets.",
    icon: <Settings className="h-5 w-5 text-lemon-500" />,
    specs: ["6005-T5 Anodized Aluminum", "EPDM dual-seal rubber washers", "Leak-proof compression fastening"],
  },
  solar: {
    title: "Solar PV Panels",
    desc: "High-efficiency Tier-1 mono-crystalline solar panels optimized for generation.",
    icon: <Zap className="h-5 w-5 text-lemon-500" />,
    specs: ["550Wp Half-cut cell panels", "Anti-reflective tempered glass", "25-year performance warranty"],
  },
  sun: {
    title: "Optimization Angle",
    desc: "Structural slope calculated specifically to maximize solar irradiance and run-off.",
    icon: <Sun className="h-5 w-5 text-lemon-500" />,
    specs: ["15° tilt optimized for MH", "Zero shading design parameters", "High wind load resistant layout"],
  },
};

export default function RoofDiagram() {
  const [activeLayer, setActiveLayer] = useState<string>("upvc");

  return (
    <div className="w-full bg-charcoal-800 border border-charcoal-600 rounded-xl p-6 md:p-8 flex flex-col justify-between h-full min-h-[480px]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="font-mono text-xs uppercase text-lemon-500 tracking-widest font-semibold block mb-1">
            Interactive Cutaway
          </span>
          <h3 className="text-xl font-display font-bold text-chalk-50">
            Structural Cross-Section
          </h3>
        </div>
        <div className="font-mono text-[10px] text-charcoal-600 border border-charcoal-600 px-2 py-1 bg-charcoal-950/40">
          SYSTEM TILT: 15° · SCALE: 1:12
        </div>
      </div>

      {/* SVG Diagram Container */}
      <div className="relative flex-1 flex items-center justify-center min-h-[220px] max-h-[300px] mb-6">
        <svg
          viewBox="0 0 700 300"
          className="w-full h-full max-w-[600px] select-none pointer-events-auto"
        >
          {/* Sun & Rays */}
          <g
            className="cursor-pointer transition-all duration-300"
            style={{ opacity: activeLayer === "sun" ? 1 : 0.45 }}
            onClick={() => setActiveLayer("sun")}
          >
            <circle cx="600" cy="50" r="24" className="fill-lemon-500/20 stroke-lemon-500" strokeWidth="2" strokeDasharray="4 2" />
            <circle cx="600" cy="50" r="14" className="fill-lemon-500" />
            {/* Rays */}
            <line x1="600" y1="10" x2="600" y2="20" stroke="#E8D400" strokeWidth="2" />
            <line x1="600" y1="80" x2="600" y2="90" stroke="#E8D400" strokeWidth="2" />
            <line x1="560" y1="50" x2="570" y2="50" stroke="#E8D400" strokeWidth="2" />
            <line x1="630" y1="50" x2="640" y2="50" stroke="#E8D400" strokeWidth="2" />
            <line x1="572" y1="22" x2="579" y2="29" stroke="#E8D400" strokeWidth="2" />
            <line x1="621" y1="71" x2="628" y2="78" stroke="#E8D400" strokeWidth="2" />
          </g>

          {/* Sun Angle Ray */}
          <line
            x1="600"
            y1="50"
            x2="280"
            y2="170"
            stroke="#E8D400"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            className="transition-all duration-300"
            style={{ opacity: activeLayer === "sun" ? 0.7 : 0.2 }}
          />

          {/* Layer 1: Structural Purlins (Metal C-channels) */}
          <g
            className="cursor-pointer transition-all duration-300"
            style={{ opacity: activeLayer === "purlin" ? 1 : 0.45 }}
            onClick={() => setActiveLayer("purlin")}
          >
            {/* Purlin 1 */}
            <path d="M 80 240 L 110 240 L 110 210 L 80 210 L 80 215 L 105 215 L 105 235 L 80 235 Z" fill="#4B4F54" stroke="#4B4F54" strokeWidth="1" />
            {/* Purlin 2 */}
            <path d="M 330 200 L 360 200 L 360 170 L 330 170 L 330 175 L 355 175 L 355 195 L 330 195 Z" fill="#4B4F54" stroke="#4B4F54" strokeWidth="1" />

            {/* Angle Reference Line */}
            <line x1="80" y1="240" x2="500" y2="240" stroke="#4B4F54" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 180 240 A 100 100 0 0 0 174 225" fill="none" stroke="#E8D400" strokeWidth="1" />
            <text x="190" y="235" className="fill-lemon-500 font-mono text-[10px] select-none">15°</text>
          </g>

          {/* Layer 2: UPVC Corrugated Roofing Sheet */}
          <g
            className="cursor-pointer transition-all duration-300"
            style={{ opacity: activeLayer === "upvc" ? 1 : 0.45 }}
            onClick={() => setActiveLayer("upvc")}
          >
            {/* Continuous wavy sheet path representing UPVC ribs */}
            <path
              d="M 50 240 
                 Q 80 240 95 220 
                 T 140 220 
                 Q 170 220 185 200
                 T 230 200 
                 Q 260 200 275 180
                 T 320 180 
                 Q 350 180 365 160
                 T 410 160 
                 Q 440 160 455 140
                 T 500 140
                 Q 530 140 545 120
                 T 590 120"
              fill="none"
              stroke="#E8D400"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Inner layer for thickness depiction */}
            <path
              d="M 50 243 
                 Q 80 243 95 223 
                 T 140 223 
                 Q 170 223 185 203
                 T 230 203 
                 Q 260 203 275 183
                 T 320 183 
                 Q 350 183 365 163
                 T 410 163 
                 Q 440 163 455 143
                 T 500 143
                 Q 530 143 545 123
                 T 590 123"
              fill="none"
              stroke="#15171A"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>

          {/* Layer 3: Mounting Rails */}
          <g
            className="cursor-pointer transition-all duration-300"
            style={{ opacity: activeLayer === "rail" ? 1 : 0.45 }}
            onClick={() => setActiveLayer("rail")}
          >
            {/* Clamp & L-Foot on Rib Peak 1 */}
            <path d="M 130 216 L 150 216 L 150 205 L 140 205 L 140 190 L 125 190 L 125 200 L 130 200 Z" fill="#2C2E28" stroke="#4B4F54" strokeWidth="1" />
            <rect x="120" y="180" width="10" height="10" fill="#4B4F54" />

            {/* Clamp & L-Foot on Rib Peak 2 */}
            <path d="M 310 176 L 330 176 L 330 165 L 320 165 L 320 150 L 305 150 L 305 160 L 310 160 Z" fill="#2C2E28" stroke="#4B4F54" strokeWidth="1" />
            <rect x="300" y="140" width="10" height="10" fill="#4B4F54" />

            {/* Aluminum rail connecting the mounts */}
            <line x1="125" y1="185" x2="485" y2="137" stroke="#FAFAF5" strokeWidth="3" />
          </g>

          {/* Layer 4: Solar Panel Array */}
          <g
            className="cursor-pointer transition-all duration-300"
            style={{ opacity: activeLayer === "solar" ? 1 : 0.45 }}
            onClick={() => setActiveLayer("solar")}
          >
            {/* Solar Panel 1 */}
            <polygon points="120,180 340,150 340,140 120,170" fill="#23262A" stroke="#E8D400" strokeWidth="1" />
            {/* Blue solar active layer */}
            <polygon points="125,176 335,147 335,143 125,172" fill="#565C1F" />

            {/* Solar Panel 2 */}
            <polygon points="350,149 570,119 570,109 350,139" fill="#23262A" stroke="#E8D400" strokeWidth="1" />
            {/* Blue solar active layer */}
            <polygon points="355,145 565,116 565,112 355,141" fill="#565C1F" />

            {/* Solar cells grid lines panel 1 */}
            <line x1="180" y1="172" x2="180" y2="162" stroke="#23262A" strokeWidth="1" />
            <line x1="240" y1="164" x2="240" y2="154" stroke="#23262A" strokeWidth="1" />
            <line x1="300" y1="156" x2="300" y2="146" stroke="#23262A" strokeWidth="1" />

            {/* Solar cells grid lines panel 2 */}
            <line x1="410" y1="141" x2="410" y2="131" stroke="#23262A" strokeWidth="1" />
            <line x1="470" y1="133" x2="470" y2="123" stroke="#23262A" strokeWidth="1" />
            <line x1="530" y1="125" x2="530" y2="115" stroke="#23262A" strokeWidth="1" />
          </g>

          {/* Interactive Hotspot Pulses (Always Visible) */}
          <g>
            {/* Purlin Pulse */}
            <circle cx="100" cy="225" r="8" className="fill-lemon-500/20 stroke-lemon-500 animate-ping pointer-events-none" />
            <circle cx="100" cy="225" r="4" className="fill-lemon-500 cursor-pointer hover:scale-125 transition-transform" onClick={() => setActiveLayer("purlin")} />

            {/* UPVC Pulse */}
            <circle cx="230" cy="200" r="8" className="fill-lemon-500/20 stroke-lemon-500 animate-ping pointer-events-none" />
            <circle cx="230" cy="200" r="4" className="fill-lemon-500 cursor-pointer hover:scale-125 transition-transform" onClick={() => setActiveLayer("upvc")} />

            {/* Mounting Rail Pulse */}
            <circle cx="310" cy="160" r="8" className="fill-lemon-500/20 stroke-lemon-500 animate-ping pointer-events-none" />
            <circle cx="310" cy="160" r="4" className="fill-lemon-500 cursor-pointer hover:scale-125 transition-transform" onClick={() => setActiveLayer("rail")} />

            {/* Solar Pulse */}
            <circle cx="450" cy="130" r="8" className="fill-lemon-500/20 stroke-lemon-500 animate-ping pointer-events-none" />
            <circle cx="450" cy="130" r="4" className="fill-lemon-500 cursor-pointer hover:scale-125 transition-transform" onClick={() => setActiveLayer("solar")} />
          </g>
        </svg>
      </div>

      {/* Layer selector tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.keys(specData).map((key) => (
          <button
            key={key}
            onClick={() => setActiveLayer(key)}
            className={`px-3 py-1.5 font-mono text-xs uppercase border transition-all duration-200 cursor-pointer ${activeLayer === key
                ? "bg-lemon-500 text-charcoal-950 border-lemon-500 font-bold"
                : "bg-charcoal-950/40 text-chalk-50/60 border-charcoal-600 hover:text-chalk-50 hover:border-charcoal-600"
              }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Interactive Detail Box */}
      <div className="bg-charcoal-950 border border-charcoal-600 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {specData[activeLayer].icon}
            <h4 className="text-md font-display font-bold text-chalk-50 uppercase tracking-wide">
              {specData[activeLayer].title}
            </h4>
          </div>
          <p className="text-sm text-charcoal-600 leading-relaxed max-w-lg">
            {specData[activeLayer].desc}
          </p>
        </div>

        {/* Spec list inside the Box */}
        <div className="flex-shrink-0 min-w-[200px] border-t md:border-t-0 md:border-l border-charcoal-800 pt-4 md:pt-0 md:pl-6">
          <ul className="space-y-2">
            {specData[activeLayer].specs.map((spec, i) => (
              <li key={i} className="font-mono text-xs text-chalk-50/80 flex items-center">
                <span className="w-1.5 h-1.5 bg-lemon-500 mr-2 inline-block"></span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
