import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المجلد TabPics الموضح في ملفاتك
import TabukBanner from "./TabPics/TabukBanner.png";
import TabukCastle from "./TabPics/TabCatsle.jpeg";
import ShuaibLandmarks from "./TabPics/شعيب.webp";
import AlMuazzamCastle from "./TabPics/قلعة المعظم.webp";
import TawbaMosque from "./TabPics/مسجد التوبة.webp";

const Tabuk = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة تبوك",
            subtitle: "بوابة الشمال وحاضنة نيوم",
            originTitle: "عراقة الموانئ",
            originDesc: "تعد تبوك حلقة الوصل بين الجزيرة العربية وبلاد الشام ومصر منذ القدم. عُرفت تاريخياً بكونها ممراً للقوافل التجارية وطريقاً للحج الشامي، وتشتهر بتنوعها البيئي الفريد الذي يجمع بين الشواطئ البكر والجبال الشاهقة والصحاري الشاسعة.",
            civTitle: "إرث الحضارات",
            civDesc: "احتضنت تبوك حضارات قديمة مثل 'مدين'، وتضم معالم أثرية تحكي قصصاً من العصور النبطية والإسلامية والعهد العثماني. تبرز المنطقة اليوم كوجهة عالمية للمستقبل من خلال مشاريع عملاقة مثل نيوم والبحر الأحمر.",
            landmarksTitle: "شواهد تبوك",
            traditionsTitle: "أصالة البادية",
            traditionsDesc: "يتميز أهل تبوك بالكرم الشمالي الأصيل والارتباط الوثيق بالحياة الفطرية. تشتهر المنطقة بسباقات الهجن، وفنون شعبية مثل 'الدحة'، وصناعات يدوية تعكس التراث البدوي العريق.",
            foodTitle: "مذاق الشمال",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تمثل تبوك ركيزة أساسية في رؤية 2030، حيث تحتضن مشروع 'نيوم' الحالم و'ذا لاين'، وتهدف الاستراتيجية لتطوير السياحة البيئية والساحلية وجعل المنطقة مركزاً عالمياً للطاقة النظيفة والابتكار.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع تبوك في أقصى شمال غرب المملكة العربية السعودية، وتطل على ساحل البحر الأحمر وخليج العقبة، وتتميز بمناخها المعتدل وتنوع تضاريسها الجبلية مثل جبل اللوز.",
        },
        en: {
            dir: 'ltr',
            title: "Tabuk Region",
            subtitle: "Gateway to the North & Home of NEOM",
            originTitle: "Ancient Seaports",
            originDesc: "Tabuk has been a vital link between the Arabian Peninsula, Levant, and Egypt since ancient times. Historically known as a trade caravan route and the Levant Hajj road, it is famous for its unique environmental diversity.",
            civTitle: "Legacy of Civilizations",
            civDesc: "Tabuk hosted ancient civilizations like 'Madyan' and houses archaeological sites from Nabataean, Islamic, and Ottoman eras. Today, it emerges as a global futuristic destination through mega-projects like NEOM.",
            landmarksTitle: "Tabuk Landmarks",
            traditionsTitle: "Bedouin Authenticity",
            traditionsDesc: "The people of Tabuk are known for authentic Northern hospitality. The region is famous for camel racing, folk arts like 'Al-Dahha', and handcrafts that reflect ancient Bedouin heritage.",
            foodTitle: "Northern Taste",
            visionTitle: "Vision 2030",
            visionDesc: "Tabuk is a cornerstone of Vision 2030, hosting the 'NEOM' project and 'The Line'. The strategy aims to develop ecotourism and coastal tourism, making the region a global hub for clean energy.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in the far northwest of Saudi Arabia, Tabuk overlooks the Red Sea coast and the Gulf of Aqaba, featuring a moderate climate and diverse mountain terrains like Jabal al-Lawz.",
        }
    };

    const t = translations[language] || translations.ar;

    // مصفوفة المعالم المحدثة لتطابق صور المجلد الخاص بك (TabukCastle, Shuaib, AlMuazzam, Tawba)
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "قلعة تبوك" : "Tabuk Castle", 
            desc: language === "ar" ? "قلعة أثرية يعود تاريخها إلى عهد السلطان سليمان القانوني، كانت محطة لحماية طريق الحج وتعد اليوم متحفاً يعرض تاريخ المنطقة." : "An archaeological castle dating back to the era of Sultan Suleiman the Magnificent, it served as a station to protect the Hajj route.",
            img: TabukCastle 
        },
        { 
            id: 1,
            title: language === "ar" ? "معالم مغاير شعيب" : "Mughayir Shuaib", 
            desc: language === "ar" ? "واحة قديمة تضم مدافن منحوتة في الصخر تعود للحضارة النبطية، ترتبط بقصة النبي شعيب عليه السلام." : "An ancient oasis featuring rock-cut tombs from the Nabataean civilization, linked to the story of Prophet Shuaib (PBUH).",
            img: ShuaibLandmarks 
        },
        { 
            id: 2,
            title: language === "ar" ? "قلعة المعظم" : "Al-Muazzam Castle", 
            desc: language === "ar" ? "من أكبر القلاع التي شيدت على طريق الحج الشامي، تتميز ببركتها الضخمة وعمارتها الدفاعية الفريدة." : "One of the largest castles built on the Levant Hajj road, famous for its massive pool and unique defensive architecture.",
            img: AlMuazzamCastle 
        },
        { 
            id: 3,
            title: language === "ar" ? "مسجد التوبة" : "At-Tawba Mosque", 
            desc: language === "ar" ? "يُعرف أيضاً بمسجد الرسول، حيث صلى فيه النبي ﷺ خلال غزوة تبوك، ويعد من أهم المعالم الإسلامية في المنطقة." : "Also known as the Prophet's Mosque, where the Prophet (PBUH) prayed during the Battle of Tabuk.",
            img: TawbaMosque 
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
                    src={TabukBanner} 
                    alt="Tabuk" 
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
                    <h2 style={{ textAlign: "center", fontSize: "2.2rem", fontWeight: "800", marginBottom: "40px", color: "var(--text-main)" }}>{t.landmarksTitle}</h2>
                    <div style={{ display: "flex", flexDirection: t.dir === "rtl" ? "row" : "row-reverse", gap: "30px", flexWrap: "wrap" }}>
                        <div style={{ flex: "1", minWidth: "280px", display: "flex", flexDirection: "column", gap: "12px" }}>
                            {landmarks.map((item, idx) => (
                                <div key={item.id} onClick={() => setActiveLandmark(idx)} style={{
                                    padding: "22px", borderRadius: "18px", cursor: "pointer", transition: "all 0.4s ease",
                                    background: activeLandmark === idx ? "var(--accent-color)" : "var(--bg-primary)",
                                    color: activeLandmark === idx ? "var(--button-text)" : "var(--text-main)",
                                    border: "1px solid var(--timeline-card-border)"
                                }}>
                                    <h3 style={{ fontSize: "1.15rem", fontWeight: "700" }}>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                        <div style={{ flex: "2", minWidth: "320px", position: "relative", borderRadius: "24px", overflow: "hidden", height: "420px", boxShadow: "0 20px 40px var(--map-shadow)" }}>
                            <img src={landmarks[activeLandmark].img} alt={landmarks[activeLandmark].title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "0.6s ease-in-out" }} />
                            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "35px", background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)", color: "#fff" }}>
                                <h3 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "10px" }}>{landmarks[activeLandmark].title}</h3>
                                <p style={{ fontSize: "1.05rem", opacity: 0.95, lineHeight: "1.6" }}>{landmarks[activeLandmark].desc}</p>
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
                            {["المنسف", "الجمرية", "المجللة", "التمن"].map(food => (
                                <span key={food} style={{ padding: "10px 22px", borderRadius: "50px", background: "var(--accent-color)", color: "var(--button-text)", fontWeight: "700", fontSize: "0.95rem" }}>
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
                        <iframe title="Tabuk Map" width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451241.141544211!2d36.216335!3d28.383344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ab19659b489d89%3A0x9599026315267b9!2sTabuk!5e0!3m2!1sen!2ssa!4v1700000000000"
                            style={{ filter: darkMode ? "invert(90%) hue-rotate(180deg) brightness(0.8)" : "none" }}
                            allowFullScreen
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

export default Tabuk;