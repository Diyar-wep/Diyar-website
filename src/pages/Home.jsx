export default function Home() {
    return (
    <div style={{ padding: 24 }}>
      {/* HERO */}
        <section id="home" style={{ padding: "48px 0" }}>
        <h1 style={{ fontSize: 42, margin: 0 }}>Diyar</h1>
        <p style={{ fontSize: 18, maxWidth: 700 }}>
            Hackathon project website.
        </p>

        <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
        </div>
        </section>

      {/* ABOUT */}
        <section id="about" style={{ padding: "48px 0" }}>
        <h2>About</h2>
        <p style={{ maxWidth: 800 }}>
            Write 3–5 lines about the project idea here (problem + solution).
        </p>
        </section>

      {/* FEATURES */}
        <section id="features" style={{ padding: "48px 0" }}>
        <h2>Features</h2>
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
        </ul>
        </section>

      {/* CONTACT */}
        <section id="contact" style={{ padding: "48px 0" }}>
        <h2>Contact</h2>
        <p>Team: Alwaleed, Badriah, Nada, Mohammed</p>
        </section>
    </div>
    );
}
// Hi :)