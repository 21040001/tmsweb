import img from "../assets/Image/tms_logo.png";
import "../styles/headerStyle/index.css";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = ({ isFixed }) => {

    const { t, i18n } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);
    const [showLang, setShowLang] = useState(false);
    const langRef = useRef(null);

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
        <div className={`Header ${isFixed ? "fixed" : ""}`}>
            <a href="/"><img src={img} alt="TMS logo" /></a>

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
    );
};

export default Header;
