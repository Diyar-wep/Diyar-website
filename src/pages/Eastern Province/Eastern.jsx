import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على الملفات الموجودة في المجلد الخاص بك
import EastBanner from "./EasternPics/EastBanner.png";
import JabalAlQara from "./EasternPics/جبل القارة.jpg";
import TaroutCastle from "./EasternPics/قلعة تاروj.webp";
import UqairPort from "./EasternPics/مبنى ميناء العقير الأثري.jpg";
import JawathaMosque from "./EasternPics/مسجد جواثا.jpg";

const EasternProvince = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "المنطقة الشرقية",
            subtitle: "بوابة الخليج وعاصمة الطاقة العالمية",
            originTitle: "تاريخ الساحل",
            originDesc: "تعد المنطقة الشرقية أكبر مناطق المملكة مساحة، وهي حلقة الوصل بين المملكة ودول الخليج. عُرفت تاريخياً باسم 'البحرين' أو 'هجر'، واشتهرت منذ القدم بكونها مركزاً للتجارة البحرية واستخراج اللؤلؤ قبل اكتشاف النفط.",
            civTitle: "إرث الحضارات",
            civDesc: "تضم المنطقة 'واحة الأحساء' المسجلة في اليونسكو كأكبر واحة نخيل في العالم. شهدت المنطقة تعاقب حضارات قديمة مثل حضارة 'دلمون'، وتعد اليوم المركز الرئيسي لصناعة النفط والغاز في العالم.",
            landmarksTitle: "روائع الشرقية",
            traditionsTitle: "ثقافة البحر والواحة",
            traditionsDesc: "تتميز الشرقية بمزيج فريد بين حياة البحر (النواخذة) وحياة الزراعة في الواحات. يشتهر أهلها بالفنون الشعبية البحرية مثل 'الفجري' وكرم الضيافة الذي يجمع بين أصالة البادية وهدوء الساحل.",
            foodTitle: "مذاق الشرق",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تهدف الرؤية إلى تحويل المنطقة لمركز لوجستي عالمي، وتطوير السياحة الساحلية عبر مشاريع نوعية وتطوير واجهات الخبر والدمام البحرية، ودعم الصناعات التحويلية.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع شرق المملكة على ساحل الخليج العربي، وتتميز بتنوع تضاريسها بين الشواطئ الرملية، السهول، وأكبر واحات النخيل الطبيعية.",
        },
        en: {
            dir: 'ltr',
            title: "Eastern Province",
            subtitle: "Gateway to the Gulf & Global Energy Capital",
            originTitle: "Coastal History",
            originDesc: "The Eastern Province is the largest region in Saudi Arabia. Historically known as 'Al-Bahrain' or 'Hajar,' it was a vital hub for maritime trade and pearl diving long before the discovery of oil.",
            civTitle: "Legacy of Civilizations",
            civDesc: "The region hosts the 'Al-Ahsa Oasis,' a UNESCO World Heritage site. It has been home to ancient civilizations like 'Dilmun' and is now the global heart of the energy industry.",
            landmarksTitle: "Eastern Wonders",
            traditionsTitle: "Sea & Oasis Culture",
            traditionsDesc: "The region features a unique blend of maritime heritage and agricultural life. It is famous for sea-faring folk arts like 'Fajri' and hospitality that blends desert and coastal traditions.",
            foodTitle: "Taste of the East",
            visionTitle: "Vision 2030",
            visionDesc: "Vision 2030 aims to transform the region into a global logistics hub, develop coastal tourism, and enhance industrial manufacturing through sustainable projects.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in the east of Saudi Arabia along the Arabian Gulf, it is characterized by sandy beaches, vast plains, and lush natural oases.",
        }
    };

    const t = translations[language] || translations.ar;

    // تم تحديث المعالم لتناسب الصور المرفقة في لقطة الشاشة
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "جبل القارة" : "Jabal Al-Qara", 
            desc: language === "ar" ? "معلم طبيعي وتاريخي بارز في الأحساء، يتميز بكهوفه الباردة صيفاً وتشكيلاته الصخرية الفريدة." : "A prominent natural and historical landmark in Al-Ahsa, famous for its cool caves and unique rock formations.",
            img: JabalAlQara 
        },
        { 
            id: 1,
            title: language === "ar" ? "قلعة تاروت" : "Tarout Castle", 
            desc: language === "ar" ? "قلعة أثرية تقع في قلب جزيرة تاروت، تعود لآلاف السنين وتحكي تاريخ المنطقة الضارب في القدم." : "An ancient castle in the heart of Tarout Island, dating back thousands of years and telling the deep-rooted history of the region.",
            img: TaroutCastle 
        },
        { 
            id: 2,
            title: language === "ar" ? "ميناء العقير" : "Uqair Port", 
            desc: language === "ar" ? "أول ميناء بحري في المملكة، يتميز بمبانيه التاريخية ذات العمارة الإسلامية الجميلة على ساحل الخليج." : "The first seaport in the Kingdom, featuring historic buildings with beautiful Islamic architecture on the Gulf coast.",
            img: UqairPort 
        },
        { 
            id: 3,
            title: language === "ar" ? "مسجد جواثا" : "Jawatha Mosque", 
            desc: language === "ar" ? "ثاني مسجد أقيمت فيه صلاة الجمعة في الإسلام بعد مسجد الرسول ﷺ، ويعد رمزاً إسلامياً وتاريخياً عظيماً." : "The second mosque to hold Friday prayers in Islam after the Prophet's Mosque, a great Islamic and historical symbol.",
            img: JawathaMosque 
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
                    src={EastBanner} 
                    alt="Eastern Province" 
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
                                        padding: "20px",
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
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: "700" }}>{item.title}</h3>
                                </div>
                            ))}
                        </div>

                        <div style={{ flex: "2", minWidth: "320px", position: "relative", borderRadius: "24px", overflow: "hidden", height: "420px", boxShadow: "0 20px 40px var(--map-shadow)" }}>
                            <img 
                                src={landmarks[activeLandmark].img} 
                                alt={landmarks[activeLandmark].title}
                                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s ease-in-out" }}
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
                            {["الكنعد", "المكبوس", "خبز الحساوي", "اللقيمات"].map(food => (
                                <span key={food} style={{ 
                                    padding: "10px 22px", 
                                    borderRadius: "50px", 
                                    background: "var(--accent-color)", 
                                    color: "var(--button-text)", 
                                    fontWeight: "700",
                                    fontSize: "0.95rem"
                                }}>
                                    {language === "ar" ? food : food}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <section style={glassStyle}>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "20px" }}>{t.geoTitle}</h2>
                    <p style={{ marginBottom: "25px", color: "var(--text-secondary)" }}>{t.geoDesc}</p>
                    <div style={{ height: "450px", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--timeline-card-border)" }}>
                        <iframe 
                            title="Eastern Province Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845118.8256338423!2d48.5161!3d25.4125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35ef58713957e1%3A0x6ec9d919639e6a0!2sEastern%20Province!5e0!3m2!1sen!2ssa!4v1705300000000"
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

export default EasternProvince;