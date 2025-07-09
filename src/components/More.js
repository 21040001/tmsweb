import "../styles/more/index.css";
import { useEffect, useRef, useState } from "react";

const departments = [
  { key: "ar-ge", title: "AR-GE", desc: "Yenilikçi mühendislik çözümleri." },
  { key: "planck", title: "Planck", desc: "Hassas ölçüm ve test sistemleri." },
  { key: "sinyalizasyon", title: "Sinyalizasyon", desc: "Akıllı trafik çözümleri." },
  { key: "motor", title: "Motor", desc: "Verimli motor sistemleri." },
  { key: "kaucuk", title: "Marc Kauçuk", desc: "Kauçuk teknolojileri." },
  { key: "rolling", title: "Rolling Stock", desc: "Raylı sistem araçları." },
];

const More = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

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
        <h2 className="section-title">Departmanlarımız</h2>
        <div className="departments">
          {departments.map((dept, index) => (
            <div
              key={dept.key}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`dept-card ${dept.key} fade-in-section ${
                visibleSections.includes(index) ? "visible" : ""
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
