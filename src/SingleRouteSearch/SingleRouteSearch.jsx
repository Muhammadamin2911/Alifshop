import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { homeData } from '../mock/homeData';

const SingleRouteSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  // URL query parametrlardan search qiymatini olish
  const query = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const results = [];
    homeData.forEach(category => {
      category.carts.forEach(cart => {
        cart.products.forEach(product => {
          if (product.proName.toLowerCase().includes(query.toLowerCase())) {
            results.push({
              id: product.id,
              proName: product.proName,
              categoryTitle: category.title || 'Noma\'lum kategoriya',
              cartNamed: cart.named || 'Noma\'lum kart',
              price: product.price || 'Narx mavjud emas',
              oldPrice: product.oldprice || null,
              img: product.img || 'https://via.placeholder.com/150',
              discount: product.discount || null,
            });
          }
        });
      });
    });
    setSearchResults(results);
  }, [query]);

  return (
    <div>
      <h1>Qidiruv natijalari: "{query}"</h1>
      {searchResults.length === 0 && <p>Hech narsa topilmadi</p>}
      <ul>
        {searchResults.map(item => (
          <li key={item.id}>
            <img src={item.img} alt={item.proName} width={100} />
            <h3>{item.proName}</h3>
            <p>{item.categoryTitle} &gt; {item.cartNamed}</p>
            <p>Narxi: {item.price}</p>
            {item.discount && <p>Chegirma: {item.discount}%</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleRouteSearch;
