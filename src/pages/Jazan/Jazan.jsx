import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المجلد JazanPics الموضح في الصورة المرفقة
import JizzanBanner from "./JazanPics/jizzanBanner.png";
import DawsariyahCastle from "./JazanPics/Al-Dawsariyah Castle.png";
import RifaiHouse from "./JazanPics/Al-Rifai House.jpg";
import AtharCity from "./JazanPics/The ruins of the city of Athar.png";

const Jazan = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة جازان",
            subtitle: "لؤلؤة الجنوب وسلة غذاء المملكة",
            originTitle: "عراقة الساحل",
            originDesc: "تعد جازان بوابة المملكة الجنوبية على البحر الأحمر، وهي منطقة ضاربة في القدم تمتاز بتنوعها الجغرافي الفريد بين الجبال الشاهقة والسهول الخصبة والجزر المرجانية الساحرة. عُرفت تاريخياً بكونها مركزاً تجارياً بحرياً هاماً.",
            civTitle: "إرث الحضارات",
            civDesc: "احتضنت جازان حضارات قديمة تعود للعصور الحجرية والبرونزية، وبرزت في العصور الإسلامية من خلال مدنها التاريخية مثل 'عثر'. تشتهر اليوم بتراثها المعماري الفريد وفنونها الشعبية المرتبطة بالبحر والجبل.",
            landmarksTitle: "شواهد جازان",
            traditionsTitle: "أصالة وجمال",
            traditionsDesc: "يتميز أهل جازان بالكرم وحب الأرض؛ وتشتهر المنطقة بزراعة البن الخولاني والنباتات العطرية مثل 'الفل'. ومن أبرز فنونها الشعبية 'العرضة الجازانية' و'الدلع'، وتقام فيها مهرجانات سنوية للفل والمانجو.",
            foodTitle: "مذاق جازاني",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تهدف الرؤية إلى تحويل جازان لمركز لوجستي وصناعي عالمي عبر مدينة جازان للصناعات الأساسية والتحويلية، وتطوير سياحة الجزر (فرسان) والبن الجبلي كوجهات عالمية.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع جازان في أقصى الجنوب الغربي للمملكة، وتضم جبال فيفا الشاهقة وجزر فرسان الخلابة، مما يجعلها من أكثر مناطق المملكة تنوعاً بيئياً.",
        },
        en: {
            dir: 'ltr',
            title: "Jazan Region",
            subtitle: "Pearl of the South & The Kingdom's Food Basket",
            originTitle: "Coastal Heritage",
            originDesc: "Jazan is the Kingdom's southern gateway to the Red Sea. It is an ancient region known for its unique geographic diversity, ranging from towering mountains to fertile plains and enchanting coral islands.",
            civTitle: "Legacy of Civilizations",
            civDesc: "Jazan hosted ancient civilizations dating back to the Stone and Bronze Ages and flourished in the Islamic era through historic cities like 'Athar.' Today, it is famous for its unique architecture and folk arts.",
            landmarksTitle: "Jazan Landmarks",
            traditionsTitle: "Authenticity & Beauty",
            traditionsDesc: "The people of Jazan are known for their hospitality and love for the land. The region is famous for Khawlani coffee and aromatic plants like 'Jasmine'. Festivals celebrating Jasmine and Mango are held annually.",
            foodTitle: "Taste of Jazan",
            visionTitle: "Vision 2030",
            visionDesc: "The vision aims to transform Jazan into a global industrial and logistics hub via Jazan City for Basic and Downstream Industries, while developing Farsan Islands and mountain tourism.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in the far southwest, Jazan includes the towering Fifa mountains and the stunning Farsan Islands, making it one of the most environmentally diverse regions in the Kingdom.",
        }
    };

    const t = translations[language] || translations.ar;

    // تم تحديث المصفوفة لتطابق صورك: القلعة الدوسرية، بيت الرفاعي، وآثار مدينة عثر
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "القلعة الدوسرية" : "Al-Dawsariyah Castle", 
            desc: language === "ar" ? "قلعة تاريخية تقع على قمة جبل في قلب مدينة جازان، تعود للعهد العثماني واستخدمت كمقر عسكري وإداري، وتوفر إطلالة بانورامية على البحر." : "A historic castle situated atop a hill in central Jazan. Dating back to the Ottoman era, it served as a military and administrative base, offering panoramic sea views.",
            img: DawsariyahCastle 
        },
        { 
            id: 1,
            title: language === "ar" ? "بيت الرفاعي" : "Al-Rifai House", 
            desc: language === "ar" ? "تحفة معمارية في جزيرة فرسان، يشتهر بزخارفه الجصية والنحتية الرائعة التي تعكس ثراء تجار اللؤلؤ في المنطقة قديماً." : "An architectural masterpiece on Farasan Island, famous for its exquisite gypsum carvings and sculptures reflecting the wealth of ancient pearl traders.",
            img: RifaiHouse 
        },
        { 
            id: 2,
            title: language === "ar" ? "آثار مدينة عثر" : "Ruins of Athar City", 
            desc: language === "ar" ? "مدينة تاريخية غارقة في القدم كانت تعد من أهم الموانئ على ساحل البحر الأحمر في العصور الإسلامية الأولى." : "An ancient historical city that was considered one of the most important ports on the Red Sea coast during the early Islamic eras.",
            img: AtharCity 
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
                    src={JizzanBanner} 
                    alt="Jazan" 
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
                            {["المرسة", "المغش", "خبز الميفا", "خمير"].map(food => (
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
                            title="Jazan Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122161.06332586642!2d42.67068784815695!3d16.89896939503603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1607e2973d13a0bb%3A0x35737d6f29786cf2!2z2KzYp9iy2KfZhg!5e0!3m2!1sar!2ssa!4v1768446587221!5m2!1sar!2ssa"
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

export default Jazan;