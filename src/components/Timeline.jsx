import { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "ما قبل قيام الدولة السعودية الأولى",
    period: "قبل 1744م",
    content:
      "حضارات قديمة مثل دلمون، الأنباط، وثمود، وممالك الجنوب. الجزيرة مركز طرق تجارة عالمية. بعد الإسلام أصبحت قلب الدولة الإسلامية ثم تراجع دورها السياسي مع بقاء الحجاز دينيًا ونجد والشرق تحت حكم محلي متفرق."
  },
  {
    title: "الدولة السعودية الأولى",
    period: "1744–1818م",
    content:
      "تأسست في الدرعية بتحالف سياسي ديني. نجحت في توحيد معظم نجد وأجزاء واسعة من الجزيرة. انتهت بعد الحملة العثمانية بقيادة محمد علي باشا."
  },
  {
    title: "الدولة السعودية الثانية",
    period: "1824–1891م",
    content:
      "قامت عاصمتها الرياض. أعادت الاستقرار والتوحيد الجزئي لنجد. انتهت بسبب الصراعات الداخلية وتدخل آل رشيد."
  },
  {
    title: "الدولة السعودية الثالثة",
    period: "1902–1932م",
    content:
      "بدأت باسترداد الرياض على يد الملك عبدالعزيز. توحيد تدريجي للجزيرة سياسيًا وعسكريًا. أُعلن قيام المملكة العربية السعودية عام 1932م."
  },
  {
    title: "الحاضر",
    period: "1932م – الآن",
    content:
      "بناء الدولة الحديثة، اكتشاف النفط، تطوير المؤسسات، تعزيز الدور الإقليمي والدولي، وتنويع الاقتصاد تدريجيًا."
  },
  {
    title: "رؤية السعودية 2030",
    period: "2016م – مستمر",
    content:
      "مشروع وطني للتحول الاقتصادي والاجتماعي. يركز على تنويع مصادر الدخل، تمكين الإنسان، تطوير السياحة والتقنية، والاستدامة، وبناء اقتصاد غير نفطي تنافسي عالميًا."
  }
];

export default function VerticalTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{css}</style>

      <div dir="rtl" className="timeline-wrapper">
        <div className="line" />

        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              ref={el => (itemsRef.current[index] = el)}
              className={`row hidden ${isLeft ? "left" : "right"}`}
            >
              <div
                className={`card ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="period">{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
              </div>

              <div
                className={`dot ${isActive ? "active-dot" : ""}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

const css = `
.timeline-wrapper {
  position: relative;
  max-width: 900px;
  margin: auto;
  padding: 60px 20px;
  font-family: system-ui, sans-serif;
}

.line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 4px;
  background: #d0d6dc;
  transform: translateX(-50%);
}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  position: relative;
}

.row.left {
  flex-direction: row-reverse;
}

.row.right {
  flex-direction: row;
}

.card {
  width: 42%;
  background: #fff;
  padding: 18px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  cursor: pointer;
  line-height: 1.8;
  transition: all 0.3s ease;
}

.card.active {
  border: 2px solid #0b5ed7;
}

.period {
  font-size: 13px;
  color: #666;
}

.dot {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #c0392b;
  border: 4px solid #fff;
  z-index: 2;
  margin: 0 40px;
  transition: transform 0.3s;
}

.active-dot {
  background: #0b5ed7;
  transform: scale(1.2);
}

/* scroll animation */
.hidden {
  opacity: 0;
  transform: translateY(40px);
}

.show {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s ease;
}

/* mobile stacked */
@media (max-width: 768px) {
  .line {
    left: 20px;
  }

  .row,
  .row.left,
  .row.right {
    flex-direction: row;
  }

  .dot {
    margin: 0 16px 0 0;
  }

  .card {
    width: 100%;
  }
}
`;