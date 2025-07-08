import React from 'react';
import Header from '../components/Header';
import img from '../assets/Image/back4.jpeg';
import "../styles/projectsStyles/Onboard.css";
const TestBench = () => {
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
            <div className="onboard">
                <img src={img} alt="OnBoard" className='textBanchImg' />
                <div>
                    <h1>Sensor Test Bench</h1>

                    <p>Portatif ve modüler test tezgahı, demiryolu
                        sektöründe kullanılan hız, takometre ve
                        ivme sensörlerinin otomatik test ve
                        raporlamasını tek tuşla
                        gerçekleştirmektedir.</p>
                </div>
            </div>
        </div>
    );
}

export default TestBench;