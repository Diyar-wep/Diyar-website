import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المسارات في كودك الأصلي
import easternBanner from "./EasternPics/EastBanner.png"; 
import jawatha from "./EasternPics/مسجد جواثا.jpg"; 
import tarout from "./EasternPics/قلعة تاروj.webp"; 
import qaraMount from "./EasternPics/جبل القارة.jpg"; 
import uquir from "./EasternPics/مبنى ميناء العقير الأثري.jpg"; 

const EasternProvince = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "المنطقة الشرقية",
            subtitle: "عاصمة النفط العالمية وكنز الحضارات القديمة",
            originTitle: "نشأة المنطقة",
            originDesc: "تُعد من أقدم المناطق المأهولة (5000 عام). عُرفت قديماً بإقليم 'البحرين'، وكانت مركزاً تجارياً يربط حضارات العالم. وفي العصر الحديث، أصبحت عاصمة النفط العالمية بعد اكتشاف 'بئر الخير' عام 1938م.",
            civTitle: "أهم الحضارات",
            civDesc: "احتضنت حضارات العبيد ودلمون والجرهاء الأسطورية. ودخل أهلها الإسلام طواعية عبر وفد عبد القيس، مما جعلها من أوائل المناطق التي اعتنقت الإسلام وبنت مساجده التاريخية.",
            landmarksTitle: "أهم الآثار التاريخية وأقدمها",
            traditionsTitle: "عادات وتقاليد المنطقة",
            traditionsDesc: "تتميز المنطقة بـ 'القرقيعان' وأهازيج 'النهام' البحرية، وعادة 'الغبقة' الرمضانية. كما يبرز 'دق الهريس' كعادة تعاونية اجتماعية أصيلة تعكس تلاحم أهل المنطقة.",
            foodTitle: "مأكولات شعبية",
            foods: ["العيش الحساوي", "المفلق", "الربيان"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تركز الرؤية على تطوير واحة الأحساء ومدينة العقير السياحية، وإنشاء مراكز إبداعية مثل 'إثراء'، مع تعزيز مكانة المنطقة كمركز لوجستي عالمي يربط المملكة بدول الخليج.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تمتد المنطقة الشرقية على طول الساحل الغربي للخليج العربي، وهي أكبر مناطق المملكة مساحةً، وتمثل البوابة التجارية والاستراتيجية لدول الخليج.",
            // بيانات المعالم
            landmark0: { title: "مسجد جواثا", desc: "يُعد ثاني مسجد صُليت فيه صلاة الجمعة في الإسلام بعد المسجد النبوي، ويعود تاريخه إلى السنة السابعة للهجرة في الأحساء." },
            landmark1: { title: "قلعة تاروت", desc: "بُنيت فوق تل أثري يعود لآلاف السنين في القطيف، وتضم آثاراً فينيقية ودلمونية عريقة." },
            landmark2: { title: "جبل القارة", desc: "يتميز بتشكيلاته الصخرية الفريدة وكهوفه الباردة صيفاً، وهو موقع مسجل في قائمة اليونسكو للتراث العالمي." },
            landmark3: { title: "ميناء العقير التاريخي", desc: "أقدم ميناء بحري على الخليج العربي، شهد اتفاقيات تاريخية مهمة في مسيرة تأسيس المملكة العربية السعودية." }
        },
        en: {
            dir: 'ltr',
            title: "Eastern Province",
            subtitle: "The World's Oil Capital and Treasure of Ancient Civilizations",
            originTitle: "Region Origin",
            originDesc: "One of the oldest inhabited regions (5000 years). Known historically as 'Bahrain' region, it was a global trade hub. In modern times, it became the world's oil capital after discovering 'Prosperity Well' in 1938.",
            civTitle: "Key Civilizations",
            civDesc: "Home to Ubaid, Dilmun, and the legendary Gerrha civilizations. Its people embraced Islam early through the Abdul Qays delegation, making it one of the first regions to build historic mosques.",
            landmarksTitle: "Ancient Landmarks",
            traditionsTitle: "Eastern Traditions",
            traditionsDesc: "Known for 'Gerga'oon', 'Nahham' sea chants, and 'Ghabga' gatherings. 'Dag Al-Harees' is a traditional communal activity reflecting social solidarity.",
            foodTitle: "Traditional Cuisine",
            foods: ["Hasawi Rice", "Mufallaq", "Shrimp"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "Vision 2030 focuses on developing Al-Ahsa Oasis, Uqair tourism, and cultural hubs like 'Ithra', while enhancing its role as a global logistics center connecting the Kingdom to Gulf states.",
            geoTitle: "Geographical Location",
            geoDesc: "Stretching along the western coast of the Arabian Gulf, it is the largest region in Saudi Arabia and the strategic gateway to the Gulf states.",
            // Landmarks Data
            landmark0: { title: "Jawatha Mosque", desc: "The second mosque to hold Friday prayers in Islam after the Prophet's Mosque, dating back to 7 AH in Al-Ahsa." },
            landmark1: { title: "Tarout Castle", desc: "Built on an archaeological mound dating back thousands of years in Qatif, featuring Phoenician and Dilmunite remains." },
            landmark2: { title: "Al-Qarah Mountain", desc: "Known for its unique rock formations and cool caves in summer, it's a UNESCO World Heritage site." },
            landmark3: { title: "Uqair Historic Port", desc: "The oldest seaport on the Arabian Gulf, witness to key historical treaties in the Kingdom's foundation." }
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark0.title, desc: t.landmark0.desc, img: jawatha },
        { id: 1, title: t.landmark1.title, desc: t.landmark1.desc, img: tarout },
        { id: 2, title: t.landmark2.title, desc: t.landmark2.desc, img: qaraMount },
        { id: 3, title: t.landmark3.title, desc: t.landmark3.desc, img: uquir }
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
                    src={easternBanner} 
                    alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Eastern+Province"; }}
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
                        <div style={{ flex: "1", minWidth: "250px", display: "flex", flexDirection: "column", gap: "12px" }}>
                            {landmarks.map((item, idx) => (
                                <div 
                                    key={item.id}
                                    onClick={() => setActiveLandmark(idx)}
                                    style={{
                                        padding: "18px",
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
                                    <h3 style={{ fontSize: "1rem", fontWeight: "700" }}>{item.title}</h3>
                                </div>
                            ))}
                        </div>

                        <div style={{ flex: "2", minWidth: "320px", position: "relative", borderRadius: "24px", overflow: "hidden", height: "450px", boxShadow: "0 20px 40px var(--map-shadow)" }}>
                            <img 
                                src={landmarks[activeLandmark].img} 
                                alt={landmarks[activeLandmark].title}
                                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s ease-in-out" }}
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Landmark"; }}
                            />
                            <div style={{ 
                                position: "absolute", bottom: 0, left: 0, right: 0, 
                                padding: "30px", background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                                color: "#fff"
                            }}>
                                <h3 style={{ fontSize: "1.7rem", fontWeight: "800", marginBottom: "10px" }}>{landmarks[activeLandmark].title}</h3>
                                <p style={{ fontSize: "1rem", opacity: 0.95, lineHeight: "1.6" }}>{landmarks[activeLandmark].desc}</p>
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
                                    padding: "10px 22px", borderRadius: "50px", 
                                    background: "var(--accent-color)", color: "var(--button-text)", 
                                    fontWeight: "700", fontSize: "0.9rem"
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
                            title="Eastern Province Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844000.0!2d48.5!3d24.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8790c5f0b5d%3A0x6734e56598505523!2sEastern%20Province!5e0!3m2!1sen!2ssa!4v1700000000000"
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