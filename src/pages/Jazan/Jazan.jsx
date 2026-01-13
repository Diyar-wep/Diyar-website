import React, { useState } from "react";

const Jazan = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const landmarksData = {
        athar: { 
            title: language === "ar" ? "مدينة عثر الأثرية" : "Athar Ancient City", 
            desc: language === "ar"
            ? "مدينة تجارية تاريخية مزدهرة كانت محطة هامة على طرق التجارة القديمة، واشتهرت بضرب الدنانير العثرية الإسلامية."
            : "A prosperous historical trading city, a key stop on ancient trade routes, famous for minting Islamic Dinars.", 
            img: "JazanPics/The ruins of the city of Athar.png" // ضع هنا صورة لآثار مدينة عثر
        },
        dosariyah: { 
            title: language === "ar" ? "قلعة الدوسرية" : "Al-Dosariyah Castle", 
            desc: language === "ar"
            ? "قلعة عثمانية شامخة تطل على ميناء جيزان، تم تجديدها في عهد الملك عبدالعزيز عام 1351هـ لتكون شاهداً على تاريخ المنطقة."
            : "An Ottoman castle overlooking Jazan port, renovated during King Abdulaziz's reign in 1351 AH.", 
            img: "JazanPics/Al-Dawsariyah Castle.png" // ضع هنا صورة لقلعة الدوسرية
        },
        farasan: { 
            title: language === "ar" ? "جزر فرسان" : "Farasan Islands", 
            desc: language === "ar"
            ? "تضم جزر فرسان قلاعاً عثمانية وبيت الرفاعي الأثري الذي يعكس ثراء العمارة والتجارة في المنطقة قديماً."
            : "Features Ottoman castles and the historic Al-Rifai House, reflecting the region's rich architectural heritage.", 
            img: "JazanPics/Al-Rifai House.jpg" // ضع هنا صورة لبيت الرفاعي أو جزر فرسان
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
                {/* ضع هنا صورة بانورامية لجازان (بحر أو جبال أو تراث) */}
                <img src="JazanPics/jizzanBanner.png" alt="Jazan" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
                        {language === "ar" ? "منطقة جازان" : "Jazan Region"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• نشأة المنطقة" : "• Region Origin"}</h2>
                    <p style={pStyle}>
                        {language === "ar" 
                        ? "يعود الاستيطان البشري في جازان إلى 8000 سنة قبل الميلاد. عُرفت تاريخياً باسم 'المخلاف السليماني'، وكانت مركزاً تجارياً حيوياً ونقطة وصل استراتيجية بين الجزيرة العربية واليمن وأفريقيا."
                        : "Human settlement in Jazan dates back to 8000 BC. Historically known as 'Al-Mikhlaf Al-Sulaimani', it was a vital trade link between Arabia, Yemen, and Africa."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• أهم الحضارات" : "• Key Civilizations"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "ازدهرت فيها الحضارة الإسلامية وبرزت مدن كمدينة عثر كمركز تجاري لضرب العملات، كما تركت الدولة العثمانية بصمتها العسكرية من خلال القلاع التحصينية مثل قلعة الدوسرية."
                        : "Islamic civilization flourished in cities like Athar, a major minting center. The Ottoman Empire also left an architectural mark with defensive forts."}
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
                        ? "تتميز جازان بمراسم زواج تمتد لـ 5 ليالٍ وفنون شعبية كرقصات السيف والعزاوي. كما يشتهر أهلها بارتداء 'الميل' التقليدي والاهتمام بالنباتات العطرية كالفل والكادي."
                        : "Famous for 5-night wedding ceremonies and folk dances like the Sword and Azawi. Known for traditional 'Mail' attire and aromatic plants."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• المأكولات الشعبية" : "• Traditional Cuisine"}</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "المرسة:" : "Marsah:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "طبق شهير يجمع بين خبز البر والموز والسمن والعسل، ويُقدم مع السمك المالح." : "A famous dish of mashed wheat, bananas, and ghee, served with salted fish."}</p>
                        </div>
                        <div>
                            <strong style={{ color: "#8a9b3a" }}>{language === "ar" ? "المغش:" : "Maghsh:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "لحم وخضروات تُطهى في إناء حجري خاص داخل التنور لنكهة مدخنة." : "Meat and vegetables cooked in a stone pot inside a traditional oven."}</p>
                        </div>
                    </div>
                </section>

                <section style={{ ...sectionBoxStyle(darkMode), borderRight: "6px solid #8a9b3a" }}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• تأثير رؤية 2030" : "• Vision 2030 Impact"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تهدف الرؤية لتحويل جازان لمركز اقتصادي عبر مدينة جازان للصناعات الأساسية، مع تطوير جزر فرسان والواجهات البحرية لتكون وجهة سياحية عالمية."
                        : "Vision 2030 aims to develop Jazan as an economic hub and transform Farasan Islands into a world-class tourism destination."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• الموقع الجغرافي" : "• Geographical Location"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تقع منطقة جازان في أقصى الجنوب الغربي للمملكة العربية السعودية، وتمثل بوابة هامة تربط بين المملكة وعمقها الأفريقي عبر البحر الأحمر."
                        : "Located in the far southwest of Saudi Arabia, a key gateway connecting the Kingdom via the Red Sea."}
                    </p>
                    <div style={{ height: "400px", borderRadius: "15px", overflow: "hidden", marginTop: "20px", border: "1px solid #ddd" }}>
                        <iframe 
                            title="Map" width="100%" height="100%" frameBorder="0" 
                            src="http://googleusercontent.com/maps.google.com/2"
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

export default Jazan;