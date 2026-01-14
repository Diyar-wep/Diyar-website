import React, { useState } from 'react';
import { MapPin, Moon, Sun, Globe, ChevronDown } from 'lucide-react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { translations } from '../i18n/translations';

export default function Navbar() {
  const { darkMode, setDarkMode, language, setLanguage } = useThemeLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = translations[language];

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  ];

  return (
    <header
      dir={t.dir}
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all
        ${darkMode ? 'bg-stone-900/80 border-stone-800' : 'bg-white/80 border-stone-200'}
      `}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-800 p-2 rounded-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black">
            {t.logo}
          </span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {Object.entries(t.nav).map(([key, value]) => (
            <a
              key={key}
              href={`#${key}`}
              className={`text-sm font-bold uppercase tracking-widest transition-colors
                ${darkMode ? 'hover:text-amber-300' : 'hover:text-yellow-800'}
              `}
            >
              {value}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">

          {/* Language Button */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all
                ${darkMode
                  ? 'border-stone-700 text-stone-300 hover:bg-stone-800'
                  : 'border-stone-200 text-stone-700 hover:bg-stone-100'}
              `}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">
                {language}
              </span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${showLangMenu ? 'rotate-180' : ''}`}
              />
            </button>

            {showLangMenu && (
              <div
                className={`absolute top-full mt-3 w-44 rounded-xl shadow-2xl overflow-hidden border
                  ${darkMode ? 'bg-stone-900 border-stone-700' : 'bg-white border-stone-100'}
                  ${t.dir === 'rtl' ? 'left-0' : 'right-0'}
                `}
              >
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setShowLangMenu(false);
                    }}
                    className="w-full px-4 py-2.5 flex items-center justify-between text-sm
                      transition-colors hover:bg-yellow-800 hover:text-white"
                  >
                    <span>{l.name}</span>
                    <span>{l.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full border transition-all
              ${darkMode
                ? 'bg-stone-800 border-stone-700 text-amber-300 hover:bg-stone-700'
                : 'bg-white border-stone-200 text-yellow-800 hover:bg-stone-100'}
            `}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

        </div>
      </nav>
    </header>
  );
}