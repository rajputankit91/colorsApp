
import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/layout/Layout';
import Home from './pages/Home/Home';
import Generator from './pages/Palettes-generator/Generator';
import Explore from './pages/Explore-Palettes/Explore';
import Perviewer from './pages/Palletes-Perviewer/Perviewer';

function App() {
  return (
    <div className='mainContainer'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Generator />} />
            <Route path="Explore" element={<Explore />} />
            <Route path="Perviewer" element={<Perviewer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


