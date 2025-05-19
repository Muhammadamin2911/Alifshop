import React, { useEffect } from 'react';
import { GiGlassHeart } from 'react-icons/gi';
import "./SingleRouteLike.css";
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const SingleRouteLike = ({ routeSavat, setRouteSavat, likedItems, setLikedItems }) => {

 useEffect(() => {
  const savedLiked = localStorage.getItem('likedItems');
  if (savedLiked) {
    try {
      setLikedItems(JSON.parse(savedLiked));
    } catch (e) {
      console.error('Liked itemsni localStorage dan o‘qishda xatolik:', e);
      
      localStorage.removeItem('likedItems');
    }
  }

  const savedCart = localStorage.getItem('routeSavat');
  if (savedCart) {
    try {
      setRouteSavat(JSON.parse(savedCart));
    } catch (e) {
      console.error('Route savatni localStorage dan o‘qishda xatolik:', e);
      localStorage.removeItem('routeSavat');
    }
  }
}, [setLikedItems, setRouteSavat]);


  // likedItems o'zgarganda localStorage ga saqlash
  useEffect(() => {
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  }, [likedItems]);

  // routeSavat o'zgarganda localStorage ga saqlash
  useEffect(() => {
    localStorage.setItem('routeSavat', JSON.stringify(routeSavat));
  }, [routeSavat]);

  const savatga_qosh = (childItem) => {
    const isAlreadyInCart = routeSavat.some((item) => item.id === childItem.id);

    if (!isAlreadyInCart) {
      setRouteSavat([...routeSavat, { ...childItem, quantity: 1 }]);
      toast.success(`Tanlovingiz savatga qo'shildi!`);

      const updatedLikedItems = likedItems.filter((item) => item.id !== childItem.id);
      setLikedItems(updatedLikedItems);
    } else {
      toast.info(`Allaqachon savatda bor!`);
    }
  };

  const toggleLike = (item) => {
    const isAlreadyLiked = likedItems.some((liked) => liked.id === item.id);
    if (isAlreadyLiked) {
      const updated = likedItems.filter((liked) => liked.id !== item.id);
      setLikedItems(updated);
    }
  };

  return (
    <div className="like-page">
      <h1 className="name">Saralanganlar</h1>
      <hr />
      <div className="product">
        {likedItems.length === 0 ? (
          <b>Hali hech narsa saralanmagan</b>
        ) : (
          likedItems.map((item) => (
            <div key={item.id} className="like-item" >
              <img src={item.img} alt={item.proName} width="200" />
              <div
                className="heart"
                onClick={() => toggleLike(item)}
                style={{ cursor: 'pointer', color: 'red', fontSize: '24px' }}
              >
                <GiGlassHeart />
              </div>
              <div className="discount">{item.discount}</div>
              <div>
                <h2>{item.proName.slice(0, 45) + '...'}</h2>
                <div className="krid">
                  <p>
                    dan {Math.floor(parseFloat(item.price?.replace(/\s/g, '') || 0) / 12).toLocaleString()} so'm \ oyiga
                  </p>
                </div>
                <s>{item.oldprice}</s>
                <p>{item.price}</p>
                <button className="savat" onClick={() => savatga_qosh(item)}>
                  <FaCartShopping /> Savatga
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SingleRouteLike;
