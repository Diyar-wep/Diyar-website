export default function Footer() {
    return (
    <footer
        style={{
        padding: 16,
        borderTop: "1px solid #ddd",
        textAlign: "center",
        marginTop: 40,
        }}
    >
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
        </div>

        <p style={{ marginTop: 12, fontSize: 14, opacity: 0.8 }}>
        © {new Date().getFullYear()} Diyar — Hackathon Project
        </p>
    </footer>
    );
}
