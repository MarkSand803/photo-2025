import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Service from './pages/Services';
import Book from './pages/Book';
import About from './pages/About';

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Services" element={<Service/>} />
          <Route path="Book" element={<Book/>} />
          <Route path="about" element={<About />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);