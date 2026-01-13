import React, { useState } from "react";

const Najran = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const landmarksData = {
        okhdood: { 
            title: language === "ar" ? "مدينة الأخدود الأثرية" : "Al-Okhdood Archeological City", 
            desc: language === "ar"
            ? "تضم أسواراً عالية ونقوشاً مسندية ورسومات صخرية تروي قصة أصحاب الأخدود وتاريخ المنطقة القديم."
            : "Features high walls, Musnad inscriptions, and rock art telling the story of Al-Okhdood and ancient history.", 
            img: "NajranPics/Al-Ukhdood City.png" // ضع هنا صورة لآثار مدينة الأخدود بنجران
        },
        hima: { 
            title: language === "ar" ? "منطقة حمى الثقافية" : "Hima Cultural Area", 
            desc: language === "ar"
            ? "أكبر تجمع للنقوش الصخرية في العالم، وهي موقع مسجل في قائمة التراث العالمي (اليونسكو)."
            : "The largest collection of rock art in the world, a UNESCO World Heritage site.", 
            img: "NajranPics/Cultural Inscriptions of Hima.jpg" // ضع هنا صورة لنقوش حمى الثقافية
        },
        mudPalaces: { 
            title: language === "ar" ? "القصور الطينية (الدروب)" : "Traditional Mud Palaces", 
            desc: language === "ar"
            ? "نمط معماري فريد (الدروب) يعكس أصالة العمارة النجرانية القديمة وقدرتها على التكيف مع البيئة."
            : "A unique architectural style reflecting the authenticity of traditional Najrani mud buildings.", 
            img: "NajranPics/Najran Trails.jpg" // ضع هنا صورة للبيوت الطينية النجرانية القديمة
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
                {/* ضع هنا صورة بانورامية لنجران (مثل القصور الطينية أو نخيل نجران) */}
                <img src="NajranPics/NajranBanner.png" alt="Najran" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
                        {language === "ar" ? "منطقة نجران" : "Najran Region"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• نشأة المنطقة" : "• Region Origin"}</h2>
                    <p style={pStyle}>
                        {language === "ar" 
                        ? "تُعد نجران من أقدم البقاع المأهولة منذ العصور الحجرية. اكتسبت أهميتها التاريخية كحلقة وصل رئيسية على 'طريق البخور' القديم، وشهدت أحداثاً تاريخية كبرى."
                        : "Najran is one of the oldest inhabited areas since the Stone Age. It gained historical importance as a key link on the ancient 'Incense Route'."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• أهم الحضارات" : "• Key Civilizations"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "كانت نجران جزءاً لا يتجزأ من الممالك العربية القديمة مثل سبأ وحمير، وشهدت ازدهاراً تجارياً واسعاً، واستمر دورها كمركز حضاري هام في العصور الإسلامية."
                        : "Part of ancient Arabian kingdoms like Sheba and Himyar, it flourished as a trade hub and continued its role through the Islamic eras."}
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
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• عادات وتقاليد توارثتها الأجيال" : "• Inherited Traditions"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "يبرز فن 'الزامل' كأهم الفنون الترحيبية، بالإضافة إلى الرزفة والمرافع. ويشتهر أهلها باللباس التقليدي كالمذيل والمكمم، وكرم الضيافة في البيوت الطينية العريقة."
                        : "The art of 'Zamil' is a key social tradition, along with Razfa and Maraf'e. Known for traditional attire like Mudhayyal and Mukammam."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• المأكولات الشعبية" : "• Traditional Cuisine"}</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "الرقش:" : "Raqsh:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "رقائق خبز البر تُوضع في 'المدهن' ويُصب عليها مرق اللحم الساخن." : "Wheat bread flakes placed in a 'Madhan' and soaked with hot meat broth."}</p>
                        </div>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "الوفد:" : "Wafd:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "كتلة من دقيق البر تُقدم مع المرق واللحم في تجربة طعام دافئة." : "A ball of wheat flour served with broth and meat, a traditional warm meal."}</p>
                        </div>
                    </div>
                </section>

                <section style={{ ...sectionBoxStyle(darkMode), borderRight: "6px solid #8a9b3a" }}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• تأثير رؤية 2030" : "• Vision 2030 Impact"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تركز الرؤية على تطوير المواقع الأثرية كالأخدود وحمى لتكون وجهات سياحية عالمية، مع تعزيز الهوية العمرانية الفريدة لنجران والحفاظ على تراثها."
                        : "Vision 2030 aims to develop archaeological sites like Okhdood and Hima and preserve Najran's unique architectural identity."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• الموقع الجغرافي" : "• Geographical Location"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تقع منطقة نجران في الجنوب الغربي من المملكة العربية السعودية، وتتميز بتنوع تضاريسها بين الجبال والصحاري والواحات الخصبة."
                        : "Located in the southwest of Saudi Arabia, featuring diverse landscapes from mountains to deserts and oases."}
                    </p>
                    <div style={{ height: "400px", borderRadius: "15px", overflow: "hidden", marginTop: "20px", border: "1px solid #ddd" }}>
                        <iframe 
                            title="Map" width="100%" height="100%" frameBorder="0" 
                            src="http://googleusercontent.com/maps.google.com/3"
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

export default Najran;