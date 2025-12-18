import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">

          {/* Logo */}
          <div className="md:col-span-1">
            <Logo />
          </div>

          {/* Trading Systems */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              TRADING SYSTEMS
            </h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><Link to="/trading-systems/win-edge" className="hover:text-white">Prop Trading</Link></li>
              <li><Link to="/trading-systems/stealth-win" className="hover:text-white">Arbitrage</Link></li>
              <li><Link to="/trading-systems/fx-win" className="hover:text-white">FX</Link></li>
              <li><Link to="/trading-systems/winway-gdts" className="hover:text-white">Global Derivatives</Link></li>
              <li><Link to="/trading-systems/winway-kdts" className="hover:text-white">KRX Derivatives</Link></li>
              <li><Link to="/trading-systems/winway-gets" className="hover:text-white">Global Equities</Link></li>
              <li><Link to="/trading-systems/winway-fits" className="hover:text-white">Fixed Income</Link></li>
              <li><Link to="/trading-systems/winway-cfd-equity" className="hover:text-white">CFD</Link></li>
              <li><Link to="/trading-systems/winway-gold" className="hover:text-white">Gold</Link></li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              FRAMEWORKS
            </h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><Link to="/frameworks/tp-monitor" className="hover:text-white">TP-Monitor</Link></li>
              <li><Link to="/frameworks/ide" className="hover:text-white">IDE</Link></li>
              <li><Link to="/frameworks/pc-client" className="hover:text-white">PC Client</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              SOLUTIONS
            </h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><Link to="/solutions/oms" className="hover:text-white">OMS</Link></li>
              <li><Link to="/solutions/prop-trading-platform" className="hover:text-white">Execution Algo</Link></li>
              <li><Link to="/solutions/market-data-processing" className="hover:text-white">RMS</Link></li>
              <li><Link to="/solutions/winfix" className="hover:text-white">FIX Engine</Link></li>
              <li><Link to="/solutions/winfeedengine" className="hover:text-white">Market Data Processing</Link></li>
              <li><Link to="/solutions/prima" className="hover:text-white">Margin Calculator</Link></li>
              <li><Link to="/solutions/trustwin" className="hover:text-white">Messaging Middleware</Link></li>
              <li><Link to="/solutions/chammae" className="hover:text-white">Market Surveillance</Link></li>
              <li><Link to="/solutions/trustmessenger-enterprise" className="hover:text-white">SMS</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><Link to="/services/fx-dma-hub" className="hover:text-white">FX DMA Hub</Link></li>
              <li><Link to="/services/krx-reference" className="hover:text-white">KRX Equity & ETF Reference Data</Link></li>
              <li><Link to="/services/k-fund-info" className="hover:text-white">Korean Fund Information</Link></li>
            </ul>
          </div>

          {/* Winway */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              WINWAY
            </h4>
            <ul className="space-y-2 text-[15px] leading-relaxed">
              <li><Link to="/winway" className="hover:text-white">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link to="/winway" className="hover:text-white">What We Do</Link></li>
              <li><Link to="/winway" className="hover:text-white">Careers</Link></li>
              <li><Link to="/winway" className="hover:text-white">Location</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500">
            © 2025 Winway Systems, Inc. All rights reserved.
          </p>
          <p className="text-slate-600 mt-3 md:mt-0">
            106 Gukjegeumyung-ro Yeongdeungpo-gu, Seoul 07343, Korea
          </p>
        </div>
      </div>
    </footer>
  );
}
