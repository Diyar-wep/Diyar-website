import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على مسارات كود الرياض
import riyadhBanner from "./RiyadhPics/riyadh_banner.png"; 
import DiriyahCastle from "./RiyadhPics/diriyah.jpeg";
import MasmakFortress from "./RiyadhPics/masmak.jpeg";
import UshaiqerVillage from "./RiyadhPics/ushaiqer.jpeg";

const Riyadh = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة الرياض",
            subtitle: "قلب المملكة النابض وعاصمة التاريخ والحضارة",
            originTitle: "نشأة المنطقة",
            originDesc: "تقع منطقة الرياض في قلب المملكة العربية السعودية، وتعد من أقدم المناطق المأهولة في الجزيرة العربية. عُرفت قديماً باسم 'حجر اليمامة'، وكانت مركزاً تجارياً وسياسياً مهماً منذ عصور ما قبل الإسلام.",
            civTitle: "أهم الحضارات",
            civDesc: "شهدت المنطقة حضارات عريقة منذ العصر الحجري، وازدهرت فيها مملكة كندة وبنو حنيفة. في العصر الحديث، كانت الرياض نواة الدولة السعودية الأولى والثانية والثالثة، حيث استعادها الملك عبدالعزيز عام 1902م لتصبح عاصمة المملكة.",
            landmarksTitle: "أهم الآثار التاريخية",
            traditionsTitle: "عادات وتقاليد الرياض",
            traditionsDesc: "يشتهر أهل الرياض بالكرم والضيافة الأصيلة، ومن أبرز عاداتهم مجالس القهوة العربية والعرضة النجدية التي تعد من أهم الفنون الشعبية. كما تشتهر المنطقة بالأسواق التراثية والحرف اليدوية التقليدية.",
            foodTitle: "مأكولات نجدية",
            foods: ["الكبسة", "المطازيز", "الجريش", "القرصان", "المرقوق"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تمثل الرياض القلب النابض لرؤية 2030، حيث تحتضن مشاريع عملاقة مثل 'مشروع القدية' و'الرياض الخضراء' و'الرياض آرت'. هذه المشاريع تعيد تشكيل المدينة لتكون واحدة من أكبر عشر مدن اقتصادية في العالم.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع منطقة الرياض في وسط المملكة على هضبة نجد، وتعد أكبر مناطق المملكة من حيث عدد السكان. تتميز بمناخ صحراوي قاري وتضاريس متنوعة تشمل الهضاب والأودية والكثبان الرملية.",
            landmark1Title: "حي الطريف في الدرعية",
            landmark1Desc: "موقع تراث عالمي مسجل في اليونسكو، يعد مهد الدولة السعودية الأولى. يحتوي على قصور ومساجد ومباني طينية تعود للقرن الثامن عشر، ويمثل نموذجاً فريداً للعمارة النجدية.",
            landmark2Title: "قصر المصمك التاريخي",
            landmark2Desc: "قلعة تاريخية بُنيت عام 1865م، شهدت استعادة الملك عبدالعزيز للرياض عام 1902م. يعد رمزاً لتوحيد المملكة ومن أهم المعالم التاريخية في العاصمة.",
            landmark3Title: "قرية أشيقر التراثية",
            landmark3Desc: "قرية تراثية تاريخية تقع شمال غرب الرياض، تشتهر بمبانيها الطينية العريقة وأسوارها وبواباتها التاريخية. تعد من أجمل القرى التراثية المحفوظة في المملكة."
        },
        en: {
            dir: 'ltr',
            title: "Riyadh Region",
            subtitle: "The Beating Heart of the Kingdom and Capital of History",
            originTitle: "Region Origin",
            originDesc: "Riyadh Region is located in the heart of Saudi Arabia and is one of the oldest inhabited areas in the Arabian Peninsula. Historically known as 'Hajr al-Yamamah', it was an important commercial and political center since pre-Islamic times.",
            civTitle: "Major Civilizations",
            civDesc: "The region witnessed ancient civilizations since the Stone Age, with the flourishing of the Kingdom of Kindah and Banu Hanifa. In modern times, Riyadh was the nucleus of the Saudi States, recaptured by King Abdulaziz in 1902.",
            landmarksTitle: "Historical Landmarks",
            traditionsTitle: "Customs and Traditions",
            traditionsDesc: "Riyadh's people are famous for authentic hospitality. Key traditions include Arabic coffee councils and Najdi Ardah, one of the most important folk arts.",
            foodTitle: "Najdi Cuisine",
            foods: ["Kabsa", "Matazeez", "Jareesh", "Qursan", "Marqooq"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "Riyadh is the beating heart of Vision 2030, hosting mega projects like 'Qiddiya', 'Riyadh Green', and 'Riyadh Art'. These projects redefine the city as a global economic hub.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in central Saudi Arabia on the Najd plateau, it is the Kingdom's most populous region. It features a continental desert climate and diverse terrains.",
            landmark1Title: "At-Turaif District in Diriyah",
            landmark1Desc: "A UNESCO World Heritage Site, the birthplace of the First Saudi State. Contains palaces and mud-brick buildings representing unique Najdi architecture.",
            landmark2Title: "Masmak Fortress",
            landmark2Desc: "A historic fort built in 1865, witnessed King Abdulaziz's recapture of Riyadh in 1902. It symbolizes the Kingdom's unification.",
            landmark3Title: "Ushaiqer Heritage Village",
            landmark3Desc: "A historic heritage village northwest of Riyadh, famous for its ancient mud buildings and historic gates."
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark1Title, desc: t.landmark1Desc, img: DiriyahCastle },
        { id: 1, title: t.landmark2Title, desc: t.landmark2Desc, img: MasmakFortress },
        { id: 2, title: t.landmark3Title, desc: t.landmark3Desc, img: UshaiqerVillage }
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
                    src={riyadhBanner} 
                    alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Riyadh+Region"; }}
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
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Riyadh+Landmark"; }}
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

                {/* تأثير رؤية 2030 */}
                <section style={glassStyle}>
                    <h2 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px" }}>{t.visionTitle}</h2>
                    <p style={{ lineHeight: "1.8", color: "var(--text-secondary)" }}>{t.visionDesc}</p>
                </section>

                {/* الموقع الجغرافي مع خريطة جوجل */}
                <section style={glassStyle}>
                    <h2 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px" }}>{t.geoTitle}</h2>
                    <p style={{ lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "20px" }}>{t.geoDesc}</p>
                    <div style={{ 
                        width: "100%", 
                        height: "400px", 
                        borderRadius: "20px", 
                        overflow: "hidden", 
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                        filter: darkMode ? "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" : "none",
                        transition: "filter 0.4s ease"
                    }}>
                        <iframe 
                            src="https://www.google.com/maps?q=Riyadh+Region+Saudi+Arabia&z=6&output=embed" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Riyadh;