import React from "react";
import { Route, Routes } from "react-router-dom";
import Bikes from "./pages/Bikes";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/bikes" element={<Bikes />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
