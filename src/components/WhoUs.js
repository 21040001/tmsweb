import { useEffect, useRef } from "react";
import "../styles/whoUs/index.css";
import misyon from "../assets/Image/misyon.png";
import vizyon from "../assets/Image/vizyon.png";
import deger from "../assets/Image/degerler.png";

const WhoUs = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("blur");
          } else {
            entry.target.classList.remove("visible");
            entry.target.classList.add("blur");
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const cards = [
    {
      title: "Misyonumuz",
      text: "Demiryolu sektöründe yerli ve milli teknolojilerin gelişimine öncülük ederek, AR-GE ve inovasyon kültürünü güçlendirmek.",
      img: misyon,
    },
    {
      title: "Vizyonumuz",
      text: "Türkiye’nin demiryolu alanındaki dışa bağımlılığını en aza indirerek, yerli üretim projelerimizi dünya pazarına taşımak ve küresel bir marka olmak.",
      img: vizyon,
    },
    {
      title: "Değerlerimiz",
      text: "Yerli Üretim, Sürdürülebilirlik, İnovasyon, Kalite ve Müşteri Odaklılık.",
      img: deger,
    },
  ];

  return (
    <div className="whoUs">
      <h1>
        Biz kimiz <i className="bi bi-question-lg"></i>
      </h1>

      <div className="scroll-container">
        {cards.map((item, index) => (
          <div
            className="cardMisyon blur"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card">
              <div className={`card-header ${item.title === "Vizyonumuz" ? "b-none" : ""}`}>
                <p className="fs-5 fw-medium">{item.title}</p>
              </div>
              <div className="card-body">
                <img src={item.img} alt={item.title} />
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoUs;
