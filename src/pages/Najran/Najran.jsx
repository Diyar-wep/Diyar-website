import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المسارات في الكود الأصلي لنجران
import najranBanner from "./NajranPics/NajranBanner.png"; 
import okhdoodPic from "./NajranPics/Al-Ukhdood City.png"; 
import himaPic from "./NajranPics/Cultural Inscriptions of Hima.jpg"; 
import mudPalacesPic from "./NajranPics/Najran Trails.jpg"; 

const Najran = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة نجران",
            subtitle: "بلاد الأخدود، التاريخ العريق، والبيوت الطينية الأصيلة",
            originTitle: "نشأة المنطقة",
            originDesc: "تُعد نجران من أقدم البقاع المأهولة منذ العصور الحجرية. اكتسبت أهميتها التاريخية كحلقة وصل رئيسية على 'طريق البخور' القديم، وشهدت أحداثاً تاريخية كبرى خلّدها الزمن.",
            civTitle: "أهم الحضارات",
            civDesc: "كانت نجران جزءاً لا يتجزأ من الممالك العربية القديمة مثل سبأ وحمير، وشهدت ازدهاراً تجارياً واسعاً بفضل موقعها الاستراتيجي، واستمر دورها كمركز حضاري هام في العصور الإسلامية.",
            landmarksTitle: "أهم الآثار التاريخية",
            traditionsTitle: "عادات وتقاليد نجرانية",
            traditionsDesc: "يبرز فن 'الزامل' كأهم الفنون الترحيبية، بالإضافة إلى الرزفة والمرافع. ويشتهر أهلها باللباس التقليدي كالمذيل والمكمم، وكرم الضيافة الأصيل في البيوت الطينية العريقة.",
            foodTitle: "مأكولات نجرانية",
            foods: ["الرقش", "الوفد", "الحميس"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تركز الرؤية على تطوير المواقع الأثرية كالأخدود وحمى لتكون وجهات سياحية عالمية، مع تعزيز الهوية العمرانية الفريدة لنجران والحفاظ على تراثها الثقافي العريق.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع منطقة نجران في الجنوب الغربي من المملكة العربية السعودية، وتتميز بتنوع تضاريسي فريد يجمع بين الجبال الشاهقة، والصحاري الشاسعة، والواحات الخصبة المليئة بالنخيل.",
            landmark1Title: "مدينة الأخدود الأثرية",
            landmark1Desc: "تضم أسواراً عالية ونقوشاً مسندية ورسومات صخرية تروي قصة أصحاب الأخدود وتاريخ المنطقة القديم الممتد لآلاف السنين.",
            landmark2Title: "منطقة حمى الثقافية",
            landmark2Desc: "أكبر تجمع للنقوش الصخرية في العالم، وهي موقع مسجل في قائمة التراث العالمي (اليونسكو)، وتعتبر متحفاً مفتوحاً للتاريخ البشري.",
            landmark3Title: "القصور الطينية (الدروب)",
            landmark3Desc: "نمط معماري فريد يعكس أصالة العمارة النجرانية القديمة، حيث تُبنى القصور من الطين بأسلوب 'العروق' لتتكيف مع البيئة الصحراوية."
        },
        en: {
            dir: 'ltr',
            title: "Najran Region",
            subtitle: "Land of Al-Okhdood, Ancient History, and Mud Palaces",
            originTitle: "Region Origin",
            originDesc: "Najran is one of the oldest inhabited areas since the Stone Age. It gained historical importance as a key link on the ancient 'Incense Route' and witnessed major historical events.",
            civTitle: "Major Civilizations",
            civDesc: "Part of ancient Arabian kingdoms like Sheba and Himyar, it flourished as a trade hub and continued its role as a significant cultural center through the Islamic eras.",
            landmarksTitle: "Historical Landmarks",
            traditionsTitle: "Customs and Traditions",
            traditionsDesc: "The art of 'Zamil' is a key social tradition, along with Razfa and Maraf'e. Known for traditional attire like Mudhayyal and Mukammam, and legendary hospitality.",
            foodTitle: "Najrani Cuisine",
            foods: ["Raqsh", "Wafd", "Hamees"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "Vision 2030 aims to develop archaeological sites like Okhdood and Hima as global tourist destinations while preserving Najran's unique architectural identity.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in the southwest of Saudi Arabia, featuring diverse landscapes from mountains and vast deserts to fertile oases rich with palm trees.",
            landmark1Title: "Al-Okhdood Archeological City",
            landmark1Desc: "Features high walls, Musnad inscriptions, and rock art telling the story of Al-Okhdood and the region's ancient history.",
            landmark2Title: "Hima Cultural Area",
            landmark2Desc: "The largest collection of rock art in the world, a UNESCO World Heritage site, and an open-air museum of human history.",
            landmark3Title: "Traditional Mud Palaces",
            landmark3Desc: "A unique architectural style reflecting the authenticity of Najrani mud buildings, constructed to adapt to the environment."
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark1Title, desc: t.landmark1Desc, img: okhdoodPic },
        { id: 1, title: t.landmark2Title, desc: t.landmark2Desc, img: himaPic },
        { id: 2, title: t.landmark3Title, desc: t.landmark3Desc, img: mudPalacesPic }
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
                    src={najranBanner} 
                    alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Najran+Region"; }}
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
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Najran+Landmark"; }}
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
                            title="Najran Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps?q=Najran+Region+Saudi+Arabia&z=7&output=embed"

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

export default Najran;