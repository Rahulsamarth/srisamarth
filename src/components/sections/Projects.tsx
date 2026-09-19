"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, ArrowUpRight, Grid, ShieldCheck, Video, Image as ImageIcon } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "roofing" | "solar" | "integrated";
  location: string;
  specs: string[];
  outcome: string;
  placeholderPattern: string; // CSS style gradient representation
  imageUrl?: string;
  videoUrl?: string;
}

const defaultProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Maharashtra Cold Storage Complex",
    category: "integrated",
    location: "Bhosari Industrial Estate, Pune",
    specs: ["22,400 SQ.FT", "250KWP SOLAR", "2.5MM UPVC"],
    outcome: "Cuts roof surface temperature by 14°C, yields 3.1M kWh solar power annually.",
    placeholderPattern: "linear-gradient(135deg, #15171A 0%, #23262A 100%)",
  },
  {
    id: "proj-2",
    title: "Shree Grains Warehouse",
    category: "solar",
    location: "Nashik, Maharashtra",
    specs: ["15,800 SQ.FT", "180KWP SOLAR", "3.0MM UPVC"],
    outcome: "Reduced monthly billing by 84% under net-metering commissioning.",
    placeholderPattern: "linear-gradient(135deg, #23262A 0%, #4B4F54 100%)",
  },
  {
    id: "proj-3",
    title: "Precision Forgings Plant",
    category: "roofing",
    location: "Chakan Industrial Zone",
    specs: ["45,000 SQ.FT", "STRUCTURAL TRUSS", "3.0MM UPVC"],
    outcome: "Chemical-corrosion proof ASA-UPVC shell resists acid pickling vapor.",
    placeholderPattern: "linear-gradient(135deg, #15171A 0%, #4B4F54 100%)",
  },
];

export default function Projects() {
  const [projectsData] = useState<ProjectItem[]>(defaultProjects);
  const [filter, setFilter] = useState<"all" | "roofing" | "solar" | "integrated">("all");

  const filteredProjects = projectsData.filter(
    (proj) => filter === "all" || proj.category === filter
  );

  return (
    <section
      id="projects"
      className="bg-chalk-50 text-ink-700 py-24 px-6 md:px-8 border-b border-border relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="font-mono text-xs uppercase text-lemon-600 tracking-widest font-semibold block mb-2">
              Case Studies & Portfolio
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal-950 uppercase leading-none">
                Installed Contracting Work
              </h2>
            </div>
          </div>

          {/* Filter Tabs using LayoutId for smooth transitions */}
          <div className="flex flex-wrap bg-chalk-100 border border-border p-1 rounded-lg self-start sm:self-auto max-w-full overflow-x-auto">
            {(["all", "roofing", "solar", "integrated"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-4 py-2 font-mono text-xs uppercase font-bold tracking-wider rounded-md transition-colors ${filter === tab ? "text-charcoal-950" : "text-charcoal-600 hover:text-charcoal-950"
                  }`}
              >
                {filter === tab && (
                  <motion.span
                    layoutId="active-project-filter"
                    className="absolute inset-0 bg-lemon-500 rounded-md -z-0"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Note on photography */}
        <div className="mb-8 border border-dashed border-charcoal-600/30 p-4 bg-chalk-100/50 rounded font-mono text-[10px] text-charcoal-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-lemon-600" />
            <span>[VIEW RECENT WORKS]</span>
          </div>
          <span className="hidden sm:inline">VERIFIED WORK RECORD</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={proj.id}
                className="bg-chalk-100 border border-border hover:border-lemon-500 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                {/* Visual Placeholder Block with Hover Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-950 flex flex-col justify-between p-6">
                  {/* Media Rendering */}
                  {proj.videoUrl ? (
                    <video
                      src={proj.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      muted loop autoPlay playsInline
                    />
                  ) : proj.imageUrl ? (
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    /* Default Placeholder */
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(#FAFAF5 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                        background: proj.placeholderPattern,
                      }}
                    />
                  )}

                  {/* Top indicators */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="bg-charcoal-950/80 border border-charcoal-600 text-chalk-50 font-mono text-[9px] px-2 py-1 uppercase backdrop-blur-sm">
                      {proj.category}
                    </span>
                    <div className="flex gap-2">
                      {proj.videoUrl && (
                        <span className="p-1 rounded bg-charcoal-950/80 border border-charcoal-600 text-lemon-500 backdrop-blur-sm">
                          <Video className="w-3 h-3" />
                        </span>
                      )}
                      {proj.imageUrl && !proj.videoUrl && (
                        <span className="p-1 rounded bg-charcoal-950/80 border border-charcoal-600 text-lemon-500 backdrop-blur-sm">
                          <ImageIcon className="w-3 h-3" />
                        </span>
                      )}
                      <span className="p-2 rounded-full bg-lemon-500 text-charcoal-950 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  {/* Custom Graphic Line representation (Only if no media) */}
                  {!proj.imageUrl && !proj.videoUrl && (
                    <div className="relative z-10 flex justify-center py-6 opacity-30 group-hover:opacity-60 transition-opacity">
                      <Grid className="h-16 w-16 text-lemon-500 stroke-[1]" />
                    </div>
                  )}

                  {/* Location label */}
                  <div className="relative z-10 flex items-center gap-1.5 text-xs text-chalk-50/90 font-mono mt-auto drop-shadow-md bg-charcoal-950/40 p-1.5 rounded inline-flex self-start backdrop-blur-sm">
                    <MapPin className="h-3 w-3 text-lemon-500" />
                    {proj.location}
                  </div>

                  {/* Gradient Glow hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content Block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-black text-lg text-charcoal-950 uppercase tracking-tight mb-3">
                      {proj.title}
                    </h3>

                    <p className="text-xs text-charcoal-600 mb-6 leading-relaxed">
                      {proj.outcome}
                    </p>
                  </div>

                  {/* Monospace spec badges bar */}
                  <div className="border-t border-border/60 pt-4 flex flex-wrap gap-2">
                    {proj.specs.map((spec, i) => (
                      <span
                        key={i}
                        className="font-mono text-[9px] font-bold text-charcoal-600 bg-chalk-50 border border-border px-2 py-1"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
