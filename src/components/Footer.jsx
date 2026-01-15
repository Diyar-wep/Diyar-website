import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Footer({ darkMode, t }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
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

  const handlePhoneCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("0549986806");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer style={{
      width: "100%", borderTop: "2px solid var(--nav-footer-border)",
      marginTop: 80, background: "var(--nav-footer-bg)",
      padding: "30px 0", transition: "0.3s ease",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", textAlign: "center", direction: t.dir }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
          
          {[
            { name: t.home, id: 'home', top: true },
            { name: t.timeline, id: 'about', top: false },
            { name: t.map, id: 'features', top: false }
          ].map((link) => (
            <a key={link.id} href={`#${link.id}`} style={footerLinkStyle}
              onClick={(e) => handleFooterClick(e, link.id, link.top)}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = "scale(1.1)"; 
                e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"; 
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = "scale(1)"; 
                e.currentTarget.style.background = "transparent"; 
              }}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={handlePhoneCopy}
            style={{
              ...footerLinkStyle,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              background: copied 
                ? (darkMode ? "rgba(76, 175, 80, 0.3)" : "rgba(76, 175, 80, 0.2)")
                : "transparent",
            }}
            onMouseEnter={(e) => { 
              if (!copied) {
                e.currentTarget.style.transform = "scale(1.1)"; 
                e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)";
              }
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = "scale(1)"; 
              if (!copied) {
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            {copied ? t.copied : t.phoneContact}
          </button>

        </div>
        <p style={{ marginTop: 16, fontSize: 14, color: "var(--nav-footer-text)", transition: "0.3s ease", opacity: 0.8 }}>
          © {new Date().getFullYear()} {t.footerText}
        </p>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  textDecoration: "none", color: "var(--nav-footer-text)", fontSize: 15, fontWeight: 500,
  padding: "6px 18px", borderRadius: 25, transition: "all 0.3s ease",
};