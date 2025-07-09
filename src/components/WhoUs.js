import "../styles/whoUs/index.css";
import { useEffect, useRef, useState } from "react";

const WhoUs = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

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
        <h1>Misyonumuz</h1>
        <p>Demiryolu sektöründe yerli teknolojiler ile AR-GE kültürünü güçlendirmek.</p>
      </div>

      <div
        ref={visionRef}
        className={`vizyon fade-in-section ${isVisionVisible ? "visible" : ""}`}
      >
        <h1>Vizyonumuz</h1>
        <p>Türkiye'nin demiryolunda dışa bağımlılığını azaltarak yerli projeleri dünyaya pazarlayan bir şirket olmak.</p>
      </div>
    </div>
  );
};

export default WhoUs;
