import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور برمجياً لضمان ظهورها من مجلد src
import AljoufBanner from "./AL-JawfPics/AL-JawfPic.png";
import MardCastle from "./AL-JawfPics/The historic Mard Castle.jpg";
import OmarMosque from "./AL-JawfPics/Omar Mosque and its minaret.jpg";
import RajajilColumns from "./AL-JawfPics/The ancient Rajajil Columns.jpg";
import ShwaihitiyaSite from "./AL-JawfPics/The archaeological site of Al-Shuwayhitiyah.jpg";

const AlJouf = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة الجوف",
            subtitle: "بوابة الشمال وعاصمة الزيتون والطاقة المتجددة",
            originTitle: "عراقة النشأة",
            originDesc: "تُعد الجوف من أقدم البقاع المأهولة في الجزيرة العربية (1.3 مليون سنة). عُرفت تاريخياً باسم 'أدوماتو' وكانت عاصمة لمملكة قيدار العريقة، كما عُرفت بـ 'جوف آل عمرو' و 'جوف السرحان'.",
            civTitle: "إرث الحضارات",
            civDesc: "شهدت الجوف تعاقب حضارات كبرى؛ من العصر الحجري ومملكة قيدار، إلى الأنباط والرومان، وصولاً إلى العصر الإسلامي حيث فتحها خالد بن الوليد وبُني فيها أحد أقدم مساجد الإسلام.",
            landmarksTitle: "شواهد التاريخ",
            traditionsTitle: "أصالة العادات",
            traditionsDesc: "تشتهر الجوف برقصة 'الدحة' (أنفاس الأسد) وفن السامري. ويُعرف أهلها بكرم الضيافة وتقديم 'حلوة الجوف'، ومن تقاليدهم وليمة 'عشاء الخروف' في اليوم الرابع من الزواج.",
            foodTitle: "المذاق الجوفي",
            foods: ["البكيلة", "التطماج", "الجريش بالسمح", "الخميعة"],
            visionTitle: "رؤية المملكة 2030",
            visionDesc: "حولت الرؤية الجوف إلى عاصمة للطاقة المتجددة (رياح دومة الجندل وشمس سكاكا)، وعاصمة للزيتون بأكثر من 23 مليون شجرة، مع تطوير مواقعها الأثرية كوجهات سياحية عالمية.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع منطقة الجوف في شمال غرب المملكة العربية السعودية، وتُعد بوابة الشمال العريقة، وتتميز بخصوبة أرضها ووفرة مياهها الجوفية.",
        },
        en: {
            dir: 'ltr',
            title: "Al-Jouf Region",
            subtitle: "The Northern Gateway & Olive Capital",
            originTitle: "Ancient Origins",
            originDesc: "Al-Jouf is one of the oldest inhabited areas in the Arabian Peninsula (1.3 million years). Historically known as 'Adumatu', it was the capital of the ancient Kingdom of Qedar.",
            civTitle: "Legacy of Civilizations",
            civDesc: "Al-Jouf hosted major civilizations: from the Stone Age and Qedar to the Nabataeans, Romans, and the Islamic era, where one of Islam's oldest mosques was built.",
            landmarksTitle: "Historical Witnesses",
            traditionsTitle: "Authentic Traditions",
            traditionsDesc: "Famous for the 'Dahha' dance and Samri art. Known for hospitality, 'Helwat Al-Jouf' dates, and unique wedding traditions like the 'Sheep Dinner' feast.",
            foodTitle: "Al-Jouf Taste",
            foods: ["Al-Bakeela", "Al-Tatmaj", "Jareesh with Samh", "Al-Khameea"],
            visionTitle: "Vision 2030",
            visionDesc: "Vision 2030 turned Al-Jouf into a renewable energy hub (Dumat Al-Jandal wind & Sakaka solar) and the olive capital with over 23 million trees.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in northwestern Saudi Arabia, Al-Jouf is the ancient gateway to the north, known for its fertile land and abundant groundwater.",
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "قلعة مارد" : "Marid Castle", 
            desc: language === "ar" ? "قلعة حربية شامخة في دومة الجندل يعود تاريخها لأكثر من 2000 عام، وتُعد من أهم القلاع الأثرية في المملكة." : "A majestic military fortress in Dumat al-Jandal dating back over 2000 years, one of the Kingdom's key archaeological sites.",
            img: MardCastle 
        },
        { 
            id: 1,
            title: language === "ar" ? "مسجد عمر بن الخطاب" : "Omar bin Al-Khattab Mosque", 
            desc: language === "ar" ? "يتميز بمئذنته التي تُعد أول مئذنة في الإسلام، بُني أثناء توجه الخليفة عمر بن الخطاب لفتح بيت المقدس." : "Famous for its minaret, the first in Islam, built during Caliph Omar bin Al-Khattab's journey to Jerusalem.",
            img: OmarMosque 
        },
        { 
            id: 2,
            title: language === "ar" ? "أعمدة الرجاجيل" : "Rajajil Columns", 
            desc: language === "ar" ? "مجموعة من الأعمدة الحجرية الغامضة التي تعود للعصر النحاسي (حوالي 6500 عام)، تقع جنوب سكاكا." : "Mysterious stone columns dating back to the Chalcolithic era (approx. 6500 years ago), located south of Sakaka.",
            img: RajajilColumns 
        },
        { 
            id: 3,
            title: language === "ar" ? "موقع الشويحطية" : "Al-Shwaihitiya Site", 
            desc: language === "ar" ? "أقدم موقع استيطان بشري في الجزيرة العربية، حيث يعود تاريخه إلى أكثر من 1.3 مليون سنة." : "The oldest human settlement site in the Arabian Peninsula, dating back over 1.3 million years.",
            img: ShwaihitiyaSite 
        }
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
                    src={AljoufBanner} 
                    alt="Al-Jouf" 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                />
                <div style={{ 
                    position: "absolute", inset: 0, 
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))", 
                    zIndex: 2 
                }} />
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
                                onError={(e) => { 
                                    e.target.src = "https://via.placeholder.com/800x450?text=Al-Jouf+Heritage"; 
                                }}
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
                            title="Al-Jouf Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1756485.123456789!2d39.5!3d29.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1500000000000000%3A0x0000000000000000!2sAl%20Jowf%20Region!5e0!3m2!1sen!2ssa!4v1705100000000"
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

export default AlJouf;