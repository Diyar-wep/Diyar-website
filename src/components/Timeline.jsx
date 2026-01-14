import React from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export default function Timeline() {
  const { language, darkMode } = useThemeLanguage();

  const timelineData = {
    ar: [
      {
        year: "ما قبل الإسلام",
        title: "الحضارات القديمة",
        description:
          "امتد تاريخ شبه الجزيرة العربية لآلاف السنين، حيث شهدت المنطقة قيام حضارات قديمة مثل دلمون والثموديين والأنباط، وصولاً لتوحيدها تحت راية الإسلام."
      },
      {
        year: "1744",
        title: "الدولة السعودية الأولى",
        description:
          "تأسيس الدولة السعودية الأولى على يد الإمام محمد بن سعود، مشكلاً الأساس الأول للوحدة والاستقرار."
      },
      {
        year: "1824",
        title: "الدولة السعودية الثانية",
        description:
          "استمرارية الحكم وترسيخ مفهوم الدولة رغم التحديات الكبيرة."
      },
      {
        year: "1932",
        title: "توحيد المملكة",
        description:
          "إعلان توحيد المملكة العربية السعودية على يد الملك عبدالعزيز آل سعود طيب الله ثراه."
      },
      {
        year: "2030",
        title: "رؤية السعودية 2030",
        description:
          "انطلاقة طموحة تجمع بين الأصالة والتنمية لبناء مستقبل مستدام ومزدهر."
      }
    ],

    en: [
      {
        year: "Pre-Islamic",
        title: "Ancient Civilizations",
        description:
          "The Arabian Peninsula witnessed ancient civilizations like Dilmun and Nabataeans before Islamic unification."
      },
      {
        year: "1744",
        title: "First Saudi State",
        description:
          "Founded by Imam Muhammad bin Saud, establishing the first foundation of unity."
      },
      {
        year: "1824",
        title: "Second Saudi State",
        description:
          "Reinforcing the concept of statehood and stability despite challenges."
      },
      {
        year: "1932",
        title: "Unification of KSA",
        description:
          "The official unification by King Abdulaziz Al Saud."
      },
      {
        year: "2030",
        title: "Saudi Vision 2030",
        description:
          "An ambitious roadmap for the future, blending heritage with modern growth."
      }
    ],

    fr: [
      {
        year: "Pré-Islamique",
        title: "Civilisations anciennes",
        description:
          "La péninsule Arabique a abrité des civilisations comme Dilmun et les Nabatéens."
      },
      {
        year: "1744",
        title: "Premier État Saoudien",
        description: "Fondé par l’Imam Muhammad bin Saud."
      },
      {
        year: "1932",
        title: "Unification du Royaume",
        description: "Unification menée par le Roi Abdulaziz Al Saud."
      },
      {
        year: "2030",
        title: "Vision 2030",
        description: "Un avenir durable mêlant tradition et innovation."
      }
    ],

    es: [
      {
        year: "Preislámico",
        title: "Civilizaciones antiguas",
        description:
          "La península fue hogar de civilizaciones como Dilmun y los Nabateos."
      },
      {
        year: "1744",
        title: "Primer Estado Saudí",
        description: "Fundado por el Imán Muhammad bin Saud."
      },
      {
        year: "1932",
        title: "Unificación",
        description: "Unificación oficial por el Rey Abdulaziz Al Saud."
      },
      {
        year: "2030",
        title: "Visión 2030",
        description: "Hoja de ruta ambiciosa para un futuro próspero."
      }
    ],

    zh: [
      {
        year: "前伊斯兰时期",
        title: "古代文明",
        description: "阿拉伯半岛曾出现迪尔蒙和纳巴泰等古代文明。"
      },
      {
        year: "1744",
        title: "第一沙特王国",
        description: "由穆罕默德·本·沙特伊玛目建立。"
      },
      {
        year: "1932",
        title: "沙特统一",
        description: "由阿卜杜勒阿齐兹国王完成统一。"
      },
      {
        year: "2030",
        title: "2030 愿景",
        description: "融合传统与发展的国家蓝图。"
      }
    ],

    ur: [
      {
        year: "قبل اسلام",
        title: "قدیم تہذیبیں",
        description: "سعودی عرب میں ہزاروں سالوں تک قدیم تہذیبیں قائم رہیں، جیسے دلمون اور نباطیہ۔"
      },
      {
        year: "1744",
        title: "پہلا سعودی ریاست",
        description: "امام محمد بن سعود کے ذریعے پہلی سعودی ریاست کی بنیاد رکھی گئی۔"
      },
      {
        year: "1932",
        title: "سعودی عرب کا اتحاد",
        description: "بادشاہ عبدالعزیز نے مملکت کو متحد کیا۔"
      },
      {
        year: "2030",
        title: "2030 وژن",
        description: "روایات اور ترقی کو ملا کر ایک روشن مستقبل کی منصوبہ بندی۔"
      }
    ]
  };

  const currentEvents = timelineData[language] || timelineData.en;
  const isRtl = language === 'ar' || language === 'ur';

  return (
    <section
      id="timeline"
      className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-stone-900' : 'bg-stone-50'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        {currentEvents.map((event, index) => (
          <div key={index} className={`relative pb-12 last:pb-0 ${isRtl ? 'pr-8' : 'pl-8'}`}>

            {/* الخط الرأسي */}
            {index !== currentEvents.length - 1 && (
              <div className={`absolute top-8 bottom-0 w-0.5 bg-yellow-700/30 ${isRtl ? 'right-0' : 'left-0'}`} />
            )}

            {/* الدائرة الزمنية */}
            <div className={`absolute top-0 w-4 h-4 rounded-full bg-yellow-600 border-4 ${darkMode ? 'border-stone-900' : 'border-stone-50'} ${isRtl ? 'right-0' : 'left-0'}`} />

            {/* بطاقة الحدث */}
            <div className={`rounded-xl shadow-lg p-6 border transition-all ${darkMode ? 'bg-stone-800 border-stone-700 text-stone-200' : 'bg-white border-stone-200 text-stone-800'}`}>
              <span className={`inline-block mb-3 px-3 py-1 text-xs font-bold rounded-full ${darkMode ? 'bg-yellow-900/40 text-yellow-200 border-yellow-800' : 'bg-yellow-50 text-yellow-900 border-yellow-200'} border`}>
                {event.year}
              </span>
              <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
              <p className="leading-relaxed opacity-80">{event.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}