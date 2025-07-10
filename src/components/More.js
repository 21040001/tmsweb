import "../styles/more/index.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"; 

const More = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);
  const { t, i18n } = useTranslation();

  const departments = [
    { key: "ar-ge", title: "TMS AR-GE", desc: t("argeText") },
    { key: "planck", title: "TMS Planck", desc: t("planckText") },
    { key: "sinyalizasyon", title: "TMS Sinyalizasyon", desc: t("sinyalizasyonText") },
    { key: "motor", title: "TMS Motor", desc: t("motorText") },
    { key: "kaucuk", title: "TMS Marc Kauçuk", desc: t("kaucukText") },
    { key: "rolling", title: "TMS Rolling Stock", desc: t("rollingText") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
          if (entry.isIntersecting && !visibleSections.includes(index)) {
            setVisibleSections((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleSections]);

  return (
    <section className="more-section">
      <div className="container">
        <h2 className="section-title">{t("departmanlar")}</h2>
        <div className="departments">
          {departments.map((dept, index) => (
            <div
              key={dept.key}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`dept-card ${dept.key} fade-in-section ${visibleSections.includes(index) ? "visible" : ""
                }`}
            >
              <h1>{dept.title}</h1>
              <p>{dept.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;
