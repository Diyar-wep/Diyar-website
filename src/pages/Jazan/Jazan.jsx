import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المسارات في كود جازان الأصلي
import jazanBanner from "./JazanPics/jizzanBanner.png";
import atharPic from "./JazanPics/The ruins of the city of Athar.png";
import dosariyahPic from "./JazanPics/Al-Dawsariyah Castle.png";
import farasanPic from "./JazanPics/Al-Rifai House.jpg";

const Jazan = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة جازان",
            subtitle: "بوابة الكرم، والفل، وعراقة التاريخ البحري",
            originTitle: "نشأة المنطقة",
            originDesc: "يعود الاستيطان البشري في جازان إلى 8000 سنة قبل الميلاد. عُرفت تاريخياً باسم 'المخلاف السليماني'، وكانت مركزاً تجارياً حيوياً ونقطة وصل استراتيجية بين الجزيرة العربية واليمن وأفريقيا.",
            civTitle: "أهم الحضارات",
            civDesc: "ازدهرت فيها الحضارة الإسلامية وبرزت مدن كمدينة عثر كمركز تجاري لضرب العملات، كما تركت الدولة العثمانية بصمتها العسكرية من خلال القلاع التحصينية مثل قلعة الدوسرية.",
            landmarksTitle: "أهم الآثار التاريخية",
            traditionsTitle: "عادات وتقاليد جازان",
            traditionsDesc: "تتميز جازان بمراسم زواج تمتد لـ 5 ليالٍ وفنون شعبية كرقصات السيف والعزاوي. كما يشتهر أهلها بارتداء 'الميل' التقليدي والاهتمام بالنباتات العطرية كالفل والكادي.",
            foodTitle: "مأكولات جازانية",
            foods: ["المرسة", "المغش", "خبز البر", "السمك المالح"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تهدف الرؤية لتحويل جازان لمركز اقتصادي عبر مدينة جازان للصناعات الأساسية، مع تطوير جزر فرسان والواجهات البحرية لتكون وجهة سياحية عالمية.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع منطقة جازان في أقصى الجنوب الغربي للمملكة العربية السعودية، وتمثل بوابة هامة تربط بين المملكة وعمقها الأفريقي عبر البحر الأحمر.",
            landmark1Title: "مدينة عثر الأثرية",
            landmark1Desc: "مدينة تجارية تاريخية مزدهرة كانت محطة هامة على طرق التجارة القديمة، واشتهرت بضرب الدنانير العثرية الإسلامية.",
            landmark2Title: "قلعة الدوسرية",
            landmark2Desc: "قلعة عثمانية شامخة تطل على ميناء جيزان، تم تجديدها في عهد الملك عبدالعزيز عام 1351هـ لتكون شاهداً على تاريخ المنطقة.",
            landmark3Title: "جزر فرسان",
            landmark3Desc: "تضم جزر فرسان قلاعاً عثمانية وبيت الرفاعي الأثري الذي يعكس ثراء العمارة والتجارة في المنطقة قديماً."
        },
        en: {
            dir: 'ltr',
            title: "Jazan Region",
            subtitle: "The Gateway of Hospitality, Jasmine, and Maritime History",
            originTitle: "Region Origin",
            originDesc: "Human settlement in Jazan dates back to 8000 BC. Historically known as 'Al-Mikhlaf Al-Sulaimani', it was a vital trade link between Arabia, Yemen, and Africa.",
            civTitle: "Major Civilizations",
            civDesc: "Islamic civilization flourished in cities like Athar, a major minting center. The Ottoman Empire also left an architectural mark with defensive forts.",
            landmarksTitle: "Historical Landmarks",
            traditionsTitle: "Customs and Traditions",
            traditionsDesc: "Famous for 5-night wedding ceremonies and folk dances like the Sword and Azawi. Known for traditional 'Mail' attire and aromatic plants like Jasmine and Kadi.",
            foodTitle: "Jazanian Cuisine",
            foods: ["Marsah", "Maghsh", "Wheat Bread", "Salted Fish"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "Vision 2030 aims to develop Jazan as an economic hub and transform Farasan Islands into a world-class tourism destination.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in the far southwest of Saudi Arabia, a key gateway connecting the Kingdom via the Red Sea.",
            landmark1Title: "Athar Ancient City",
            landmark1Desc: "A prosperous historical trading city, a key stop on ancient trade routes, famous for minting Islamic Dinars.",
            landmark2Title: "Al-Dosariyah Castle",
            landmark2Desc: "An Ottoman castle overlooking Jazan port, renovated during King Abdulaziz's reign in 1351 AH.",
            landmark3Title: "Farasan Islands",
            landmark3Desc: "Features Ottoman castles and the historic Al-Rifai House, reflecting the region's rich architectural heritage."
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark1Title, desc: t.landmark1Desc, img: atharPic },
        { id: 1, title: t.landmark2Title, desc: t.landmark2Desc, img: dosariyahPic },
        { id: 2, title: t.landmark3Title, desc: t.landmark3Desc, img: farasanPic }
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
                    src={jazanBanner} 
                    alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Jazan+Region"; }}
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
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Jazan+Landmark"; }}
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
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "20px", color: "var(--accent-color)" }}>{t.geoTitle}</h2>
                    <p style={{ marginBottom: "25px", color: "var(--text-secondary)", lineHeight: "1.8" }}>{t.geoDesc}</p>
                    <div style={{ height: "450px", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--timeline-card-border)", boxShadow: "0 10px 30px var(--map-shadow)" }}>
                        <iframe 
                            title="Jazan Region Map" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            style={{ 
                                border: 0, 
                                filter: darkMode ? "invert(90%) hue-rotate(180deg) brightness(0.8)" : "none" 
                            }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238904.4539183!2d42.5518!3d16.8892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10!3m3!1m2!1s0x1607e73c7e5e5e5d%3A0x3af83b9c8f8e8e8e!2sJazan%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                            allowFullScreen="" 
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
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

export default Jazan;