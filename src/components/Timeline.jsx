import React, { useEffect, useRef } from "react";

// 1. استيراد الصور يدوياً لضمان ظهورها
import period1Img from "./TimelinePic/period1Img.png";
import saudi1Img from "./TimelinePic/saudi1Img.png";
import saudi2Img from "./TimelinePic/saudi2Img.png";
import unificationImg from "./TimelinePic/unificationImg.jpg";
import modernImg from "./TimelinePic/modernImg.jpeg";
import haramImg from "./TimelinePic/haram.jpg";
import heritageImg from "./TimelinePic/heritageImg.jpeg";
import visionImg from "./TimelinePic/visionImg.png";

export default function Timeline({ darkMode, language }) {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const data = [
    {
      title: { ar: "ما قبل قيام الدولة السعودية الأولى", en: "Before the First Saudi State" },
      year: null,
      img: period1Img, // نستخدم المتغير المستورد هنا
      content: {
        ar: "امتد تاريخ شبه الجزيرة العربية لآلاف السنين، حيث شهدت المنطقة قيام حضارات قديمة مثل دلمون والثموديين والأنباط.",
        en: "The history of the Arabian Peninsula spans thousands of years, witnessing ancient civilizations like Dilmun, Thamud, and Nabataeans."
      },
    },
    {
      title: { ar: "الدولة السعودية الأولى", en: "The First Saudi State" },
      year: "1744",
      img: saudi1Img,
      content: {
        ar: "بقيام الدولة السعودية الأولى، بدأت ملامح كيان سياسي قائم على الوحدة والاستقرار.",
        en: "With the establishment of the First Saudi State, a political entity based on unity and stability emerged."
      },
    },
    {
      title: { ar: "الدولة السعودية الثانية", en: "The Second Saudi State" },
      year: "1824",
      img: saudi2Img,
      content: {
        ar: "جاءت الدولة السعودية الثانية لتؤكد استمرارية الحكم وترسيخ مفهوم الاستقرار رغم التحديات.",
        en: "The Second Saudi State confirmed the continuity of rule and stability despite challenges."
      },
    },
    {
      title: { ar: "توحيد المملكة", en: "Unification of the Kingdom" },
      year: "1932",
      img: unificationImg,
      content: {
        ar: "وحّد الملك عبدالعزيز مناطق المملكة تحت راية واحدة، مؤسسًا دولة حديثة تقوم على الأمن والوحدة.",
        en: "King Abdulaziz unified the regions of the Kingdom, establishing a modern state."
      },
    },
    {
      title: { ar: "بناء الدولة الحديثة", en: "Building the Modern State" },
      year: null,
      img: modernImg,
      content: {
        ar: "شهدت المملكة تطورًا في التعليم، والأمن، والأنظمة، والبنية التحتية.",
        en: "The Kingdom witnessed major development in education, security, and infrastructure."
      },
    },
    {
      title: { ar: "خدمة الحرمين الشريفين", en: "Serving the Two Holy Mosques" },
      year: null,
      img: haramImg,
      content: {
        ar: "اهتمت المملكة بخدمة الحرمين الشريفين عبر التوسعات والتنظيم المستمر.",
        en: "The Kingdom focused on serving the Two Holy Mosques through continuous expansions."
      },
    },
    {
      title: { ar: "الهوية الوطنية والتراث", en: "National Identity and Heritage" },
      year: null,
      img: heritageImg,
      content: {
        ar: "تزايد الاهتمام بتوثيق التراث وحماية الآثار وإبراز ثقافة المناطق.",
        en: "Increased focus on documenting heritage and protecting antiquities."
      },
    },
    {
      title: { ar: "رؤية السعودية 2030", en: "Saudi Vision 2030" },
      year: "2030",
      img: visionImg,
      content: {
        ar: "تمثل رؤية 2030 امتدادًا للتاريخ، تجمع بين الأصالة والتنمية، لبناء مستقبل مستدام.",
        en: "Vision 2030 combines authenticity and development for a sustainable future."
      },
    },
  ];

  return (
    <>
      <style>{css}</style>
      <div 
        className={`timeline-wrapper ${darkMode ? "dark-theme" : "light-theme"}`} 
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="line" />

        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`row ${isLeft ? "left" : "right"} hidden`}
            >
              <div className="card">
                <div className="card-image">
                  <img src={item.img} alt={item.title[language]} />
                  {item.year && <span className="year-badge">{item.year}</span>}
                </div>
                <h3>{item.title[language]}</h3>
                <p>{item.content[language]}</p>
              </div>
              <div className="dot" />
            </div>
          );
        })}
      </div>
    </>
  );
}

const css = `
.timeline-wrapper { position: relative; width: 100%; padding: 80px 0; overflow-x: hidden; }

/* الألوان العكسية المطلوبة */
.light-theme .card { background-color: #251e19; color: #F6E9DA; }
.light-theme .card h3 { color: #F6E9DA; }
.light-theme .card p { color: #dcc596; }

.dark-theme .card { background-color: #F6E9DA; color: #251e19; }
.dark-theme .card h3 { color: #251e19; }
.dark-theme .card p { color: #4A352C; }

.line { position: absolute; top: 0; bottom: 0; left: 50%; width: 3px; background: var(--timeline-line); transform: translateX(-50%); }
.row { position: relative; width: 100%; display: flex; margin-bottom: 100px; align-items: center; }

[dir="rtl"] .row.left { justify-content: flex-end; padding-right: calc(50% + 40px); padding-left: 0; }
[dir="rtl"] .row.right { justify-content: flex-start; padding-left: calc(50% + 40px); padding-right: 0; }
[dir="ltr"] .row.left { justify-content: flex-start; padding-left: calc(50% + 40px); padding-right: 0; }
[dir="ltr"] .row.right { justify-content: flex-end; padding-right: calc(50% + 40px); padding-left: 0; }

.dot { position: absolute; left: 50%; transform: translateX(-50%); width: 18px; height: 18px; background: var(--timeline-dot); border: 3px solid var(--timeline-line); border-radius: 50%; z-index: 3; }
.card { width: 100%; max-width: 480px; border-radius: 22px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: 0.3s; }
.card-image { position: relative; height: 220px; width: 100%; }
.card-image img { width: 100%; height: 100%; object-fit: cover; display: block; }

.year-badge { position: absolute; top: 15px; right: 15px; background: var(--accent-color); color: var(--button-text); padding: 6px 18px; border-radius: 999px; font-weight: bold; font-size: 14px; }
.card h3 { padding: 20px 20px 8px; font-size: 1.3rem; }
.card p { padding: 0 20px 24px; font-size: 0.95rem; line-height: 1.8; }

.hidden { opacity: 0; transform: translateY(50px); }
.show { opacity: 1; transform: translateY(0); transition: 0.8s ease-out; }

@media (max-width: 768px) {
  .line, .dot { left: 30px; }
  .row { padding: 0 20px 0 60px !important; justify-content: flex-start !important; }
  .card { max-width: 100%; }
}
`;