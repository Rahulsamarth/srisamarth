"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Check, Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        buildingType: "industrial",
        projectSize: "",
        roofing: false,
        solar: false,
        message: "",
    });

    const [focusedInputs, setFocusedInputs] = useState<Record<string, boolean>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleFocus = (field: string) => {
        setFocusedInputs((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field: string, val: string) => {
        if (!val) {
            setFocusedInputs((prev) => ({ ...prev, [field]: false }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API request to engineering desk
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset success banner after 5s
        setTimeout(() => {
            setIsSuccess(false);
            setFormData({
                name: "",
                phone: "",
                buildingType: "industrial",
                projectSize: "",
                roofing: false,
                solar: false,
                message: "",
            });
            setFocusedInputs({});
        }, 5000);
    };

    return (
        <section
            id="contact"
            className="bg-charcoal-950 text-chalk-50 py-24 px-6 md:px-8 border-b border-charcoal-800 dark"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Left Column: Office Details & Coverage */}
                <div className="lg:col-span-5 space-y-12">
                    <div>
                        <span className="font-mono text-xs uppercase text-lemon-400 tracking-widest font-semibold block mb-2">
                            Engineering Office
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-display font-black text-chalk-50 uppercase leading-none mb-4">
                            Request a Free Site Assessment
                        </h2>
                        <p className="text-sm text-charcoal-600 leading-relaxed">
                            Submit your building coordinates or structural layout. Our technical estimators will run wind-zone coefficients, calculate load distributions for solar arrays, and draft a plan within 48 business hours.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-charcoal-800 border border-charcoal-600 rounded">
                                <Phone className="h-5 w-5 text-lemon-500" />
                            </div>
                            <div>
                                <span className="font-mono text-[9px] text-charcoal-600 block uppercase">
                                    Contracting & Engineering Desk
                                </span>
                                <a href="tel:+918147130721" className="text-sm sm:text-md text-chalk-50 font-bold hover:text-lemon-500 transition-colors">
                                    8147130721, 7204676790
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-charcoal-800 border border-charcoal-600 rounded">
                                <Mail className="h-5 w-5 text-lemon-500" />
                            </div>
                            <div>
                                <span className="font-mono text-[9px] text-charcoal-600 block uppercase">
                                    Technical Drawings Submission
                                </span>
                                <a href="mailto:srisamarthtraders11@gmail.com" className="text-sm sm:text-md text-chalk-50 font-bold hover:text-lemon-500 transition-colors">
                                    srisamarthtraders11@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-charcoal-800 border border-charcoal-600 rounded">
                                <MapPin className="h-5 w-5 text-lemon-500" />
                            </div>
                            <div>
                                <span className="font-mono text-[9px] text-charcoal-600 block uppercase">
                                    Industrial Warehouse Base
                                </span>
                                <p className="text-xs sm:text-sm text-chalk-50 font-mono">
                                    sri samarth traders jamshetty complex opp to Trinetra Lawns naganhalli cross ring road kalaburgi karnataka
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Operational Area List */}
                    <div className="border-t border-charcoal-600/30 pt-8">
                        <span className="font-mono text-[10px] uppercase text-charcoal-600 tracking-wider font-bold block mb-4">
                            Active Project Operations Area
                        </span>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[10px] text-charcoal-600">
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-lemon-500"></span> Chakan MIDC Zone
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-lemon-500"></span> Bhosari Industrial Sector
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-lemon-500"></span> Talegaon Industrial Hub
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-lemon-500"></span> Nashik Ambad MIDC
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-lemon-500"></span> Aurangabad Five Star
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 bg-lemon-500"></span> Kolhapur Shiroli Zone
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Assessment Form */}
                <div className="lg:col-span-7 bg-charcoal-800 border border-charcoal-600 rounded-xl p-6 md:p-8 relative overflow-hidden">
                    {/* Success Dialog overlay */}
                    {isSuccess && (
                        <div className="absolute inset-0 bg-charcoal-950/95 z-20 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                            <div className="w-16 h-16 rounded-full bg-lemon-500/10 border border-lemon-500 flex items-center justify-center text-lemon-500 mb-6">
                                <Check className="h-8 w-8 stroke-[3]" />
                            </div>
                            <h3 className="font-display font-black text-xl text-chalk-50 uppercase tracking-wide mb-2">
                                Coordinates Transmitted
                            </h3>
                            <p className="text-xs text-charcoal-600 max-w-sm leading-relaxed mb-6 font-mono">
                                Sri Samarth Estimating Desk registered query. Engineering design pipeline initialized.
                            </p>
                            <div className="text-[10px] font-mono text-lemon-500 animate-pulse">
                                [TICKET GENERATED · ASSIGNING REGIONAL INSPECTOR]
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Form Title */}
                        <div className="border-b border-charcoal-900 pb-4 mb-6">
                            <h3 className="font-mono text-xs uppercase text-lemon-500 tracking-widest font-bold">
                                Project Spec Submission
                            </h3>
                        </div>

                        {/* Checkbox selector */}
                        <div>
                            <span className="font-mono text-[10px] text-charcoal-600 block uppercase mb-3">
                                Select Scope of Contract
                            </span>
                            <div className="flex flex-wrap gap-4">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={formData.roofing}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, roofing: e.target.checked }))}
                                        className="sr-only peer"
                                    />
                                    <div className="w-5 h-5 border border-charcoal-600 bg-charcoal-950 flex items-center justify-center text-charcoal-950 peer-checked:bg-lemon-500 peer-checked:border-lemon-500 transition-all rounded">
                                        {formData.roofing && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                                    </div>
                                    <span className="font-mono text-xs text-chalk-50/80 peer-checked:text-chalk-50 uppercase font-semibold">
                                        ASA-UPVC Roofing Sheets
                                    </span>
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={formData.solar}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, solar: e.target.checked }))}
                                        className="sr-only peer"
                                    />
                                    <div className="w-5 h-5 border border-charcoal-600 bg-charcoal-950 flex items-center justify-center text-charcoal-950 peer-checked:bg-olive-600 peer-checked:border-olive-600 transition-all rounded">
                                        {formData.solar && <Check className="h-3.5 w-3.5 stroke-[3] text-chalk-50" />}
                                    </div>
                                    <span className="font-mono text-xs text-chalk-50/80 peer-checked:text-chalk-50 uppercase font-semibold">
                                        Solar Panel Array Design
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Inputs Container */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="relative border-b border-charcoal-600 py-2">
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                    onFocus={() => handleFocus("name")}
                                    onBlur={(e) => handleBlur("name", e.target.value)}
                                    className="w-full bg-transparent border-0 outline-none text-chalk-50 py-1 text-sm font-sans focus:ring-0"
                                />
                                <motion.label
                                    htmlFor="name"
                                    className="absolute left-0 cursor-text text-charcoal-600 font-mono text-xs"
                                    animate={{
                                        y: focusedInputs.name || formData.name ? -18 : 6,
                                        scale: focusedInputs.name || formData.name ? 0.8 : 1,
                                        color: focusedInputs.name ? "var(--lemon-500)" : "#4B4F54",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    FULL NAME
                                </motion.label>
                            </div>

                            {/* Phone Number */}
                            <div className="relative border-b border-charcoal-600 py-2">
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    pattern="[0-9]{10}"
                                    value={formData.phone}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                                    onFocus={() => handleFocus("phone")}
                                    onBlur={(e) => handleBlur("phone", e.target.value)}
                                    className="w-full bg-transparent border-0 outline-none text-chalk-50 py-1 text-sm font-sans focus:ring-0"
                                />
                                <motion.label
                                    htmlFor="phone"
                                    className="absolute left-0 cursor-text text-charcoal-600 font-mono text-xs"
                                    animate={{
                                        y: focusedInputs.phone || formData.phone ? -18 : 6,
                                        scale: focusedInputs.phone || formData.phone ? 0.8 : 1,
                                        color: focusedInputs.phone ? "var(--lemon-500)" : "#4B4F54",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    PHONE NUMBER (10 DIGITS)
                                </motion.label>
                            </div>

                            {/* Building Type */}
                            <div className="relative border-b border-charcoal-600 py-2">
                                <select
                                    id="buildingType"
                                    value={formData.buildingType}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, buildingType: e.target.value }))}
                                    className="w-full bg-transparent border-0 outline-none text-chalk-50 py-1 text-xs font-mono appearance-none cursor-pointer focus:ring-0 focus:outline-none"
                                >
                                    <option value="industrial" className="bg-charcoal-800">Industrial Warehouse</option>
                                    <option value="factory" className="bg-charcoal-800">Commercial Factory</option>
                                    <option value="cold-storage" className="bg-charcoal-800">Cold Storage Facility</option>
                                    <option value="agro" className="bg-charcoal-800">Agricultural Shed</option>
                                    <option value="residential" className="bg-charcoal-800">Residential Villa</option>
                                </select>
                                <div className="absolute right-2 top-3 pointer-events-none text-charcoal-600 font-mono text-xs">▼</div>
                                <label
                                    htmlFor="buildingType"
                                    className="absolute left-0 -top-4 text-charcoal-600 font-mono text-[9px]"
                                    style={{ color: "#4B4F54" }}
                                >
                                    BUILDING CATEGORY
                                </label>
                            </div>

                            {/* Proposed Project Size */}
                            <div className="relative border-b border-charcoal-600 py-2">
                                <input
                                    type="text"
                                    id="projectSize"
                                    required
                                    value={formData.projectSize}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, projectSize: e.target.value }))}
                                    onFocus={() => handleFocus("projectSize")}
                                    onBlur={(e) => handleBlur("projectSize", e.target.value)}
                                    className="w-full bg-transparent border-0 outline-none text-chalk-50 py-1 text-sm font-sans focus:ring-0"
                                />
                                <motion.label
                                    htmlFor="projectSize"
                                    className="absolute left-0 cursor-text text-charcoal-600 font-mono text-xs"
                                    animate={{
                                        y: focusedInputs.projectSize || formData.projectSize ? -18 : 6,
                                        scale: focusedInputs.projectSize || formData.projectSize ? 0.8 : 1,
                                        color: focusedInputs.projectSize ? "var(--lemon-500)" : "#4B4F54",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    ESTIMATED SIZE (e.g. 15,000 SQ.FT)
                                </motion.label>
                            </div>
                        </div>

                        {/* Project Message */}
                        <div className="relative border border-charcoal-600/60 bg-charcoal-950/40 p-4 rounded mt-4">
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                                onFocus={() => handleFocus("message")}
                                onBlur={(e) => handleBlur("message", e.target.value)}
                                rows={4}
                                className="w-full bg-transparent border-0 outline-none text-chalk-50 text-sm font-sans focus:ring-0 resize-none"
                            />
                            <motion.label
                                htmlFor="message"
                                className="absolute left-4 cursor-text text-charcoal-600 font-mono text-xs pointer-events-none"
                                animate={{
                                    y: focusedInputs.message || formData.message ? -26 : 0,
                                    scale: focusedInputs.message || formData.message ? 0.8 : 1,
                                    color: focusedInputs.message ? "var(--lemon-500)" : "#4B4F54",
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                SPECIFIC ENGINEERING REQUIREMENTS OR COORDINATES
                            </motion.label>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-lemon-500 text-charcoal-950 font-bold hover:bg-lemon-400 py-6 text-md flex items-center justify-center gap-2 group transition-all duration-300 disabled:opacity-50"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin text-charcoal-950" />
                                        <span className="font-mono text-xs uppercase tracking-widest font-black">
                                            transmitting specification...
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        Transmit Design Request
                                        <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
