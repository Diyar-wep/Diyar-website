import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور برمجياً لضمان ظهورها من مجلد src
import AlbahaBanner from "./AL-BahaPics/AlbahaBanner.png";
import DhiAlAinVillage from "./AL-BahaPics/Dhi Al-Ain Village.png";
import TheElephantRoad from "./AL-BahaPics/The Elephant Road.png";
import BakhroushCastle from "./AL-BahaPics/Bakhroush Castle.png";

const AlBaha = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة الباحة",
            subtitle: "لؤلؤة المرتفعات وسويسرا الجزيرة العربية",
            originTitle: "عراقة النشأة",
            originDesc: "تعد الباحة 'لؤلؤة المرتفعات'، سكنتها قبائل غامد وزهران منذ القدم. تأسست إدارياً في عام 1383هـ، وتعتبر اليوم من أهم الوجهات السياحية في المملكة نظير طبيعتها الجبلية وتاريخها العريق وتضاريسها الخلابة.",
            civTitle: "إرث الحضارات",
            civDesc: "شهدت الباحة استيطاناً بشرياً منذ عصور قديمة، وبرزت كحصن طبيعي منيع. اشتهرت بحصونها وقلاعها التي تحكي قصص الصمود، وكانت محطة هامة في طرق القوافل القديمة بين جنوب الجزيرة وشمالها.",
            landmarksTitle: "شواهد التاريخ",
            traditionsTitle: "أصالة العادات",
            traditionsDesc: "تتميز الباحة بالترابط القبلي والاجتماعي الوثيق. من أبرز عاداتها 'العرضة الجنوبية' وفنون 'اللعب' و'المسحباني'. يشتهر أهلها بكرم الضيافة في 'المجالس' والاحتفاء بالضيف بأجود أنواع العسل والسمن.",
            foodTitle: "المذاق الجنوبي",
            foods: ["الدغابيس", "الخبزة المقناة", "العصيدة", "المرق"],
            visionTitle: "رؤية المملكة 2030",
            visionDesc: "تهدف الرؤية إلى تحويل الباحة إلى وجهة سياحية عالمية مستدامة، وتطوير الغطاء النباتي والمتنزهات الوطنية، ودعم الزراعة العضوية والمهرجانات التراثية لتعزيز الاقتصاد المحلي.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع الباحة جنوب غرب المملكة العربية السعودية، وتتميز بتضاريسها المتنوعة بين جبال السراة الشاهقة وسهول تهامة المنخفضة، مما يمنحها مناخاً فريداً طوال العام.",
        },
        en: {
            dir: 'ltr',
            title: "Al-Baha Region",
            subtitle: "The Pearl of the Highlands",
            originTitle: "Ancient Origins",
            originDesc: "Known as the 'Pearl of the Highlands', Al-Baha has been inhabited by Ghamid and Zahran tribes for centuries. It was administratively established in 1383 AH and is now a top tourist destination.",
            civTitle: "Legacy of Civilizations",
            civDesc: "Al-Baha has seen human settlement since ancient times, emerging as a natural fortress. Famous for its forts and castles, it was a vital stop on ancient caravan routes.",
            landmarksTitle: "Historical Witnesses",
            traditionsTitle: "Authentic Traditions",
            traditionsDesc: "Al-Baha is characterized by strong tribal bonds. Traditions include 'Southern Ardha' and folk arts. Its people are known for hospitality, serving the finest honey and ghee.",
            foodTitle: "Southern Taste",
            foods: ["Daghabees", "Khubza Maqnah", "Asida", "Broth"],
            visionTitle: "Vision 2030",
            visionDesc: "The vision aims to transform Al-Baha into a sustainable global tourist destination, develop vegetation and national parks, and support organic farming.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in southwestern Saudi Arabia, featuring diverse terrains between the high Sarawat mountains and Tihama plains.",
        }
    };

    const t = translations[language] || translations.ar;

    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "قرية ذي عين الأثرية" : "Thee Ain Heritage Village", 
            desc: language === "ar" ? "قرية مبنية من الحجارة البيضاء على قمة جبل من المرمر، يعود تاريخها لأكثر من 400 عام، وتشتهر بزراعة الموز والريحان." : "A 400-year-old village built of white stones on a marble mountain, famous for its banana and basil plantations.",
            img: DhiAlAinVillage 
        },
        { 
            id: 1,
            title: language === "ar" ? "طريق الفيل" : "The Elephant Path", 
            desc: language === "ar" ? "جزء من الطريق التاريخي الذي سلكه أبرهة الحبشي، يمر عبر جبال الباحة ويتميز برصفه الحجري المتقن الذي صمد لقرون." : "Part of the historical route taken by Abraha, featuring sophisticated stone paving that has endured for centuries.",
            img: TheElephantRoad 
        },
        { 
            id: 2,
            title: language === "ar" ? "قلعة بخروش بن علاس" : "Bakhroush bin Allas Fort", 
            desc: language === "ar" ? "تنسب للقائد بخروش بن علاس وتعتبر حصناً عسكرياً تاريخياً شهد معارك ضارية ضد القوات العثمانية." : "Named after leader Bakhroush bin Allas, this fort was a strategic military stronghold during historical wars.",
            img: BakhroushCastle 
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
                    src={AlbahaBanner} 
                    alt="Al-Baha" 
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
                                    e.target.src = "https://via.placeholder.com/800x450?text=Al-Baha+Heritage"; 
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
                            title="Al-Baha Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119472.164848035!2d41.37895318683501!3d20.022137599052062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e5399cc12547b5%3A0x334812674e2a8740!2sAl%20Bahah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000"
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

export default AlBaha;