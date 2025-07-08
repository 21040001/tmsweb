import img from "../assets/Image/tms_logo.png";
import "../styles/headerStyle/index.css";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ isFixed }) => {
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
                    <li><a href="/" className="simple-underline">Ana Sayfa</a></li>
                    <li><a href="/about" className="simple-underline">Hakkımızda</a></li>
                    <li><a href="/project/ims" className="simple-underline">Projelerimiz</a></li>
                    <li><a href="/contact" className="simple-underline">İletişim</a></li>
                </ul>

                <div className="lang-wrapper" ref={langRef}>
                    <div className="lang-button">
                        <button onClick={toggleLangMenu}>Diller</button>
                    </div>
                    {showLang && (
                        <div className="languageDiv">
                            <ul>
                                <li>Türkçe</li>
                                <li>Deutsch</li>
                                <li>English</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
