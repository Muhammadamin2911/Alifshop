import { Link } from 'react-router-dom'
import "./Footer2.css"
import insta from "../../assets/insta.jpg"
import face from "../../assets/Facebook.jpg"
import tele from "../../assets/telegram.jpg"
import tiktok from "../../assets/tik tok.jpg"
import odno from "../../assets/odnoklas.jpg"

const Footer2 = () => {
  return (
    <div className='footer2'>
      <div className="header_top">
        <div className="box">
          <p>Kujjatlar</p>
          <Link to={""}>Sotish uchun umumiy shartlar</Link>
          <Link to={""}>Nizom</Link>
          <Link to={""}>Guvohnoma</Link>
        </div>
        <div className="box">
          <p>Servis</p>
          <Link to={""}>Namoz vaqti</Link>
          <Link to={""}>Muddatli tolov islomda</Link>
          <Link to={""}>alif shopda soting</Link>
          <Link to={""}>Qaytarish</Link>

        </div>
        <div className="box">
          <p>Tovarlar katalogi</p>
          <Link to={""}>Smartfonlar va telefonlar</Link>
          <Link to={""}>Gadjetlar</Link>
          <Link to={""}>Smartfonlar uchun aksessuarlar</Link>
          <Link to={""}>Soat va aksessuarlar</Link>
          <Link to={""}>Tegishli tovarlar</Link>
        </div>
        <div className="box">
          <p>Biz ijtimoiy axborot vositalarida</p>
          <div className="icon">
            <img src={insta} alt="" />
            <img src={face} alt="" />
            <img src={tele} alt="" />
            <img src={odno} alt="" />
            <img src={tiktok} alt="" />
          </div>
          <p className='phon'>Axborot xizmati</p>
          <Link to={""}>@alifshop_uz
          </Link>
          <Link to={""}>+998 20 000 12 10</Link>
        </div>
      </div>
      <hr />
      <p>2025 © alifshop.uz</p>
    </div>
  )
}

export default Footer2