import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على مسارات كود تبوك السابق
import tabukBanner from "./TabPics/TabukBanner.png"; 
import TabukCastle from "./TabPics/TabCatsle.jpeg";
import Shuaeib from "./TabPics/Shuaib.webp";

const Tabuk = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة تبوك",
            subtitle: "بوابة الشمال وعروس البحر الأحمر ومركز المستقبل",
            originTitle: "نشأة المنطقة",
            originDesc: "تقع تبوك في الشمال الغربي للمملكة، وهي حلقة الوصل بين الجزيرة العربية وبلاد الشام ومصر. عُرفت قديماً بكونها أرضاً خصبة وافرة المياه، مما جعلها مستقراً للبشر منذ عصور ما قبل التاريخ.",
            civTitle: "أهم الحضارات",
            civDesc: "استوطنتها حضارات عريقة مثل الحضارة الآرامية والمدينية والنبطية. كما شهدت أحداثاً إسلامية كبرى أبرزها غزوة تبوك، وكانت محطة هامة على طريق الحج الشامي وسكة حديد الحجاز.",
            landmarksTitle: "أهم الآثار التاريخية",
            traditionsTitle: "عادات وتقاليد تبوك",
            traditionsDesc: "يشتهر أهل تبوك بالكرم الأصيل المرتبط بحياة البادية والحاضرة، ومن أبرز عاداتهم سباقات الهجن ومجالس القهوة العربية، بالإضافة إلى الفنون الشعبية مثل 'الدحة' و'الرفيحي'.",
            foodTitle: "مأكولات تبوكية",
            foods: ["المنسف", "المجللة", "تمور تبوك"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تمثل تبوك حجر الزاوية في مشاريع الرؤية الكبرى، حيث تحتضن مشروع 'نيوم' مدينة المستقبل، ومشروع 'البحر الأحمر' و'أمالا'. هذه المشاريع تعيد صياغة المنطقة كمركز عالمي للابتكار والسياحة البيئية.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع منطقة تبوك في الشمال الغربي من المملكة، وتعد بوابة تربط المملكة بالدول المجاورة. تتميز بساحل طويل على البحر الأحمر وتنوع تضاريسي يجمع بين جبال لوز الثلجية وصحراء حسمى الحمراء.",
            landmark1Title: "قلعة تبوك الأثرية",
            landmark1Desc: "تعد من أقدم القلاع التاريخية في المنطقة، ويعود تاريخ بنائها الأصلي إلى عصر النبي شعيب عليه السلام، ثم جُددت في العصور الإسلامية اللاحقة.",
            landmark2Title: "مدائن شعيب",
            landmark2Desc: "موقع أثري يضم واجهات نبطية منحوتة في الصخر، كانت موطناً لأصحاب الأيكة قوم نبي الله شعيب، وتعتبر من أهم المعالم التاريخية في شمال المملكة."
        },
        en: {
            dir: 'ltr',
            title: "Tabuk Region",
            subtitle: "The Gateway to the North and the Hub of the Future",
            originTitle: "Region Origin",
            originDesc: "Tabuk is located in the northwest of KSA, serving as a bridge between the Arabian Peninsula, Levant, and Egypt. Historically known for its fertile land, attracting settlers since prehistoric times.",
            civTitle: "Major Civilizations",
            civDesc: "Ancient civilizations such as the Arameans, Midianites, and Nabataeans settled here. It witnessed major Islamic events, most notably the Battle of Tabuk, and was a key stop for the Hejaz Railway.",
            landmarksTitle: "Historical Landmarks",
            traditionsTitle: "Customs and Traditions",
            traditionsDesc: "The people of Tabuk are famous for their authentic hospitality. Key traditions include camel racing, Arabic coffee councils, and folk arts like 'Al-Dahha' and 'Al-Rafaihi'.",
            foodTitle: "Tabuk Cuisine",
            foods: ["Mansaf", "Al-Majallalah", "Tabuk Dates"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "Tabuk is the cornerstone of major Vision projects, hosting 'NEOM', the 'Red Sea Project', and 'Amaala'. These projects redefine the region as a global hub for innovation and ecotourism.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in the northwest of Saudi Arabia, Tabuk serves as a gateway connecting the Kingdom to neighbors. It features a long Red Sea coastline and diverse terrains like Jabal al-Lawz and Hisma desert.",
            landmark1Title: "Tabuk Castle",
            landmark1Desc: "One of the oldest historical castles in the region, its original construction dates back to the era of Prophet Shuaib, later renovated during various Islamic eras.",
            landmark2Title: "Magha'er Shuaib",
            landmark2Desc: "An archaeological site featuring Nabataean facades carved into rocks. It was the home of the people of Prophet Shuaib and is a key historical landmark.",
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark1Title, desc: t.landmark1Desc, img: TabukCastle },
        { id: 1, title: t.landmark2Title, desc: t.landmark2Desc, img: Shuaeib }
    ];

    const glassStyle = {
        background: "var(--timeline-card-bg)",
        border: "1px solid var(--timeline-card-border)",
        borderRadius: "24px",
        padding: "35px",
        marginBottom: "30px",
        boxShadow: "0 10px 30px var(--map-shadow)",
        transition: "all 0.3s ease"
    };

    return (
        <div style={{
            direction: t.dir,
            textAlign: t.dir === "rtl" ? "right" : "left",
            minHeight: "100vh",
            backgroundColor: "var(--bg-primary)",
            color: "var(--text-main)",
            fontFamily: "'Cairo', 'Segoe UI', Tahoma, sans-serif",
            transition: "all 0.4s ease"
        }}>
            <header style={{ position: "relative", height: "55vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img 
                    src={tabukBanner} 
                    alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Tabuk+Region"; }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))", zIndex: 2 }} />
                <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 20px" }}>
                    <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", color: "#fff", marginBottom: "10px", textShadow: "0 4px 15px rgba(0,0,0,0.3)" }}>
                        {t.title}
                    </h1>
                    <p style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "rgba(255,255,255,0.9)", fontWeight: "500" }}>
                        {t.subtitle}
                    </p>
                </div>
            </header>

            <main style={{ maxWidth: "1100px", margin: "-50px auto 0", position: "relative", zIndex: 10, padding: "0 20px 80px" }}>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
                    <section style={glassStyle}>
                        <h2 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px", display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ width: "6px", height: "26px", background: "var(--accent-color)", borderRadius: "10px" }}></span>
                            {t.originTitle}
                        </h2>
                        <p style={{ lineHeight: "1.8", color: "var(--text-secondary)", fontSize: "1.05rem" }}>{t.originDesc}</p>
                    </section>

                    <section style={glassStyle}>
                        <h2 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px", display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ width: "6px", height: "26px", background: "var(--accent-color)", borderRadius: "10px" }}></span>
                            {t.civTitle}
                        </h2>
                        <p style={{ lineHeight: "1.8", color: "var(--text-secondary)", fontSize: "1.05rem" }}>{t.civDesc}</p>
                    </section>
                </div>

                <section style={{ ...glassStyle, padding: "40px" }}>
                    <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", marginBottom: "40px", color: "var(--text-main)" }}>
                        {t.landmarksTitle}
                    </h2>
                    
                    <div style={{ display: "flex", flexDirection: t.dir === "rtl" ? "row" : "row-reverse", gap: "30px", flexWrap: "wrap" }}>
                        <div style={{ flex: "1", minWidth: "280px", display: "flex", flexDirection: "column", gap: "12px" }}>
                            {landmarks.map((item, idx) => (
                                <div 
                                    key={item.id}
                                    onClick={() => setActiveLandmark(idx)}
                                    style={{
                                        padding: "22px",
                                        borderRadius: "18px",
                                        cursor: "pointer",
                                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                        background: activeLandmark === idx ? "var(--accent-color)" : "var(--bg-primary)",
                                        color: activeLandmark === idx ? "var(--button-text)" : "var(--text-main)",
                                        transform: activeLandmark === idx ? (t.dir === "rtl" ? "translateX(-10px)" : "translateX(10px)") : "none",
                                        border: "1px solid var(--timeline-card-border)",
                                        boxShadow: activeLandmark === idx ? "0 10px 20px rgba(0,0,0,0.1)" : "none"
                                    }}
                                >
                                    <h3 style={{ fontSize: "1.15rem", fontWeight: "700" }}>{item.title}</h3>
                                </div>
                            ))}
                        </div>

                        <div style={{ flex: "2", minWidth: "320px", position: "relative", borderRadius: "24px", overflow: "hidden", height: "420px", boxShadow: "0 20px 40px var(--map-shadow)" }}>
                            <img 
                                src={landmarks[activeLandmark].img} 
                                alt={landmarks[activeLandmark].title}
                                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s ease-in-out" }}
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Tabuk+Landmark"; }}
                            />
                            <div style={{ 
                                position: "absolute", bottom: 0, left: 0, right: 0, 
                                padding: "35px", background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                                color: "#fff"
                            }}>
                                <h3 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "10px" }}>{landmarks[activeLandmark].title}</h3>
                                <p style={{ fontSize: "1.05rem", opacity: 0.95, lineHeight: "1.6", fontWeight: "400" }}>{landmarks[activeLandmark].desc}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>
                    <section style={glassStyle}>
                        <h2 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px" }}>{t.traditionsTitle}</h2>
                        <p style={{ lineHeight: "1.8", color: "var(--text-secondary)" }}>{t.traditionsDesc}</p>
                    </section>

                    <section style={glassStyle}>
                        <h2 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px" }}>{t.foodTitle}</h2>
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                            {t.foods.map(food => (
                                <span key={food} style={{ 
                                    padding: "10px 22px", 
                                    borderRadius: "50px", 
                                    background: "var(--accent-color)", 
                                    color: "var(--button-text)", 
                                    fontWeight: "700",
                                    fontSize: "0.95rem",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
                                }}>
                                    {food}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <section style={{ ...glassStyle, borderLeft: t.dir === "ltr" ? "8px solid var(--accent-color)" : "none", borderRight: t.dir === "rtl" ? "8px solid var(--accent-color)" : "none" }}>
                    <h2 style={{ color: "var(--accent-color)", fontSize: "1.8rem", fontWeight: "800", marginBottom: "15px" }}>{t.visionTitle}</h2>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-secondary)" }}>{t.visionDesc}</p>
                </section>

                <section style={glassStyle}>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "20px" }}>{t.geoTitle}</h2>
                    <p style={{ marginBottom: "25px", color: "var(--text-secondary)" }}>{t.geoDesc}</p>
                    <div style={{ height: "450px", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--timeline-card-border)" }}>
                        <iframe 
                            title="Tabuk Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps?q=Tabuk+Region+Saudi+Arabia&z=7&output=embed"

                            allowFullScreen
                            style={{ filter: darkMode ? "invert(90%) hue-rotate(180deg) brightness(0.8)" : "none" }}
                        ></iframe>
                    </div>
                </section>

            </main>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                main section {
                    animation: fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
            `}</style>
        </div>
    );
};

export default Tabuk;