
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('common');

  const navigation = [
    { name: t('TRADING SYSTEMS'), href: '/trading-systems' },
    { name: t('FRAMEWORKS'), href: '/frameworks' },
    { name: t('SOLUTIONS'), href: '/solutions' },
    { name: t('SERVICES'), href: '/services' },
    { name: t('PROJECTS'), href: '/projects' },
    { name: t('WINWAY'), href: '/winway' },
  ];

  return (
    <nav className="bg-slate-900 border-b border-slate-800 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium uppercase whitespace-nowrap
  transition-colors
  after:content-['']
  after:absolute after:left-0 after:right-0 after:-bottom-1
  after:h-[1px]
  after:bg-slate-400
  after:origin-center
  after:scale-x-0
  after:transition-transform after:duration-300 after:ease-out
  hover:after:scale-x-100
  ${location.pathname === item.href
                      ? 'text-white after:scale-x-100 after:bg-slate-300'
                      : 'text-slate-300 hover:text-white'
                    }`}


                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors uppercase ${location.pathname === item.href
                  ? 'text-white bg-slate-700'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
