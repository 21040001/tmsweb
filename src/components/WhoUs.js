import "../styles/whoUs/index.css";
import { useTranslation } from "react-i18next";

const WhoUs = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="whoUs">
      <div className="about">
        <h1>{t("misyonTitle")}</h1>
        <div className="mission">
          <div className="iconDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="bi bi-binoculars-fill icon" viewBox="0 0 16 16">
              <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5z" />
            </svg>
          </div>
          <div>
            <h3>{t("misyonTitle")}</h3>
            <p style={{ fontSize: "18px" }}>{t("misyon")}</p>
          </div>
        </div>
        <div className="vision">
          <div className="iconDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" className="bi bi-lightbulb-fill icon" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
            </svg>
          </div>
          <div>
            <h3>{t("vizyonTitle")}</h3>
            <p style={{ fontSize: "18px" }}>{t("vizyon")}</p>
          </div>
        </div>
        <div className="value">
          <div className="iconDiv">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="bi bi-plus-circle-fill icon" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </div>
          <div>
            <h3>{t("degerTitle")}</h3>
            <p style={{ fontSize: "18px" }}>{t("deger")}</p>
          </div>
        </div>
      </div>
      <div className="images">
        <div>
          <div className="diamond-box first" />
          <div className="diamond-box second" />
          <div className="diamond-box third" />
        </div>
        <div className="row2" />
      </div>
    </div>
  );
};

export default WhoUs;
