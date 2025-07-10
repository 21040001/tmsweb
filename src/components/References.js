import "../styles/references/index.css";
import ref1 from "../assets/Image/caf.png";
import ref2 from "../assets/Image/Delphi.png";
import ref3 from "../assets/Image/izBan.png";
import ref4 from "../assets/Image/tcddt.png";
import ref5 from "../assets/Image/tcdd.png";
import { useTranslation } from "react-i18next";
const Referances = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="referances">
      <h2>{t("referanslar")}</h2>
      <div className="reference-wrapper">
        <div className="reference-track">
          {[ref1, ref2, ref3, ref4, ref5, ref1, ref2, ref3, ref4, ref5].map((ref, index) => (
            <div className="reference-item" key={index}>
              <img src={ref} alt={`Referans ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Referances;
