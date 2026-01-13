import React, { useState } from "react";
// استبدل هذا المسار بصورة لبانر عسير في مشروعك
import asirBanner from "./AsirPics/f177ac7b-6865-4daa-8eba-e55042e469c2-md.jpeg"; 
import rgalamaa from "./AsirPics/196610339984845401.jfif"; 
import jurshPic from "./AsirPics/846461_1368202303.jpg"; 


const Asir = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    // بيانات المعالم التاريخية والآثار
    const landmarksData = {
        rijalAlma: { 
            title: language === "ar" ? "قرية رجال ألمع" : "Rijal Almaa Village", 
            desc: language === "ar"
            ? "تعد من أهم القرى التراثية في المملكة، وتتميز بحصونها الحجرية الشاهقة وتصميمها المعماري الفريد الذي يمتد لأكثر من 900 عام."
            : "One of the most important heritage villages in KSA, famous for its towering stone forts and unique architectural design dating back over 900 years.", 
            img: rgalamaa 
        },
        jurash: { 
            title: language === "ar" ? "موقع جرش الأثري" : "Jurash Archaeological Site", 
            desc: language === "ar"
            ? "موقع أثري يقع في محافظة أحد رفيدة، يضم بقايا حضارات قديمة تعود إلى عصور ما قبل الإسلام، ويشتهر بصناعاته الجلدية والزراعية قديماً."
            : "An archaeological site in Ahad Rafidah, containing remains of ancient pre-Islamic civilizations, famous for its leather and agricultural industries.", 
            img: jurshPic 
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
                <img src={asirBanner} alt="Asir Banner"
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
                        {language === "ar" ? "منطقة عسير" : "Asir Region"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 20px" }}>

                {/* نشأة المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "نشأة المنطقة" : "Region Origin"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تقع عسير في الركن الجنوبي الغربي من المملكة، واستمدت اسمها من عسرة تضاريسها الجبلية. تميزت عبر العصور بكونها حلقة وصل تجارية هامة بفضل وفرة أمطارها وخصوبة أرضها."
                            : "Asir is located in the southwestern corner of KSA, taking its name from its rugged (Asir) mountain terrain. Throughout history, it served as a vital trade link due to its abundant rainfall and fertile land."}
                    </p>
                </section>

                {/* أهم الحضارات التي استوطنت المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "أهم الحضارات" : "Major Civilizations"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "استوطنت عسير حضارات عريقة منها الحضارة الحميرية والسبئية، وشهدت ازدهاراً كبيراً في العصور الإسلامية كطريق للحجاج والتجارة بين اليمن ومكة المكرمة."
                            : "Ancient civilizations such as the Himyarite and Sabaean settled in Asir. It flourished during the Islamic eras as a key route for pilgrims and trade between Yemen and Makkah."}
                    </p>
                </section>

                {/* أهم الآثار التاريخية وأقدمها */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "أهم الآثار التاريخية" : "Historical Landmarks"}
                    </h2>
                    <div style={gridStyle}>
                        <button
                            onClick={() => setSelectedItem(landmarksData.rijalAlma)}
                            style={itemBtnStyle(darkMode, 0)}
                        >
                            {language === "ar" ? "قرية رجال ألمع" : "Rijal Almaa Village"}
                        </button>

                        <button
                            onClick={() => setSelectedItem(landmarksData.jurash)}
                            style={itemBtnStyle(darkMode, 1)}
                        >
                            {language === "ar" ? "موقع جرش الأثري" : "Jurash Site"}
                        </button>
                    </div>
                </section>

                {/* عادات وتقاليد توارثتها أجيال المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "عادات وتقاليد عسير" : "Customs and Traditions"}
                    </h2>
                    
                    <h3 style={{ color: "#8a9b3a", margin: "10px 0" }}>- {language === "ar" ? "عادات" : "Customs"}</h3>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "يشتهر أهل عسير بفن 'القط العسيري' المسجل في اليونسكو، وهو فن تزيين المنازل بالألوان. كما تتميز المنطقة بالرقصات الشعبية مثل 'العرضة والخطوة' وإكرام الضيف."
                            : "Asir is famous for 'Al-Qatt Al-Asiri' (UNESCO registered art), the art of decorating homes with vibrant colors. The region is also known for folk dances like 'Al-Khatwa' and great hospitality."}
                    </p>

                    <h3 style={{ color: "#8a9b3a", margin: "10px 0" }}>- {language === "ar" ? "مأكولات" : "Cuisine"}</h3>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تتميز المائدة العسيرية بوجبات غنية مثل 'الحنيذ' الذي يُطهى في تنور خاص، و'العريكة' و'المبثوث' التي تعتمد على البر والسمن والعسل الطبيعي."
                            : "The Asiri table is rich with dishes like 'Haneeth' cooked in special ovens, 'Areeka', and 'Mabthooth', made with local wheat, ghee, and natural honey."}
                    </p>
                </section>

                {/* تأثير رؤية 2030 على المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "تأثير رؤية 2030" : "Vision 2030 Impact"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "من خلال استراتيجية 'قمم وشيم'، تهدف رؤية 2030 لتحويل عسير إلى وجهة سياحية عالمية طوال العام، وتطوير مشاريع عملاقة مثل شركة السودة وتطوير مطار أبها لربط المنطقة بالعالم."
                            : "Through the 'Peaks and Traditions' strategy, Vision 2030 aims to transform Asir into a global year-round tourist destination, developing mega-projects like Soudah Development and Abha Airport expansion."}
                    </p>
                </section>
            </main>

            {/* Modal */}
            {selectedItem && (
                <div style={modalOverlayStyle} onClick={() => setSelectedItem(null)}>
                    <div style={modalCardStyle(darkMode)} onClick={e => e.stopPropagation()}>
                        <button style={closeBtnStyle} onClick={() => setSelectedItem(null)}>✕</button>
                        <img src={selectedItem.img} alt={selectedItem.title} style={cardImgStyle} />
                        <div style={{ padding: "25px" }}>
                            <h2 style={{ color: "#8a9b3a", marginBottom: "10px" }}>{selectedItem.title}</h2>
                            <p style={{ color: darkMode ? "#ccc" : "#444", lineHeight: "1.7" }}>{selectedItem.desc}</p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slideUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fadeUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};

// الستايلات المساعدة
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

const cardImgStyle = { width: "100%", height: "300px", objectFit: "cover", backgroundColor: "#333" };

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
    zIndex: 10
};

export default Asir;