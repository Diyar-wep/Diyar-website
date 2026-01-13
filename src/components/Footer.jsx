import { useLocation, useNavigate } from "react-router-dom";

export default function Footer({ darkMode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFooterClick = (e, targetId, isTop = false) => {
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

  return (
    <footer style={{
      width: "100%", borderTop: darkMode ? "2px solid rgba(255, 255, 255, 0.2)" : "2px solid rgba(0, 0, 0, 0.3)",
      marginTop: 80, background: darkMode ? "rgba(40, 30, 20, 0.95)" : "rgba(111, 69, 26, 0.66)",
      padding: "30px 0", transition: "all 0.3s ease",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", textAlign: "center", direction: "rtl" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
          
          {/* الروابط مع الحفاظ على كل الستايلات والترانزشن */}
          {[
            { name: "الرئيسية", id: 'home', top: true },
            { name: "الخط الزمني", id: 'about', top: false },
            { name: "الخريطة", id: 'features', top: false }
          ].map((link) => (
            <a key={link.id} href={`#${link.id}`} style={footerLinkStyle(darkMode)}
              onClick={(e) => handleFooterClick(e, link.id, link.top)}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "transparent"; }}
            >
              {link.name}
            </a>
          ))}

          <a href="#contact" style={footerLinkStyle(darkMode)}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.3)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "transparent"; }}
          >
            تواصل معنا
          </a>
        </div>

        <p style={{ marginTop: 16, fontSize: 14, color: darkMode ? "#d4a574" : "#000000", transition: "color 0.3s ease" }}>
          © {new Date().getFullYear()} ديار — مشروع هاكاثون
        </p>
      </div>
    </footer>
  );
}

const footerLinkStyle = (darkMode) => ({
  textDecoration: "none", color: darkMode ? "#ffffff" : "#000000", fontSize: 15, fontWeight: 500,
  padding: "6px 18px", borderRadius: 25, transition: "all 0.3s ease",
});