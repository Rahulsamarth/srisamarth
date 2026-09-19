import { ArrowUpRight, ShieldCheck, Cpu, HardHat, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-charcoal-950 text-chalk-50 border-t border-charcoal-800 py-16 px-6 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & About */}
          <div>
            <span className="font-display font-black text-xl tracking-tight text-chalk-50 uppercase flex items-center mb-6">
              Sri Samarth
              <span className="text-lemon-500 ml-1 font-mono text-sm tracking-widest font-normal">
                [TRADERS]
              </span>
            </span>
            <p className="text-sm text-charcoal-600 mb-6 leading-relaxed max-w-sm">
              A specialized contracting firm engineering structural UPVC roofing systems and integrated solar arrays. Single-contract accountability for the entire building envelope.
            </p>
            <div className="flex gap-4 text-xs font-mono text-charcoal-600">
              <span className="border border-charcoal-800 px-2 py-1 bg-charcoal-800/20">GSTIN: 27AABCS8472M1Z5</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal-600 mb-6 font-semibold">
              Engineering Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#products" className="text-chalk-50/70 hover:text-lemon-500 hover:underline transition-colors flex items-center group">
                  UPVC Roofing Sheets
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#solar" className="text-chalk-50/70 hover:text-lemon-500 hover:underline transition-colors flex items-center group">
                  Solar Array Design
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#architecture" className="text-chalk-50/70 hover:text-lemon-500 hover:underline transition-colors flex items-center group">
                  Roof Architecture & Structure
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#process" className="text-chalk-50/70 hover:text-lemon-500 hover:underline transition-colors flex items-center group">
                  Installation Process
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal-600 mb-6 font-semibold">
              Service Operations
            </h4>
            <p className="text-sm text-chalk-50/70 mb-4 leading-relaxed">
              Serving industrial, commercial, and agricultural projects across Maharashtra and neighboring regions.
            </p>
            <div className="space-y-2 text-xs font-mono text-charcoal-600">
              <div>[HQ] Kalaburgi, Karnataka</div>
              <div>[Hours] Mon - Sat: 09:00 - 18:00 IST</div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-charcoal-600 mb-6 font-semibold">
              Inquiries & Engineering
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="text-xs font-mono text-charcoal-600">Email Engineering Desk</div>
                <a href="mailto:srisamarthtraders11@gmail.com" className="text-chalk-50 hover:text-lemon-500 transition-colors font-medium">
                  srisamarthtraders11@gmail.com
                </a>
              </div>
              <div>
                <div className="text-xs font-mono text-charcoal-600">Contracting / Sales</div>
                <a href="tel:+918147130721" className="text-chalk-50 hover:text-lemon-500 transition-colors font-medium">
                  8147130721, 7204676790
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications strip */}
        <div className="border-t border-charcoal-800 pt-8 pb-12 flex flex-wrap gap-8 justify-between items-center text-xs font-mono text-charcoal-600">
          <div className="flex flex-wrap gap-6 items-center">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-lemon-500" />
              ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-1">
              <Cpu className="h-4 w-4 text-lemon-500" />
              MNRE Approved Vendor
            </span>
            <span className="flex items-center gap-1">
              <HardHat className="h-4 w-4 text-lemon-500" />
              IS 16242 Standards Compliant
            </span>
            <span className="flex items-center gap-1">
              <Award className="h-4 w-4 text-lemon-500" />
              Grade-A Contracting License
            </span>
          </div>
          <div>
            © {currentYear} Sri Samarth Traders. All engineering rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
