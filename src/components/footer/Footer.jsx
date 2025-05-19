import phone from "../../assets/alifshop-app-uz.png"
import playm from "../../assets/playmarket.jpg"
import apps from "../../assets/appstore.jpg"
import appg from "../../assets/appgallery.jpg"
import qrcode from "../../assets/qrcode.jpg"
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer'>
      <img src={phone} alt="" className='phone'/>
      <div className="text">
        <h1>Ajoyib takliflar har doim yoningizda</h1>
        <p>alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida hammadan tez biling</p>
        <div className="app">
          <img src={playm} alt="" /><img src={apps} alt="" /><img src={appg} alt="" />
        </div>
      </div>
      <div className="qrcode">
        <img src={qrcode} alt="" />
        <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
      </div>
    </div>
  )
}

export default Footer
