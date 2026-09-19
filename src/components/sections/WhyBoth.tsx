import { ShieldCheck, HardHat, FileText, CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "Pre-Engineered Load Factors",
    desc: "We analyze solar panel dead loads and wind uplift forces during the roofing structure design phase. Purlins and sheets are placed to align exactly with mounting anchors, avoiding structural retrofitting.",
    icon: <HardHat className="h-6 w-6 text-lemon-500" />,
  },
  {
    title: "100% Water-Tight Warranty",
    desc: "By handling both roofing and solar mounting, we take complete responsibility for roof penetrations. We use dual-seal EPDM compression gaskets that align with rib peaks, warranting a zero-leak performance.",
    icon: <ShieldCheck className="h-6 w-6 text-lemon-500" />,
  },
  {
    title: "Single Accountability Channel",
    desc: "If there's an issue with the roof or the solar panels, you make one call. No two vendors blaming each other for structural leakage, sheet cracking, or alignment issues. We warrant the complete building envelope.",
    icon: <FileText className="h-6 w-6 text-lemon-500" />,
  },
];

export default function WhyBoth() {
  return (
    <section
      id="why-both"
      className="bg-charcoal-950 text-chalk-50 py-24 px-6 md:px-8 border-b border-charcoal-800 dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase text-lemon-400 tracking-widest font-semibold block mb-2">
              The Joint-Service Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-chalk-50 uppercase leading-tight">
              One Envelope. One Team. Zero Gaps.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Stitching together separate roofing and solar contractors creates hand-off risks, structural leakage, and finger-pointing when issues arise. We act as a single premium contractor managing the complete structural and electrical engineering.
            </p>
          </div>
        </div>

        {/* 3-Column Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="bg-charcoal-800 border border-charcoal-600 rounded-xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 inline-block p-3 bg-charcoal-950 border border-charcoal-600 rounded">
                  {diff.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-chalk-50 uppercase tracking-wide mb-3">
                  {diff.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-charcoal-950 flex items-center gap-2 text-[10px] font-mono text-lemon-500 uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                Guaranteed Integration
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
