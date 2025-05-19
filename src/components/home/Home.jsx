import './Home.css';
import { homeData } from '../../mock/homeData';
import { FaCartShopping } from 'react-icons/fa6';
import Slider from '../slider/Slider';
import { Link } from 'react-router-dom';
import Brends from '../brend/Brends';
import { GiGlassHeart } from 'react-icons/gi';
import { toast } from 'react-toastify';

const Home = ({ routeSavat, setRouteSavat, likedItems, setLikedItems }) => {
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
    <div >
      <Slider />
      {homeData.map((item, index) => (
  <div key={index} className="cart">
    <h1>{item.title}</h1>
    <div className="blok">
        {item.products?.map((product, productIndex) => (
          <div className="box" key={productIndex}>
            <div className="image">
              <Link to={`/SingleRoute/${product.id}`}>
                <img src={product.img} alt={product.proName} />
              </Link>
              <div className="discount">{product.discount}</div>
              <div
                className="heart"
                onClick={() => toggleLike(product)}
                style={{ cursor: 'pointer' }}
              >
                <GiGlassHeart
                  color={isItemLiked(product.id) ? 'red' : 'gray'}
                  size={24}
                />
              </div>
            </div>
            <h2>{(product.proName || '').slice(0, 45) + '...'}</h2>
            <div className="krid">
              <p>
                dan {Math.floor(parseFloat(product.price?.replace(/\s/g, '') || 0) / 12).toLocaleString()} so'm / oyiga
              </p>
            </div>
            <s>{product.oldprice}</s>
            <h3>{product.price}</h3>
            <button className="savat" onClick={() => savatga_qosh(product)}>
              <FaCartShopping /> Savatga
            </button>
          </div>
        ))}
    </div>
  </div>
))}



      <Link to="/savat">Savatga o'tish</Link>
      <Brends />
    </div>
  );
};

export default Home;