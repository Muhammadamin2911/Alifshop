import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/photo_2025-04-28_17-32-38.jpg";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { IoLanguage, IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { BsCart3 } from "react-icons/bs";
import { useState } from 'react';
import { catalogData } from '../../mock/allData';

const Header = ({ likedItems , routeSavat }) => {
  const [close, setClose] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!search.trim()) {
      setSearchResult([]);
      return;
    }

    const results = [];
    catalogData.forEach((category) => {
      category.carts.forEach((cart) => {
        cart.products.forEach((product) => {
          if (product.proName.toLowerCase().includes(search.toLowerCase())) {
            results.push({
              id: product.id,
              proName: product.proName,
              categoryTitle: category.title || "Noma'lum kategoriya",
              cartNamed: cart.named || "Noma'lum kart",
            });
          }
        });
      });
    });
    setSearchResult([]);
    navigate(`/singleRouteSearch?query=${encodeURIComponent(search)}`);
  };

  const onSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      setSearchResult([]);
      return;
    }

    const results = [];
    catalogData.forEach((category) => {
      category.carts.forEach((cart) => {
        cart.products.forEach((product) => {
          if (product.proName.toLowerCase().includes(value.toLowerCase())) {
            results.push({
              id: product.id,
              proName: product.proName,
              categoryTitle: category.title || "Noma'lum kategoriya",
              cartNamed: cart.named || "Noma'lum kart",
            });
          }
        });
      });
    });
    setSearchResult(results);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className='header flex items-center justify-between mt-[20px]'>
      <Link to="/">
        <img src={logo} alt="" className='logo w-[180px]' />
      </Link>

      <div
        className="katalog w-[170px] h-[40px] flex items-center gap-[15px] bg-amber-400 justify-center rounded-xl cursor-pointer"
        onClick={() => setClose(!close)}
      >
        <FaBars /> <p>Tovarlar katalogi</p>
      </div>

      <div className={`katalog_data ${close ? 'closed' : 'open'}`}>
        <div className="katalog_name flex flex-col gap-[10px] mt-[20px] mb-[40px]">
          {catalogData.map((item, index) => (
            <div key={index} className="kkk flex">
              <div className="katalog_left">
                <h3 onMouseEnter={() => setHoveredIndex(index)}>
                  {item.title}
                </h3>
              </div>
              <div className="katalog_cart">
                {hoveredIndex === index && (
                  item.carts.map((childItem, childIndex) => (
                    <div key={childIndex} className="cart ml-[120px]">
                      <h1>{childItem.named}</h1>
                      {childItem.products.map((proItem, proIndex) => (
                        <div key={proIndex} className='produc'>
                          <h2 className='produc-title'>{proItem.proName}</h2>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="search border-[2px] border-amber-400 w-[350px] h-[40px] flex items-center rounded-xl justify-between relative">
        <input
          type="search"
          placeholder="Tovarlarni izlash"
          value={search}
          onChange={onSearchChange}
          onKeyDown={handleKeyPress}
          className='outline-0 w-[300px] indent-[15px]'
        />
        <div
          className="icon w-[50px] h-[40px] flex items-center bg-amber-400 rounded-r-xl justify-center cursor-pointer"
          onClick={handleSearch}
        >
          <IoSearch />
        </div>

        {searchResult.length > 0 && (
          <div
            className="searchResult absolute top-[50px] left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10"
            style={{ display: searchResult.length ? 'block' : 'none' }}
          >
            {searchResult.map((item, index) => (
              <Link
                key={index}
                to={`/SingleRouteSearch?query=${encodeURIComponent(item.proName)}`}
                className="block p-2 hover:bg-gray-100"
                onClick={() => {
                  setSearchResult([]);
                  setSearch(item.proName);
                }}
              >
                <div>
                  <p className="font-bold">{item.proName}</p>
                  <p className="text-sm text-gray-500">
                    {item.categoryTitle && item.cartNamed
                      ? `${item.categoryTitle} > ${item.cartNamed}`
                      : 'Kategoriya mavjud emas'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link to="/savat">
        <div className="savat flex flex-col items-center">
          <BsCart3 className='text-2xl' /> <div className='counter'>{routeSavat.length}</div> <p>Savat</p>
        </div>
      </Link>

      <Link to="/saralanganlar">
        <div className="saralanganlar flex flex-col items-center">
          <FaRegHeart className="text-2xl" /> <div className='counter'>{likedItems.length}</div>
          <p>Saralanganlar </p>
        </div>
      </Link>

      <div className="kirish w-[100px] h-[40px] border-[2px] border-amber-400 flex items-center justify-center rounded-xl text-2xl cursor-pointer">
        <b>Kirish </b> <p><FaRegCircleUser /></p>
      </div>

      <Link to="/" className='til1 text-2xl'>Rus/Uzb</Link>
      <Link to="/" className='til2 text-2xl'><IoLanguage /></Link>

      <div className="header_bottom">
        <Link to="/">
          <div className="home_b icon"><TiHomeOutline /></div>
        </Link>
        <Link to="/savat">
          <div className="savat_b icon flex flex-col items-center">
            <BsCart3 /><div className='counter'>{routeSavat.length}</div>
          </div>
        </Link>
        <Link to="/saralanganlar">
          <div className="saralanganlar_b icon flex flex-col items-center">
            <FaRegHeart /><div className='counter'>{likedItems.length}</div>
          </div>
        </Link>
        <div className="kirish_b icon flex items-center justify-center rounded-xl text-2xl">
          <FaRegCircleUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
