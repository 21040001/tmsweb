import img from "../assets/Image/Kiosk.png"
import "../assets/Image/Kiosk.png"
import Header from "../components/Header";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const TmsPortal = () => {

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
                <li><a href="/project/portal">Tms Portal</a></li>
                <li><a href="/project/testBench">Tms Bench</a></li>
                <li><a href="/project/qr">Tms Qr</a></li>
                <li><a href="/project/lokomotif">Lokomotif</a></li>
            </ul>
            <div ref={projeRef} className={`onboard fade-in-section ${projeVisible ? "visible" : ""}`}>
                <img src={img} alt="OnBoard" />
                <div>
                    <h1>KIOSK (TMS PORTAL)</h1>
                    <p> KIOSK portalı üzerinden kullanıcılara
                        aşağıdaki hizmetler sunulmaktadır:</p>
                    <ul>
                        <li>Trene ait verilerin uzaktan erişim ile anlık
                            olarak izlenmesini sağlamak,</li>
                        <li>Profiller,</li>
                        <li>Servis kartları,</li>
                        <li>Tren kartları,</li>
                        <li>Bakım formları,</li>
                        <li>Bakım kılavuzları</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TmsPortal;