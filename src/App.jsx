import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/1-Home/Home';
import { ThemeLanguageProvider, useThemeLanguage } from './context/ThemeLanguageContext';

// استيراد صفحات المناطق
import MakkahPage from './pages/Mecca/Mecca';
import MadinahPage from './pages/Medina/Medina';
import QassimPage from './pages/AL-Qassim/Qassim';
import EasternPage from './pages/Eastern Province/Eastern';
import AsirPage from './pages/Asser/Asser';
import TabukPage from './pages/Tabuk/Tabuk';
import HailPage from './pages/Hail/Hail';
import JazanPage from './pages/Jazan/Jazan';
import NajranPage from './pages/Najran/Najran';
import BahaPage from './pages/AL-Baha/AL-Baha';
import JawfPage from './pages/AL-Jawf/AL-Jawf';
import RiyadhPage from './pages/Riyadh/Riyadh'; // تأكد أن الملف في هذا المسار
import NorthernPage from './pages/Northern Borders/Northern';

function AppContent() {
  const { darkMode, setDarkMode, language, setLanguage } = useThemeLanguage();

  const translations = {
    ar: {
      dir: 'rtl',
      home: 'الرئيسية',
      timeline: 'الخط الزمني',
      map: 'الخريطة',
      contact: 'تواصل معنا',
      phoneContact: 'للتواصل : 0549986806',
      copied: '✓ تم النسخ',
      footerText: 'ديار — مشروع هاكاثون',
      heroTitle: 'ديار',
      heroDesc: 'منصة تفاعلية توثق التاريخ الجغرافي والثقافي للمملكة العربية السعودية عبر العصور.',
      timelineSection: 'الخط الزمني للمملكة',
      mapSection: 'خريطة المملكة التفاعلية',
      mapContent: 'اضغط على أي منطقة في الخريطة لاستكشاف تاريخها ومعالمها.'
    },
    en: {
      dir: 'ltr',
      home: 'Home',
      timeline: 'Timeline',
      map: 'Map',
      contact: 'Contact Us',
      phoneContact: 'Contact : 0549986806',
      copied: '✓ Copied',
      footerText: 'Diyar — Hackathon Project',
      heroTitle: 'Diyar',
      heroDesc: 'An interactive platform documenting the geographical and cultural history of Saudi Arabia.',
      timelineSection: 'Kingdom Timeline',
      mapSection: 'Interactive Saudi Map',
      mapContent: 'Click on any region to explore its history and landmarks.'
    }
  };

  const t = translations[language];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="app-container" dir={t.dir}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} t={t} />} />
          <Route path="/makkah" element={<MakkahPage darkMode={darkMode} t={t} />} />
          <Route path="/madinah" element={<MadinahPage darkMode={darkMode} t={t} />} />
          <Route path="/qassim" element={<QassimPage darkMode={darkMode} t={t} />} />
          <Route path="/eastern" element={<EasternPage darkMode={darkMode} t={t} />} />
          <Route path="/asir" element={<AsirPage darkMode={darkMode} t={t} />} />
          <Route path="/tabuk" element={<TabukPage darkMode={darkMode} t={t} />} />
          <Route path="/hail" element={<HailPage darkMode={darkMode} t={t} />} />
          <Route path="/jazan" element={<JazanPage darkMode={darkMode} t={t} />} />
          <Route path="/najran" element={<NajranPage darkMode={darkMode} t={t} />} />
          <Route path="/baha" element={<BahaPage darkMode={darkMode} t={t} />} />
          <Route path="/jawf" element={<JawfPage darkMode={darkMode} t={t} />} />
          <Route path="/riyadh" element={<RiyadhPage darkMode={darkMode} t={t} />} /> {/* تم توحيد المسار ليكون بحروف صغيرة */}
          <Route path="/northern" element={<NorthernPage darkMode={darkMode} t={t} />} />
        </Routes>
      </main>
      <Footer darkMode={darkMode} t={t} />
    </div>
  );
}

function App() {
  return (
    <ThemeLanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeLanguageProvider>
  );
}

export default App;