"use client";

import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQItem {
    id: string;
    q: string;
    a: string;
}

const faqData: FAQItem[] = [
    {
        id: "faq-1",
        q: "What is the warranty coverage for the integrated roofing and solar system?",
        a: "Sri Samarth provides a single, unified dual-warranty program: 20 years on the structural and material integrity of the ASA-UPVC roofing sheets and 25 years on the solar PV modules' performance. Because we design, supply, and construct the entire envelope, there is zero finger-pointing between vendors if an issue arises.",
    },
    {
        id: "faq-2",
        q: "How do I know which UPVC sheet thickness is suitable for my facility?",
        a: "Our structural engineering desk calculates the necessary thickness based on your existing purlin spacing, building height, and local wind velocity parameters (up to 180 km/h). Standard industrial purlin spans of 1.0m to 1.2m typically require a 2.5mm or 3.0mm overall sheet profile to eliminate deflection risks.",
    },
    {
        id: "faq-3",
        q: "What is the average payback period for industrial solar systems in Maharashtra?",
        a: "For industrial consumers in Maharashtra paying average commercial tariffs, the break-even payback period lies between 3.8 and 4.4 years. Incorporating depreciation benefits and net-metering credits under MSEDCL regulations, the system yields a long-term return on investment (ROI) of 22% to 26% annually.",
    },
    {
        id: "faq-4",
        q: "How do you secure solar mounts without causing roof leaks?",
        a: "Unlike generic subcontractors, we never drill holes through the drainage valleys of the sheets. Our custom anodized aluminum mounting brackets are secured directly to the rib peaks, clamping onto the purlins below using structural fasteners backed by high-compression dual-seal EPDM rubber gaskets to guarantee a water-tight barrier.",
    },
    {
        id: "faq-5",
        q: "What kind of maintenance do UPVC sheets and solar panels need?",
        a: "ASA-UPVC co-extruded sheets are chemically inert, self-cleaning with rainwater, and require zero maintenance. Solar panels require periodic washing (usually twice a month) to clear dust and maintain peak energy yield. Sri Samarth offers annual maintenance contracts covering panel wash schedules and structural bolt torque audits.",
    },
    {
        id: "faq-6",
        q: "What regions do you service for structural contract work?",
        a: "Our primary warehousing and engineering fabrication base is located in Bhosari Industrial Area (Pune). We regularly service industrial zones across Maharashtra, including Chakan, Talegaon, Ranjangaon, Nashik, Aurangabad, Indapur, Kolhapur, and Satara.",
    },
];

export default function FAQ() {
    return (
        <section
            id="faq"
            className="bg-chalk-50 text-ink-700 py-24 px-6 md:px-8 border-b border-border"
        >
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="font-mono text-xs uppercase text-lemon-600 tracking-widest font-semibold inline-flex items-center gap-1.5 justify-center mb-2">
                        <HelpCircle className="h-4.5 w-4.5 text-lemon-600" />
                        Engineering Knowledge Base
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-display font-black text-charcoal-950 uppercase leading-none mt-2">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordions */}
                <div className="bg-chalk-100 border border-border rounded-xl p-6 md:p-8">
                    <Accordion className="w-full divide-y divide-border/60">
                        {faqData.map((item) => (
                            <AccordionItem key={item.id} value={item.id} className="py-4 first:pt-0 last:pb-0">
                                <AccordionTrigger className="w-full font-display font-bold text-sm sm:text-md text-charcoal-950 uppercase tracking-wide hover:no-underline group py-2">
                                    <span className="pr-4 transition-colors group-hover:text-lemon-600">
                                        {item.q}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pt-2 text-xs sm:text-sm text-charcoal-600 leading-relaxed font-body">
                                    <p className="bg-chalk-50 border border-border/40 p-4 rounded-md">
                                        {item.a}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
