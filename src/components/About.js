import "../styles/about/index.css";
import img from "../assets/Image/Hakkimizda.jpg"; // Hakkımızda sayfasında kullanılacak görsel
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const About = () => {

    const aboutRef = useRef(null);
    const [aboutVisible, setAboutVisible] = useState(false);

    useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.target === aboutRef.current && entry.isIntersecting) {
                            setAboutVisible(true);
                        }
                    });
                },
                { threshold: 0.2 }
            );
    
            if (aboutRef.current) observer.observe(aboutRef.current);
    
            return () => {
                if (aboutRef.current) observer.unobserve(aboutRef.current);
            };
        }, []);
    return (
        <div className="about-page">
            <img src={img} alt="hakimizde" />
            <p ref={aboutRef} className={`text-dark fade-in-section ${aboutVisible ? "visible" : ""}`}>
                TMS , Türkiye'nin en kapsamlı taşımacılık yönetim sistemi web uygulamasıdır.
                Amacımız, taşımacılık sektöründeki tüm süreçleri dijitalleştirerek, işletmelerin verimliliğini artırmak ve maliyetlerini düşürmektir.
            </p>
            <p ref={aboutRef} className={`text-dark fade-in-section ${aboutVisible ? "visible" : ""}`}>
                Uygulamalarımız, kullanıcı dostu arayüzü ve güçlü özellikleri ile sektördeki lider konumunu sürdürmektedir.
                Bizim ile, Taşımacılık süreçlerinizi kolayca yönetin, raporlar oluşturun ve iş akışlarınızı optimize edin.
            </p>
        </div>
    );
}

export default About;