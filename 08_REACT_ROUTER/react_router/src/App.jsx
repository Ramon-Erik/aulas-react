import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home/'
import About from './pages/about/About/'
import Product from './pages/product/Product/'
import Info from './pages/info/Info/'

function App() {

  return (
    <>
      <header>
        <h1>React router</h1>
      </header>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product/:id/info" element={<Info/>} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
