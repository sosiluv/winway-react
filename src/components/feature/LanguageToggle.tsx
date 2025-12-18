
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation('common');

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={() => toggleLanguage('en')}
        className={`px-2 py-1 text-sm font-medium transition-colors ${
          i18n.language === 'en' 
            ? 'text-white border-b border-blue-400' 
            : 'text-slate-300 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-slate-400">|</span>
      <button
        onClick={() => toggleLanguage('ko')}
        className={`px-2 py-1 text-sm font-medium transition-colors ${
          i18n.language === 'ko' 
            ? 'text-white border-b border-blue-400' 
            : 'text-slate-300 hover:text-white'
        }`}
      >
        KO
      </button>
    </div>
  );
}
