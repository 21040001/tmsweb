import "../styles/contactUs/index.css";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef(null);
    const manzilRef = useRef(null);

    const [formVisible, setFormVisible] = useState(false);
    const [manzilVisible, setManzilVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === formRef.current && entry.isIntersecting) {
                        setFormVisible(true);
                    }
                    if (entry.target === manzilRef.current && entry.isIntersecting) {
                        setManzilVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (formRef.current) observer.observe(formRef.current);
        if (manzilRef.current) observer.observe(manzilRef.current);

        return () => {
            if (formRef.current) observer.unobserve(formRef.current);
            if (manzilRef.current) observer.unobserve(manzilRef.current);
        };
    }, []);

    return (
        <div className="contact">
            <form
                ref={formRef}
                className={`fade-in-section ${formVisible ? "visible" : ""}`}
            >
                <h2>Bize mesaj gönderin</h2>
                <input
                    type="text"
                    className="form-control"
                    placeholder="İsim Soyisim"
                    aria-label="İsim Soyisim"
                />
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Telefon numarası"
                            aria-label="Telefon numarası"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="E-mail"
                            aria-label="E-mail"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Şehir"
                            aria-label="Şehir"
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Şirketiniz"
                            aria-label="Şirketiniz"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <textarea
                            className="form-control"
                            placeholder="Mesajınız"
                            aria-label="Mesajınız"
                        ></textarea>
                    </div>
                </div>
                <input
                    type="submit"
                    className="btn btn-primary btn-gonder"
                    value="İletişime geç"
                />
            </form>

            <div
                ref={manzilRef}
                className={`manzil fade-in-section ${manzilVisible ? "visible" : ""}`}
            >
                <div className="contact-box">
                    <h2>İletişime Geç</h2>
                    <div className="contact-info">
                        <h3>Adres</h3>
                        <p>Etimesgut YHT Araç Bakım Atölye Müdürlüğü Ayaş Yolu Bulvarı, Etiler Mah. No:89/C</p>
                        <h3>Telefon</h3>
                        <p>+90 541 426 46 92</p>
                        <h3>Mail</h3>
                        <p>atahayurdakul@tmstechnic.com<br />ehuseyinbalin@tmstechnic.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
