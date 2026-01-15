import React, { useEffect, useRef } from "react";

export default function Timeline({ darkMode, language }) {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const data = [
    // 1. فجر التاريخ وعصور الأنبياء
    {
      year: { ar: "1.3 مليون سنة - 9000 ق.م", en: "1.3M Years - 9000 BC" },
      title: { ar: "حضارة الشويحطية والمقر", en: "Shuwayhitiyah & Al-Maqar" },
      content: { 
        ar: "تمثل البدايات الأولى للاستقرار البشري؛ حيث كشفت آثار المقر عن مجتمع متطور مارس الزراعة واستئناس الخيل قبل 9000 سنة، مما غيّر خارطة تاريخ الفروسية العالمي.", 
        en: "The earliest human settlements; Al-Maqar revealed an advanced society that practiced agriculture and horse domestication 9,000 years ago, redefining global equestrian history." 
      }
    },
    {
      year: { ar: "عصور قديمة", en: "Ancient Era" },
      title: { ar: "قوم عاد (الأحقاف)", en: "People of 'Ad" },
      content: { 
        ar: "سكنوا جنوب الجزيرة واشتهروا ببناء 'إرم ذات العماد'. اعتمدت قوتهم الاقتصادية على السيطرة على طرق تجارة اللبان والبخور العالمية.", 
        en: "Inhabited the South, famous for building 'Iram of the Pillars.' Their economic power came from controlling global frankincense and incense trade routes." 
      }
    },
    {
      year: { ar: "عصور قديمة", en: "Ancient Era" },
      title: { ar: "قوم ثمود (الحجر)", en: "People of Thamud" },
      content: { 
        ar: "اتخذوا من العلا موطناً لهم، وتميزوا ببراعة هندسية فريدة في نحت الجبال وتحويلها إلى بيوت وقصور فارهة لا تزال قائمة كشاهد على عظمتهم.", 
        en: "Settled in AlUla, renowned for unique engineering brilliance in carving mountains into luxurious homes and palaces that stand to this day." 
      }
    },

    // 2. الممالك العربية الوسيطة
    {
      year: { ar: "القرن 6 - 2 ق.م", en: "6th - 2nd Century BC" },
      title: { ar: "مملكة ديدان ولحيان", en: "Dedan & Lihyan Kingdoms" },
      content: { 
        ar: "قوة اقتصادية سيطرت على 'طريق البخور' من واحة العلا. طورت نظام حكم ملكي وكتابة خاصة، وتركت تماثيل ضخمة تعكس نفوذها الثقافي.", 
        en: "An economic power controlling the 'Incense Route' from AlUla. They developed a monarchy, a unique script, and left behind colossal statues." 
      }
    },
    {
      year: { ar: "القرن 1 ق.م - 106 م", en: "100 BC - 106 AD" },
      title: { ar: "مملكة الأنباط", en: "The Nabataean Kingdom" },
      content: { 
        ar: "جعلوا من 'الحجر' عاصمتهم الجنوبية، وبرعوا في هندسة الري وجمع المياه في الصحراء، ونحتوا واجهات صخرية تعد اليوم من عجائب التراث العالمي.", 
        en: "Established 'Hegra' as their southern capital, excelled in desert irrigation and water harvesting, and carved world-famous rock facades." 
      }
    },
    {
      year: { ar: "القرن 5 ق.م", en: "5th Century BC" },
      title: { ar: "مملكة جرهاء", en: "Gerrha Kingdom" },
      content: { 
        ar: "وصفها اليونان بأنها 'أغنى مدن العرب'. تاجر أهلها بالذهب واللؤلؤ، وكانت بيوتهم مزينة بالأحجار الكريمة مما جعلها مطمعاً للقوى الكبرى.", 
        en: "Described by Greeks as the 'richest Arab city.' Their houses were adorned with gems, and they dominated the trade of gold and pearls." 
      }
    },

    // 3. العصر الإسلامي
    {
      year: { ar: "622 م - 661 م", en: "622 AD - 661 AD" },
      title: { ar: "العهد النبوي والراشد", en: "Prophetic & Rashidun Era" },
      content: { 
        ar: "تحولت المدينة المنورة لعاصمة سياسية وروحية للعالم، حيث توحدت قبائل الجزيرة العربية وانطلقت منها الفتوحات التي غيرت وجه التاريخ.", 
        en: "Medina became the world's political and spiritual capital, unifying Arabian tribes and launching conquests that changed world history." 
      }
    },
    {
      year: { ar: "661 م - 1258 م", en: "Umayyad & Abbasid Eras" },
      title: { ar: "الدولة الأموية والعباسية", en: "Umayyad & Abbasid States" },
      content: { 
        ar: "ظلت أرض المملكة مركزاً روحياً؛ واهتم الخلفاء بطرق الحج، وأبرزها 'درب زبيدة' الهندسي العملاق الذي امتد من الكوفة إلى مكة.", 
        en: "The region remained a spiritual hub; Caliphs built major pilgrimage routes, most notably the 'Darb Zubaidah' engineering marvel." 
      }
    },
    {
      year: { ar: "العصور الوسطى", en: "Middle Ages" },
      title: { ar: "الدول المحلية (العيونية والجبرية)", en: "Uyunid & Jabrid States" },
      content: { 
        ar: "ممالك محلية في شرق الجزيرة حافظت على الهوية العربية والإسلامية وحمت المنطقة من القوى الخارجية في فترات ضعف الخلافة المركزية.", 
        en: "Local eastern kingdoms that preserved Arab-Islamic identity and protected the region during periods of central Caliphate weakness." 
      }
    },

    // 4. التواجد العثماني
    {
      year: { ar: "1517 م - 1918 م", en: "1517 AD - 1918 AD" },
      title: { ar: "التواجد العثماني وسكة الحجاز", en: "Ottoman Era & Hejaz Railway" },
      content: { 
        ar: "بسط العثمانيون نفوذهم لحماية الحرمين، ومن أبرز مشاريعهم 'سكة حديد الحجاز' التي ربطت دمشق بالمدينة لتسهيل نقل الحجاج.", 
        en: "Ottomans extended influence to protect the Holy Mosques. A key project was the Hejaz Railway, linking Damascus to Medina." 
      }
    },

    // 5. الدولة السعودية
    {
      year: { ar: "1727 م", en: "1727 AD" },
      title: { ar: "الدولة السعودية الأولى", en: "First Saudi State" },
      content: { 
        ar: "تأسست في الدرعية على يد الإمام محمد بن سعود، ونجحت في توحيد نجد ومعظم أجزاء الجزيرة العربية تحت راية الأمن والوحدة.", 
        en: "Founded in Diriyah by Imam Muhammad bin Saud, successfully unifying Najd and most of the Peninsula under security and unity." 
      }
    },
    {
      year: { ar: "1824 م", en: "1824 AD" },
      title: { ar: "الدولة السعودية الثانية", en: "Second Saudi State" },
      content: { 
        ar: "استعاد فيها الإمام تركي بن عبد الله السيادة السعودية واتخذ من الرياض عاصمة جديدة للدولة.", 
        en: "Imam Turki bin Abdullah restored Saudi sovereignty and established Riyadh as the new capital." 
      }
    },
    {
      year: { ar: "1932 م", en: "1932 AD" },
      title: { ar: "توحيد المملكة العربية السعودية", en: "Unification of KSA" },
      content: { 
        ar: "ملحمة التوحيد بقيادة الملك عبد العزيز، الذي استعاد الرياض ووحد كافة أرجاء البلاد، لتبدأ رحلة النهضة السعودية الحديثة.", 
        en: "The unification epic led by King Abdulaziz, who retook Riyadh and unified the nation, launching the modern Saudi renaissance." 
      }
    }
  ];

  return (
    <>
      <style>{css}</style>
      <div className={`timeline-wrapper ${darkMode ? "dark-theme" : "light-theme"}`} dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="line" />
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} ref={(el) => (itemsRef.current[index] = el)} className={`row ${isLeft ? "left" : "right"} hidden`}>
              <div className="card">
                <div className="year-tag">{item.year[language]}</div>
                <h3>{item.title[language]}</h3>
                <p>{item.content[language]}</p>
              </div>
              <div className="dot" />
            </div>
          );
        })}
      </div>
    </>
  );
}

