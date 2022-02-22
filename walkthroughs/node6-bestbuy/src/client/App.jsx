import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navs/Navbar";
import HomeView from "./views/Home";
import ProductsView from "./views/ProductsView";
import SingleView from "./views/SingleView";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="products" element={<ProductsView />} />
        <Route path="products/:id" element={<SingleView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
