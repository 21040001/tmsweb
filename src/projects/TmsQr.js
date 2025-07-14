
import Header from "../components/Header";
import img from "../assets/Image/qr.png"
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const TmsQr = () => {

    const projeRef = useRef(null);
    const [projeVisible, setProjeVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === projeRef.current && entry.isIntersecting) {
                        setProjeVisible(true);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (projeRef.current) observer.observe(projeRef.current);

        return () => {
            if (projeRef.current) observer.unobserve(projeRef.current);
        };
    }, []);


    return (
        <div>
            <Header isFixed={"fixed"} />
            <ul className='list-project'>
                <li><a href="/project/ims">IMS</a></li>
                <li><a href="/project/portal">TMS Portal</a></li>
                <li><a href="/project/testBench">TMS Bench</a></li>
                <li><a href="/project/qr">TMS Qr</a></li>
                <li><a href="/project/lokomotif">Lokomotif</a></li>
            </ul>
            <div ref={projeRef} className={`onboard fade-in-section ${projeVisible ? "visible" : ""}`}>
                <img src={img} alt="OnBoard" />
                <div>
                    <h1>Ekipman Takip Uygulaması (TMS QR)</h1>
                    <p>  Hayata geçen TMS QR ile:</p>
                    <ul>
                        <li>Ekipman kalibrasyon tarihleri ve kalan
                            gün bilgisi,</li>
                        <li>Ekipmanlara ait kalibrasyon sertifikaları,</li>
                        <li>İş makinaları operatör listeleri,</li>
                        <li>Kimyasal madde stok ve son kullanma
                            tarihi takibi,</li>
                        <li>Kimyasal madde MSDS bilgilerini ve pek
                            çok bilgiyi görüntüleyebiliyor ve bu
                            bilgileri QR kodu değiştirmeden
                            güncelleyebiliyoruz.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TmsQr;