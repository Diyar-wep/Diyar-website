export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ar');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const translations = {
    ar: {
      dir: 'rtl', logo: 'ديار',
      nav: { about: 'عن المشروع', timeline: 'الخط الزمني', features: 'المميزات' },
      sections: { about: 'عن المشروع', timeline: 'الخط الزمني للمملكة', map: 'خريطة المملكة التفاعلية' },
      about_brief: 'ديار: منصة تفاعلية توثق التاريخ الجغرافي والثقافي للمملكة العربية السعودية عبر العصور.',
      footer: { copyright: 'مشروع هاكاثون - ديار © 2025' }
    },
    en: {
      dir: 'ltr', logo: 'Diyar',
      nav: { about: 'About', timeline: 'Timeline', features: 'Features' },
      sections: { about: 'About Project', timeline: 'Kingdom Timeline', map: 'Interactive Map' },
      about_brief: 'Diyar: An interactive platform documenting the geographical and cultural history of Saudi Arabia.',
      footer: { copyright: 'Hackathon Project - Diyar © 2025' }
    }
  };

  const t = translations[language] || translations['en'];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-stone-950 text-amber-200' : 'bg-stone-50 text-amber-900'}`} dir={t.dir}>
      
      {/* NAVBAR */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        language={language} 
        setLanguage={setLanguage}
        showLangMenu={showLangMenu}
        setShowLangMenu={setShowLangMenu}
        t={t}
      />

      {/* HERO BANNER */}
      <section className="relative h-[70vh] w-full overflow-hidden mt-20">
        <img 
          src="hero-banner.jpg" 
          alt="Diyar Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* ABOUT BAR */}
      <section className="relative z-20 -mt-16 container mx-auto px-6">
        <div className={`backdrop-blur-xl border p-8 rounded-2xl shadow-2xl transition-all ${
          darkMode ? 'bg-stone-900/70 border-stone-700' : 'bg-white/70 border-stone-200'
        }`}>
          <div>
            <h2 className="text-2xl font-bold mb-3 text-center">{t.sections.about}</h2>
            <p className="text-lg opacity-80 leading-relaxed text-center">
              {t.about_brief}
            </p>
          </div>
        </div>
      </section>

      {/* 4. TIMELINE SECTION استدعاء Timeline Component */}
      <section id="timeline" className="py-20">
        {/*  Timeline Component هنا */}
        {/* <Timeline darkMode={darkMode} language={language} t={t} /> */}
      </section>

      {/* MAP SECTION  استدعاء Map Component */}
      <section id="map" className={`py-20 transition-colors ${darkMode ? 'bg-stone-900/50' : 'bg-yellow-50/50'}`}>
        {/*  Map Component هنا */}
        {/* <Map darkMode={darkMode} language={language} t={t} /> */}
      </section>

      {/* FOOTER */}
      <footer className={`py-10 text-center border-t ${darkMode ? 'bg-stone-950 border-stone-800 text-stone-500' : 'bg-white border-stone-100 text-stone-400'}`}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <MapPin className="w-5 h-5" />
          <span className="font-bold uppercase tracking-widest text-sm">{t.logo}</span>
        </div>
        <p className="text-sm font-bold uppercase tracking-widest">
          {t.footer.copyright}
        </p>
      </footer>

    </div>
  );
}