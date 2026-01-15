import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المجلد AsirPics الموضح في الصورة المرفقة
import AsserBanner from "./AsirPics/asserBanner.jpeg";
import CastleShamsan from "./AsirPics/attr_castle_shamsan.webp";
import DahranAljanoob from "./AsirPics/attr_dahran_aljanoob.webp";
import AlJarash from "./AsirPics/الجرش.jpg";
import RijalAlmaa from "./AsirPics/رجال المع.jfif";

const Asir = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة عسير",
            subtitle: "وجهة الضباب وعاصمة السياحة العربية",
            originTitle: "أصالة المرتفعات",
            originDesc: "تعتبر عسير أيقونة الجمال في جنوب غرب المملكة، حيث تعانق الجبال السحاب. تمتاز بتاريخ عريق يمتد لآلاف السنين، وتشتهر بعمارتها الحجرية الملونة 'القط العسيري' الذي أدرجته اليونسكو ضمن التراث العالمي غير المادي.",
            civTitle: "إرث وحضارات",
            civDesc: "تحتضن عسير مواقع أثرية هامة مثل مدينة 'الجرش' التي تعود لعصور ما قبل الإسلام، وقرى تراثية متكاملة مثل 'رجال ألمع'. كانت المنطقة وما زالت مركزاً ثقافياً واقتصادياً يربط بين نجد واليمن.",
            landmarksTitle: "روائع عسير",
            traditionsTitle: "ثقافة وفنون",
            traditionsDesc: "تتميز عسير بفنونها الفريدة مثل فن 'الخطوة' و'العرضة الجنوبية'. يشتهر أهلها بكرم الضيافة والارتباط الوثيق بالأرض، ويتجلى ذلك في مهرجانات 'أبها يجمعنا' التي تحتفي بالطبيعة والتراث.",
            foodTitle: "مذاق الجنوب",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تهدف استراتيجية 'قمم وشيم' إلى تحويل عسير لوجهة سياحية عالمية طوال العام، مع الحفاظ على التوازن البيئي وتطوير البنية التحتية لتستوعب ملايين الزوار من أنحاء العالم.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع عسير في الجنوب الغربي للمملكة، وتضم أعلى قمة في السعودية (جبل السودة). تتنوع تضاريسها بين الجبال الشاهقة والسهول الساحلية (تهامة).",
        },
        en: {
            dir: 'ltr',
            title: "Asir Region",
            subtitle: "The Destination of Mist & Capital of Arab Tourism",
            originTitle: "Highland Authenticity",
            originDesc: "Asir is an icon of beauty in southwestern Saudi Arabia, where mountains hug the clouds. It features a history spanning thousands of years and is famous for its colorful stone architecture and 'Al-Qatt Al-Asiri' art, recognized by UNESCO.",
            civTitle: "Heritage & Civilizations",
            civDesc: "Asir hosts significant archaeological sites like 'Al-Jarash' city and heritage villages like 'Rijal Almaa.' The region has long been a cultural and economic hub connecting Najd and Yemen.",
            landmarksTitle: "Asir Wonders",
            traditionsTitle: "Culture & Arts",
            traditionsDesc: "Asir is known for unique arts like 'Al-Khatwa' and 'Southern Ardha.' Its people are famous for hospitality and a deep connection to the land, celebrated in annual festivals like 'Abha Brings Us Together.'",
            foodTitle: "Southern Taste",
            visionTitle: "Vision 2030",
            visionDesc: "The 'Soudah Peaks' strategy aims to transform Asir into a global year-round tourism destination, preserving the environment while developing infrastructure for millions of visitors.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in the southwest, Asir includes the highest peak in Saudi Arabia (Mount Soudah). Its terrain ranges from towering mountains to coastal plains (Tihama).",
        }
    };

    const t = translations[language] || translations.ar;

    // تم تحديث المصفوفة لتناسب ملفاتك: Shamsan, Dahran Aljanoob, Al-Jarash, Rijal Almaa
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "قرية رجال ألمع" : "Rijal Almaa Village", 
            desc: language === "ar" ? "قرية تراثية عمرها يزيد عن 900 عام، تتميز بحصونها الحجرية العالية ونوافذها الملونة، وهي مرشحة لقائمة التراث العالمي." : "A heritage village over 900 years old, famous for its towering stone fortresses and colorful windows, nominated for the UNESCO World Heritage list.",
            img: RijalAlmaa 
        },
        { 
            id: 1,
            title: language === "ar" ? "قلعة شمسان" : "Shamsan Castle", 
            desc: language === "ar" ? "قلعة تاريخية عسكرية تقع في مدينة أبها، تطل على المدينة من موقع استراتيجي وتعد من أهم المعالم الأثرية في المنطقة." : "A historic military castle in Abha city, overlooking the city from a strategic location and considered one of the most important landmarks.",
            img: CastleShamsan 
        },
        { 
            id: 2,
            title: language === "ar" ? "موقع الجرش الأثري" : "Al-Jarash Site", 
            desc: language === "ar" ? "موقع تاريخي يعود لفترات ما قبل الإسلام، يضم بقايا مباني حجرية ونقوشاً تحكي تاريخ القوافل التجارية القديمة." : "A historical site dating back to pre-Islamic periods, containing stone ruins and inscriptions reflecting ancient trade caravan history.",
            img: AlJarash 
        },
        { 
            id: 3,
            title: language === "ar" ? "ظهران الجنوب" : "Dahran Al-Janoob", 
            desc: language === "ar" ? "تشتهر هذه المحافظة بقراها الحجرية العتيقة وتضاريسها الخلابة التي تعكس التراث المعماري الفريد لمنطقة عسير." : "Famous for its ancient stone villages and stunning landscapes that reflect the unique architectural heritage of the Asir region.",
            img: DahranAljanoob 
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
                    src={AsserBanner} 
                    alt="Asir" 
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
                            {["العريكة", "التصابي", "المبثوث", "الخبز المقناة"].map(food => (
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
                            title="Asir Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930532.622290793!2d41.50814650360661!3d19.082567303711464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e0170a439633013%3A0x9b1f03b6118c1c1b!2sAseer%20Province!5e0!3m2!1sen!2ssa!4v1768384416126!5m2!1sen!2ssa"
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

export default Asir;