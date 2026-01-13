import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode, language, setLanguage, t }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showLangMenu, setShowLangMenu] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // دالة التنقل الذكي
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
    <header style={{
      width: "100%", position: "sticky", top: 0, zIndex: 999, padding: "12px 16px",
      background: "transparent", transform: visible ? "translateY(0)" : "translateY(-500%)",
      transition: "transform 1s ease", direction: t.dir,
    }}>
      <nav style={{
        maxWidth: 900, margin: "0 auto", padding: "10px 20px", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        background: darkMode ? "rgba(40, 40, 40, 0.95)" : "rgba(111, 69, 26, 0.66)",
        borderRadius: 50, border: darkMode ? "1.5px solid rgba(255, 255, 255, 0.2)" : "1.5px solid rgba(0, 0, 0, 0.4)",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)", transition: "all 0.3s ease",
      }}>
        
        {/* الترتيب الصحيح للروابط (عكست الترتيب في الكود ليظهر صحيحاً في الواجهة RTL) */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <a href="#home" style={linkStyle(darkMode)} onClick={(e) => handleNavClick(e, 'home', true)}>
            {t.home}
          </a>
          <a href="#about" style={linkStyle(darkMode)} onClick={(e) => handleNavClick(e, 'about')}>
            {t.timeline}
          </a>
          <a href="#features" style={linkStyle(darkMode)} onClick={(e) => handleNavClick(e, 'features')}>
            {t.map}
          </a>
          <a href="#contact" style={linkStyle(darkMode)} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>
            {t.contact}
          </a>
        </div>

        {/* Controls: تبقى في الجهة الأخرى */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button onClick={() => setDarkMode(!darkMode)} style={iconBtnStyle(darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
          <div style={{ position: "relative" }}>
            <button onClick={() => setShowLangMenu(!showLangMenu)} style={iconBtnStyle(darkMode)}>
              {language === "ar" ? "🇸🇦" : "🇺🇸"}
            </button>
            {showLangMenu && (
              <div style={langMenuStyle(darkMode, t.dir)}>
                <button onClick={() => { setLanguage("ar"); setShowLangMenu(false); }} style={langOptionStyle(darkMode, language === "ar")}>🇸🇦</button>
                <button onClick={() => { setLanguage("en"); setShowLangMenu(false); }} style={langOptionStyle(darkMode, language === "en")}>🇺🇸</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

// الستايلات (بدون تغيير)
const iconBtnStyle = (darkMode) => ({
  background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
  border: "none", borderRadius: "50%", width: "35px", height: "35px", cursor: "pointer",
  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", transition: "all 0.3s ease",
});
const langMenuStyle = (darkMode, dir) => ({
  position: "absolute", top: "calc(100% + 8px)", [dir === "rtl" ? "right" : "left"]: 0,
  background: darkMode ? "#2a2a2a" : "#8b6f47", borderRadius: "12px", overflow: "hidden", minWidth: "80px", zIndex: 1000,
});
const langOptionStyle = (darkMode, isActive) => ({
  width: "100%", padding: "10px 15px", border: "none", cursor: "pointer", fontSize: "20px", textAlign: "center", transition: "all 0.2s ease",
  background: isActive ? (darkMode ? "rgba(111, 69, 26, 0.3)" : "rgba(0, 0, 0, 0.15)") : "transparent",
});
const linkStyle = (darkMode) => ({
  textDecoration: "none", color: darkMode ? "#fff" : "#000000", fontSize: 15, fontWeight: 500,
  padding: "6px 15px", borderRadius: 25, transition: "all 0.3s ease",
});