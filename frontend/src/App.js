import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Wish from "./pages/Wish.jsx";
import Cart from "./pages/Cart.jsx";
import ProductScreen from "./pages/ProductScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
