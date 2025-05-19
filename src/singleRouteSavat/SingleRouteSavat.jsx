import React from 'react';
import "./SingleRouteSavat.css";

const SingleRouteSavat = ({ routeSavat, setRouteSavat }) => {
  // Narxni son ko‘rinishiga o'tkazish (masalan: "2 300 000" => 2300000)
  const parsePrice = (price) => parseFloat(price?.replace(/\s/g, '') || 0);

  // Miqdorni oshirish
  const increaseQuantity = (id) => {
    const updatedCart = routeSavat.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setRouteSavat(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = routeSavat.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setRouteSavat(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = routeSavat.filter((item) => item.id !== id);
    setRouteSavat(updatedCart);
  };

  const totalPrice = routeSavat.reduce((acc, item) => {
    const price = parsePrice(item.price);
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="savat-page">
      <div className="left">
      <p className="name">Savat</p>
      <hr />
      {routeSavat.length === 0 ? (
        <b>Savat bo‘sh</b>
      ) : (
        <>
          {routeSavat.map((item) => {
            const itemPrice = parsePrice(item.price);
            const itemTotal = itemPrice * item.quantity;
            return (
              <div key={item.id} className="savat-item">
                <img src={item.img} alt={item.proName} />
                <div className="repo">
                  <h2>{item.proName}</h2>
                  <p>1 dona narxi: {item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p>Jami: {itemTotal.toLocaleString()} so‘m</p>
                  <button className="delete" onClick={() => removeFromCart(item.id)}>O‘chirish</button>
                  <hr />
                </div>
              </div>
            );
          })}

        </>
      )}</div>
      <div className="reight">
        
          <div className="total-sum">
            <h2>Umumiy narx: <br />{totalPrice.toLocaleString()} so‘m</h2>
            <button>Rasmiylashtirish</button>
          </div>
      </div>
    </div>
  );
};

export default SingleRouteSavat;
