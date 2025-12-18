import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-black text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo and Intro */}
          <div className="md:col-span-1">
            <Logo />
          </div>

          {/* Trading System */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Trading System</h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><a href="#" className="hover:text-white transition-colors">Global Equity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Global Derivatives</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FX Trading</a></li>
              <li><a href="#" className="hover:text-white transition-colors">KRX Derivatives</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Non-Electronic Ledger</a></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Platforms</h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><a href="#" className="hover:text-white transition-colors">Server Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PC Client Platform</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Communication Middleware</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Solutions</h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><a href="#" className="hover:text-white transition-colors">Order Management System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agorithmic Execution System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real-Time Risk Management System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FIX Engine & Gateway</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Data Processing System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio Margin Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Surveilance System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SMS Distribution & Delivery System</a></li>
            </ul>
          </div>

          {/* Projects / Company */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Winway</h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/winway" className="hover:text-white transition-colors">Winway</a></li>
              <li><a href="/our-history" className="hover:text-white transition-colors">Our History</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500">
            © 2025 Winway Systems Co., Ltd. All rights reserved.
          </p>
          <p className="text-slate-600 mt-3 md:mt-0">
            13F, 97 Uisadang-daero, Yeongdeungpo-gu, Seoul, 07327, Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
