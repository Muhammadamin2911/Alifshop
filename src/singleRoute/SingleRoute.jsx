import { useParams } from 'react-router-dom';
import { homeData } from '../mock/homeData';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCartShopping } from 'react-icons/fa6';
import { GiGlassHeart } from 'react-icons/gi';
import './SingleRoute.css';
import Brends from '../components/brend/Brends';
import { toast } from 'react-toastify';

const SingleRoute = ({ routeSavat, setRouteSavat, likedItems, setLikedItems }) => {
  const { id } = useParams();

  const product = homeData
    .flatMap(category => category.products)
    .find(product => product.id === id);

  // Agar mahsulot topilmasa, xabar ko‘rsatish
  if (!product) {
    return <div>Mahsulot topilmadi.</div>;
  }

  const savatga_qosh = (childItem) => {
    if (!routeSavat.some((item) => item.id === childItem.id)) {
      setRouteSavat([...routeSavat, { ...childItem, quantity: 1 }]);
      toast.success(`Tanlovingiz savatga qo'shildi!`);
    } else {
      toast.info(`Allaqachon savatda bor!`);
    }
  };

  const toggleLike = (item) => {
    const isLiked = likedItems.some((liked) => liked.id === item.id);
    if (isLiked) {
      setLikedItems(likedItems.filter((liked) => liked.id !== item.id));
    } else {
      setLikedItems([...likedItems, item]);
    }
  };

  const isItemLiked = (id) => likedItems.some((item) => item.id === id);

  return (
    <div className="singlerout">
      <div className="single-route">
        <div className="left">
          {product.thumbnail.map((item, index) => (
            <div className='left-img' key={index}>
              <img src={item} alt="thumbnail" />
            </div>
          ))}
        </div>
        <div className="image">
          <img src={product.img} alt={product.proName} />
        </div>
        <div className="reight">
          {product.discount && <div className="chegirma">{product.discount}</div>}

          <h1>{product.proName}</h1>
          <div className="price">
            <div className="discoun">
              <p>Muddatli tolovga sotib olish</p>
              <b>
                <span>
                  {Math.floor(parseFloat(product.price.replace(/\s/g, '')) / 12)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                </span>{' '}
                so'm \ oyiga
              </b>
            </div>
            <div className="narx">
              <b>Narx</b>
              <p>{product.price}</p>
              <s>{product.oldprice}</s>
            </div>
          </div>

          <div className="limit">
            <p>Limitingizni bilib oling</p>
            <b>
              alif nasiya <FaExternalLinkAlt />
            </b>
          </div>

          <div className="btn">
            <button className="savat" onClick={() => savatga_qosh(product)}>
              <FaCartShopping /> Savatga
            </button>
            <div className="heart" onClick={() => toggleLike(product)} style={{ cursor: 'pointer' }}>
              <GiGlassHeart color={isItemLiked(product.id) ? 'red' : 'gray'} size={24} />
            </div>
          </div>
        </div>
      </div>
      <Brends />
    </div>
  );
};

export default SingleRoute;