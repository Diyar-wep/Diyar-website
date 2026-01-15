import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المسارات المقدمة في كود مكة
import makkahBanner from "./MeccaPics/Makkahbanner.png";
import haramPic from "./MeccaPics/برج الساعه.jpg";
import hiraPic from "./MeccaPics/غار حراء.png";
import zubaydahPic from "./MeccaPics/عين زبيده.webp";
import bayahPic from "./MeccaPics/مسجد البيعة.jpg";

const Makkah = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "مكة المكرمة",
            subtitle: "مهبط الوحي وقبلة المسلمين وقلب العالم الإسلامي",
            originTitle: "نشأة المنطقة",
            originDesc: "يعود تاريخ مكة لأكثر من 2000 سنة قبل الميلاد. بدأت كقرية في وادٍ جاف، ثم ازدهرت بعد تفجر بئر زمزم، ورفع النبي إبراهيم وابنه إسماعيل قواعد الكعبة، لتصبح مركزاً للتوحيد ومحطة تجارية عالمية.",
            civTitle: "أهم الحضارات",
            civDesc: "سكنها العماليق وجرهم، ثم خزاعة وقريش التي سادت قبل الإسلام. ومع بعثة النبي محمد صلى الله عليه وسلم، أصبحت مكة قلب العالم الإسلامي وشهدت أعظم تطور حضاري وعمراني عبر العصور.",
            landmarksTitle: "أهم الآثار التاريخية",
            traditionsTitle: "عادات وتقاليد مكية",
            traditionsDesc: "تتميز مكة بعادات 'الغمرة' وفن 'المجس الحجازي' الفلكلوري. ويُعرف أهلها بحفاوة استقبال 'ضيوف الرحمن' وتقديم القهوة والتمور، وعادة 'القيس' الشعبية في أيام الحج.",
            foodTitle: "مأكولات مكية",
            foods: ["السليق المكاوي", "الدبيازة", "المطبق", "المنتو"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تهدف الرؤية لاستيعاب 30 مليون معتمر سنوياً عبر تطوير البنية التحتية، ومشروع مسار، وقطار الحرمين السريع، مع تحويل مكة لمدينة ذكية بالكامل لتسهيل تجربة ضيوف الرحمن.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع مكة المكرمة في غرب المملكة العربية السعودية، في وادٍ تحده جبال السروات، وتعتبر قبلة المسلمين التي يتجهون إليها في صلاتهم من كل مكان.",
            landmark1Title: "المسجد الحرام والكعبة",
            landmark1Desc: "أقدم بيت وُضع للناس، وهو قبلة المسلمين ومركز عبادتهم، رفع قواعده النبي إبراهيم وابنه إسماعيل عليهما السلام.",
            landmark2Title: "غار حراء",
            landmark2Desc: "يقع في جبل النور، وهو المكان الذي نزل فيه الوحي لأول مرة على النبي محمد صلى الله عليه وسلم.",
            landmark3Title: "عين زبيدة",
            landmark3Desc: "معجزة هندسية مائية أنشأتها السيدة زبيدة زوجة هارون الرشيد لسقيا الحجاج لعدة قرون عبر قنوات ممتدة.",
            landmark4Title: "مسجد البيعة",
            landmark4Desc: "يقع في منى، وهو الموقع الذي تمت فيه بيعة العقبة التاريخية بين النبي صلى الله عليه وسلم والأنصار."
        },
        en: {
            dir: 'ltr',
            title: "Makkah Al-Mukarramah",
            subtitle: "The Cradle of Revelation and the Qibla of Muslims",
            originTitle: "Region Origin",
            originDesc: "Dating back over 2000 BC, Makkah began as a small valley settlement. It flourished after Zamzam flowed and the Kaaba was built, becoming the center of Monotheism and a global trade hub.",
            civTitle: "Major Civilizations",
            civDesc: "Inhabited by Amalekites and Jurhum, then Quraysh. Since the advent of Islam, it became the heart of the Islamic world, witnessing the greatest civilizational development throughout ages.",
            landmarksTitle: "Historical Landmarks",
            traditionsTitle: "Makkah Traditions",
            traditionsDesc: "Makkah is famous for 'Ghamra' and 'Hijazi Majass' folk art. Its people are known for their hospitality to 'Pilgrims', serving coffee, dates, and the 'Qays' tradition during Hajj.",
            foodTitle: "Traditional Cuisine",
            foods: ["Makkah Saleeg", "Debyazah", "Mutabbaq", "Mantu"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "Vision 2030 aims to host 30 million pilgrims annually through infrastructure development, the Masar project, and the Haramain High-Speed Rail, transforming Makkah into a smart city.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in western Saudi Arabia, set in a valley of the Sarawat Mountains, it is the Qibla for Muslims worldwide towards which they turn in their prayers.",
            landmark1Title: "The Grand Mosque & Kaaba",
            landmark1Desc: "The oldest house established for mankind, the Qibla of Muslims, built by Prophet Abraham and his son Ishmael.",
            landmark2Title: "Hira Cave",
            landmark2Desc: "Located in Jabal al-Nour, the place where the first revelation descended upon Prophet Muhammad (PBUH).",
            landmark3Title: "Zubaydah Spring",
            landmark3Desc: "An engineering miracle created by Lady Zubaydah to provide water for pilgrims through extended channels for centuries.",
            landmark4Title: "Al-Bay'ah Mosque",
            landmark4Desc: "Located in Mina, the site of the historic Bay'ah al-Aqaba between the Prophet (PBUH) and the Ansar."
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark1Title, desc: t.landmark1Desc, img: haramPic },
        { id: 1, title: t.landmark2Title, desc: t.landmark2Desc, img: hiraPic },
        { id: 2, title: t.landmark3Title, desc: t.landmark3Desc, img: zubaydahPic },
        { id: 3, title: t.landmark4Title, desc: t.landmark4Desc, img: bayahPic }
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
                    src={makkahBanner} 
                    alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Makkah+Region"; }}
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
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Makkah+Landmark"; }}
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
                            title="Makkah Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps?q=Makkah+Region+Saudi+Arabia&z=7&output=embed"
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

export default Makkah;