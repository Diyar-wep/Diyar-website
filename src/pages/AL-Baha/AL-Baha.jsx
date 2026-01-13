import React, { useState } from "react";

const AlBaha = ({ darkMode, language, t }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const landmarksData = {
        theeAin: { 
            title: language === "ar" ? "قرية ذي عين الأثرية" : "Thee Ain Heritage Village", 
            desc: language === "ar"
            ? "يعود تاريخها إلى نهاية القرن العاشر الهجري، وتتميز بمبانيها الحجرية البيضاء الفريدة ومزارع الموز والريحان."
            : "Dates back to the 10th century AH, famous for its unique white stone buildings and lush plantations.", 
            img: "AL-BahaPics/Dhi Al-Ain Village.png" // ضع هنا رابط صورة لقرية ذي عين الأثرية
        },
        elephantPath: { 
            title: language === "ar" ? "طريق الفيل" : "The Elephant Path", 
            desc: language === "ar"
            ? "المسار التاريخي الذي سلكه أبرهة الحبشي، يتميز برصفه الحجري العريض الذي يصل عرضه لـ 4 أمتار."
            : "The historical path taken by Abraha, characterized by its 4-meter wide stone paving.", 
            img: "AL-BahaPics/The Elephant Road.png" // ضع هنا رابط صورة لطريق الفيل التاريخي
        },
        bakhroushFort: { 
            title: language === "ar" ? "قلعة بخروش بن علاس" : "Bakhroush bin Allas Fort", 
            desc: language === "ar"
            ? "قلعة تحصينية شهدت مقاومة القائد بخروش ضد العثمانيين عام 1221هـ، وتعد رمزاً للصمود."
            : "A fortification that witnessed the resistance of leader Bakhroush against the Ottomans in 1221 AH.", 
            img: "AL-BahaPics/Bakhroush Castle.png" // ضع هنا رابط صورة لقلعة بخروش
        }
    };

    return (
        <div style={{
            direction: t.dir,
            textAlign: t.dir === "rtl" ? "right" : "left",
            minHeight: "100vh",
            backgroundColor: darkMode ? "#121212" : "#f4f7f1",
            color: darkMode ? "#e0e0e0" : "#2d3436",
            transition: "all 0.3s ease",
            paddingBottom: "50px",
            fontFamily: "sans-serif"
        }}>

            <header style={{ position: "relative", height: "45vh", overflow: "hidden" }}>
                {/* ضع في src أدناه رابط صورة بانورامية لجبال الباحة أو ضباب الباحة */}
                <img src="AL-BahaPics/AL-BahaPic.png" alt="Al-Baha" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h1 style={{ color: "white", fontSize: "3.5rem", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
                        {language === "ar" ? "منطقة الباحة" : "Al-Baha Region"}
                    </h1>
                </div>
            </header>

            <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 20px" }}>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• نشأة المنطقة" : "• Region Origin"}</h2>
                    <p style={pStyle}>
                        {language === "ar" 
                        ? "تُعد الباحة من أقدم المناطق المأهولة في شبه الجزيرة العربية منذ العصور الحجرية. تأسست كمنطقة إدارية عام 1383 هـ، وكانت تاريخياً حلقة وصل استراتيجية لطرق القوافل والحجيج المتجهة نحو مكة المكرمة."
                        : "Al-Baha is one of the oldest inhabited regions since the Stone Age. Established as an administrative region in 1383 AH, it served as a strategic link for caravan routes to Makkah."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• أهم الحضارات" : "• Key Civilizations"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "احتضنت المنطقة حضارات قديمة تعود لـ 2000 عام قبل الميلاد في مواقع مثل 'بني كبير'، وشهدت كثافة سكانية عالية في عصور ما قبل الإسلام تجلت في هندسة المدرجات الجبلية والآبار العميقة."
                        : "Home to ancient civilizations dating back to 2000 BC in sites like 'Bani Kabir', showing advanced mountain terracing and deep wells."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• المعالم التاريخية" : "• Historical Landmarks"}</h2>
                    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                        {Object.keys(landmarksData).map((key, index) => (
                            <button key={key} onClick={() => setSelectedItem(landmarksData[key])} style={itemBtnStyle(darkMode, index)}>
                                {landmarksData[key].title}
                            </button>
                        ))}
                    </div>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• العادات والتقاليد" : "• Traditions"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تشتهر الباحة بالفنون الشعبية كالعرضة الجنوبية واللعب والمسحباني. وتتميز بمراسم الزواج التي تبدأ بعد العصر، وكرم الضيافة الذي يعكس أصالة أهل الجبال."
                        : "Famous for folk arts like Southern Ardha and L'ab. Traditions include unique wedding ceremonies and exceptional mountain hospitality."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• المأكولات الشعبية" : "• Traditional Cuisine"}</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                        <div>
                            <strong style={{ color: "#2e7d32" }}>{language === "ar" ? "الدغابيس:" : "Daghabees:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "أقراص من عجينة البر تُطهى في مرق اللحم الغني." : "Whole wheat dough discs cooked in a rich meat broth."}</p>
                        </div>
                        <div>
                            <strong style={{ color: "#2e7d32" }}>{language === "ar" ? "الخبزة المقناة:" : "Khubza Maqnah:"}</strong>
                            <p style={pStyle}>{language === "ar" ? "خبز ضخم يُطهى على صخرة ساخنة ويُغطى بالجمر." : "Huge bread baked on a hot stone covered with embers."}</p>
                        </div>
                    </div>
                </section>

                <section style={{ ...sectionBoxStyle(darkMode), borderRight: "6px solid #2e7d32" }}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• رؤية المملكة 2030" : "• Vision 2030 Impact"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تركز الرؤية على تحويل الباحة لوجهة سياحية عالمية عبر تطوير السياحة البيئية، وترميم القرى التراثية كـ 'ذي عين'، ودعم زراعة الرمان وإنتاج العسل الفاخر."
                        : "Vision 2030 aims to transform Al-Baha into a global eco-tourism destination, renovating heritage villages and supporting local honey and pomegranate production."}
                    </p>
                </section>

                <section style={sectionBoxStyle(darkMode)}>
                    <h2 style={h2Style(t.dir)}>{language === "ar" ? "• الموقع الجغرافي" : "• Geographical Location"}</h2>
                    <p style={pStyle}>
                        {language === "ar"
                        ? "تقع منطقة الباحة في الجنوب الغربي من المملكة العربية السعودية، وتتربع على قمم جبال السروات، مما يمنحها مناخاً معتدلاً وطبيعة خلابة."
                        : "Located in the southwestern Saudi Arabia, perched atop the Sarawat Mountains with a temperate climate."}
                    </p>
                    <div style={{ height: "400px", borderRadius: "15px", overflow: "hidden", marginTop: "20px", border: "1px solid #ddd" }}>
                        <iframe 
                            title="Map" width="100%" height="100%" frameBorder="0" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119334.84656461944!2d41.38558452187654!3d20.012885994460593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e5059635777717%3A0x8825a07c3905e36a!2z2KfZhNio2KfYrdip!5e0!3m2!1sar!2ssa!4v1705100000000"
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
                            <h2 style={{ color: "#2e7d32" }}>{selectedItem.title}</h2>
                            <p style={{ marginTop: "10px", lineHeight: "1.6" }}>{selectedItem.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const sectionBoxStyle = (darkMode) => ({
    background: darkMode ? "#1e1e1e" : "#ffffff",
    padding: "30px",
    borderRadius: "20px",
    marginBottom: "30px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
});

const h2Style = (dir) => ({
    color: "#2e7d32",
    marginBottom: "20px",
    fontSize: "1.6rem",
    borderLeft: dir === "ltr" ? "4px solid #2e7d32" : "none",
    borderRight: dir === "rtl" ? "4px solid #2e7d32" : "none",
    padding: "0 15px"
});

const pStyle = { fontSize: "1.05rem", lineHeight: "1.8", opacity: 0.9 };

const itemBtnStyle = (darkMode, index) => ({
    padding: "12px 25px",
    backgroundColor: darkMode ? "#2a2a2a" : "#f0f4f0",
    color: darkMode ? "#fff" : "#2e7d32",
    border: "2px solid #2e7d32",
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

export default AlBaha;