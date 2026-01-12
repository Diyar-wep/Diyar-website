import React from 'react';
import { MapPin, Moon, Sun, Globe, ChevronDown } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, language, setLanguage, showLangMenu, setShowLangMenu, t }) {
  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all border-b ${
      darkMode ? 'bg-stone-900/80 border-stone-800' : 'bg-white/80 border-stone-200'
    } backdrop-blur-md`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-800 p-2 rounded-lg">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black">{t.logo}</span>
        </div>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8">
          {Object.entries(t.nav).map(([key, value]) => (
            <a key={key} href={`#${key}`} className={`text-sm font-bold uppercase tracking-widest transition-colors ${
              darkMode ? 'hover:text-amber-300' : 'hover:text-yellow-800'
            }`}>
              {value}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all border ${
                darkMode ? 'hover:bg-stone-800 border-stone-700 text-stone-300' : 'hover:bg-stone-100 border-stone-200 text-stone-700'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">{language}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>
            
            {showLangMenu && (
              <div className={`absolute top-full mt-3 w-40 shadow-2xl rounded-xl border overflow-hidden ${
                darkMode ? 'bg-stone-900 border-stone-700' : 'bg-white border-stone-100'
              } ${t.dir === 'rtl' ? 'left-0' : 'right-0'}`}>
                {languages.map(l => (
                  <button key={l.code} onClick={() => {setLanguage(l.code); setShowLangMenu(false)}} 
                    className="w-full px-4 py-2.5 flex items-center justify-between transition-colors hover:bg-yellow-800 hover:text-white">
                    <span className="text-sm font-medium">{l.name}</span>
                    <span>{l.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full transition-all border ${
              darkMode 
              ? 'bg-stone-800 border-stone-700 text-amber-300 hover:bg-stone-700' 
              : 'bg-white border-stone-200 text-yellow-800 hover:bg-stone-100'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}