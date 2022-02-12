import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;