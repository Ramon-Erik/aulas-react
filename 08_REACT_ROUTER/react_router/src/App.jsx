import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home/";
import About from "./pages/about/About/";
import Product from "./pages/product/Product/";
import Info from "./pages/info/Info/";
import NotFound from "./pages/not-found/NotFound/";
import SearchForm from "./pages/search-form/SearchForm/";
import Search from "./pages/search/Search/";

function App() {
  return (
    <>
      <header>
        <h1>React router</h1>
      </header>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id/info" element={<Info />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/search/" element={<Search />} />
          <Route path="/company/" element={Navigate("/about")} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
