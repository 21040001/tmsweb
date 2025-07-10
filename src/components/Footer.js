import "../styles/footer/index.css";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container mt-5 pt-5 border-top ml-auto mr-auto">
      <div className="row mb-5 justify-content-center gx-4">
        
        <div className="col-md-3">
          <h3>{t("siteHaritasi")}</h3>
          <ul className="list-unstyled">
            <li className="footer-item ">{t("hakkimizde")}</li>
            <li className="footer-item">{t("projelerimiz")}</li>
            <li className="footer-item">{t("iletisim")}</li>
          </ul>
        </div>

        <div className="col-md-3">
          <h3>{t("departmanlar")}</h3>
          <ul className="list-unstyled">
            <li className="footer-item">TMS Planck</li>
            <li className="footer-item">TMS Ar-Ge</li>
            <li className="footer-item">TMS Sinyalizasyon</li>
            <li className="footer-item">TMS Motor</li>
            <li className="footer-item">TMS Rolling Stock</li>
            <li className="footer-item">TMS Marc Kauçuk</li>
          </ul>
        </div>

        <div className="col-md-3">
          <h3>Contact Us</h3>
          <ul className="list-unstyled">
            <li className="footer-item">
              <i className="bi bi-telephone-fill me-2"></i>+90 541 426 46 92
            </li>
            <li className="footer-item">
              <i className="bi bi-envelope-at-fill me-2"></i>ehuseyinbalin@tmstechnic.com
            </li>
            <li className="footer-item">
              <i className="bi bi-geo-alt-fill me-2"></i>Ankara, Türkiye
            </li>
          </ul>
        </div>
      </div>

      <div className="row text-center border-top pt-3">
        <div className="col-md-3 text-start col-12">
          <p>Terms of Service | Privacy policy</p>
        </div>
        <div className="col-md-4 col-12">
          <div className="social-icons">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook ms-3"></i>
            <i className="bi bi-linkedin ms-3"></i>
            <i className="bi bi-whatsapp ms-3"></i>
          </div>
        </div>
        <div className="col-md-4 text-end col-12">
          <p>&copy; 2025 TMS Ar-Ge</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
