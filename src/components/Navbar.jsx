export default function Navbar() {
    return (
    <nav
        style={{
        padding: 16,
        borderBottom: "1px solid #ddd",
        display: "flex",
        gap: 16,
        position: "sticky",
        top: 0,
        background: "white",
        zIndex: 999,
        }}
    >
        <b>Diyar</b>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
    </nav>
    );
}
