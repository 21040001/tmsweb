import React from 'react';
import Header from '../components/Header';
import img from '../assets/Image/Ims.png';
import "../styles/projectsStyles/Onboard.css"
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Ims = () => {

  const projeRef = useRef(null);
  const [projeVisible, setProjeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projeRef.current && entry.isIntersecting) {
            setProjeVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projeRef.current) observer.observe(projeRef.current);

    return () => {
      if (projeRef.current) observer.unobserve(projeRef.current);
    };
  }, []);

  return (
    <div>
      <Header isFixed={"fixed"} />
      {/*<h5 className='h5-proje'>Projelerimiz:</h5>*/}
      <ul className='list-project'>
        <li><a href="/project/ims">IMS</a></li>
        <li><a href="/project/portal">TMS Portal</a></li>
        <li><a href="/project/testBench">TMS Bench</a></li>
        <li><a href="/project/qr">TMS Qr</a></li>
        <li><a href="/project/lokomotif">Lokomotif</a></li>
      </ul>
      <div ref={projeRef} className={`onboard fade-in-section ${projeVisible ? "visible" : ""}`}>
        <img src={img} alt="OnBoard" />
        <div>
          <h1> IMS – Interactive Mobile System</h1>

          <p> Tren setlerine yerleştirilen sensör ve
            haberleşme cihazları sayesinde:</p>

          <ul>
            <li>Üç eksende ivme,</li>
            <li>Sıcaklık</li>
            <li> Anlık konum verileri toplanır.</li>
          </ul>

          <p>Titreşim verilerini analiz eden derin
            öğrenme modeli, trenin yol ve ekipman
            durumunu sürekli izler.</p>
          <p>Model, sistemin normal davranışını
            öğrenerek olası anormallikleri erken tespit
            eder.</p>
        </div>
      </div>
    </div>
  );
}

export default Ims;