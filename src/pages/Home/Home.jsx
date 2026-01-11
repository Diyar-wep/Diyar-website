import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section id="home" className="section hero">
        <h1 className="hero__title">هنا بنحط صوره</h1>
        <p className="hero__desc">دِيار , إكتشف دِيارك</p>

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
            الخط الزمني
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
            الخريطة
          </a>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }}
          >
            تواصل معنا
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2 className="section__title">الخط الزمني</h2>
      </section>

      {/* FEATURES */}
      <section id="features" className="section">
        <h2 className="section__title">الخريطة</h2>
        <ul className="features">
          <li className="features__item">
              هنا بنحط الخريطة التفاعلية
          </li>
        </ul>
      </section>
    </div>
  );
}