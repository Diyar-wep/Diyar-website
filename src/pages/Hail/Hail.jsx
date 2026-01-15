import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المجلد HailPics الموضح في الصورة المرفقة
import HailBanner from "./HailPics/HailBanner.png";
import QishlahFort from "./HailPics/Qishlah_2.jpg";
import JubbahSite from "./HailPics/جبة.jpg";
import AArifFort from "./HailPics/قلعة.jpg";

const Hail = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة حائل",
            subtitle: "عروس الشمال وموطن حاتم الطائي",
            originTitle: "أصالة الشمال",
            originDesc: "تعد حائل مركزاً تاريخياً وثقافياً حيوياً في شمال المملكة. اشتهرت منذ القدم بكونها مفترق طرق للقوافل التجارية، وارتبط اسمها بالكرم العربي الأصيل الذي جسده حاتم الطائي، وتتميز بجمال طبيعتها التي تجمع بين الرمال والجبال.",
            civTitle: "إرث عالمي",
            civDesc: "تضم حائل أحد أهم مواقع التراث العالمي لليونسكو (الفنون الصخرية)، حيث تحتضن جبالها نقوشاً أثرية تعود لآلاف السنين، تحكي قصص الحضارات التي استوطنت المنطقة منذ العصور الحجرية.",
            landmarksTitle: "شواهد حائل",
            traditionsTitle: "مدرسة الكرم",
            traditionsDesc: "حائل هي رمز الكرم العربي؛ فالمجالس المفتوحة والقهوة الحائلية والترحيب الحار جزء لا يتجزأ من هويتها. تشتهر المنطقة أيضاً بالفنون الشعبية مثل 'العرضة النجدية' و'السامري' الحائلي الفريد.",
            foodTitle: "مذاق حائل",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تهدف الرؤية إلى تعزيز حائل كوجهة عالمية للسياحة التراثية والرياضات الصحراوية (رالي حائل الدولي)، وتطوير البنية التحتية اللوجستية والزراعية للاستفادة من موقعها الاستراتيجي.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع حائل في شمال نجد، وتشتهر بجبلين عظيمين هما 'أجا وسلمى'، كما تمتد فيها رمال النفود الكبير، مما يخلق توازناً طبيعياً خلاباً.",
        },
        en: {
            dir: 'ltr',
            title: "Hail Region",
            subtitle: "Bride of the North & Home of Hatim al-Tai",
            originTitle: "Northern Authenticity",
            originDesc: "Hail is a vital historical hub in northern Saudi Arabia. Known as a crossroads for trade caravans, it is synonymous with legendary Arab hospitality, personified by Hatim al-Tai, and features a stunning landscape of sands and mountains.",
            civTitle: "Global Heritage",
            civDesc: "Hail hosts a UNESCO World Heritage site (Rock Art), featuring ancient inscriptions dating back thousands of years. These petroglyphs tell stories of civilizations that inhabited the region since the Stone Age.",
            landmarksTitle: "Hail Landmarks",
            traditionsTitle: "School of Generosity",
            traditionsDesc: "Hail is the symbol of Arab hospitality. Open 'Majalis' and warm welcomes are core to its identity. The region is also famous for folk arts like 'Najdi Ardha' and the unique Haili 'Samri'.",
            foodTitle: "Taste of Hail",
            visionTitle: "Vision 2030",
            visionDesc: "Vision 2030 aims to position Hail as a global destination for heritage tourism and desert sports (Hail International Rally), while developing logistics and agriculture projects.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in northern Najd, Hail is famous for the twin mountains of 'Aja and Salma' and the vast sands of the Great Nafud desert.",
        }
    };

    const t = translations[language] || translations.ar;

    // تم تحديث المصفوفة لتطابق صورك: القشلة، جبة، القلعة (عريف)، ونقوش أم سنمان
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "قصر القشلة" : "Qishlah Palace", 
            desc: language === "ar" ? "قصر تاريخي بني من الطين في الأربعينيات، يعد من أكبر وأجمل المباني الطينية في المنطقة، وكان يستخدم كمقر عسكري وإداري." : "A historic mud palace built in the 1940s, it is one of the largest and most beautiful mud structures in the region, formerly used as a military and administrative base.",
            img: QishlahFort 
        },
        { 
            id: 1,
            title: language === "ar" ? "الفنون الصخرية بجبة" : "Jubbah Rock Art", 
            desc: language === "ar" ? "أكبر وأشهر مواقع النقوش الصخرية في المملكة، مسجل لدى اليونسكو، ويحتوي على نقوش بشرية وحيوانية تعود لأكثر من 7000 عام." : "The largest rock art site in the Kingdom and a UNESCO World Heritage site, containing human and animal petroglyphs dating back over 7,000 years.",
            img: JubbahSite 
        },
        { 
            id: 2,
            title: language === "ar" ? "قلعة أعيرف" : "A'Arif Fort", 
            desc: language === "ar" ? "قلعة تاريخية مبنية على قمة جبل في قلب حائل، كانت تستخدم للمراقبة والاستطلاع وإعلان دخول شهر رمضان." : "A historic fort built atop a mountain in the heart of Hail, used for surveillance and as the location to announce the start of Ramadan.",
            img: AArifFort 
        },
        
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
                    src={HailBanner} 
                    alt="Hail" 
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
                            {["الكبيبا الحائلية", "المطازيز", "المقشوش", "التمن"].map(food => (
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
                            title="Hail Map" 
                            width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226443.08214097013!2d41.510024710432006!3d27.52607903993689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157646e696d0faa3%3A0xa823a286278a8880!2sHail!5e0!3m2!1sen!2ssa!4v1768384315257!5m2!1sen!2ssa"
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