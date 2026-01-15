import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد صور حائل بناءً على الكود المزود
import hailBanner from "./HailPics/ChatGPT Image 13 يناير 2026، 12_58_20 ص.png"; 
import jupah from "./HailPics/جبة.jpg"; 
import castlerAerf from "./HailPics/قلعة.jpg"; 

const Hail = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة حائل",
            subtitle: "عروس الشمال وموطن الكرم العربي الأصيل",
            originTitle: "نشأة المنطقة",
            originDesc: "تقع حائل في شمال نجد، وتشتهر بجبلَي أجا وسلمى. تميزت بموقعها الاستراتيجي على طرق القوافل قديماً، وتعتبر من أقدم مراكز الاستيطان البشري في الجزيرة العربية نظراً لتوفر الموارد الطبيعية.",
            civTitle: "أهم الحضارات",
            civDesc: "استوطنتها حضارات منذ العصر الحجري، وبرزت فيها حضارة ثمود. كما اشتهرت في العصر الجاهلي بكونها موطن حاتم الطائي، رمز الكرم العربي، وشكلت محطة رئيسية على طريق الحج الكوفي (درب زبيدة).",
            landmarksTitle: "أهم الآثار التاريخية",
            traditionsTitle: "عادات وتقاليد حائل",
            traditionsDesc: "يرتبط اسم حائل بالكرم الفائق؛ حيث يُقال 'يا بعد حيي'. وتشتهر بمجالس القهوة والضيافة المفتوحة، وفنون شعبية أصيلة كالعرضة والسامري الحائلي، بالإضافة إلى مهرجان الراليات الدولي.",
            foodTitle: "مأكولات حائلية",
            foods: ["الكبيبا الحائلية", "التمن", "الجريش الحائلي"],
            visionTitle: "تأثير رؤية 2030",
            visionDesc: "تعمل رؤية 2030 على تحويل حائل إلى وجهة سياحية وثقافية عالمية، مع التركيز على استثمار تراثها المسجل في اليونسكو وتطوير قطاع الرياضات والمغامرات (رالي حائل)، إضافة إلى دعم المشاريع الزراعية الحديثة لتعزيز الأمن الغذائي.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع منطقة حائل في شمال نجد بقلب الجزء الشمالي الغربي للمملكة، وتشتهر بجبالها الشامخة (أجا وسلمى). تعد حائل مركزاً استراتيجياً هاماً، حيث كانت تاريخياً مفترق طرق للقوافل التجارية والحجيج.",
            landmark1Title: "قلعة أعيرف",
            landmark1Desc: "قلعة تاريخية مبنية من الطين واللبن على قمة جبل، تعود بداياتها إلى العصور الجاهلية، وكانت تُستخدم للمراقبة وإعلان دخول شهر رمضان عبر مدفع حائل الشهير.",
            landmark2Title: "نقوش جبة الصخرية",
            landmark2Desc: "موقع مسجل في اليونسكو، يضم نقوشاً صخرية مذهلة تعود لآلاف السنين، وتصور الحياة البرية والأنشطة البشرية في العصور الحجرية."
        },
        en: {
            dir: 'ltr',
            title: "Hail Region",
            subtitle: "The Bride of the North and Home of Authentic Arab Generosity",
            originTitle: "Region Origin",
            originDesc: "Hail is located in northern Najd, famous for the Aja and Salma mountains. It held a strategic position on ancient caravan routes and is one of the oldest human settlement centers in the Arabian Peninsula.",
            civTitle: "Major Civilizations",
            civDesc: "Settled since the Stone Age, with the Thamud civilization being prominent. It is famously the home of Hatim al-Tai, the icon of Arab generosity, and a major stop on the Kufi pilgrimage route (Darb Zubaidah).",
            landmarksTitle: "Historical Landmarks",
            traditionsTitle: "Customs and Traditions",
            traditionsDesc: "The name Hail is synonymous with extreme generosity. It is famous for open coffee councils, hospitality, and authentic folk arts like Ardah and Haili Samri, along with the International Rally.",
            foodTitle: "Haili Cuisine",
            foods: ["Kubiba Hail", "Temman", "Haili Jareesh"],
            visionTitle: "Vision 2030 Impact",
            visionDesc: "Vision 2030 aims to transform Hail into a global tourist destination, focusing on UNESCO heritage sites, sports tourism (Hail Rally), and supporting modern agricultural projects.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in northern Najd in the heart of north-western Saudi Arabia, Hail is famous for its majestic twin mountain ranges (Aja and Salma), serving as a strategic crossroads.",
            landmark1Title: "A'arif Fort",
            landmark1Desc: "A historical fort built of mud and clay atop a mountain, dating back to pre-Islamic times. It was used for surveillance and announcing Ramadan via the famous Hail cannon.",
            landmark2Title: "Jubbah Rock Art",
            landmark2Desc: "A UNESCO World Heritage site, featuring stunning rock inscriptions dating back thousands of years, depicting wildlife and human activities from the Stone Age."
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { id: 0, title: t.landmark1Title, desc: t.landmark1Desc, img: castlerAerf },
        { id: 1, title: t.landmark2Title, desc: t.landmark2Desc, img: jupah }
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
                <img src={hailBanner} alt={t.title} 
                    style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/1920x1080?text=Hail+Region"; }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))", zIndex: 2 }} />
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
                                <div key={item.id} onClick={() => setActiveLandmark(idx)}
                                    style={{
                                        padding: "22px", borderRadius: "18px", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
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
                            <img src={landmarks[activeLandmark].img} alt={landmarks[activeLandmark].title}
                                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s ease-in-out" }}
                                onError={(e) => { e.target.src = "https://via.placeholder.com/800x450?text=Hail+Landmark"; }}
                            />
                            <div style={{ 
                                position: "absolute", bottom: 0, left: 0, right: 0, 
                                padding: "35px", background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)", color: "#fff"
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
                                    padding: "10px 22px", borderRadius: "50px", background: "var(--accent-color)", 
                                    color: "var(--button-text)", fontWeight: "700", fontSize: "0.95rem", boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
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
                            title="Hail Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226443.08214097013!2d41.510024710432006!3d27.52607903993689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157646e696d0faa3%3A0xa823a286278a8880!2sHail!5e0!3m2!1sen!2ssa!4v1768384315257!5m2!1sen!2ssa"
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

export default Hail;