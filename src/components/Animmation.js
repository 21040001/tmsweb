// src/components/AnimatedVideoPath.jsx
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Home from "./Home";
import videoSource from "../assets/Video/tren.mp4";
import "../styles/animation/index.css"
const AnimatedVideoPath = () => {
  return (
    <div className="video-anim-container">
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src={videoSource} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

        <div className="video-home-content">
          <Home />
        </div>
    </div>
  );
};

export default AnimatedVideoPath;
