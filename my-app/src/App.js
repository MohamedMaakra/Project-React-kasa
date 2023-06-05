import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import Detail from './pages/Detail';
import {PageError }from "./pages/Error";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<PageError/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;


