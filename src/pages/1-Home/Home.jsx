import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({ darkMode, t }) {
  // دالة المساعدة للتمرير السلس (Smooth Scroll)
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className={`home ${darkMode ? "dark-mode" : ""}`} style={{ direction: t.dir }}>
      {/* HERO SECTION */}
      <section id="home" className="section hero">
        <h1 className="hero__title">{t.heroTitle}</h1>
        <p className="hero__desc">{t.heroDesc}</p>
        
        <div className="hero__links">
          {/* الزر الجديد: منطقة القصيم */}
          <Link 
            to="/qassim" 
            className="hero__link qassim-btn"
            style={{
              backgroundColor: "#8a9b3a",
              color: "#ffffff",
              fontWeight: "bold",
              border: "none",
              padding: "12px 24px",
              borderRadius: "50px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }}
          >
            {t.dir === "rtl" ? "منطقة القصيم" : "Qassim Region"}
          </Link>

          {/* أزرار التنقل الداخلي */}
          <a 
            href="#about" 
            className="hero__link" 
            onClick={(e) => scrollToSection(e, "about")}
          >
            {t.timeline}
          </a>

          <a 
            href="#features" 
            className="hero__link" 
            onClick={(e) => scrollToSection(e, "features")}
          >
            {t.map}
          </a>

          <a 
            href="#contact" 
            className="hero__link" 
            onClick={scrollToBottom}
          >
            {t.contact}
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <h2 className="section__title">{t.timelineSection}</h2>
        {/* يمكنك إضافة محتوى هنا لاحقاً */}
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="section">
        <h2 className="section__title">{t.mapSection}</h2>
        <ul className="features">
          <li className="features__item">
            {t.mapContent}
          </li>
        </ul>
      </section>
    </div>
  );
}