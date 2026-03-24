import  { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from "./pages/SighIn.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Product from './pages/Product.jsx';
import Checkout from './pages/Checkout';
import Explore from './pages/Explore.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
const [search, setSearch] = useState("");
const [cart, setCart] = useState(()=>{
  const saved = localStorage.getItem("cart")
  return saved ? JSON.parse(saved) : []
})
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])


const addToCart = (product) => {

  setCart(prev => {

    const existingProduct = prev.find(item => item.id === product.id)

    if (existingProduct) {

      return prev.map(item =>
        item.id === product.id
          ? { ...item, quantity:( item.quantity || 1) + 1 }
          : item
      )

    } else {

      return [...prev, { ...product, quantity: 1 }]

    }

  })

}
  return (
    <>
    
     <Router>
      <Header search={search} setSearch={setSearch} cart={cart} setCart={setCart}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/shop" element={<Shop search={search} />} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout setCart={setCart} />} />
        <Route path="*" element={<NotFound />} />    
      </Routes>
     
    </Router>
    </>
  )
}

export default App






