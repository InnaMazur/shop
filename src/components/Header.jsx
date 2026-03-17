import React, {useEffect, useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from 'react-router-dom';
import CartSidebar from './CartSidebar';

function Header({search, setSearch, cart, setCart}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("orders");
    localStorage.removeItem("cart");
    // window.location.reload();
    navigate ("/");
  };
 
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const closeSearch = ()=> {
      setIsSearchOpen(false)
      setSearch("")
    }
  
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const products = [
    { name: "Jacket", link: "/shop/jacket" , image:"/images/jacket.png"},
    { name: "Jeans", link: "/shop/jeans" },
    { name: "Skirt", link: "/shop/skirt" }

    ];

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };
  const openSidebar = () => {
    setSidebarOpen(true)
    }
    
    const closeSidebar = () => {
    setSidebarOpen(false)
    }
    const [cartOpen, setCartOpen] = useState(false)

const openCart = () => {
setCartOpen(true)
}

const closeCart = () => {
setCartOpen(false)
}


return (
  
     <header className="header">
      <nav className="navbar navbar-expand-lg shadow-sm">
         <div className="container d-flex align-items-center justify-content-between">
    
         <div className='d-flex align-items-center gap-4'>
         <button className="btn  p-1 text-white" onClick={openSidebar}>
             <FontAwesomeIcon icon={faBars}/>
           </button>
           <div className='logo'>
   <span className="logo-bold">IN</span>
   <span className="logo-light">STYLE</span>
 </div>
          </div>
<div className="d-flex align-items-center gap-3 position-relative">
             {isSearchOpen && (
              <div>
                <input
                  type="text"
                  className="form-control form-control-sm me-2"
                  placeholder="Search..."
                  value={search}
                  onChange={(e)=>{
      
                    const value =e.target.value;
                    if (typeof setSearch ==="function"){

                    setSearch(value);
                    }
                  if (value.length >= 3) {
                 
                  navigate(`/shop?search=${value}`);
                    
                  }}
                }
                  style={{ width: '300px' }}
                  />
                
                </div>
            )}
             {search && search.length >= 2 && (
                  <div className="search-results">
                  
                  {products
                  .filter(product =>
                  product.title?.toLowerCase().includes(search.toLowerCase())
                  )
                  .slice(0,5)
                  .map((product) => (
                  
                  <Link key={product.id} to={`/product/${product.id}`}>
                  <div className="search-item">
                    <img src={product.image} width="40"/>
                  {product.title}
                  </div>
                  </Link>
                  
                  ))
            
                  }
                  </div>
                )}
                      <button className="btn text-white p-0 border-0"
             onClick={() => {
              setIsSearchOpen(!isSearchOpen)
              if (isSearchOpen){
                setSearch("")
              }}
             }
             >
          
              <FontAwesomeIcon icon={faSearch} />
            </button>
 
            <div className="dropdown">
              <button
                className="btn text-white d-flex align-items-center gap-2"
                type="button"
                data-bs-toggle="dropdown"
              >
             <FontAwesomeIcon icon={faUser} />
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                {!user && (
                <li>
                  <Link className="dropdown-item" to="/signin">
                    Sign In
                  </Link>
                </li>
                )}
                {user && (
                  <>
                <li>
                  <Link className="dropdown-item" to="/my-account">
                    My Account
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/my-orders">
                    My Orders
                  </Link>
                </li>
                <li>
          <button className='dropdown-item' onClick={handleLogout}>
                     Logout
          </button>
          </li>
          </>
                )}
                </ul>
           </div>
            <button className="btn p-0 position-relative text-white" onClick={openCart}>
                <FontAwesomeIcon icon={faCartShopping} />
            
                {cart?.length > 0 && (
    <span style={{
      position: "absolute",
      top: "-6px",
      right: "-10px",
      background: "red",
      color: "white",
      borderRadius: "50%",
      fontSize: "12px",
      padding: "2px 6px"
    }}
    >
      {cart.length}
    </span>
  )}
            </button>
        </div>
        </div>
      </nav>
      <div className={`sidebar ${sidebarOpen ? "open": ""}`}>

<button className="close-btn" onClick={closeSidebar}>
✕
</button>

<h3>POPULAR</h3>

<ul>
<li>

<Link to="/explore" onClick={closeSidebar}>
All Products
</Link>
</li>
<li>
<Link to="/shop?subcategory=popular">
Popular Now
</Link>
</li>
</ul>

<h3>MEN</h3>

<ul>
<li><Link to="/shop?category=men&subcategory=tshirt">T-Shirts</Link></li>
<li><Link to="/shop?category=men&subcategory=jacket">Jackets</Link></li>
<li><Link to="/shop?category=men&subcategory=jeans">Jeans</Link></li>
<li><Link to="/shop?category=men&subcategory=coat">Coat</Link></li>
</ul>

<h3>WOMEN</h3>

<ul>
<li><Link to="/shop?category=women&subcategory=skirt">Skirts</Link></li>
<li><Link to="/shop?category=women&subcategory=blouse">Blouses</Link></li>
<li><Link to="/shop?category=women&subcategory=tshirt">T-Shirts</Link></li>
</ul>

</div>


<CartSidebar cartOpen={cartOpen} closeCart={closeCart}  cart={cart} setCart={setCart}/>
            
  </header>
    
  );
  
}
export default Header;


     
