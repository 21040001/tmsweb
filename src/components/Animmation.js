import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Home from "./Home"; // Home bileşenini içe aktar

const AnimatedPath = () => {
  const pathRef = useRef();
  const backgroundRef = useRef();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Path çizim animasyonu
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Animasyon bittiğinde içerik görünür olsun
        setShowContent(true);
      },
    });

    // Background opacity animasyonu
    gsap.to(backgroundRef.current, {
      opacity: 1,
      duration: 1,
      delay: 1.5,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <div className="anim" style={{ position: "relative", background: "#021b3a", width: "100vw", height: "60vh" }}>
      <div
        ref={backgroundRef}
        style={{ position: "absolute", inset: 0, background: "#000", opacity: 0, zIndex: 0 }}
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 32 24"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      >
        <path
          ref={pathRef}
          d="M29.7144,16.59,18.1494,8.64A14.9327,14.9327,0,0,0,9.6519,6H2V8H9.6519a12.9459,12.9459,0,0,1,7.3647,2.2871L18.0532,11H9v2H20.9624l7.6187,5.2378A.966.966,0,0,1,28.0342,20H2v2H28.0342a2.9661,2.9661,0,0,0,1.68-5.41Z"
          fill="none"
          stroke="#00faff"
          strokeWidth="0.5"
          style={{ filter: "drop-shadow(0 0 4px #00faff)" }}
        />
      </svg>

      {/* İçerik sadece showContent true ise görünür, opacity animasyonlu */}
      {showContent && (
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            maxWidth: "100%",
            margin: "auto",
            textAlign: "center",
            opacity: 0, // Başlangıçta görünmez
            animation: "fadeIn 1s forwards", // CSS animasyonu ile yumuşak görünme
          }}
        >
          <Home />
        </div>
      )}

      {/* CSS animasyonu */}
      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedPath;
