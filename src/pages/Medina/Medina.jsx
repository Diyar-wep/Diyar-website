import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المسارات الواردة في كود المدينة
import madinaBanner from "./MedinaPics/MadinaBanner.png";
import greenDome from "./MedinaPics/القبة الخضراء.jpg";
import quba from "./MedinaPics/مسجد قباء.jpg";
import uhud from "./MedinaPics/جبل أحد.jpg";
import baqi from "./MedinaPics/البقيع.jpg";

const Madinah = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "المدينة المنورة",
            subtitle: "طيبة الطيبة ومهجر النبي ﷺ وأول عاصمة في الإسلام",
            originTitle: "نشأة المنطقة",
            originDesc: "عُرفت قديماً باسم 'يثرب'، ويرجع تاريخها لـ 1600 سنة قبل الهجرة. سكنها العماليق ثم اليهود وقبائل الأوس والخزرج، وتحولت لـ 'المدينة المنورة' بعد هجرة النبي ﷺ عام 622م لتصبح أول عاصمة للدولة الإسلامية.",
            civTitle: "أهم الحضارات",
            civDesc: "شهدت تعاقب حضارة العماليق واليهود، ثم عصر الأنصار (الأوس والخزرج). ومع الهجرة النبوية، انطلقت منها الحضارة الإسلامية الكبرى التي شعت بنورها على العالم أجمع.",
            landmarksTitle: "أهم الآثار التاريخية وأقدمها",
            traditionsTitle: "عادات وتقاليد مدينية",
            traditionsDesc: "يتميز أهل المدينة بعادة 'سابع المولود' وتوزيع المنفوش، وثقافة إكرام الزوار المتجذرة. كما يشتهرون بالمدائح النبوية والأناشيد التي تعكس حبهم للنبي ﷺ وحفاوة استقبال ضيوف الرحمن.",
            foodTitle: "مأكولات شعبية",
            foods: ["الرز الكابلي", "الشابورة المدينية"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تعمل الرؤية عبر مشروع 'رؤى المدينة' وتأهيل أكثر من 100 موقع تاريخي على استقبال 30 مليون معتمر، مع توفير منظومة نقل ذكية كقطار الحرمين السريع والتحول الرقمي للخدمات.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع المدينة المنورة في غرب المملكة العربية السعودية، وتحيط بها الجبال والحرات البركانية من عدة جهات، وتُعد واحة خصبة اشتهرت بنخيلها ومياهها.",
            landmark1Title: "المسجد النبوي الشريف",
            landmark1Desc: "ثاني أقدس المساجد، يضم الروضة الشريفة وقبر النبي ﷺ، وهو مركز الإشعاع الحضاري الأول في الإسلام.",
            landmark2Title: "مسجد قباء",
            landmark2Desc: "أول مسجد بُني في الإسلام، شارك النبي ﷺ في بنائه بنفسه عند وصوله للمدينة مهاجراً.",
            landmark3Title: "جبل أحد",
            landmark3Desc: "جبل تاريخي شهد غزوة أحد، ويضم مقبرة شهداء أحد، وقال عنه النبي ﷺ: 'جبل يحبنا ونحبه'.",
            landmark4Title: "مقبرة البقيع",
            landmark4Desc: "أقدم وأهم مقابر المسلمين في المدينة، تضم رفات الآلاف من الصحابة الكرام وآل البيت عليهم السلام."
        },
        en: {
            dir: 'ltr',
            title: "Al-Madinah Al-Munawwarah",
            subtitle: "The Enlightened City and the First Capital of Islam",
            originTitle: "Region Origin",
            originDesc: "Formerly known as 'Yathrib', dating back 1600 years before Hijra. It became 'Al-Madinah' after the Prophet's migration in 622 AD, serving as the first capital of Islam.",
            civTitle: "Major Civilizations",
            civDesc: "Witnessed the Amalekites and Jewish civilizations, followed by the Ansar era. With the Prophet's Hijra, it became the beacon of the Great Islamic civilization.",
            landmarksTitle: "Ancient Landmarks",
            traditionsTitle: "Madinah Traditions",
            traditionsDesc: "Famous for 'Sab'e' (7th-day newborn celebration) and deeply rooted hospitality. Known for prophetic praises (Madih) and religious chants.",
            foodTitle: "Traditional Cuisine",
            foods: ["Kabli Rice", "Madinah Shaboora"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "Vision 2030 aims to host 30 million pilgrims through the 'Rua Al-Madinah' project and the rehabilitation of 100+ historical sites.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in western Saudi Arabia, surrounded by mountains and volcanic fields, it is a fertile oasis famous for palm trees.",
            landmark1Title: "The Prophet's Mosque",
            landmark1Desc: "The second holiest mosque, housing the Rawdah and the Prophet's tomb, the first center of Islamic civilization.",
            landmark2Title: "Quba Mosque",
            landmark2Desc: "The first mosque built in Islam; the Prophet (PBUH) personally participated in its construction.",
            landmark3Title: "Mount Uhud",
            landmark3Desc: "A historical mountain that witnessed the Battle of Uhud and houses the martyrs' cemetery.",
            landmark4Title: "Al-Baqi Cemetery",
            landmark4Desc: "The oldest and main cemetery in Madinah, containing the remains of thousands of companions and Ahl al-Bayt."
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark1Title, desc: t.landmark1Desc, img: greenDome },
        { id: 1, title: t.landmark2Title, desc: t.landmark2Desc, img: quba },
        { id: 2, title: t.landmark3Title, desc: t.landmark3Desc, img: uhud },
        { id: 3, title: t.landmark4Title, desc: t.landmark4Desc, img: baqi }
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
                    src={madinaBanner} 
                    alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Madinah+Al-Munawwarah"; }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))", zIndex: 2 }} />
                <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 20px" }}>
                    <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "800", color: "#fff", marginBottom: "10px", textShadow: "0 4px 15px rgba(0,0,0,0.4)" }}>
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
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Madinah+Landmark"; }}
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
                            title="Madinah Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps?q=Al+Madinah+Region+Saudi+Arabia&z=7&output=embed"

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

export default Madinah;