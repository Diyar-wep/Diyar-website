import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode, language, setLanguage, t }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, targetId, isTop = false) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (isTop) window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        if (isTop) window.scrollTo({ top: 0, behavior: "smooth" });
        else document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) setVisible(false);
      else setVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header style={{
      width: "100%", position: "sticky", top: 0, zIndex: 999, padding: "12px 16px",
      background: "transparent", transform: visible ? "translateY(0)" : "translateY(-500%)",
      transition: "transform 0.5s ease", direction: t.dir,
    }}>
      <nav style={{
        maxWidth: 900, margin: "0 auto", padding: "10px 20px", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        background: "var(--nav-footer-bg)",
        borderRadius: 50, border: "1.5px solid var(--nav-footer-border)",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)", transition: "0.3s ease",
      }}>
        
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#home" style={linkStyle} onClick={(e) => handleNavClick(e, 'home', true)}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = "scale(1.1)"; 
              e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = "scale(1)"; 
              e.currentTarget.style.background = "transparent"; 
            }}
          >{t.home}</a>
          <a href="#about" style={linkStyle} onClick={(e) => handleNavClick(e, 'about')}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = "scale(1.1)"; 
              e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = "scale(1)"; 
              e.currentTarget.style.background = "transparent"; 
            }}
          >{t.timeline}</a>
          <a href="#features" style={linkStyle} onClick={(e) => handleNavClick(e, 'features')}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = "scale(1.1)"; 
              e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = "scale(1)"; 
              e.currentTarget.style.background = "transparent"; 
            }}
          >{t.map}</a>
          <a href="#contact" style={linkStyle} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = "scale(1.1)"; 
              e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = "scale(1)"; 
              e.currentTarget.style.background = "transparent"; 
            }}
          >{t.contact}</a>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            style={iconBtnStyle}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = "scale(1.15) rotate(20deg)"; 
              e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)"; 
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = "scale(1) rotate(0deg)"; 
              e.currentTarget.style.background = "var(--icon-btn-bg)"; 
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <div style={{ position: "relative" }}>
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)} 
              style={iconBtnStyle}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = "scale(1.15)"; 
                e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)"; 
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                e.currentTarget.style.background = "var(--icon-btn-bg)"; 
              }}
            >
              {language === "ar" ? "🇸🇦" : "🇺🇸"}
            </button>
            {showLangMenu && (
              <div style={langMenuStyle(t.dir)}>
                <button 
                  onClick={() => { setLanguage("ar"); setShowLangMenu(false); }} 
                  style={langOptionStyle(language === "ar")}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)"; 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.background = language === "ar" ? "rgba(128, 128, 128, 0.2)" : "transparent"; 
                  }}
                >
                  🇸🇦
                </button>
                <button 
                  onClick={() => { setLanguage("en"); setShowLangMenu(false); }} 
                  style={langOptionStyle(language === "en")}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)"; 
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.background = language === "en" ? "rgba(128, 128, 128, 0.2)" : "transparent"; 
                  }}
                >
                  🇺🇸
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

const iconBtnStyle = {
  background: "var(--icon-btn-bg)", border: "none", borderRadius: "50%", width: "35px", height: "35px", cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", transition: "all 0.3s ease", color: "var(--nav-footer-text)"
};
const langMenuStyle = (dir) => ({
  position: "absolute", top: "calc(100% + 8px)", [dir === "rtl" ? "right" : "left"]: 0,
  background: "var(--nav-footer-bg)", borderRadius: "12px", overflow: "hidden", minWidth: "80px", zIndex: 1000, border: "1px solid var(--nav-footer-border)"
});
const langOptionStyle = (isActive) => ({
  width: "100%", padding: "10px 15px", border: "none", cursor: "pointer", fontSize: "20px", textAlign: "center", transition: "all 0.2s ease",
  background: isActive ? "rgba(128, 128, 128, 0.2)" : "transparent", color: "var(--nav-footer-text)"
});
const linkStyle = {
  textDecoration: "none", color: "var(--nav-footer-text)", fontSize: 15, fontWeight: 500, padding: "6px 15px", borderRadius: 25, transition: "all 0.3s ease"
};