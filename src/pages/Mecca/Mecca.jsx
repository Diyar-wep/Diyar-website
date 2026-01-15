import React, { useState } from "react";
import { useThemeLanguage } from "../../context/ThemeLanguageContext";

// استيراد الصور بناءً على المجلد MeccaPics الموضح في ملفاتك
import MakkahBanner from "./MeccaPics/Makkahbanner.png";
import AlKaaba from "./MeccaPics/الطواف.png"; // تم تغيير المسمى البرمجي ليعبر عن الكعبة
import ClockTower from "./MeccaPics/برج الساعه.jpg";
import AinZubaida from "./MeccaPics/عين زبيده.webp";
import HiraCave from "./MeccaPics/غار حراء.png";
import BaiyahMosque from "./MeccaPics/مسجد البيعة.jpg";

const Mecca = () => {
    const { darkMode, language } = useThemeLanguage();
    const [activeLandmark, setActiveLandmark] = useState(0);

    const translations = {
        ar: {
            dir: 'rtl',
            title: "منطقة مكة المكرمة",
            subtitle: "مهبط الوحي وقبلة المسلمين",
            originTitle: "أطهر البقاع",
            originDesc: "تعد مكة المكرمة أقدس بقعة على وجه الأرض، فيها الكعبة المشرفة قبلة المسلمين. ارتبط تاريخها ببدء الخليقة ودعوة النبي إبراهيم عليه السلام، ومنها انطلق نور الإسلام للعالم أجمع ببعثة النبي محمد ﷺ.",
            civTitle: "تراث وحضارة",
            civDesc: "تمزج مكة بين التاريخ الإسلامي العريق والتطور العمراني الهائل. تضم معالم شهدت أحداث السيرة النبوية، وتعتبر اليوم نموذجاً عالمياً في إدارة الحشود وتطوير البنية التحتية لخدمة ضيوف الرحمن.",
            landmarksTitle: "معالم الهدى",
            traditionsTitle: "ثقافة ووفادة",
            traditionsDesc: "يتميز أهل مكة بـ 'السقاية والرفادة' وهي خدمة الحجاج التي توارثوها جيلاً بعد جيل. تتسم عاداتهم بالتنوع الثقافي نتيجة استقبال الوفود من كل أنحاء العالم، مما خلق نسيجاً اجتماعياً فريداً.",
            foodTitle: "مذاق مكي",
            visionTitle: "رؤية المستقبل 2030",
            visionDesc: "تهدف الرؤية إلى تيسير استضافة 30 مليون معتمر سنوياً، وتطوير المواقع التاريخية الإسلامية، وإثراء التجربة الدينية والثقافية للحجاج والمعتمرين عبر مشاريع عملاقة مثل قطار الحرمين ووجهة 'مسار'.",
            geoTitle: "الموقع الجغرافي",
            geoDesc: "تقع مكة المكرمة في غرب المملكة العربية السعودية، وتتميز بتضاريسها الجبلية الجرانيتية وأوديتها الشهيرة، وتبعد مسافة قصيرة عن ساحل البحر الأحمر.",
        },
        en: {
            dir: 'ltr',
            title: "Makkah Region",
            subtitle: "The Cradle of Revelation & Qibla of Muslims",
            originTitle: "The Holiest Land",
            originDesc: "Makkah is the holiest site on Earth, home to the Holy Kaaba. Its history is linked to the dawn of creation and the call of Prophet Abraham, and it is where Islam's light first shone through Prophet Muhammad (PBUH).",
            civTitle: "Heritage & Civilization",
            civDesc: "Makkah blends deep Islamic history with immense urban development. It houses landmarks that witnessed the Prophet's biography and stands today as a global model for crowd management.",
            landmarksTitle: "Divine Landmarks",
            traditionsTitle: "Culture & Hospitality",
            traditionsDesc: "Makkah's people are known for 'Siqayah and Rifadah' (serving pilgrims), a tradition passed down through generations. Their customs reflect a rich cultural tapestry from welcoming the world.",
            foodTitle: "Makkah Taste",
            visionTitle: "Vision 2030",
            visionDesc: "The vision aims to host 30 million Umrah pilgrims annually, develop Islamic historical sites, and enrich the spiritual journey through projects like the Haramain High-Speed Railway.",
            geoTitle: "Geographical Location",
            geoDesc: "Located in western Saudi Arabia, Makkah is characterized by its rugged granitic mountains and famous valleys, situated a short distance from the Red Sea coast.",
        }
    };

    const t = translations[language] || translations.ar;

    // تحديث المصفوفة لتغيير "صحن الطواف" إلى "الكعبة المشرفة"
    const landmarks = [
        { 
            id: 0,
            title: language === "ar" ? "الكعبة المشرفة" : "The Holy Kaaba", 
            desc: language === "ar" ? "قبلة المسلمين وبيت الله الحرام، تتوسط المسجد الحرام وتعد أقدس بناء على وجه الأرض، يطوف حولها ملايين المسلمين سنوياً." : "The Qibla of Muslims and the Sacred House of Allah, located at the center of the Grand Mosque. It is the holiest structure on Earth.",
            img: AlKaaba 
        },
        
        { 
            id: 2,
            title: language === "ar" ? "غار حراء" : "Hira Cave", 
            desc: language === "ar" ? "يقع في قمة جبل النور، وهو المكان الذي كان يتعبد فيه النبي ﷺ وفيه نزل الوحي لأول مرة." : "Located at the peak of Mount Noor, it is where the Prophet (PBUH) meditated and received the first revelation.",
            img: HiraCave 
        },
        { 
            id: 3,
            title: language === "ar" ? "عين زبيدة" : "Ain Zubaida", 
            desc: language === "ar" ? "مشروع مائي تاريخي عظيم أمرت بإنشائه السيدة زبيدة لسقيا الحجاج، يمتد من أودية مكة إلى المشاعر المقدسة." : "A great historical water project ordered by Lady Zubaida to provide water for pilgrims, stretching to the holy sites.",
            img: AinZubaida 
        },
        { 
            id: 4,
            title: language === "ar" ? "مسجد البيعة" : "Baiyah Mosque", 
            desc: language === "ar" ? "مسجد تاريخي يقع في مشعر منى، شهد بيعة العقبة الأولى والثانية في عهد النبي محمد ﷺ." : "A historic mosque located in Mina, which witnessed the first and second Pledges of Allegiance during the Prophet's era.",
            img: BaiyahMosque 
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
                    src={MakkahBanner} 
                    alt="Makkah" 
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
                            {["السليق", "المنتو", "الفرموزة", "اللحوح"].map(food => (
                                <span key={food} style={{ padding: "10px 22px", borderRadius: "50px", background: "var(--accent-color)", color: "var(--button-text)", fontWeight: "700", fontSize: "0.95rem" }}>
                                    {language === "ar" ? food : food}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
                
                {/* قسم الخريطة */}
                <section style={glassStyle}>
                    <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "20px" }}>{t.geoTitle}</h2>
                    <p style={{ marginBottom: "25px", color: "var(--text-secondary)" }}>{t.geoDesc}</p>
                    <div style={{ height: "450px", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--timeline-card-border)" }}>
                        <iframe title="Makkah Map" width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118845.8770265231!2d39.75620868846153!3d21.435349479133497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab248234399767!2sMakkah!5e0!3m2!1sen!2ssa!4v1715000000000!5m2!1sen!2ssa"
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

export default Mecca;