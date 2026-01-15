import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المجلد MedinaPics الموضح في ملفاتك
import MadinaBanner from "./MedinaPics/MadinaBanner.png";
import AlBaqi from "./MedinaPics/al_baqi.jpg";
import GreenDome from "./MedinaPics/green_dome.jpg";
import MountUhud from "./MedinaPics/جبل أحد.jpg";
import QubaMosque from "./MedinaPics/مسجد قباء.jpg";
import NabawiUmbrellas from "./MedinaPics/مظلات المسجد النبوي.jpeg";

const Medina = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "المدينة المنورة",
            subtitle: "طيبة الطيبة ومأرز الإيمان",
            originTitle: "تاريخ الهجرة",
            originDesc: "المدينة المنورة هي أول عاصمة في تاريخ الإسلام، وثاني أقدس البقاع. احتضنت النبي محمد ﷺ وصحابته الكرام بعد الهجرة، ومنها انطلق نور الإسلام لتملأ الآفاق بالعدل والنور.",
            civTitle: "إرث نبوي",
            civDesc: "تجمع المدينة بين الروحانية العالية والمعالم التاريخية المرتبطة بالسيرة النبوية. شهدت أرضها نزول الكثير من الآيات القرآنية، وتضم المسجد النبوي الشريف الذي يمثل قلباً نابضاً للمدينة.",
            landmarksTitle: "شواهد النبوة",
            traditionsTitle: "أخلاق أهل المدينة",
            traditionsDesc: "يشتهر أهل المدينة المنورة باللين وحسن الجوار وكرم الضيافة المتوارث من عهد الأنصار. ترتبط عاداتهم بالتمور الفاخرة (خاصة العجوة) واستقبال الزوار والزائرين بحفاوة بالغة.",
            foodTitle: "مذاق مديني",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تهدف الرؤية إلى إثراء تجربة الزوار الدينية والثقافية، وتطوير المواقع التاريخية وتوسعة ساحات المسجد النبوي، بالإضافة إلى تعزيز مكانة المدينة كوجهة عالمية للمعرفة والثقافة الإسلامية.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع المدينة المنورة في غرب المملكة العربية السعودية، وتحيط بها الجبال والحرات البركانية، وتشتهر بتربتها الخصبة التي تنتج أجود أنواع التمور في العالم.",
        },
        en: {
            dir: 'ltr',
            title: "Medina",
            subtitle: "The Radiant City & The Home of Faith",
            originTitle: "The History of Hijrah",
            originDesc: "Medina is the first capital in Islamic history and the second holiest site. It welcomed Prophet Muhammad (PBUH) and his companions after the migration, and from here, the message of Islam spread to the world.",
            civTitle: "Prophetic Legacy",
            civDesc: "Medina combines high spirituality with historical landmarks linked to the Prophet's biography. Its land witnessed the revelation of many Quranic verses, and it houses the Prophet's Mosque.",
            landmarksTitle: "Prophetic Landmarks",
            traditionsTitle: "Ethics of Medina People",
            traditionsDesc: "The people of Medina are famous for their kindness, good neighborliness, and hospitality inherited from the Ansar. Their customs are linked to luxury dates (especially Ajwa) and welcoming visitors warmly.",
            foodTitle: "Medina Taste",
            visionTitle: "Vision 2030",
            visionDesc: "The vision aims to enrich the religious and cultural experience of visitors, develop historical sites, expand the Prophet's Mosque courtyards, and enhance Medina's status as a global destination for Islamic culture.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in western Saudi Arabia, Medina is surrounded by mountains and volcanic fields, and is famous for its fertile soil that produces the world's finest dates.",
        }
    };

    const t = translations[language] || translations.ar;

    // مصفوفة المعالم المحدثة لتطابق صور المجلد الخاص بك
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "القبة الخضراء" : "The Green Dome", 
            desc: language === "ar" ? "المعلم الأبرز في المسجد النبوي الشريف، حيث تقع تحتها الحجرة النبوية الشريفة التي تضم قبر النبي ﷺ وصاحبيه." : "The most prominent landmark in the Prophet's Mosque, beneath which lies the Prophetic Chamber containing the tomb of the Prophet (PBUH).",
            img: GreenDome 
        },
        { 
            id: 1,
            title: language === "ar" ? "مظلات المسجد النبوي" : "Nabawi Mosque Umbrellas", 
            desc: language === "ar" ? "تحفة هندسية توفر الظل والراحة لملايين المصلين في ساحات الحرم، وتتميز بتصميمها الفريد الذي يفتح ويغلق آلياً." : "An engineering masterpiece providing shade and comfort to millions in the mosque's courtyards, featuring a unique automated design.",
            img: NabawiUmbrellas 
        },
        { 
            id: 2,
            title: language === "ar" ? "مسجد قباء" : "Quba Mosque", 
            desc: language === "ar" ? "أول مسجد أسس في الإسلام، شارك النبي ﷺ في بنائه عند وصوله إلى المدينة، وله فضل عظيم حيث تعد الصلاة فيه كعمرة." : "The first mosque ever built in Islam. The Prophet (PBUH) participated in its construction, and praying there carries the reward of an Umrah.",
            img: QubaMosque 
        },
        { 
            id: 3,
            title: language === "ar" ? "جبل أحد" : "Mount Uhud", 
            desc: language === "ar" ? "جبل يحبنا ونحبه، شهد معركة أحد الشهيرة ويضم مقبرة سيد الشهداء حمزة بن عبدالمطلب وصحابة النبي الكرام." : "A mountain that 'loves us and we love it'; it witnessed the historic Battle of Uhud and houses the martyrs' cemetery.",
            img: MountUhud 
        },
        { 
            id: 4,
            title: language === "ar" ? "بقيع الغرقد" : "Al-Baqi", 
            desc: language === "ar" ? "المقبرة الرئيسية لأهل المدينة منذ عهد النبي ﷺ، تضم رفات الآلاف من الصحابة وآل البيت الكرام." : "The main cemetery for the people of Medina since the Prophet's era, containing the graves of thousands of companions and household members.",
            img: AlBaqi 
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
                    src={MadinaBanner} 
                    alt="Medina" 
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
                            {["الرز البخاري", "التميس", "الشريك المديني", "النعناع"].map(food => (
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
                        <iframe title="Medina Map" width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232410.14987832002!2d39.782024480179935!3d24.471295914182758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe5197d220d5%3A0x2e54514fea3b08d9!2z2KfZhNmF2K_ZitmG2Kkg2KfZhNmF2YbZiNix2Kk!5e0!3m2!1sar!2ssa!4v1768449742921!5m2!1sar!2ssa"
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

export default Medina;