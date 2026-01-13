import React, { useState } from "react";

const Makkah = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const landmarksData = {
        haram: { 
            title: language === "ar" ? "المسجد الحرام والكعبة" : "The Grand Mosque & Kaaba", 
            desc: language === "ar"
            ? "أقدم بيت وُضع للناس، وهو قبلة المسلمين ومركز عبادتهم، رفع قواعده النبي إبراهيم وابنه إسماعيل عليهما السلام."
            : "The oldest house established for mankind, the Qibla of Muslims, built by Prophet Abraham and his son Ishmael.", 
            img: "MeccaPics/برج الساعه.jpg" // ضع هنا صورة للمسجد الحرام والكعبة المشرفة
        },
        hira: { 
            title: language === "ar" ? "غار حراء" : "Hira Cave", 
            desc: language === "ar"
            ? "يقع في جبل النور، وهو المكان الذي نزل فيه الوحي لأول مرة على النبي محمد صلى الله عليه وسلم."
            : "Located in Jabal al-Nour, the place where the first revelation descended upon Prophet Muhammad (PBUH).", 
            img: "MeccaPics/غار حراء.png" // ضع هنا صورة لغار حراء أو جبل النور
        },
        zubaydah: { 
            title: language === "ar" ? "عين زبيدة" : "Zubaydah Spring", 
            desc: language === "ar"
            ? "معجزة هندسية مائية أنشأتها السيدة زبيدة زوجة هارون الرشيد لسقيا الحجاج لعدة قرون عبر قنوات ممتدة."
            : "An engineering miracle created by Lady Zubaydah to provide water for pilgrims through extended channels.", 
            img: "MeccaPics/عين زبيده.webp" // ضع هنا صورة لبقايا قنوات عين زبيدة التاريخية
        },
        bayah: { 
            title: language === "ar" ? "مسجد البيعة" : "Al-Bay'ah Mosque", 
            desc: language === "ar"
            ? "يقع في منى، وهو الموقع الذي تمت فيه بيعة العقبة التاريخية بين النبي صلى الله عليه وسلم والأنصار."
            : "Located in Mina, the site of the historic Bay'ah al-Aqaba between the Prophet (PBUH) and the Ansar.", 
            img: "MeccaPics/مسجد البيعة.jpg" // ضع هنا صورة لمسجد البيعة في منى
        }
    };

    return (
        <div style={{
            direction: t.dir,
            textAlign: t.dir === "rtl" ? "right" : "left",
            minHeight: "100vh",
            backgroundColor: darkMode ? "#1a1a1a" : "#fdfaf5",
            color: darkMode ? "#fff" : "#2d3436",
            transition: "all 0.3s ease",
            paddingBottom: "50px"
        }}>

            <header style={{ position: "relative", height: "45vh", overflow: "hidden" }}>
                {/* ضع هنا صورة بانورامية لمكة المكرمة أو المسجد الحرام */}
                <img src="MeccaPics/Makkahbanner.png" alt="Makkah" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
                        {language === "ar" ? "مكة المكرمة" : "Makkah Al-Mukarramah"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• نشأة المنطقة" : "• Region Origin"}</h2>
                    <p style={pStyle}>
                        {language === "ar" 
                        ? "يعود تاريخ مكة لأكثر من 2000 سنة قبل الميلاد. بدأت كقرية في وادٍ جاف، ثم ازدهرت بعد تفجر بئر زمزم، ورفع النبي إبراهيم وابنه إسماعيل قواعد الكعبة، لتصبح مركزاً للتوحيد ومحطة تجارية عالمية."
                        : "Dating back over 2000 BC, Makkah began as a small valley settlement. It flourished after Zamzam flowed and the Kaaba was built, becoming the center of Monotheism."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• أهم الحضارات" : "• Key Civilizations"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "سكنها العماليق وجرهم، ثم خزاعة وقريش التي سادت قبل الإسلام. ومع بعثة النبي محمد صلى الله عليه وسلم، أصبحت مكة قلب العالم الإسلامي وشهدت أعظم تطور حضاري وعمراني عبر العصور."
                        : "Inhabited by Amalekites and Jurhum, then Quraysh. Since the advent of Islam, it became the heart of the Islamic world, witnessing continuous development."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• أهم الآثار التاريخية وأقدمها" : "• Ancient Landmarks"}</h2>
                    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                        {Object.keys(landmarksData).map((key, index) => (
                            <button key={key} onClick={() => setSelectedItem(landmarksData[key])} style={itemBtnStyle(darkMode, index)}>
                                {landmarksData[key].title}
                            </button>
                        ))}
                    </div>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• عادات وتقاليد مكية" : "• Makkah Traditions"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تتميز مكة بعادات 'الغمرة' وفن 'المجس الحجازي' الفلكلوري. ويُعرف أهلها بحفاوة استقبال 'ضيوف الرحمن' وتقديم القهوة والتمور، وعادة 'القيس' الشعبية في أيام الحج."
                        : "Famous for the 'Ghamra' wedding night and 'Hijazi Majass' folk art. Known for their legendary hospitality for pilgrims."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• المأكولات الشعبية" : "• Traditional Cuisine"}</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "السليق المكاوي:" : "Makkah Saleeg:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "ملك المائدة المكية؛ أرز مطبوخ بالمرق والحليب، ويُقدم مع اللحم المحمر." : "The king of Makkah table; rice cooked with broth and milk, served with roasted meat."}</p>
                        </div>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "الدبيازة:" : "Debyazah:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "حلوى العيد الرئيسية المكونة من قمر الدين والمكسرات والفواكه المجففة." : "The main Eid dessert made from apricot paste, nuts, and dried fruits."}</p>
                        </div>
                    </div>
                </section>

                <section style={{ ...sectionBoxStyle(darkMode), borderRight: "6px solid #8a9b3a" }}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• تأثير رؤية 2030" : "• Vision 2030 Impact"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تهدف الرؤية لاستيعاب 30 مليون معتمر سنوياً عبر تطوير البنية التحتية، ومشروع مسار، وقطار الحرمين السريع، مع تحويل مكة لمدينة ذكية بالكامل لتسهيل تجربة ضيوف الرحمن."
                        : "Vision 2030 aims to host 30 million pilgrims annually through the Masar project, Haramain High-Speed Rail, and digital transformation."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• الموقع الجغرافي" : "• Geographical Location"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تقع مكة المكرمة في غرب المملكة العربية السعودية، في وادٍ تحده جبال السروات، وتعتبر قبلة المسلمين التي يتجهون إليها في صلاتهم من كل مكان."
                        : "Located in western Saudi Arabia, set in a valley of the Sarawat Mountains, it is the Qibla for Muslims worldwide."}
                    </p>
                    <div style={{ height: "400px", borderRadius: "15px", overflow: "hidden", marginTop: "20px", border: "1px solid #ddd" }}>
                        <iframe 
                            title="Map" width="100%" height="100%" frameBorder="0" 
                            src="http://googleusercontent.com/maps.google.com/5"
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>

            </main>

            {selectedItem && (
                <div style={modalOverlayStyle} onClick={() => setSelectedItem(null)}>
                    <div style={modalCardStyle(darkMode)} onClick={e => e.stopPropagation()}>
                        <button style={closeBtnStyle} onClick={() => setSelectedItem(null)}>✕</button>
                        <img src={selectedItem.img} alt={selectedItem.title} style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                        <div style={{ padding: "20px" }}>
                            <h2 style={{ color: "#8a9b3a" }}>{selectedItem.title}</h2>
                            <p style={{ marginTop: "10px", lineHeight: "1.6" }}>{selectedItem.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const sectionBoxStyle = (darkMode) => ({
    background: darkMode ? "rgba(255,255,255,0.07)" : "#ffffff",
    padding: "30px",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
});

const h2Style = (dir) => ({
    color: "#8a9b3a",
    marginBottom: "20px",
    fontSize: "1.6rem",
    borderLeft: dir === "ltr" ? "4px solid #8a9b3a" : "none",
    borderRight: dir === "rtl" ? "4px solid #8a9b3a" : "none",
    padding: "0 15px"
});

const pStyle = { fontSize: "1.05rem", lineHeight: "1.8", opacity: 0.9 };

const itemBtnStyle = (darkMode, index) => ({
    padding: "12px 25px",
    backgroundColor: darkMode ? "#333" : "#f9f9f9",
    color: darkMode ? "#fff" : "#333",
    border: "2px solid #8a9b3a",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s",
});

const modalOverlayStyle = {
    position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, backdropFilter: "blur(4px)"
};

const modalCardStyle = (darkMode) => ({
    backgroundColor: darkMode ? "#222" : "#fff", width: "90%", maxWidth: "500px",
    borderRadius: "20px", overflow: "hidden", position: "relative"
});

const closeBtnStyle = {
    position: "absolute", top: "10px", right: "10px", width: "35px", height: "35px",
    borderRadius: "50%", border: "none", background: "#00000080", color: "#fff", cursor: "pointer"
};

export default Makkah;