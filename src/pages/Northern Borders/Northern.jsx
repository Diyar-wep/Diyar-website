import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// ملاحظة: يجب استبدال هذه المسارات بمسارات الصور الفعلية لديك
import northernBordersBanner from "./NorthernPics/Northbanner.png"; 
import DarbZubaida from "./NorthernPics/DarbZubaida.jpeg";
import LinahVillage from "./NorthernPics/LinahVillage.webp";

const NorthernBorders = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة الحدود الشمالية",
            subtitle: "مأوى الصقور وبوابة الشمال وعاصمة التعدين",
            originTitle: "نشأة المنطقة",
            originDesc: "تقع منطقة الحدود الشمالية في شمال المملكة العربية السعودية، وتحدها دولتا العراق والأردن. تأسست إدارياً في عام 1992م، وتعتبر منطقة استراتيجية هامة نظراً لموقعها الحدودي وتنوعها الجغرافي الذي يجمع بين السهول والوديان والهضاب.",
            civTitle: "أهم الحضارات",
            civDesc: "شهدت المنطقة استيطاناً بشرياً منذ عصور ما قبل التاريخ، حيث وُجدت فيها نقوش صفائية ورسوم صخرية قديمة في أودية مثل وادي الغرابة. كما برزت أهميتها التاريخية في العصر الإسلامي بمرور 'درب زبيدة' الشهير، وهو طريق الحج الكوفي الذي يضم محطات تاريخية وبركاً مائية عريقة.",
            landmarksTitle: "أهم الآثار التاريخية",
            traditionsTitle: "عادات وتقاليد الشمال",
            traditionsDesc: "يشتهر أهل الحدود الشمالية بالكرم الحاتمي الأصيل المرتبط بحياة البادية. وتعد 'الصقارة' وتربية الصقور من أبرز الهوايات المتجذرة، بالإضافة إلى الفنون الشعبية العريقة مثل 'الدحة' التي تعبر عن القوة والشهامة في مجالسهم.",
            foodTitle: "مأكولات شمالية",
            foods: ["المنسف", "الجريش", "الثريد", "المطازيز"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تشهد المنطقة نهضة تنموية كبرى ضمن رؤية 2030، خاصة في قطاع التعدين من خلال مدينة 'وعد الشمال' الصناعية في طريف، وتطوير المواقع التراثية مثل قرية لينة ودرب زبيدة لتصبح وجهات سياحية وثقافية عالمية.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع المنطقة في أقصى شمال المملكة، وتتميز بتضاريس متنوعة تشمل الأودية والشعاب والسهول الفسيحة. مناخها قاري يتميز بالبرودة الشديدة شتاءً والاعتدال صيفاً، مما يجعلها مقصداً لهواة الرحلات البرية.",
            landmark1Title: "درب زبيدة التاريخي",
            landmark1Desc: "طريق الحج الكوفي الذي أنشأته السيدة زبيدة زوجة الخليفة هارون الرشيد، ويضم في منطقة الحدود الشمالية العديد من البرك والمحطات الأثرية التي كانت تخدم الحجاج والمسافرين.",
            landmark2Title: "قرية لينة التاريخية",
            landmark2Desc: "من أقدم القرى في المنطقة، وتشتهر بآبارها التاريخية التي يقال إنها حفرت في عهد النبي سليمان عليه السلام، وتضم سوقاً تراثياً قديماً كان مركزاً تجارياً هاماً بين نجد والعراق."
        },
        en: {
            dir: 'ltr',
            title: "Northern Borders Region",
            subtitle: "The Falcon's Haven and Saudi Arabia's Mining Capital",
            originTitle: "Region Origin",
            originDesc: "Located in the far north of Saudi Arabia, bordering Iraq and Jordan. Administratively established in 1992, it is a strategic region known for its diverse geography, including plains, valleys, and plateaus.",
            civTitle: "Major Civilizations",
            civDesc: "The region has seen human settlement since prehistoric times, evidenced by Safaitic inscriptions and ancient rock art. Its historical significance peaked during the Islamic era with 'Darb Zubaida', the famous Kufic pilgrimage route.",
            landmarksTitle: "Historical Landmarks",
            traditionsTitle: "Customs and Traditions",
            traditionsDesc: "The people of the Northern Borders are renowned for their authentic hospitality. Falconry is a deeply rooted hobby, alongside traditional folk arts like 'Al-Dahha', which symbolizes strength and chivalry.",
            foodTitle: "Northern Cuisine",
            foods: ["Mansaf", "Jareesh", "Tharid", "Matazeez"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "The region is undergoing a major transformation under Vision 2030, particularly in the mining sector with 'Wa'ad Al-Shamaal' city in Turaif, and the development of heritage sites like Linah Village and Darb Zubaida.",
            geoTitle: "Geographical Location",
            geoDesc: "Situated at the northernmost part of the Kingdom, it features diverse terrains like valleys and vast plains. Its continental climate is very cold in winter and moderate in summer, attracting desert enthusiasts.",
            landmark1Title: "Darb Zubaida",
            landmark1Desc: "The historic Kufic pilgrimage route established by Lady Zubaida, wife of Caliph Harun al-Rashid. It features numerous ancient pools and stations that served pilgrims for centuries.",
            landmark2Title: "Linah Historical Village",
            landmark2Desc: "One of the oldest villages in the region, famous for its ancient wells and a traditional market that served as a major commercial hub between Najd and Iraq."
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark1Title, desc: t.landmark1Desc, img: DarbZubaida },
        { id: 1, title: t.landmark2Title, desc: t.landmark2Desc, img: LinahVillage }
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

    // ستايل الخريطة للوضع الداكن
    const mapContainerStyle = {
        width: "100%",
        height: "450px",
        borderRadius: "20px",
        overflow: "hidden",
        marginTop: "20px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        filter: darkMode ? "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" : "none",
        transition: "filter 0.4s ease"
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
                    src={northernBordersBanner} 
                    alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Northern+Borders+Region"; }}
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
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Northern+Borders+Landmark"; }}
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

                <section style={glassStyle}>
                    <h2 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px" }}>{t.visionTitle}</h2>
                    <p style={{ lineHeight: "1.8", color: "var(--text-secondary)" }}>{t.visionDesc}</p>
                </section>

                <section style={glassStyle}>
                    <h2 style={{ color: "var(--accent-color)", fontSize: "1.6rem", fontWeight: "800", marginBottom: "15px" }}>{t.geoTitle}</h2>
                    <p style={{ lineHeight: "1.8", color: "var(--text-secondary)" }}>{t.geoDesc}</p>
                    <div style={mapContainerStyle}>
                        <iframe 
                            src="https://www.google.com/maps?q=Northern+Borders+Region+Saudi+Arabia&z=6&output=embed" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default NorthernBorders;