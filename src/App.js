import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import { Routes, Route } from "react-router-dom";
import WishList from "./pages/WishList";
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='product' element={<Product />} />
        <Route path='register' element={<Register />} />
        <Route path='productList' element={<ProductList />} />
        <Route path='cart' element={<Cart />} />
        <Route path='wishlist' element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
