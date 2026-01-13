import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/1-Home/Home";
import QassimPage from "./pages/AL-Qassim/Qassim";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ar");

  // تأثير تغيير لون الخلفية للـ body بالكامل عند تبديل الوضع الليلي
  useEffect(() => {
    if (darkMode) {
      document.body.style.background = "#2a2520";
      if(document.getElementById('root')) 
        document.getElementById('root').style.background = "rgba(42, 37, 32, 0.95)";
    } else {
      document.body.style.background = "#c5a98a";
      if(document.getElementById('root'))
        document.getElementById('root').style.background = "rgba(238, 214, 184, 0.85)";
    }
  }, [darkMode]);

  const translations = {
    ar: {
      dir: "rtl",
      heroTitle: "هنا بنحط صوره",
      heroDesc: "دِيار , إكتشف دِيارك",
      timeline: "الخط الزمني",
      map: "الخريطة",
      contact: "تواصل معنا",
      home: "الرئيسية",
      timelineSection: "الخط الزمني",
      mapSection: "الخريطة",
      mapContent: "هنا بنحط الخريطة التفاعلية",
    },
    en: {
      dir: "ltr",
      heroTitle: "Image will be here",
      heroDesc: "Diyar, Discover Your Homeland",
      timeline: "Timeline",
      map: "Map",
      contact: "Contact Us",
      home: "Home",
      timelineSection: "Timeline",
      mapSection: "Interactive Map",
      mapContent: "Interactive map will be here",
    },
  };

  const t = translations[language];

  return (
    <Router>
      <div className={darkMode ? "dark-app" : "light-app"}>
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          language={language}
          setLanguage={setLanguage}
          t={t}
        />
        
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home darkMode={darkMode} t={t} />} />
          
          {/* صفحة القصيم */}
          <Route path="/qassim" element={<QassimPage darkMode={darkMode} language={language} t={t} />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}