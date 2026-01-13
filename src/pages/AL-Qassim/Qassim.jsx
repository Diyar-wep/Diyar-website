import React, { useState } from "react";
// تأكد من صحة مسار الصورة في مشروعك
import qassimBanner from "./QasPics/ChatGPT Image 13 يناير 2026، 01_10_43 ص.png";
import AlshnanhTower from "./QasPics/برج الشنانةPNG.png"
import Binaqeel from "./QasPics/قصر بن عقيّلPNG.png"

const Qassim = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    // بيانات الآثار التاريخية (تظهر في النافذة المنبثقة)
    const landmarksData = {
        shananah: { 
            title: language === "ar" ? "برج الشنانة" : "Al-Shananah Tower", 
            desc: language === "ar"
            ? "شُيد في القرن الثاني عشر الهجري في محافظة الرس، ويعد شاهداً تاريخياً على الصمود والبراعة المعمارية الطينية."
            : "Built in the 12th century AH in Ar Rass, it stands as a historical witness to resilience and mud-brick architectural ingenuity.", 
            img: AlshnanhTower 
        },
        fayda: { 
            title: language === "ar" ? "قصر بن عقيّل" : "Bin Aqeel Palace", 
            desc: language === "ar"
            ? "من القصور التاريخية البارزة التي تعكس النمط العمراني القديم في المنطقة وأهميتها السياسية والاجتماعية."
            : "One of the prominent historical palaces reflecting the ancient architectural style and the region's political and social importance.", 
            img: Binaqeel 
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

                {/* 1. نشأة المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "نشأة المنطقة" : "Region Origin"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تقع القصيم في قلب المملكة العربية السعودية، وتشتهر بخصوبة أراضيها ووفرة مياهها الجوفية. نشأت كواحة زراعية وتجارية هامة وسط نجد، واكتسبت اسمها من 'القصيمة' وهي الأرض التي تنبت شجر الغضا."
                            : "Located in the heart of Saudi Arabia, Qassim is famous for its fertile land and abundant groundwater. It emerged as an important agricultural and commercial oasis in Najd."}
                    </p>
                </section>

                {/* 2. أهم الحضارات التي استوطنت المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "أهم الحضارات" : "Major Civilizations"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "شهدت المنطقة استيطاناً بشرياً منذ عصور ما قبل التاريخ، وتعاقبت عليها قبائل العرب الكبرى. كما برزت في العصر الإسلامي كمحطة رئيسية على طريق الحج البصري الشهير."
                            : "The region has seen human settlement since prehistoric times, inhabited by major Arabian tribes. It flourished in the Islamic era as a key stop on the famous Basra pilgrimage route."}
                    </p>
                </section>

                {/* 3. أهم الآثار التاريخية وأقدمها */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "أهم الآثار التاريخية" : "Ancient Landmarks"}
                    </h2>
                    <div style={gridStyle}>
                        <button onClick={() => setSelectedItem(landmarksData.shananah)} style={itemBtnStyle(darkMode, 0)}>
                            {language === "ar" ? "برج الشنانة" : "Al-Shananah Tower"}
                        </button>
                        <button onClick={() => setSelectedItem(landmarksData.fayda)} style={itemBtnStyle(darkMode, 1)}>
                            {language === "ar" ? "قصر بن عقيّل" : "Bin Aqeel Palace"}
                        </button>
                    </div>
                </section>

                {/* 4. عادات وتقاليد توارثتها أجيال المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "عادات وتقاليد المنطقة" : "Customs and Traditions"}
                    </h2>
                    <div style={{ marginBottom: "20px" }}>
                        <h3 style={{ color: "#8a9b3a", marginBottom: "10px" }}>- {language === "ar" ? "عادات" : "Customs"}</h3>
                        <p style={pStyle}>
                            {language === "ar"
                                ? "يُعرف أهل القصيم بالكرم والاشتغال بالتجارة والفلاحة. ومن أبرز عاداتهم 'المجالس المفتوحة' والاحتفاء بمواسم الحصاد مثل مهرجانات التمور الكبرى."
                                : "The people of Qassim are known for hospitality, trade, and farming. Notable traditions include 'Open Councils' and celebrating harvest seasons like the major date festivals."}
                        </p>
                    </div>
                    <div>
                        <h3 style={{ color: "#8a9b3a", marginBottom: "10px" }}>- {language === "ar" ? "مأكولات" : "Mäkulat (Food)"}</h3>
                        <p style={pStyle}>
                            {language === "ar"
                                ? "تشتهر المنطقة بـ 'الكليجا' القصيمية، و'المطازيز'، و'المرقوق'، بالإضافة إلى أفخر أنواع التمور مثل 'السكري' الذي يعد سفيراً للمنطقة عالمياً."
                                : "The region is famous for 'Kleja', 'Matazeez', and 'Margoog', in addition to the finest dates like 'Sukkari', the region's global ambassador."}
                        </p>
                    </div>
                </section>

                {/* 5. تأثير رؤية 2030 على المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "تأثير رؤية 2030 على المنطقة" : "Vision 2030 Impact"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "ساهمت الرؤية في تحويل القصيم إلى وجهة للسياحة الزراعية والريفية، ودعم الصناعات الغذائية التحويلية، بالإضافة إلى تطوير المواقع التراثية لتصبح مراكز ثقافية واقتصادية مستدامة."
                            : "Vision 2030 has helped transform Qassim into a destination for agritourism and rural tourism, supporting food industries and developing heritage sites into sustainable cultural centers."}
                    </p>
                </section>

                {/* الموقع الجغرافي - Geographical Location */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "الموقع الجغرافي" : "Geographical Location"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تقع منطقة القصيم في وسط المملكة العربية السعودية ضمن إقليم نجد، وتعتبر 'سلة غذاء المملكة' بفضل وفرة مياهها الجوفية وتربتها الخصبة. يمر عبرها وادي الرمة، أطول وادي في الجزيرة العربية، مما يمنحها موقعاً زراعياً واستراتيجياً فريداً."
                            : "Qassim region is located in the heart of Saudi Arabia within the Najd province. Known as the 'Kingdom's Food Basket' due to its abundant groundwater and fertile soil, it is crossed by Wadi Al-Rummah, the longest valley in the Arabian Peninsula, giving it a unique agricultural and strategic location."}
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
                            title="Qassim Map" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            style={{ border: 0 }}
                            src="http://googleusercontent.com/maps.google.com/4"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </section>
            </main>

            {/* نافذة الكارد المنبثقة (Modal) */}
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
    zIndex: 10
};

export default Qassim;