import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المجلد NajranPics الموضح في ملفاتك
import NajranBanner from "./NajranPics/NajranBanner.png";
import AlUkhdoodCity from "./NajranPics/Al-Ukhdood City.png";
import HimaInscriptions from "./NajranPics/Cultural Inscriptions of Hima.jpg";
import NajranTrails from "./NajranPics/Najran Trails.jpg";

const Najran = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة نجران",
            subtitle: "بلاد الأخدود وعاصمة التراث العربي",
            originTitle: "عراقة الضاربة",
            originDesc: "تعد نجران من أقدم المناطق المأهولة في شبه الجزيرة العربية، وهي واحة تاريخية كانت ملتقى للقوافل التجارية القديمة. اشتهرت بحضارتها العريقة التي تمتد لآلاف السنين وبصمودها كمركز حضاري واقتصادي في جنوب المملكة.",
            civTitle: "إرث الحضارات",
            civDesc: "تضم نجران موقع 'الأخدود' التاريخي الشهير، بالإضافة إلى منطقة 'حمى' الثقافية المسجلة في اليونسكو، والتي تحتوي على أكبر مجموعات النقوش الصخرية في العالم، مما يجعلها متحفاً مفتوحاً للتاريخ الإنساني.",
            landmarksTitle: "شواهد نجران",
            traditionsTitle: "أصالة الموروث",
            traditionsDesc: "يتميز أهل نجران بكرم الضيافة والارتباط الوثيق بالعادات والتقاليد العربية الأصيلة. تشتهر المنطقة بفنونها الشعبية مثل 'الزامل' و'الرزفة'، وبعمارتها الطينية الفريدة التي تتجلى في القلاع والبيوت التراثية.",
            foodTitle: "مذاق الجنوب",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تهدف الرؤية إلى تحويل نجران إلى وجهة سياحية وثقافية عالمية من خلال تطوير المواقع الأثرية، وتعزيز سياحة المغامرات والجبال، ودعم المشاريع التنموية التي تحافظ على الهوية العمرانية المتميزة للمنطقة.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع نجران في الجنوب الغربي للمملكة العربية السعودية، وتتميز بتنوع تضاريسها بين الجبال الشاهقة، والأودية الخصبة مثل وادي نجران، وامتداد رمال الربع الخالي.",
        },
        en: {
            dir: 'ltr',
            title: "Najran Region",
            subtitle: "The Land of Al-Ukhdood & Capital of Arab Heritage",
            originTitle: "Ancient Roots",
            originDesc: "Najran is one of the oldest inhabited regions in the Arabian Peninsula, a historical oasis that served as a crossroads for ancient trade caravans. It is famous for its civilization spanning thousands of years in the southern Kingdom.",
            civTitle: "Legacy of Civilizations",
            civDesc: "Najran houses the famous 'Al-Ukhdood' site and the 'Hima' Cultural Area (UNESCO site), which contains one of the world's largest collections of rock art, making it an open-air museum of human history.",
            landmarksTitle: "Najran Landmarks",
            traditionsTitle: "Authentic Heritage",
            traditionsDesc: "The people of Najran are known for their hospitality and deep connection to traditional Arab customs. The region is famous for folk arts like 'Zamil' and its unique mud-brick architecture seen in heritage castles.",
            foodTitle: "Southern Taste",
            visionTitle: "Vision 2030",
            visionDesc: "The vision aims to transform Najran into a global cultural tourism destination by developing archaeological sites, promoting adventure tourism, and supporting development that preserves the region's unique identity.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in the southwest of Saudi Arabia, Najran features diverse landscapes including towering mountains, fertile valleys like Wadi Najran, and the sands of the Empty Quarter.",
        }
    };

    const t = translations[language] || translations.ar;

    // مصفوفة المعالم المحدثة لتطابق صور المجلد الخاص بك
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "مدينة الأخدود الأثرية" : "Al-Ukhdood Archeological City", 
            desc: language === "ar" ? "موقع تاريخي يضم نقوشاً وأسواراً ضخمة تحكي قصة أصحاب الأخدود الشهيرة، ويعود تاريخها إلى عصور ما قبل الميلاد." : "A historical site featuring inscriptions and massive walls that tell the famous story of 'The People of the Ditch', dating back to pre-Christian eras.",
            img: AlUkhdoodCity 
        },
        { 
            id: 1,
            title: language === "ar" ? "منطقة حمى الثقافية" : "Hima Cultural Area", 
            desc: language === "ar" ? "أحد أهم مواقع التراث العالمي لليونسكو، تضم نقوشاً صخرية فنية تصور الصيد والنباتات وطرق القوافل عبر آلاف السنين." : "A UNESCO World Heritage site containing artistic rock carvings depicting hunting, flora, and caravan routes spanning thousands of years.",
            img: HimaInscriptions 
        },
        { 
            id: 2,
            title: language === "ar" ? "مسارات نجران التراثية" : "Najran Heritage Trails", 
            desc: language === "ar" ? "تجسد العمارة النجدية والجنوبية القديمة من خلال الحصون الطينية والبيوت التراثية التي تعكس براعة التصميم التقليدي." : "Embodying ancient Najdi and Southern architecture through mud-brick forts and heritage houses that reflect traditional design mastery.",
            img: NajranTrails 
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
                    src={NajranBanner} 
                    alt="Najran" 
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
                            {["الرقش", "الوفد", "الحميسة", "السمن والعسل"].map(food => (
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
                        <iframe title="Najran Map" width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121739.78857180031!2d44.34892858173616!3d17.537638806816908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15feeb07c88f9155%3A0xd1a779128894f485!2z2YbYrNix2KfZhg!5e0!3m2!1sar!2ssa!4v1768448016715!5m2!1sar!2ssa"
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

export default Najran;