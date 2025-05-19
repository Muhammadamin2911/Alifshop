import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HeaderData from './components/headerdata/HeaderData';
import Footer from './components/footer/Footer';
import Footer2 from './components/footer2/Footer2';
import Home from './components/home/Home';
import SingleRoute from './singleRoute/SingleRoute';
import SingleRouteSavat from './singleRouteSavat/SingleRouteSavat';
import SingleRouteLike from './singleRouteLike/SingleRouteLike';
import SingleRouteSearch from './SingleRouteSearch/SingleRouteSearch';
import ErrorBoundary from './components/boundary/ErrorBoundary';
import { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [routeSavat, setRouteSavat] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  return (
    <ErrorBoundary>
      <div className="bloked">
        <div className="container">
          <Header likedItems={likedItems } routeSavat={routeSavat} />
          <HeaderData />
          <ToastContainer />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  routeSavat={routeSavat}
                  setRouteSavat={setRouteSavat}
                  likedItems={likedItems}
                  setLikedItems={setLikedItems}
                />
              }
            />
            <Route
              path="/SingleRoute/:id"
              element={
                <SingleRoute
                  routeSavat={routeSavat}
                  setRouteSavat={setRouteSavat}
                  likedItems={likedItems}
                  setLikedItems={setLikedItems}
                />
              }
            />
            <Route
              path="/savat"
              element={<SingleRouteSavat routeSavat={routeSavat} setRouteSavat={setRouteSavat} />}
            />
            <Route
              path="/saralanganlar"
              element={<SingleRouteLike likedItems={likedItems} setLikedItems={setLikedItems} />}
            />
            <Route
              path="/singleRouteSearch"
              element={
                <SingleRouteSearch
                
                />
              }
            />
          </Routes>
        </div>
        <Footer />
        <Footer2 />
      </div>
    </ErrorBoundary>
  );
};

export default App;
