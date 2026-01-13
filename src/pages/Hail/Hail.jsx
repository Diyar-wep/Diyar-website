import React, { useState } from "react";
// استبدل هذا المسار بصورة لبانر حائل في مشروعك
import hailBanner from "./HailPics/ChatGPT Image 13 يناير 2026، 12_58_20 ص.png"; 
import jupah from "./HailPics/جبة.jpg"; 
import castlerAerf from "./HailPics/قلعة.jpg"; 


const Hail = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    // بيانات المعالم التاريخية والآثار في حائل
    const landmarksData = {
        aarif: { 
            title: language === "ar" ? "قلعة أعيرف" : "A'arif Fort", 
            desc: language === "ar"
            ? "قلعة تاريخية مبنية من الطين واللبن على قمة جبل، تعود بداياتها إلى العصور الجاهلية، وكانت تُستخدم للمراقبة وإعلان دخول شهر رمضان عبر مدفع حائل الشهير."
            : "A historical fort built of mud and clay atop a mountain, dating back to pre-Islamic times. It was used for surveillance and announcing Ramadan via the famous Hail cannon.", 
            img: castlerAerf 
        },
        jubbah: { 
            title: language === "ar" ? "جبة (النقوش الصخرية)" : "Jubbah Rock Art", 
            desc: language === "ar"
            ? "موقع مسجل في اليونسكو، يضم نقوشاً صخرية مذهلة تعود لآلاف السنين، وتصور الحياة البرية والأنشطة البشرية في العصور الحجرية."
            : "A UNESCO World Heritage site, featuring stunning rock inscriptions dating back thousands of years, depicting wildlife and human activities from the Stone Age.", 
            img: jupah 
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
                <img src={hailBanner} alt="Hail Banner"
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
                        {language === "ar" ? "منطقة حائل" : "Hail Region"}
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
                            ? "تقع حائل في شمال نجد، وتشتهر بجبلَي أجا وسلمى. تميزت بموقعها الاستراتيجي على طرق القوافل قديماً، وتعتبر من أقدم مراكز الاستيطان البشري في الجزيرة العربية نظراً لتوفر الموارد الطبيعية."
                            : "Hail is located in northern Najd, famous for the Aja and Salma mountains. It held a strategic position on ancient caravan routes and is one of the oldest human settlement centers in the Arabian Peninsula."}
                    </p>
                </section>

                {/* أهم الحضارات التي استوطنت المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "أهم الحضارات" : "Major Civilizations"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "استوطنتها حضارات منذ العصر الحجري، وبرزت فيها حضارة ثمود. كما اشتهرت في العصر الجاهلي بكونها موطن حاتم الطائي، رمز الكرم العربي، وشكلت محطة رئيسية على طريق الحج الكوفي (درب زبيدة)."
                            : "Hail was settled since the Stone Age, with the Thamud civilization being prominent. It is famously the home of Hatim al-Tai, the icon of Arab generosity, and a major stop on the Kufi pilgrimage route (Darb Zubaidah)."}
                    </p>
                </section>

                {/* أهم الآثار التاريخية وأقدمها */}
                <section style={{ marginBottom: "50px" }}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "أهم الآثار التاريخية" : "Historical Landmarks"}
                    </h2>
                    <div style={gridStyle}>
                        <button
                            onClick={() => setSelectedItem(landmarksData.aarif)}
                            style={itemBtnStyle(darkMode, 0)}
                        >
                            {language === "ar" ? "قلعة أعيرف" : "A'arif Fort"}
                        </button>

                        <button
                            onClick={() => setSelectedItem(landmarksData.jubbah)}
                            style={itemBtnStyle(darkMode, 1)}
                        >
                            {language === "ar" ? "نقوش جبة" : "Jubbah Inscriptions"}
                        </button>
                    </div>
                </section>

                {/* عادات وتقاليد توارثتها أجيال المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "عادات وتقاليد حائل" : "Customs and Traditions"}
                    </h2>
                    
                    <h3 style={{ color: "#8a9b3a", margin: "10px 0" }}>- {language === "ar" ? "عادات" : "Customs"}</h3>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "يرتبط اسم حائل بالكرم الفائق؛ حيث يُقال 'يا بعد حيي'. وتشتهر بمجالس القهوة والضيافة المفتوحة، وفنون شعبية أصيلة كالعرضة والسامري الحائلي، بالإضافة إلى مهرجان الراليات الدولي."
                            : "The name Hail is synonymous with extreme generosity. It is famous for open coffee councils, hospitality, and authentic folk arts like Ardah and Haili Samri, along with the International Rally."}
                    </p>

                    <h3 style={{ color: "#8a9b3a", margin: "10px 0" }}>- {language === "ar" ? "مأكولات" : "Cuisine"}</h3>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تتميز المائدة الحائلية بأطباق شعبية شهيرة مثل 'الكبيبا الحائلية' (ورق العنب المحشو) و'التمن' و'الجريش الحائلي'، وهي أطباق تعكس جودة المحاصيل المحلية."
                            : "The Haili table is famous for dishes like 'Kubiba Hail' (stuffed vine leaves), 'Temman', and 'Haili Jareesh', reflecting the quality of local crops."}
                    </p>
                </section>

                {/* تأثير رؤية 2030 على المنطقة */}
                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>
                        • {language === "ar" ? "تأثير رؤية 2030" : "Vision 2030 Impact"}
                    </h2>
                    <p style={pStyle}>
                        {language === "ar"
                            ? "تعمل رؤية 2030 على تحويل حائل إلى وجهة سياحية وثقافية عالمية، مع التركيز على استثمار تراثها المسجل في اليونسكو وتطوير قطاع الرياضات والمغامرات (رالي حائل)، إضافة إلى دعم المشاريع الزراعية الحديثة لتعزيز الأمن الغذائي."
                            : "Vision 2030 aims to transform Hail into a global tourist and cultural destination, focusing on UNESCO heritage sites, sports tourism (Hail Rally), and supporting modern agricultural projects."}
                    </p>
                </section>

                {/* الموقع الجغرافي - Geographical Location */}
<section style={sectionBoxStyle(darkMode)}>
    <h2 style={h2Style(t.dir)}>
        • {language === "ar" ? "الموقع الجغرافي" : "Geographical Location"}
    </h2>
    <p style={pStyle}>
        {language === "ar"
            ? "تقع منطقة حائل في شمال نجد بقلب الجزء الشمالي الغربي للمملكة، وتشتهر بجبالها الشامخة (أجا وسلمى). تعد حائل مركزاً استراتيجياً هاماً، حيث كانت تاريخياً مفترق طرق للقوافل التجارية والحجيج المتجهين نحو مكة المكرمة والمدينة المنورة."
            : "Located in northern Najd in the heart of north-western Saudi Arabia, Hail is famous for its majestic twin mountain ranges (Aja and Salma). Historically, it served as a strategic crossroads for trade caravans and pilgrims heading to Makkah and Madinah."}
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
            title="Hail Map" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 0 }}
            src="http://googleusercontent.com/maps.google.com/3"
            allowFullScreen
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

export default Hail;