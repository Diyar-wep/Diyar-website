import React, { useState } from "react";

const AlJouf = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const landmarksData = {
        maridCastle: { 
            title: language === "ar" ? "قلعة مارد" : "Marid Castle", 
            desc: language === "ar"
            ? "قلعة حربية شامخة في دومة الجندل يعود تاريخها لأكثر من 2000 عام، وتُعد من أهم القلاع الأثرية في المملكة."
            : "A majestic military fortress in Dumat al-Jandal dating back over 2000 years, one of the Kingdom's key sites.", 
            img: "AL-JawfPics/The historic Mard Castle.jpg" // ضع هنا صورة لقلعة مارد التاريخية
        },
        omarMosque: { 
            title: language === "ar" ? "مسجد عمر بن الخطاب" : "Omar bin Al-Khattab Mosque", 
            desc: language === "ar"
            ? "يتميز بمئذنته التي تُعد أول مئذنة في الإسلام، بُني أثناء توجه الخليفة عمر بن الخطاب لفتح بيت المقدس."
            : "Famous for its minaret, the first in Islam, built during Caliph Omar's journey to Jerusalem.", 
            img: "AL-JawfPics/Omar Mosque and its minaret.jpg" // ضع هنا صورة لمسجد عمر ومئذنته الشهيرة
        },
        rajajil: { 
            title: language === "ar" ? "أعمدة الرجاجيل" : "Rajajil Columns", 
            desc: language === "ar"
            ? "مجموعة من الأعمدة الحجرية الغامضة التي تعود للعصر النحاسي (حوالي 6500 عام)، تقع جنوب سكاكا."
            : "Mysterious stone columns dating back to the Chalcolithic era (approx. 6500 years ago).", 
            img: "AL-JawfPics/The ancient Rajajil Columns.jpg" // ضع هنا صورة لأعمدة الرجاجيل الأثرية
        },
        shwaihitiya: { 
            title: language === "ar" ? "موقع الشويحطية" : "Al-Shwaihitiya Site", 
            desc: language === "ar"
            ? "أقدم موقع استيطان بشري في الجزيرة العربية، حيث يعود تاريخه إلى أكثر من 1.3 مليون سنة."
            : "The oldest human settlement site in the Arabian Peninsula, dating back over 1.3 million years.", 
            img: "AL-JawfPics/The archaeological site of Al-Shuwayhitiyah.jpg" // ضع هنا صورة لموقع الشويحطية الأثري
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
                {/* ضع هنا صورة بانورامية لمزارع الزيتون في الجوف أو قلعة مارد */}
                <img src="AL-JawfPics/AL-JawfPic.png" alt="Al-Jouf" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
                        {language === "ar" ? "منطقة الجوف" : "Al-Jouf Region"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• نشأة المنطقة" : "• Region Origin"}</h2>
                    <p style={pStyle}>
                        {language === "ar" 
                        ? "تُعد الجوف من أقدم البقاع المأهولة في الجزيرة العربية (1.3 مليون سنة). عُرفت تاريخياً باسم 'أدوماتو' وكانت عاصمة لمملكة قيدار العريقة، كما عُرفت بـ 'جوف آل عمرو' و 'جوف السرحان'."
                        : "Al-Jouf is one of the oldest inhabited areas (1.3 million years). Historically known as 'Adumatu', it was the capital of the ancient Kingdom of Qedar."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• أهم الحضارات" : "• Key Civilizations"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "شهدت الجوف تعاقب حضارات كبرى؛ من العصر الحجري ومملكة قيدار، إلى الأنباط والرومان، وصولاً إلى العصر الإسلامي حيث فتحها خالد بن الوليد وبُني فيها أحد أقدم مساجد الإسلام."
                        : "Al-Jouf hosted major civilizations: from the Stone Age and Qedar to the Nabataeans, Romans, and the Islamic era."}
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
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• عادات وتقاليد أصيلة" : "• Authentic Traditions"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تشتهر الجوف برقصة 'الدحة' (أنفاس الأسد) وفن السامري. ويُعرف أهلها بكرم الضيافة وتقديم 'حلوة الجوف'، ومن تقاليدهم وليمة 'عشاء الخروف' في اليوم الرابع من الزواج."
                        : "Famous for the 'Dahha' dance and Samri art. Known for hospitality, 'Helwat Al-Jouf' dates, and unique wedding feasts."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• المأكولات الشعبية" : "• Traditional Cuisine"}</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "البكيلة:" : "Al-Bakeela:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "حلوى من تمر حلوة الجوف المكنوز مع دقيق السمح والسمن البري." : "A dessert made of dates, Samh flour, and local ghee."}</p>
                        </div>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "التطماج (المثقلة):" : "Al-Tatmaj:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "طبق شتوي من الجريش المطبوخ مع السمح والبصل والسمن." : "A winter dish of crushed wheat cooked with Samh, onions, and ghee."}</p>
                        </div>
                    </div>
                </section>

                <section style={{ ...sectionBoxStyle(darkMode), borderRight: "6px solid #8a9b3a" }}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• تأثير رؤية 2030" : "• Vision 2030 Impact"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "حولت الرؤية الجوف إلى عاصمة للطاقة المتجددة (رياح دومة الجندل وشمس سكاكا)، وعاصمة للزيتون بأكثر من 23 مليون شجرة، مع تطوير مواقعها الأثرية كوجهات سياحية عالمية."
                        : "Vision 2030 turned Al-Jouf into a renewable energy hub and the olive capital with over 23 million trees."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• الموقع الجغرافي" : "• Geographical Location"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تقع منطقة الجوف في شمال غرب المملكة العربية السعودية، وتُعد بوابة الشمال العريقة، وتتميز بخصوبة أرضها ووفرة مياهها الجوفية."
                        : "Located in northwestern Saudi Arabia, Al-Jouf is the ancient gateway to the north, known for its fertile land."}
                    </p>
                    <div style={{ height: "400px", borderRadius: "15px", overflow: "hidden", marginTop: "20px", border: "1px solid #ddd" }}>
                        <iframe 
                            title="Map" width="100%" height="100%" frameBorder="0" 
                            src="http://googleusercontent.com/maps.google.com/4"
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

export default AlJouf;