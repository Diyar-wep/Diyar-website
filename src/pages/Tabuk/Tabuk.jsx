import React, { useState } from "react";
// استبدل هذا المسار بصورة لبانر تبوك في مشروعك
import tabukBanner from "./TabukPics/ChatGPT Image 13 يناير 2026، 01_00_52 ص.png"; 
import TabukCastle from "./TabukPics/TabCatsle.jpeg"
import Shuaeib from "./TabukPics/شعيب.webp"

const Tabuk = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    // بيانات المعالم التاريخية والآثار في تبوك
    const landmarksData = {
        castle: { 
            title: language === "ar" ? "قلعة تبوك الأثرية" : "Tabuk Castle", 
            desc: language === "ar"
            ? "تعد من أقدم القلاع التاريخية في المنطقة، ويعود تاريخ بنائها الأصلي إلى عصر النبي شعيب عليه السلام، ثم جُددت في العصور الإسلامية اللاحقة."
            : "One of the oldest historical castles in the region, its original construction dates back to the era of Prophet Shuaib, later renovated during various Islamic eras.", 
            img: TabukCastle 
        },
        madyan: { 
            title: language === "ar" ? "مدائن شعيب (مغائر شعيب)" : "Magha'er Shuaib", 
            desc: language === "ar"
            ? "موقع أثري يضم واجهات نبطية منحوتة في الصخر، كانت موطناً لأصحاب الأيكة قوم نبي الله شعيب، وتعتبر من أهم المعالم التاريخية في شمال المملكة."
            : "An archaeological site featuring Nabataean facades carved into rocks. It was the home of the people of Prophet Shuaib and is a key historical landmark in the north.", 
            img: Shuaeib 
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
                <img src={tabukBanner} alt="Tabuk Banner"
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
                        {language === "ar" ? "منطقة تبوك" : "Tabuk Region"}
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
                            ? "تقع تبوك في الشمال الغربي للمملكة، وهي حلقة الوصل بين الجزيرة العربية وبلاد الشام ومصر. عُرفت قديماً بكونها أرضاً خصبة وافرة المياه، مما جعلها مستقراً للبشر منذ عصور ما قبل التاريخ."
                            : "Tabuk is located in the northwest of KSA, serving as a bridge between the Arabian Peninsula, Levant, and Egypt. Historically known for its fertile land and water, attracting settlers since prehistoric times."}
                    </p>
                </section>

                {/* أهم الحضارات التي استوطنت المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "أهم الحضارات" : "Major Civilizations"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "استوطنتها حضارات عريقة مثل الحضارة الآرامية والمدينية والنبطية. كما شهدت أحداثاً إسلامية كبرى أبرزها غزوة تبوك في عهد الرسول ﷺ، وكانت محطة هامة على طريق الحج الشامي وسكة حديد الحجاز."
                            : "Ancient civilizations such as the Arameans, Midianites, and Nabataeans settled here. It witnessed major Islamic events, most notably the Battle of Tabuk, and was a key stop for the Levant pilgrimage route and Hejaz Railway."}
                    </p>
                </section>

                {/* أهم الآثار التاريخية وأقدمها */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "أهم الآثار التاريخية" : "Historical Landmarks"}
                    </h2>
                    <div style={gridStyle}>
                        <button
                            onClick={() => setSelectedItem(landmarksData.castle)}
                            style={itemBtnStyle(darkMode, 0)}
                        >
                            {language === "ar" ? "قلعة تبوك" : "Tabuk Castle"}
                        </button>

                        <button
                            onClick={() => setSelectedItem(landmarksData.madyan)}
                            style={itemBtnStyle(darkMode, 1)}
                        >
                            {language === "ar" ? "مدائن شعيب" : "Magha'er Shuaib"}
                        </button>
                    </div>
                </section>

                {/* عادات وتقاليد توارثتها أجيال المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "عادات وتقاليد تبوك" : "Customs and Traditions"}
                    </h2>
                    
                    <h3 style={{ color: "#8a9b3a", margin: "10px 0" }}>- {language === "ar" ? "عادات" : "Customs"}</h3>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "يشتهر أهل تبوك بالكرم الأصيل المرتبط بحياة البادية والحاضرة، ومن أبرز عاداتهم سباقات الهجن ومجالس القهوة العربية، بالإضافة إلى الفنون الشعبية مثل 'الدحة' و'الرفيحي'."
                            : "The people of Tabuk are famous for their authentic hospitality. Key traditions include camel racing, Arabic coffee councils, and folk arts like 'Al-Dahha' and 'Al-Rafaihi'."}
                    </p>

                    <h3 style={{ color: "#8a9b3a", margin: "10px 0" }}>- {language === "ar" ? "مأكولات" : "Cuisine"}</h3>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تتميز المنطقة بوجبة 'المنسف' الشهيرة و'المجللة'، بالإضافة إلى جودة التمور والمنتجات الزراعية الوفيرة التي تشتهر بها مزارع تبوك."
                            : "The region is famous for 'Mansaf' and 'Al-Majallalah', along with high-quality dates and abundant agricultural products from Tabuk's fertile farms."}
                    </p>
                </section>

                {/* تأثير رؤية 2030 على المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "تأثير رؤية 2030" : "Vision 2030 Impact"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تمثل تبوك حجر الزاوية في مشاريع الرؤية الكبرى، حيث تحتضن مشروع 'نيوم' مدينة المستقبل، ومشروع 'البحر الأحمر' و'أمالا'. هذه المشاريع تعيد صياغة المنطقة كمركز عالمي للابتكار، السياحة البيئية، والطاقة المتجددة."
                            : "Tabuk is the cornerstone of major Vision projects, hosting 'NEOM' (the city of the future), the 'Red Sea Project', and 'Amaala'. These projects redefine the region as a global hub for innovation, ecotourism, and renewable energy."}
                    </p>
                </section>

                {/* الموقع الجغرافي - Geographical Location */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "الموقع الجغرافي" : "Geographical Location"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تقع منطقة تبوك في الشمال الغربي من المملكة العربية السعودية، وتعد بوابة جغرافية تربط المملكة بالدول المجاورة. تتميز بساحل طويل على البحر الأحمر وخليج العقبة، وتضم تضاريس متنوعة من جبال لوز الثلجية وصحراء حسمى الحمراء."
                            : "Tabuk region is located in the northwestern part of Saudi Arabia, serving as a gateway connecting the Kingdom to neighboring countries. It features a long coastline along the Red Sea and the Gulf of Aqaba, with diverse terrains ranging from the snowy Jabal al-Lawz to the red sands of Hisma."}
                    </p>
                    <div style={{ 
                        height: "400px", 
                        borderRadius: "20px", 
                        overflow: "hidden", 
                        marginTop: "20px", 
                        border: darkMode ? "1px solid #444" : "1px solid #ddd",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                    }}>
                        <iframe 
                            title="Tabuk Map" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            style={{ border: 0 }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112309.66068874947!2d36.483501594416026!3d28.39882531987388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a9ad0594132365%3A0x6f40e3c6b6139acf!2sTabuk!5e0!3m2!1sen!2ssa!4v1768384390116!5m2!1sen!2ssa"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
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

export default Tabuk;