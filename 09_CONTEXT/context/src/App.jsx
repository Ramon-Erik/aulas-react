import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <h1>React Context API</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
