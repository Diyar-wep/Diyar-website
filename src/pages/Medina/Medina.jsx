import React, { useState } from "react";

const Madinah = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const landmarksData = {
        prophetMosque: { 
            title: language === "ar" ? "المسجد النبوي الشريف" : "The Prophet's Mosque", 
            desc: language === "ar"
            ? "ثاني أقدس المساجد، يضم الروضة الشريفة وقبر النبي ﷺ، وهو مركز الإشعاع الحضاري الأول في الإسلام."
            : "The second holiest mosque, housing the Rawdah and the Prophet's tomb, the first center of Islamic civilization.", 
            img: "MedinaPics/القبة الخضراء.jpg" // ضع هنا صورة للمسجد النبوي والقبة الخضراء
        },
        qubaMosque: { 
            title: language === "ar" ? "مسجد قباء" : "Quba Mosque", 
            desc: language === "ar"
            ? "أول مسجد بُني في الإسلام، شارك النبي ﷺ في بنائه بنفسه عند وصوله للمدينة مهاجراً."
            : "The first mosque built in Islam; the Prophet (PBUH) personally participated in its construction.", 
            img: "MedinaPics/مسجد قباء.jpg" // ضع هنا صورة لمسجد قباء
        },
        uhudMountain: { 
            title: language === "ar" ? "جبل أحد" : "Mount Uhud", 
            desc: language === "ar"
            ? "جبل تاريخي شهد غزوة أحد، ويضم مقبرة شهداء أحد، وقال عنه النبي ﷺ: 'جبل يحبنا ونحبه'."
            : "A historical mountain that witnessed the Battle of Uhud and houses the martyrs' cemetery.", 
            img: "MedinaPics/جبل أحد.jpg" // ضع هنا صورة لجبل أحد ومقبرة الشهداء
        },
        baqi: { 
            title: language === "ar" ? "مقبرة البقيع" : "Al-Baqi Cemetery", 
            desc: language === "ar"
            ? "أقدم وأهم مقابر المسلمين في المدينة، تضم رفات الآلاف من الصحابة الكرام وآل البيت عليهم السلام."
            : "The oldest and main cemetery in Madinah, containing the remains of thousands of companions and AHL al-Bayt.", 
            img: "MedinaPics/البقيع.jpg" // ضع هنا صورة لبقيع الغرقد
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
                {/* ضع هنا صورة بانورامية للمدينة المنورة أو المسجد النبوي */}
                <img src="MedinaPics/MadinaBanner.png" alt="Madinah" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
                        {language === "ar" ? "المدينة المنورة" : "Al-Madinah Al-Munawwarah"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• نشأة المنطقة" : "• Region Origin"}</h2>
                    <p style={pStyle}>
                        {language === "ar" 
                        ? "عُرفت قديماً باسم 'يثرب'، ويرجع تاريخها لـ 1600 سنة قبل الهجرة. سكنها العماليق ثم اليهود وقبائل الأوس والخزرج، وتحولت لـ 'المدينة المنورة' بعد هجرة النبي ﷺ عام 622م لتصبح أول عاصمة للدولة الإسلامية."
                        : "Formerly known as 'Yathrib', dating back 1600 years before Hijra. It became 'Al-Madinah' after the Prophet's migration in 622 AD, serving as the first capital of Islam."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• أهم الحضارات" : "• Key Civilizations"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "شهدت تعاقب حضارة العماليق واليهود، ثم عصر الأنصار (الأوس والخزرج). ومع الهجرة النبوية، انطلقت منها الحضارة الإسلامية الكبرى التي شعت بنورها على العالم أجمع."
                        : "Witnessed the Amalekites and Jewish civilizations, followed by the Ansar era. With the Prophet's Hijra, it became the beacon of the Great Islamic civilization."}
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
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• عادات وتقاليد مدينية" : "• Madinah Traditions"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "يتميز أهل المدينة بعادة 'سابع المولود' وتوزيع المنفوش، وثقافة إكرام الزوار المتجذرة. كما يشتهرون بالمدائح النبوية والأناشيد التي تعكس حبهم للنبي ﷺ وحفاوة استقبال ضيوف الرحمن."
                        : "Famous for 'Sab'e' (7th-day newborn celebration) and deeply rooted hospitality. Known for prophetic praises (Madih) and religious chants."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• المأكولات الشعبية" : "• Traditional Cuisine"}</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "الرز الكابلي:" : "Kabli Rice:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "طبق فخم يُحضر باللحم وقشر البرتقال والزعفران والبهارات العطرية." : "A luxurious rice dish prepared with meat, orange zest, saffron, and aromatic spices."}</p>
                        </div>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "الشابورة المدينية:" : "Madinah Shaboora:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "نوع من الخبز الجاف المحمص يُؤكل مع الشاي، ويُعد رمزاً للإفطار المديني." : "Toasted dry bread often eaten with tea, a symbol of Madinah breakfast."}</p>
                        </div>
                    </div>
                </section>

                <section style={{ ...sectionBoxStyle(darkMode), borderRight: "6px solid #8a9b3a" }}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• تأثير رؤية 2030" : "• Vision 2030 Impact"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تعمل الرؤية عبر مشروع 'رؤى المدينة' وتأهيل أكثر من 100 موقع تاريخي على استقبال 30 مليون معتمر، مع توفير منظومة نقل ذكية كقطار الحرمين السريع والتحول الرقمي للخدمات."
                        : "Vision 2030 aims to host 30 million pilgrims through the 'Rua Al-Madinah' project and the rehabilitation of 100+ historical sites."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• الموقع الجغرافي" : "• Geographical Location"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تقع المدينة المنورة في غرب المملكة العربية السعودية، وتحيط بها الجبال والحرات البركانية من عدة جهات، وتُعد واحة خصبة اشتهرت بنخيلها ومياهها."
                        : "Located in western Saudi Arabia, surrounded by mountains and volcanic fields, it is a fertile oasis famous for palm trees."}
                    </p>
                    <div style={{ height: "400px", borderRadius: "15px", overflow: "hidden", marginTop: "20px", border: "1px solid #ddd" }}>
                        <iframe 
                            title="Map" width="100%" height="100%" frameBorder="0" 
                            src="http://googleusercontent.com/maps.google.com/6"
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

export default Madinah;