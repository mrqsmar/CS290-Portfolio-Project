import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import products from './data/products.js';
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import CarPage from './pages/CarPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
import TopicsPage from './pages/TopicsPage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
import { GiTheater } from "react-icons/gi";
import './App.css';


function App() {
  const [car, setCar] = useState([])
  return (
    <div className="Application">
    <BrowserRouter>
      <header className="Application-head">
        {/* <img src={logo} className="App-logo" alt="logo /> */}
        <h1>
          Welcome to Marques Mar's <i className="App-logos" alt="icon of a lovely theater"><GiTheater /></i> nice website!
        </h1>
        
      </header>

      <Nav />
      
      <main>
        <section className="Application-article">

          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/cars" element={<CarPage setCar={setCar} />} />
            <Route path="/add-car" element={<CreatePage />} />
            <Route path="/edit-car" element={<EditPage car={car} />} />
            <Route path="/Topics" element={<TopicsPage />} />
            <Route path="/Gallery" element={<GalleryPage />} />
            <Route path="/Order" element={<OrderPage products={products} />} />
            <Route path="/Staff" element={<StaffPage />} />
          </Routes>

        </section>
      </main>
      <footer>
        <p>&copy; 2023 Marques Mar </p>
      </footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
