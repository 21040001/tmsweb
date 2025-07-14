import "../styles/home/index.css";
import img from "../assets/Image/tms_logo.png";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLang, setShowLang] = useState(false);
    const langRef = useRef(null);

    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleLangMenu = () => {
        setShowLang(!showLang);
    };

    // Dışarı tıklanınca kapat
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setShowLang(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="home">
            <div className="header">
                <img src={img} alt="TMS logo" />

                <button className="menu-toggle" onClick={toggleMenu}>
                    <FaBars />
                </button>

                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li><a href="/" className="simple-underline">{t("anasayfa")}</a></li>
                        <li><a href="/about" className="simple-underline">{t("hakkimizde")}</a></li>
                        <li><a href="/project/ims" className="simple-underline">{t("projelerimiz")}</a></li>
                        <li><a href="/contact" className="simple-underline">{t("iletisim")}</a></li>
                    </ul>
                    <div className="lang-wrapper" ref={langRef}>
                        <div className="lang-button">
                            <button onClick={toggleLangMenu}>{t("diller")}</button>
                        </div>
                        {showLang && (
                            <div className="languageDiv">
                                <ul>
                                    <li onClick={() => i18n.changeLanguage("tr")}>Türkçe</li>
                                    <li onClick={() => i18n.changeLanguage("en")}>English</li>
                                    <li onClick={() => i18n.changeLanguage("de")}>Deutsch</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="about">
                <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>TMS AR-GE</h1>
                <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
                    {t("tms") || "Yenilikçi, Modern ve Yaratıcı Teknoloji Çözümleri"}
                </p>

                <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
                    <a
                        href="/about"
                        style={{
                            padding: "12px 30px",
                            backgroundColor: "#0e77b3",
                            borderRadius: "8px",
                            color: "#ffffffff",
                            fontWeight: "bold",
                            textDecoration: "none",
                            boxShadow: "0 0 8px #0e77b3",
                            transition: "transform 0.3s",
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    >
                        {t("hakkimizde")}
                    </a>
                    <a
                        href="/project/ims"
                        style={{
                            padding: "12px 30px",
                            border: "2px solid #ffffffff",
                            borderRadius: "8px",
                            color: "#fff",
                            fontWeight: "bold",
                            textDecoration: "none",
                            transition: "transform 0.3s",
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    >
                        {t("projelerimiz")}
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Home;
