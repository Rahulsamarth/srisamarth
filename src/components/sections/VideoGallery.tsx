"use client";

import React, { useState } from "react";
import { Play, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const videos = [
    {
        id: 1,
        title: "UPVC Roofing Installation",
        duration: "2:45",
        category: "Architecture",
        thumbnail: "https://images.unsplash.com/photo-1621905252472-740bc1dbb8b8?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Solar Matrix Integration",
        duration: "3:10",
        category: "Energy",
        thumbnail: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Weather Resistance Test",
        duration: "1:30",
        category: "Testing",
        thumbnail: "https://images.unsplash.com/photo-1534224039826-c7a0c7106ed4?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 4,
        title: "Dual Layer Efficiency",
        duration: "4:20",
        category: "Analysis",
        thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=600&auto=format&fit=crop",
    },
];

export default function VideoGallery() {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);

    return (
        <section id="videos" className="py-24 bg-charcoal-900 border-t border-charcoal-800 relative z-10 overflow-hidden font-mono">
            {/* Background grids */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
                <div className="w-full h-full bg-[linear-gradient(to_right,#C4EF17_1px,transparent_1px),linear-gradient(to_bottom,#C4EF17_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-charcoal-800 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-2 h-2 rounded-full bg-lemon-500 animate-pulse"></span>
                            <span className="text-lemon-500 font-bold uppercase tracking-widest text-xs">Media Center</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-chalk-50 tracking-tight uppercase">
                            Project <span className="text-lemon-500">Visuals</span>
                        </h2>
                    </div>

                    <button className="text-sm font-bold uppercase tracking-widest text-charcoal-600 hover:text-lemon-500 transition-colors flex items-center gap-2 group">
                        View full gallery
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((vid) => (
                        <div
                            key={vid.id}
                            className="group relative rounded-xl overflow-hidden cursor-pointer border border-charcoal-700 bg-charcoal-950 shadow-lg hover:shadow-[0_0_20px_rgba(196,239,23,0.1)] hover:border-lemon-500/50 transition-all duration-300"
                            onClick={() => setActiveVideo(vid.id)}
                        >
                            {/* Thumbnail image */}
                            <div className="aspect-[4/5] overflow-hidden relative">
                                <div className="absolute inset-0 bg-charcoal-950/40 group-hover:bg-charcoal-950/20 transition-all z-10"></div>
                                <img
                                    src={vid.thumbnail}
                                    alt={vid.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-14 h-14 rounded-full bg-charcoal-950/80 border border-lemon-500/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-lemon-500 transition-all shadow-[0_0_15px_rgba(196,239,23,0)] group-hover:shadow-[0_0_20px_rgba(196,239,23,0.4)]">
                                        <Play className="w-5 h-5 text-lemon-500 group-hover:text-charcoal-950 ml-1" />
                                    </div>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute top-4 right-4 z-20 bg-charcoal-900/80 backdrop-blur-sm border border-charcoal-700 text-chalk-50 text-[10px] font-bold px-2 py-1 rounded">
                                    {vid.duration}
                                </div>
                            </div>

                            {/* Info Bar */}
                            <div className="p-5 border-t border-charcoal-700 relative z-20 bg-charcoal-950">
                                <div className="text-[10px] text-lemon-500 uppercase tracking-widest font-bold mb-2">
                                    {vid.category}
                                </div>
                                <h3 className="text-chalk-50 font-bold uppercase tracking-wide group-hover:text-lemon-400 transition-colors">
                                    {vid.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Basic Video Modal - active when a video is clicked */}
            {activeVideo !== null && (
                <div className="fixed inset-0 z-[100] bg-charcoal-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10">
                    <button
                        onClick={() => setActiveVideo(null)}
                        className="absolute top-6 right-6 w-12 h-12 bg-charcoal-900 border border-charcoal-700 hover:border-lemon-500 rounded-full flex items-center justify-center text-chalk-50 transition-colors z-50"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden border border-charcoal-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative flex flex-col items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-center pointer-events-none">
                            <div className="flex flex-col items-center">
                                <Play className="w-16 h-16 text-lemon-500/50 mb-6" />
                                <p className="text-charcoal-600 font-mono text-sm uppercase tracking-widest max-w-md">Video player wrapper. Connect a real CMS or video streaming platform for {videos.find(v => v.id === activeVideo)?.title}.</p>
                            </div>
                        </div>
                        {/* Actual Video Tag would go here */}
                        <video
                            autoPlay
                            controls
                            className="w-full h-full object-cover z-10"
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
