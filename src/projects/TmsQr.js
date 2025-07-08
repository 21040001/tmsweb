
import Header from "../components/Header";
import img from "../assets/Image/qr.png"
const TmsQr = () => {
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