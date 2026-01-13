import "./Home.css";

export default function Home({ darkMode, t }) {
  return (
    <div className={`home ${darkMode ? 'dark-mode' : ''}`} style={{ direction: t.dir }}>
      {/* HERO */}
      <section id="home" className="section hero">
        <h1 className="hero__title">{t.heroTitle}</h1>
        <p className="hero__desc">{t.heroDesc}</p>
        <div className="hero__links">
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('about');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t.timeline}
          </a>
          <a 
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('features');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t.map}
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
          >
            {t.contact}
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2 className="section__title">{t.timelineSection}</h2>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <h2 className="section__title">{t.mapSection}</h2>
        <ul className="features">
          <li className="features__item">
            {t.mapContent}
          </li>
        </ul>
      </section>
    </div>
  );
}