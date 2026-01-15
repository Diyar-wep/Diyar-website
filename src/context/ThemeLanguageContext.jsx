import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeLanguageContext = createContext();

function ThemeLanguageProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    const savedLang = localStorage.getItem('language');
    if (savedMode !== null) setDarkMode(savedMode === 'true');
    if (savedLang) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('language', language);
  }, [darkMode, language]);

  return (
    <ThemeLanguageContext.Provider value={{ darkMode, setDarkMode, language, setLanguage }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
}

const useThemeLanguage = () => useContext(ThemeLanguageContext);

export { ThemeLanguageProvider, useThemeLanguage };