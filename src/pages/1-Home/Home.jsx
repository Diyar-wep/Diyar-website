import React from "react";
import "./Home.css";
import Timeline from "../../components/Timeline";
import SaudiMap from "../../components/SaudiMap";

// استيراد الشعارات الجانبية
import diyarDark from "../GeneralPics/LOGOS/ديار دارك مود.png";
import diyarLight from "../GeneralPics/LOGOS/ديار لايت مود.png";
import neoDark from "../GeneralPics/LOGOS/نيو تك دارك مود.png";
import neoLight from "../GeneralPics/LOGOS/نيو تك لايت مود.png";

// استيراد صور البانر (الوسط)
import bannerImg from "../GeneralPics/Banners/Banar.jpg";

export default function Home({ darkMode, t }) {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!t) return <div className="loading-screen">Loading...</div>;

  // تحديد ما إذا كانت اللغة الحالية هي العربية
  const isRTL = t.dir === "rtl";

  return (
    <div className={`home-page ${darkMode ? "dark-mode" : ""} ${isRTL ? "rtl-layout" : ""}`}>
      
      {/* 1. شعار ديار الجانبي */}
      <div className={`diyar-container ${isRTL ? "pos-right" : "pos-left"}`}>
        <img 
          src={darkMode ? diyarDark : diyarLight} 
          alt="Diyar Logo" 
          className="logo-diyar" 
        />
      </div>

      {/* 2. شعار نيو تك الجانبي */}
      <div className={`neotech-container ${isRTL ? "pos-left" : "pos-right"}`}>
        <img 
          src={darkMode ? neoDark : neoLight} 
          alt="NeoTech Logo" 
          className="logo-neotech" 
        />
      </div>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-banner-container">
          <img src={bannerImg} alt="Diyar Banner" className="hero-banner-img" />
        </div>
        
        <p className="hero-desc">{t.heroDesc}</p>
        
        {/* حاوية الأزرار */}
        <div className="hero-links-container">
          <a href="#about" className="main-btn" onClick={(e) => scrollToSection(e, "about")}>
            {t.timeline}
          </a>
          <a href="#features" className="main-btn" onClick={(e) => scrollToSection(e, "features")}>
            {t.map}
          </a>
          <a href="#contact" className="main-btn" onClick={scrollToBottom}>
            {t.contact}
          </a>
        </div>
      </section>

      {/* باقي الأقسام */}
      <section id="about" className="section-container">
        <h2 className="section-heading">{t.timelineSection}</h2>
        <div className="content-width">
            <Timeline />
        </div>
      </section>

      <section id="features" className="section-container">
        <h2 className="section-heading" style={{ marginBottom: '2px' }}>{t.mapSection}</h2>
        <p className="map-hint" style={{ marginTop: '2px', marginBottom: '10px' }}>{t.mapContent}</p>
        <div className="map-holder-large">
          <SaudiMap lang={isRTL ? "ar" : "en"} />
        </div>
      </section>

    </div>
  );
}