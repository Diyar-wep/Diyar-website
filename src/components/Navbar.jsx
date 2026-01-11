import { useState, useEffect } from "react";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & passed 100px
        setVisible(false);
        } else {
        // Scrolling up
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
        }}
    >
        <nav
        style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(111, 69, 26, 0.66)",
            borderRadius: 50,
            border: "1.5px solid rgba(0, 0, 0, 0.4)",
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        }}
        >
        <a 
            href="#contact"
            style={{
            textDecoration: "none",
            color: "#000000",
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
            e.target.style.transform = "scale(1.1)";
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.background = "transparent";
            }}
        >
            تواصل معنا
        </a>

        <a 
            href="#regions"
            style={{
            textDecoration: "none",
            color: "#000000",
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
            e.target.style.transform = "scale(1.1)";
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.background = "transparent";
            }}
        >
            الخريطة
        </a>

        <a 
            href="#founders"
            style={{
            textDecoration: "none",
            color: "#000000",
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
            e.target.style.transform = "scale(1.1)";
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.background = "transparent";
            }}
        >
            الخط الزمني
        </a>

        <a 
            href="#home"
            style={{
            textDecoration: "none",
            color: "#000000",
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
            e.target.style.transform = "scale(1.1)";
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            }}
            onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.background = "transparent";
            }}
        >
            الرئيسية
        </a>
        </nav>
    </header>
    );
}