const css = `
.timeline-wrapper { position: relative; width: 100%; padding: 40px 0; overflow-x: hidden; }

/* إعدادات اللايت مود */
.light-theme { --line-color: #251e19; --dot-color: #dcc596; }
.light-theme .card { background-color: #251e19; color: #F6E9DA; }
.light-theme .year-tag { color: #dcc596; border-bottom: 1px solid #dcc596; }

/* إعدادات الدارك مود */
.dark-theme { --line-color: #dcc596; --dot-color: #4A352C; }
.dark-theme .card { background-color: #F6E9DA; color: #251e19; border: 1px solid #dcc596; }
.dark-theme .year-tag { color: #4A352C; border-bottom: 1px solid #4A352C; }

.line { 
  position: absolute; top: 0; bottom: 0; left: 50%; width: 2px; 
  background: var(--line-color); 
  transform: translateX(-50%); 
  opacity: 0.3; 
  transition: background 0.3s ease;
}

.row { position: relative; width: 100%; display: flex; margin-bottom: 40px; align-items: center; }

[dir="rtl"] .row.left { justify-content: flex-end; padding-right: calc(50% + 40px); }
[dir="rtl"] .row.right { justify-content: flex-start; padding-left: calc(50% + 40px); }
[dir="ltr"] .row.left { justify-content: flex-start; padding-left: calc(50% + 40px); }
[dir="ltr"] .row.right { justify-content: flex-end; padding-right: calc(50% + 40px); }

.dot { 
  position: absolute; left: 50%; transform: translateX(-50%); width: 14px; height: 14px; 
  background: var(--dot-color); 
  border: 2px solid var(--line-color);
  border-radius: 50%; z-index: 3; 
  transition: all 0.3s ease;
}

.card { width: 100%; max-width: 450px; border-radius: 15px; padding: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.year-tag { font-weight: bold; font-size: 0.95rem; margin-bottom: 10px; display: inline-block; padding-bottom: 2px; }
.card h3 { margin-bottom: 10px; font-size: 1.25rem; font-weight: bold; }
.card p { font-size: 1rem; line-height: 1.7; margin: 0; }

.hidden { opacity: 0; transform: translateY(30px); }
.show { opacity: 1; transform: translateY(0); transition: 0.6s ease-out; }

@media (max-width: 768px) {
  .line, .dot { left: 20px; }
  .row { padding: 0 20px 0 50px !important; justify-content: flex-start !important; }
}
`;