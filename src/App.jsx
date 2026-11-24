import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Kids from './pages/Kids';
import Offers from './pages/Offers';
import Reviews from './pages/Reviews';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes >
      <Footer />
    </>
  )
}

export default App;