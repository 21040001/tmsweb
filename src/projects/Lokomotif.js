import React from 'react';
import Header from '../components/Header';
import img from '../assets/Image/onboard.png';
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const Lokomotif = () => {
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
        <div className='projectDiv'>
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
                    <h1>ERTMS Lokomotif Bakım Portalı</h1>
                    <p> DE22000 serisi lokomotifler için geliştirilen portal,</p>
                    <p>ERTMS bakım parametrelerine uzaktan
                        erişim ve güncelleme imkânı sunarken,
                        yaklaşan bakımlar için bildirimli hatırlatma
                        işleviyle yenilikçi ve geliştirilebilir bir bakım
                        takibi sağlar.</p>
                </div>
            </div>
        </div>
    );
}

export default Lokomotif;