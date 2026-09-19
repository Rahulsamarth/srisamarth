import { Shield, Sparkles, Building, Layers } from "lucide-react";

const partners = [
  { name: "SABIC Materials", role: "Polymer Partner", icon: <Layers className="h-6 w-6" /> },
  { name: "Tata Steel", role: "Structural Base", icon: <Building className="h-6 w-6" /> },
  { name: "MNRE", role: "Govt. Approved", icon: <Shield className="h-6 w-6" /> },
  { name: "DuPont Film", role: "UV Resins Supplier", icon: <Sparkles className="h-6 w-6" /> },
];

export default function TrustStrip() {
  return (
    <section className="bg-chalk-100 border-y border-border py-8 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Label */}
        <div className="flex-shrink-0">
          <span className="font-mono text-[10px] tracking-widest text-charcoal-600 font-bold uppercase block mb-1">
            Material Partners & Certifications
          </span>
          <p className="text-xs text-ink-700/60 font-mono">[GRADE-A MATERIAL AUDITS COMPLIANT]</p>
        </div>

        {/* Partners Logos/Labels List */}
        <div className="flex flex-wrap md:flex-nowrap items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group cursor-default"
            >
              <div className="p-2 bg-chalk-50 border border-border group-hover:border-lemon-500 group-hover:bg-lemon-500/10 text-charcoal-950 transition-colors">
                {partner.icon}
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-ink-700 tracking-tight leading-none group-hover:text-charcoal-950">
                  {partner.name}
                </h4>
                <span className="font-mono text-[9px] uppercase tracking-wider text-charcoal-600">
                  {partner.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
