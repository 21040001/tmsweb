import { useEffect } from "react";
import "../styles/news/index.css";
import img from "../assets/Image/back.jpg";
import img1 from "../assets/Image/back3.jpg";
import img2 from "../assets/Image/back1.jpg";
import img3 from "../assets/Image/back2.png";
import img4 from "../assets/Image/back4.jpeg";
import img5 from "../assets/Image/back5.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const slides = [
  { image: img, title: "Gündem 1", description: "Bugünkü en önemli haber." },
  { image: img2, title: "Gündem 2", description: "İkinci haber içeriği burada." },
  { image: img1, title: "Gündem 3", description: "Görsel detaylı üçüncü haber." },
  { image: img3, title: "Gündem 4", description: "Dördüncü önemli gelişme." },
  { image: img4, title: "Gündem 5", description: "Beşinci haber özeti." },
  { image: img5, title: "Gündem 6", description: "Son dakika gelişmesi!" },
];

const News = () => {
  useEffect(() => {
    const carouselElement = document.querySelector('#carouselExampleCaptions');
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        interval: 3000,
        touch: true,
        ride: "carousel"
      });
    }
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-title">Haberlar</h1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={slide.image} className="img" alt={`Slide ${index + 1}`} />
              <div className="text-bg-dark opacity-75 w-50 m-auto carousel-caption d-none d-md-block">
                <h5 style={{color:"white"}}>{slide.title}</h5>
                <p style={{color:"white"}}>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default News;
