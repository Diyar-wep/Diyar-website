import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور برمجياً لضمان ظهورها من مجلد src
import QassimBanner from "./QasPics/QassimBanner.png";
import BinAqeelPalace from "./QasPics/BinAqeelCastle.png";
import AlMusawkafMarket from "./QasPics/souq-almusawkaf-in-qassim-1_crop-760x570.webp";
import AlShenanaTower from "./QasPics/AlshnanahTower.png";

const Qassim = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة القصيم",
            subtitle: "قلب نجد النابض وسلة غذاء المملكة",
            originTitle: "عراقة النشأة",
            originDesc: "تعتبر القصيم قلب نجد النابض، عرفت منذ القدم بخصوبة أرضها ووفرة مياهها. تأسست كإمارة إدارية في العهد السعودي، وتعد مدينة بريدة مقر إمارتها، وهي منطقة تاريخية ارتبطت بطرق التجارة والحج.",
            civTitle: "إرث الحضارات",
            civDesc: "شهدت القصيم استيطاناً بشرياً منذ عصور ما قبل الإسلام، وكانت موطناً لقبائل عربية عريقة. برزت في العصور الإسلامية كمحطة رئيسية على طريق الحج البصري، واشتهرت بأسواقها التجارية النشطة.",
            landmarksTitle: "شواهد التاريخ",
            traditionsTitle: "أصالة العادات",
            traditionsDesc: "تتميز القصيم بالترابط الاجتماعي الوثيق، وتشتهر بمهرجانات التمور العالمية. من أبرز عاداتها 'المجالس' المفتوحة وكرم الضيافة الأصيل، بالإضافة إلى الفنون الشعبية مثل العرضة والسامري.",
            foodTitle: "مذاق التراث",
            foods: ["الكليجا", "المرقوق", "المطازيز", "الحنيني"],
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تهدف الرؤية إلى تعزيز القصيم كمركز عالمي لصناعة وتصدير التمور، وتطوير السياحة الزراعية والتراثية، ودعم المشاريع اللوجستية التي تستفيد من موقع المنطقة المتوسط.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع منطقة القصيم في وسط المملكة العربية السعودية، وتتميز بتضاريسها السهلية ووديانها الشهيرة مثل وادي الرمة.",
        },
        en: {
            dir: 'ltr',
            title: "Al-Qassim Region",
            subtitle: "The Heart of Najd & The Kingdom's Food Basket",
            originTitle: "Ancient Origins",
            originDesc: "Al-Qassim is the heart of Najd, known since ancient times for its fertile land and abundant water. Established as an administrative emirate in the Saudi era, with Buraydah as its capital.",
            civTitle: "Legacy of Civilizations",
            civDesc: "Al-Qassim has seen human settlement since pre-Islamic times. It emerged in the Islamic era as a major stop on the Basra Hajj route, famous for its active commercial markets.",
            landmarksTitle: "Historical Witnesses",
            traditionsTitle: "Authentic Traditions",
            traditionsDesc: "Al-Qassim is characterized by strong social bonds and world-class date festivals. Traditions include open 'Majalis', authentic hospitality, and folk arts like Ardha and Samri.",
            foodTitle: "Taste of Heritage",
            foods: ["Kleicha", "Margoog", "Matazeez", "Hininy"],
            visionTitle: "Vision 2030",
            visionDesc: "The vision aims to enhance Al-Qassim as a global center for the date industry, develop agro-tourism and heritage, and support logistics projects.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in central Saudi Arabia, Al-Qassim is characterized by its plains and famous valleys like Wadi Al-Rummah.",
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "قصر بن عقيل" : "Bin Aqeel Palace", 
            desc: language === "ar" ? "قصر تاريخي عريق في محافظة الرس، يعد من أبرز المعالم الطينية التي تجسد العمارة النجدية القديمة وتاريخ المنطقة الحافل." : "A historic palace in Ar Rass, one of the most prominent mud landmarks embodying ancient Najdi architecture and the region's rich history.",
            img: BinAqeelPalace 
        },
        { 
            id: 1,
            title: language === "ar" ? "سوق المسوكف" : "Al-Musawkaf Market", 
            desc: language === "ar" ? "سوق شعبي يحاكي العمارة النجدية القديمة، يفوح منه عبق الماضي والحرف اليدوية." : "A traditional market mimicking old Najdi architecture, filled with heritage and crafts.",
            img: AlMusawkafMarket 
        },
        { 
            id: 2,
            title: language === "ar" ? "برج الشنانة" : "Al-Shenana Tower", 
            desc: language === "ar" ? "صرح طيني صامد منذ قرون، يحكي قصص البطولات في قلب محافظة الرس." : "A mud structure standing for centuries, telling stories of heroism in Ar Rass.",
            img: AlShenanaTower 
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
                    src={QassimBanner} 
                    alt="Qassim" 
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
                                    e.target.src = "https://via.placeholder.com/800x450?text=Qassim+Heritage"; 
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
                            title="Qassim Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1853735.123456789!2d42.5!3d26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fdf6f7f7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sAl%20Qassim%20Region!5e0!3m2!1sen!2ssa!4v1705100000000"
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

export default Qassim;