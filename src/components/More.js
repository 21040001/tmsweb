import "../styles/more/index.css";
import arge from '../assets/Image/arge.png';
import planck from '../assets/Image/Planck.png';
import motor from '../assets/Image/motor.png';
import mars from '../assets/Image/mars.png';
import rolling from '../assets/Image/rolling.png';
import sinya from '../assets/Image/sinya.png';

const departments = [
  { title: "AR-GE", desc: "Yenilikçi mühendislik çözümleri.", img: arge },
  { title: "Planck", desc: "Hassas ölçüm ve test sistemleri.", img: planck },
  { title: "Sinyalizasyon", desc: "Akıllı trafik çözümleri.", img: sinya },
  { title: "Motor", desc: "Verimli motor sistemleri.", img: motor },
  { title: "Marc Kauçuk", desc: "Kauçuk teknolojileri.", img: mars },
  { title: "Rolling Stock", desc: "Raylı sistem araçları.", img: rolling },
];

const More = () => {
  return (
    <section className="more-section">
      <div className="container">
        <h2 className="section-title">Departmanlarımız</h2>
        <div className="grid">
          {departments.map((item, index) => (
            <div key={index} className="card">
              <img src={item.img} alt={item.title} className="card-img" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;
