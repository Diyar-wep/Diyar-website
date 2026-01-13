import React, { useState } from "react";
// تأكد من صحة مسار الصورة في مشروعك
import qassimBanner from "./QasPics/ChatGPT Image 13 يناير 2026، 01_10_43 ص.png";

const Qassim = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    // بيانات المعالم 
    const landmarksData = {
        shananah: { 
            title: language === "ar" ? "برج الشنانة" : "Al-Shananah Tower", 
            desc: language === "ar"
            ? "يعتبر برج الشنانة من أبرز المعالم التاريخية في منطقة القصيم، ويقع في محافظة الرس. شُيد كبرج للمراقبة في القرن الثاني عشر الهجري ويبلغ ارتفاعه حوالي 27 متراً."
            : "Al-Shananah Tower is one of the most prominent historical landmarks in Qassim, located in Ar Rass. It was built as an observation tower in the 12th century AH and stands about 27 meters tall.", 
            img: qassimBanner 
        },
        musawkaf: { 
            title: language === "ar" ? "سوق المسوكف" : "Al-Musawkaf Market", 
            desc: language === "ar"
            ? "سوق شعبي تراثي يقع في قلب عنيزة، يضم العديد من المحلات التي تبيع المنتجات التقليدية والحرف اليدوية، ويعد مركزاً للفعاليات السياحية."
            : "A traditional heritage market located in the heart of Unaizah, featuring shops for traditional products and handicrafts, and serves as a center for tourism events.", 
            img: qassimBanner 
        }
    };

    return (
        <div style={{
            direction: t.dir,
            textAlign: t.dir === "rtl" ? "right" : "left",
            minHeight: "100vh",
            backgroundColor: darkMode ? "#1a1a1a" : "#fdfaf5",
            color: darkMode ? "#fff" : "#2d3436",
            transition: "all 0.3s ease"
        }}>

            {/* الهيدر والبانر */}
            <header style={{ position: "relative", height: "50vh", overflow: "hidden" }}>
                <img src={qassimBanner} alt="Qassim Banner"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <h1 style={{
                        color: "white",
                        fontSize: "3.5rem",
                        fontWeight: "bold",
                        textShadow: "2px 4px 10px rgba(0,0,0,0.3)"
                    }}>
                        {language === "ar" ? "منطقة القصيم" : "Qassim Region"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 20px" }}>

                {/* قسم النشأة والتاريخ */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        {language === "ar" ? "النشأة والأهمية التاريخية" : "Origin and Historical Significance"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "يعود تاريخ الاستيطان في القصيم إلى عصور ما قبل التاريخ، وتعتبر قلب نجد النابض. برزت كمركز تجاري وزراعي هام على مر العصور."
                            : "Settlement in Qassim dates back to prehistoric times, and it is considered the heart of Najd. It emerged as an important commercial and agricultural center through the ages."}
                    </p>
                    <p style={pStyle}>
                        <strong>{language === "ar" ? "سبب التسمية:" : "Origin of Name:"}</strong>{" "}
                        {language === "ar"
                            ? "سُميت القصيم بهذا الاسم نسبة إلى 'القصيمة' وهي الأرض الرملية التي تنبت شجر الغضا والارطى."
                            : "Qassim was named after 'Al-Qassimah', which refers to sandy lands that grow Ghadha and Arta trees."}
                    </p>
                </section>

                {/* قسم المعالم التاريخية */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={h2Style(t.dir)}>
                        {language === "ar" ? "أهم المعالم" : "Top Landmarks"}
                    </h2>
                    <div style={gridStyle}>
                        <button
                            onClick={() => setSelectedItem(landmarksData.shananah)}
                            style={itemBtnStyle(darkMode, 0)}
                        >
                            {language === "ar" ? "برج الشنانة" : "Al-Shananah Tower"}
                        </button>

                        <button
                            onClick={() => setSelectedItem(landmarksData.musawkaf)}
                            style={itemBtnStyle(darkMode, 1)}
                        >
                            {language === "ar" ? "سوق المسوكف" : "Al-Musawkaf Market"}
                        </button>
                    </div>
                </section>

                {/* قسم أكلات المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        {language === "ar" ? "أكلات أهل المنطقة" : "Traditional Food"}
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <div>
                            <h3 style={{ color: "#8a9b3a", marginBottom: "10px" }}>
                                {language === "ar" ? "١. الكليجا" : "1. Kleja"}
                            </h3>
                            <p style={pStyle}>
                                {language === "ar"
                                    ? "تعد الكليجا الرمز الغذائي الأول للقصيم، وهي عبارة عن قرص محشو بالدبس والهيل واللومي، وتشتهر مدينة بريدة بمهرجان الكليجا السنوي."
                                    : "Kleja is the primary food symbol of Qassim, a biscuit stuffed with molasses and cardamom. Buraidah is famous for its annual Kleja festival."}
                            </p>
                        </div>
                        <hr style={{ opacity: 0.1 }} />
                        <div>
                            <h3 style={{ color: "#8a9b3a", marginBottom: "10px" }}>
                                {language === "ar" ? "٢. المرقوق والمطازيز" : "2. Margoog & Matazeez"}
                            </h3>
                            <p style={pStyle}>
                                {language === "ar"
                                    ? "من الأطباق الشعبية الدسمة التي تعتمد على العجين واللحم والخضروات، وتعتبر من الوجبات الأساسية في المائدة القصيمية خصوصاً في الشتاء."
                                    : "Traditional hearty dishes based on dough, meat, and vegetables, considered essential meals in the Qassimi kitchen, especially during winter."}
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* نافذة الكارد المنبثقة (Modal) */}
            {selectedItem && (
                <div style={modalOverlayStyle} onClick={() => setSelectedItem(null)}>
                    <div style={modalCardStyle(darkMode)} onClick={e => e.stopPropagation()}>
                        <button
                            style={closeBtnStyle}
                            onClick={() => setSelectedItem(null)}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            ✕
                        </button>

                        <img src={selectedItem.img} alt={selectedItem.title} style={cardImgStyle} />
                        <div style={{ padding: "25px" }}>
                            <h2 style={{ color: "#8a9b3a", marginBottom: "10px" }}>{selectedItem.title}</h2>
                            <p style={{ color: darkMode ? "#ccc" : "#444", lineHeight: "1.7" }}>
                                {selectedItem.desc}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(60px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(15px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

// الستايلات
const sectionBoxStyle = (darkMode) => ({
    background: darkMode ? "rgba(255,255,255,0.05)" : "#fff",
    padding: "35px",
    borderRadius: "25px",
    marginBottom: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.03)"
});

const h2Style = (dir) => ({
    color: "#8a9b3a",
    marginBottom: "25px",
    borderRight: dir === "rtl" ? "5px solid #8a9b3a" : "none",
    borderLeft: dir === "ltr" ? "5px solid #8a9b3a" : "none",
    padding: "0 15px",
    fontSize: "1.8rem"
});

const pStyle = { fontSize: "1.1rem", lineHeight: "1.8", opacity: 0.9 };

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px"
};

const itemBtnStyle = (darkMode, index) => ({
    padding: "18px",
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
    border: "1.5px solid #8a9b3a",
    borderRadius: "15px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    opacity: 0,
    animation: `fadeUp 0.8s ease forwards`,
    animationDelay: `${index * 0.15}s`
});

const modalOverlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2000,
    backdropFilter: "blur(5px)"
};

const modalCardStyle = (darkMode) => ({
    backgroundColor: darkMode ? "#222" : "#fff",
    width: "90%",
    maxWidth: "650px",
    borderRadius: "25px",
    overflow: "hidden",
    position: "relative",
    animation: "slideUp 1.2s cubic-bezier(0.19, 1, 0.22, 1) both"
});

const cardImgStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    backgroundColor: "#333"
};

const closeBtnStyle = {
    position: "absolute",
    top: "15px",
    right: "15px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.7)",
    color: "#fff",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease, background 0.2s ease",
    zIndex: 10
};

export default Qassim;