import React, { useState } from "react";

const EasternProvince = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const landmarksData = {
        jawatha: { 
            title: language === "ar" ? "مسجد جواثا" : "Jawatha Mosque", 
            desc: language === "ar"
            ? "يُعد ثاني مسجد صُليت فيه صلاة الجمعة في الإسلام بعد المسجد النبوي، ويعود تاريخه إلى السنة السابعة للهجرة في الأحساء."
            : "The second mosque to hold Friday prayers in Islam after the Prophet's Mosque, dating back to 7 AH in Al-Ahsa.", 
            img: "EasternPics/مسجد جواثا.jpg" // ضع هنا صورة لمسجد جواثا التاريخي
        },
        tarout: { 
            title: language === "ar" ? "قلعة تاروت" : "Tarout Castle", 
            desc: language === "ar"
            ? "بُنيت فوق تل أثري يعود لآلاف السنين في القطيف، وتضم آثاراً فينيقية ودلمونية عريقة."
            : "Built on an archaeological mound dating back thousands of years in Qatif, featuring Phoenician and Dilmunite remains.", 
            img: "EasternPics/قلعة تاروj.webp" // ضع هنا صورة لقلعة تاروت
        },
        qaraMount: { 
            title: language === "ar" ? "جبل القارة" : "Al-Qarah Mountain", 
            desc: language === "ar"
            ? "يتميز بتشكيلاته الصخرية الفريدة وكهوفه الباردة صيفاً، وهو موقع مسجل في قائمة اليونسكو للتراث العالمي."
            : "Known for its unique rock formations and cool caves in summer, it's a UNESCO World Heritage site.", 
            img: "EasternPics/جبل القارة.jpg" // ضع هنا صورة لجبل القارة من الداخل أو الخارج
        },
        uquir: { 
            title: language === "ar" ? "ميناء العقير التاريخي" : "Uqair Historic Port", 
            desc: language === "ar"
            ? "أقدم ميناء بحري على الخليج العربي، شهد اتفاقيات تاريخية مهمة في مسيرة تأسيس المملكة العربية السعودية."
            : "The oldest seaport on the Arabian Gulf, witness to key historical treaties in the Kingdom's foundation.", 
            img: "EasternPics/مبنى ميناء العقير الأثري.jpg" // ضع هنا صورة لمبنى ميناء العقير الأثري
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
                {/* ضع هنا صورة بانورامية لواحة الأحساء أو واجهة الخبر البحرية */}
                <img src="EasternPics/EastBanner.png" alt="Eastern Province" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
                        {language === "ar" ? "المنطقة الشرقية" : "Eastern Province"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• نشأة المنطقة" : "• Region Origin"}</h2>
                    <p style={pStyle}>
                        {language === "ar" 
                        ? "تُعد من أقدم المناطق المأهولة (5000 عام). عُرفت قديماً بإقليم 'البحرين'، وكانت مركزاً تجارياً يربط حضارات العالم. وفي العصر الحديث، أصبحت عاصمة النفط العالمية بعد اكتشاف 'بئر الخير' عام 1938م."
                        : "One of the oldest inhabited regions (5000 years). Known historically as 'Bahrain' region, it was a global trade hub. In modern times, it became the world's oil capital after discovering 'Prosperity Well' in 1938."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• أهم الحضارات" : "• Key Civilizations"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "احتضنت حضارات العبيد ودلمون والجرهاء الأسطورية. ودخل أهلها الإسلام طواعية عبر وفد عبد القيس، مما جعلها من أوائل المناطق التي اعتنقت الإسلام وبنت مساجده التاريخية."
                        : "Home to Ubaid, Dilmun, and the legendary Gerrha civilizations. Its people embraced Islam early through the Abdul Qays delegation."}
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
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• عادات وتقاليد المنطقة" : "• Eastern Traditions"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تتميز المنطقة بـ 'القرقيعان' وأهازيج 'النهام' البحرية، وعادة 'الغبقة' الرمضانية. كما يبرز 'دق الهريس' كعادة تعاونية اجتماعية أصيلة تعكس تلاحم أهل المنطقة."
                        : "Known for 'Gerga'oon', 'Nahham' sea chants, and 'Ghabga' gatherings. 'Dag Al-Harees' is a traditional communal activity reflecting social solidarity."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• المأكولات الشعبية" : "• Traditional Cuisine"}</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "العيش الحساوي:" : "Hasawi Rice:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "أرز أحمر فريد يُزرع في الأحساء، يتميز بقيمته الغذائية العالية وطعمه الغني." : "A unique red rice grown in Al-Ahsa, known for its high nutritional value and rich taste."}</p>
                        </div>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "المفلق:" : "Mufallaq:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "طبق من حبوب القمح المجروشة يُطبخ عادة مع اللحم أو الروبيان." : "A dish made of crushed wheat grains, typically cooked with meat or shrimp."}</p>
                        </div>
                    </div>
                </section>

                <section style={{ ...sectionBoxStyle(darkMode), borderRight: "6px solid #8a9b3a" }}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• تأثير رؤية 2030" : "• Vision 2030 Impact"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تركز الرؤية على تطوير واحة الأحساء ومدينة العقير السياحية، وإنشاء مراكز إبداعية مثل 'إثراء'، مع تعزيز مكانة المنطقة كمركز لوجستي عالمي يربط المملكة بدول الخليج."
                        : "Vision 2030 focuses on developing Al-Ahsa Oasis, Uqair tourism, and cultural hubs like 'Ithra', while enhancing its role as a global logistics center."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• الموقع الجغرافي" : "• Geographical Location"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تمتد المنطقة الشرقية على طول الساحل الغربي للخليج العربي، وهي أكبر مناطق المملكة مساحةً، وتمثل البوابة التجارية والاستراتيجية لدول الخليج."
                        : "Stretching along the Arabian Gulf, it is the largest region in Saudi Arabia and the strategic gateway to the Gulf states."}
                    </p>
                    <div style={{ height: "400px", borderRadius: "15px", overflow: "hidden", marginTop: "20px", border: "1px solid #ddd" }}>
                        <iframe 
                            title="Map" width="100%" height="100%" frameBorder="0" 
                            src="http://googleusercontent.com/maps.google.com/7"
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

export default EasternProvince;