import React, { useState, useEffect } from 'react';
import './App.scss';
import './1920Media.scss';
import AppBar from '././components/AppBar';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Input from './components/Input';
import Select from './components/Select';
import Cart from './components/Cart/Cart';
import { useSelector } from 'react-redux';
import NotFound from './components/NotFound';
import Artists from './components/pages/Artists';
import '.././src/mobile.scss';
// categoryes
import Popular from '../src/components/pages/category/Popular';
import Expensive from '../src/components/pages/category/Expensive';
import Cheap from '../src/components/pages/category/Cheap';
import Order from '../src/components/pages/category/Order';
import Accaunt from './components/Accaunt';

// skeleton
import InputSkeleton from '././components/InputSkeleton';
import SaitInfo from './components/pages/SaitInfo';

function App() {
  const isTrue = useSelector((state) => state.openCart.isTrue);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="App">
        <div className="not-changed-wrapper">
          <AppBar />
          <Input />
          <Select />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Popular/Pictures" element={<Popular />} />
            <Route path="/Expensive/Pictures" element={<Expensive />} />
            <Route path="/Cheap/Pictures" element={<Cheap />} />
            <Route path="/Order/Picture" element={<Order />} />
            <Route
              path="/Menu/Our/Artists"
              element={
                <Artists image="https://meragor.com/files/styles//220_220_bottom_wm/avatar-212030-002359.png" />
              }
            />
            <Route path="Gallery-Redux-Store" element={<SaitInfo />} />
          </Routes>
          {isTrue && <Cart />}
        </div>
        {showSkeleton && <InputSkeleton />}
      </div>
      <Accaunt />
    </>
  );
}

export default App;
