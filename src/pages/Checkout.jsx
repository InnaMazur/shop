import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Checkout({setCart}){

useEffect(() => {

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length > 0) {
      orders.push(cart);
      localStorage.setItem("orders", JSON.stringify(orders));
    }
  
    setCart([]);
  
    localStorage.removeItem("cart");
  
  }, []);

    return(
        <div className="container text-center mt-5" style={{paddingTop:"200px"}}>
  <h2>Thank you for your purchase!</h2>
  <p>Your order has been received.</p>

  <Link to="/my-orders" className="btn btn-outline-dark hover-btn fw-bold mt-3 me-3">
    My Orders
  </Link>
  <Link to="/shop" className="btn btn-outline-dark hover-btn fw-bold  mt-3 me-3">
  Continue shopping
   </Link>
</div>
    
    );
    
    }
    
    export default Checkout