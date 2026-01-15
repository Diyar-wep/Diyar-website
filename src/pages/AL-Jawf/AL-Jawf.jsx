import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المجلد AL-JawfPics الموضح في الصور المرفقة
import AljoufBanner from "./AL-JawfPics/AljoufBanner.png";
import MardCastle from "./AL-JawfPics/The historic Mard Castle.jpg";
import RajajilColumns from "./AL-JawfPics/The ancient Rajajil Columns.jpg";
import OmarMosque from "./AL-JawfPics/Omar Mosque and its minaret.jpg";
// ملاحظة: يمكنك إضافة الموقع الأثري "Al-Shuwayhit" إذا رغبت في توسيع القائمة

const AlJouf = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة الجوف",
            subtitle: "أرض الزيتون وبوابة الشمال العريقة",
            originTitle: "عمق التاريخ",
            originDesc: "تعد الجوف من أقدم مناطق الاستيطان البشري في شبه الجزيرة العربية. عُرفت تاريخياً بموقعها الاستراتيجي كطريق تجاري رئيسي يربط الجزيرة ببلاد الشام والرافدين، وتشتهر اليوم بكونها سلة غذاء شمال المملكة وأكبر منتج لزيتون المائدة.",
            civTitle: "حضارات متعاقبة",
            civDesc: "شهدت الجوف قيام ممالك قديمة مثل مملكة قيدار، واحتضنت معالم تحكي قصة العصور الحجرية والآشورية والأنباط، وصولاً إلى العصر الإسلامي، مما جعلها متحفاً مفتوحاً للتراث الإنساني.",
            landmarksTitle: "كنوز الجوف أثرية",
            traditionsTitle: "كرم الجوف",
            traditionsDesc: "يشتهر أهل الجوف بـ 'السمح' وكرم الضيافة العربي الأصيل. ترتبط عاداتهم بمواسم حصاد الزيتون والتمور (خاصة حلوة الجوف)، وتتميز فنونهم الشعبية بالأهازيج الشمالية التي تعكس شموخ أهل المنطقة.",
            foodTitle: "مذاق الشمال",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تركز الرؤية على تحويل الجوف إلى عاصمة للطاقة المتجددة (الرياح والطاقة الشمسية)، وتطوير السياحة التراثية والزراعية، وتعزيز الصناعات التحويلية المرتبطة بالزيتون.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع منطقة الجوف في شمال غرب المملكة، وتتميز بخصوبة تربتها ووفرة مياهها الجوفية، مما جعلها واحة خضراء وسط الطبيعة الصحراوية.",
        },
        en: {
            dir: 'ltr',
            title: "Al-Jouf Region",
            subtitle: "Land of Olives & Ancient Gateway to the North",
            originTitle: "Depth of History",
            originDesc: "Al-Jouf is one of the oldest inhabited regions in the Arabian Peninsula. Historically a major trade route connecting Arabia with the Levant and Mesopotamia, it is now the Kingdom's northern food basket and its largest olive producer.",
            civTitle: "Successive Civilizations",
            civDesc: "The region witnessed the rise of ancient kingdoms like Qedar and hosts monuments from the Stone Age, Assyrian, Nabataean, and Islamic eras, making it an open-air museum of human heritage.",
            landmarksTitle: "Archaeological Treasures",
            traditionsTitle: "Al-Jouf Hospitality",
            traditionsDesc: "Known for their authentic Arab generosity and the 'Samh' plant, Al-Jouf's traditions are tied to olive and date harvests (notably 'Helwat Al-Jouf'). Their folk arts reflect the pride and spirit of the North.",
            foodTitle: "Taste of the North",
            visionTitle: "Vision 2030",
            visionDesc: "Vision 2030 aims to transform Al-Jouf into a capital for renewable energy (wind and solar), develop heritage tourism, and enhance olive-related manufacturing industries.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in northwestern Saudi Arabia, Al-Jouf is characterized by fertile soil and abundant groundwater, serving as a lush green oasis within the desert landscape.",
        }
    };

    const t = translations[language] || translations.ar;

    // تم تحديث المصفوفة لتطابق أسماء الملفات وصيغها (jpg/png) في الصور المرفقة
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "قلعة مارد التاريخية" : "The Historic Mard Castle", 
            desc: language === "ar" ? "حصن عسكري أثري يطل على مدينة دومة الجندل، يعود تاريخه إلى القرون الأولى للميلاد، ويعد رمزاً للصمود والمناعة." : "An ancient military fortress overlooking Dumat al-Jandal, dating back to the early centuries AD, serving as a symbol of strength and resilience.",
            img: MardCastle 
        },
        { 
            id: 1,
            title: language === "ar" ? "أعمدة الرجاجيل" : "The Ancient Rajajil Columns", 
            desc: language === "ar" ? "موقع أثري يضم أعمدة حجرية منتصبة تعود للعصر النحاسي (أكثر من 6000 عام)، ويُعتقد أنها كانت تستخدم لأغراض فلكية أو دينية." : "An archaeological site featuring standing stone columns from the Chalcolithic era (over 6000 years old), believed to be used for astronomical or religious purposes.",
            img: RajajilColumns 
        },
        { 
            id: 2,
            title: language === "ar" ? "مسجد عمر بن الخطاب" : "Omar Mosque and its Minaret", 
            desc: language === "ar" ? "من أهم المساجد الأثرية في المملكة، يتميز بمئذنته الفريدة التي تعتبر من أقدم المآذن في العالم الإسلامي، وينسب للخليفة عمر بن الخطاب." : "One of the most significant ancient mosques in the Kingdom, featuring a unique minaret that is among the oldest in the Islamic world, attributed to Caliph Omar bin Al-Khattab.",
            img: OmarMosque 
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
                            {["زيت الزيتون", "المرقوق", "حلوة الجوف", "البكيلة"].map(food => (
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
                            title="Al-Jouf Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1743516.326880862!2d39.020556201314954!3d29.878144214539656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1507727e4e1e779f%3A0x6b77636e4b85c276!2z2KfZhNis2YjZgQ!5e0!3m2!1sar!2ssa!4v1705300000000!5m2!1sar!2ssa"
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