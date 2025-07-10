import "../styles/about/index.css";
import img from "../assets/Image/Hakkimizda.jpg"; // Hakkımızda sayfasında kullanılacak görsel
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t, i18n } = useTranslation();

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
                {t("hakimizdeText1")}
            </p>
            <p ref={aboutRef} className={`text-dark fade-in-section ${aboutVisible ? "visible" : ""}`}>
                {t("hakimizdeText2")}
            </p>
        </div>
    );
}

export default About;