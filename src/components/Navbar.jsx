import { useState, useEffect } from "react";

export default function Navbar({ darkMode, setDarkMode, language, setLanguage, t }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 999,
        padding: "12px 16px",
        background: "transparent",
        transform: visible ? "translateY(0)" : "translateY(-500%)",
        transition: "transform 1s ease",
        direction: t.dir,
      }}
    >
      <nav
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: darkMode ? "rgba(40, 40, 40, 0.95)" : "rgba(111, 69, 26, 0.66)",
          borderRadius: 50,
          border: darkMode ? "1.5px solid rgba(255, 255, 255, 0.2)" : "1.5px solid rgba(0, 0, 0, 0.4)",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Controls */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
              border: "none",
              borderRadius: "50%",
              width: "35px",
              height: "35px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Language */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              style={{
                background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                border: "none",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
              }}
            >
              {language === "ar" ? "🇸🇦" : "🇺🇸"}
            </button>

            {showLangMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  [t.dir === "rtl" ? "right" : "left"]: 0,
                  background: darkMode ? "#2a2a2a" : "#8b6f47",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  overflow: "hidden",
                  minWidth: "80px",
                  zIndex: 1000,
                }}
              >
                <button
                  onClick={() => {
                    setLanguage("ar");
                    setShowLangMenu(false);
                  }}
                  style={{
                    width: "100%",
                    padding: "10px 15px",
                    background: language === "ar" ? (darkMode ? "rgba(111, 69, 26, 0.3)" : "rgba(0, 0, 0, 0.15)") : "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    textAlign: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = darkMode ? "rgba(111, 69, 26, 0.4)" : "rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = language === "ar" ? (darkMode ? "rgba(111, 69, 26, 0.3)" : "rgba(0, 0, 0, 0.15)") : "transparent";
                  }}
                >
                  🇸🇦
                </button>
                <button
                  onClick={() => {
                    setLanguage("en");
                    setShowLangMenu(false);
                  }}
                  style={{
                    width: "100%",
                    padding: "10px 15px",
                    background: language === "en" ? (darkMode ? "rgba(111, 69, 26, 0.3)" : "rgba(0, 0, 0, 0.15)") : "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    textAlign: "center",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = darkMode ? "rgba(111, 69, 26, 0.4)" : "rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = language === "en" ? (darkMode ? "rgba(111, 69, 26, 0.3)" : "rgba(0, 0, 0, 0.15)") : "transparent";
                  }}
                >
                  🇺🇸
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center", flexWrap: "wrap" }}>
          <a 
            href="#contact"
            style={{
              textDecoration: "none",
              color: darkMode ? "#fff" : "#000000",
              fontSize: 16,
              fontWeight: 500,
              padding: "6px 18px",
              borderRadius: 25,
              transition: "all 0.3s ease",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {t.contact}
          </a>
          
          <a 
            href="#about"
            style={{
              textDecoration: "none",
              color: darkMode ? "#fff" : "#000000",
              fontSize: 16,
              fontWeight: 500,
              padding: "6px 18px",
              borderRadius: 25,
              transition: "all 0.3s ease",
            }}
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('about');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {t.timeline}
          </a>

          <a 
            href="#features"
            style={{
              textDecoration: "none",
              color: darkMode ? "#fff" : "#000000",
              fontSize: 16,
              fontWeight: 500,
              padding: "6px 18px",
              borderRadius: 25,
              transition: "all 0.3s ease",
            }}
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('features');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {t.map}
          </a>

          <a 
            href="#home"
            style={{
              textDecoration: "none",
              color: darkMode ? "#fff" : "#000000",
              fontSize: 16,
              fontWeight: 500,
              padding: "6px 18px",
              borderRadius: 25,
              transition: "all 0.3s ease",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.background = darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {t.home}
          </a>
        </div>
      </nav>
    </header>
  );
}