import "../styles/about/index.css";
import img from "../assets/Image/Hakkimizda.jpg"; // Hakkımızda sayfasında kullanılacak görsel

const About = () => {
    return (
        <div className="about-page">
            <img src={img} alt="hakimizde" />
            <p className="text-dark">
                TMS Web, Türkiye'nin en kapsamlı taşımacılık yönetim sistemi web uygulamasıdır. 
                Amacımız, taşımacılık sektöründeki tüm süreçleri dijitalleştirerek, işletmelerin verimliliğini artırmak ve maliyetlerini düşürmektir.
            </p>
            <p className="text-dark">
                Uygulamamız, kullanıcı dostu arayüzü ve güçlü özellikleri ile sektördeki lider konumunu sürdürmektedir. 
                Taşımacılık süreçlerinizi kolayca yönetin, raporlar oluşturun ve iş akışlarınızı optimize edin.
            </p>
        </div>
    );
}

export default About;