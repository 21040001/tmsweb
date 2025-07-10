import "../styles/whoUs/index.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
const WhoUs = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [isMissionVisible, setMissionVisible] = useState(false);
  const [isVisionVisible, setVisionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === missionRef.current) {
            setMissionVisible(entry.isIntersecting);
          }
          if (entry.target === visionRef.current) {
            setVisionVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);


  return (
    <div className="whoUs">
      <div
        ref={missionRef}
        className={`misyon fade-in-section ${isMissionVisible ? "visible" : ""}`}
      >
        <h1>{t("misyonTitle")}</h1>
        <p>{t("misyon")}</p>
      </div>

      <div
        ref={visionRef}
        className={`vizyon fade-in-section ${isVisionVisible ? "visible" : ""}`}
      >
        <h1>{t("vizyonTitle")}</h1>
        <p>{t("vizyon")}</p>
      </div>
    </div>
  );
};

export default WhoUs;
