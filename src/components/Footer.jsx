export default function Footer() {
    return (
    <footer
    style={{
        width: "100%",
        borderTop: "2px solid rgba(0, 0, 0, 0.3)",
        marginTop: 80,
        background: "rgba(111, 69, 26, 0.66)",
        padding: "30px 0",
        }}
    >
        <div style={{ 
        maxWidth: 1100, 
        margin: "0 auto", 
        padding: "0 24px", 
        textAlign: "center",
        direction: "rtl" 
        }}>
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 24, 
            flexWrap: "wrap",
            marginBottom: 20
        }}>
            <a 
            href="#home"
            style={{
                textDecoration: "none",
                color: "#000000",
                fontSize: 15,
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
            
            <a 
            href="#founders"
            style={{
                textDecoration: "none",
                color: "#000000",
                fontSize: 15,
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
            href="#regions"
            style={{
                textDecoration: "none",
                color: "#000000",
                fontSize: 15,
                fontWeight: 500,
                padding: "6px 18px",
                borderRadius: 25,
                transition: "all 0.3s ease",
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
            href="#contact"
            style={{
                textDecoration: "none",
                color: "#000000",
                fontSize: 15,
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
        </div>

        <p style={{ 
            marginTop: 16, 
            fontSize: 14, 
            color: "#000000",
        }}>
            © {new Date().getFullYear()} ديار — مشروع هاكاثون
        </p>
        </div>
    </footer>
    );
}