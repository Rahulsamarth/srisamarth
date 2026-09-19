"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processStages = [
  {
    number: "01",
    title: "Site Visit & Audit",
    desc: "Our structural engineer visits your site to audit existing purlins, measure layout dimensions, analyze local wind exposures, and check solar shading obstacles.",
  },
  {
    number: "02",
    title: "Integrated Design & Quotation",
    desc: "We draft structural drawings integrating UPVC sheets and solar layouts, run load calculations, and present a single quote for the entire roof package.",
  },
  {
    number: "03",
    title: "Structural Procurement",
    desc: "Fabricating structural components and sourcing custom-length ASA-UPVC sheets directly from manufacturing to minimize lap joints and potential leaks.",
  },
  {
    number: "04",
    title: "On-Site Installation",
    desc: "Our unified crew constructs the roof structure, lays the UPVC roofing sheets, and mounts the solar panel arrays in a single, coordinated build window.",
  },
  {
    number: "05",
    title: "System Integration & Handover",
    desc: "Electrical wiring of inverters, safety earthing checks, and utility net-metering commissioning, followed by double-checking water-tight fasteners.",
  },
  {
    number: "06",
    title: "Post-Install Maintenance Support",
    desc: "Activating the dual-warranty program (25yr performance) and establishing annual check-ups for solar panel washing and structural torque audits.",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !scrollTrackRef.current) return;

    // Suppress scroll pinning if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Just let it show normally without pinning
      return;
    }

    const ctx = gsap.context(() => {
      // Pin the scroll-track section while scrolling through the steps
      const pinTrigger = ScrollTrigger.create({
        trigger: scrollTrackRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          // Calculate which step is active based on progress (0 to 1)
          const stepCount = processStages.length;
          const rawIndex = Math.floor(self.progress * stepCount);
          const index = Math.min(rawIndex, stepCount - 1);
          setActiveStep(index);
        },
      });

      // Animate progress line indicator down the timeline track
      gsap.fromTo(
        ".timeline-indicator-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scrollTrackRef.current,
            start: "top top",
            end: "+=150%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-charcoal-950 text-chalk-50">
      {/* Scroll-track wrapper which handles scroll duration */}
      <div ref={scrollTrackRef} className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-8 border-b border-charcoal-800 dark">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Sticky Panel */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-mono text-xs uppercase text-lemon-400 tracking-widest font-semibold block">
              Workflow Sequence
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-chalk-50 uppercase leading-tight">
              A Unified Six-Stage Process
            </h2>
            <p className="text-sm text-charcoal-600 leading-relaxed max-w-sm">
              We manage the entire project from initial structural audits to final electrical net-metering setup. Scroll down to see the timeline in action.
            </p>

            {/* Display Active Stage Indicator */}
            <div className="hidden lg:block border border-charcoal-600 bg-charcoal-800/40 p-4 rounded font-mono text-xs text-charcoal-600 max-w-xs">
              <div>CURRENT ACTION STAGE:</div>
              <div className="text-lemon-500 font-bold text-sm mt-1 uppercase">
                {processStages[activeStep].number} · {processStages[activeStep].title}
              </div>
            </div>
          </div>

          {/* Right Scrolling/Transitioning Steps */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-12">
            
            {/* Background Track Line */}
            <div className="absolute left-3 sm:left-5 top-2 bottom-2 w-[2px] bg-charcoal-800 z-0">
              <div className="timeline-indicator-line w-full h-full bg-lemon-500 origin-top transform scale-y-0" />
            </div>

            <div className="space-y-12">
              {processStages.map((stage, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={stage.number}
                    className={`relative z-10 transition-all duration-300 ${
                      isActive ? "opacity-100 translate-x-2" : "opacity-30 translate-x-0"
                    }`}
                  >
                    {/* Circle Node */}
                    <div
                      className={`absolute -left-[35px] sm:-left-[43px] w-6 h-6 rounded-full border-2 flex items-center justify-center font-mono text-[9px] font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-lemon-500 border-lemon-500 text-charcoal-950 scale-110 shadow-[0_0_10px_rgba(232,212,0,0.5)]"
                          : "bg-charcoal-950 border-charcoal-600 text-charcoal-600"
                      }`}
                    >
                      {stage.number}
                    </div>

                    <div className="pl-4">
                      <h3
                        className={`font-display font-bold text-lg uppercase tracking-wide mb-2 transition-colors duration-300 ${
                          isActive ? "text-lemon-500" : "text-chalk-50"
                        }`}
                      >
                        {stage.title}
                      </h3>
                      <p className="text-xs text-charcoal-600 leading-relaxed max-w-md">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
