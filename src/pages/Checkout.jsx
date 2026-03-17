import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({setCart}){

  const [submitted, setSubmitted] = useState(false);
  const user = localStorage.getItem("user");
const navigate = useNavigate();
useEffect(() => {
  if (!user) {
    navigate("/signin");
  }
}, []);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    };
  
  if(submitted){

        return (
        <div className="container text-center mt-5" style={{paddingTop:"200px"}}>
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been received.</p>
        
        <Link to="/my-orders" className="btn btn-outline-dark me-2">
        My Orders
        </Link>
        
        <Link to="/explore" className="btn btn-outline-dark">
        Continue shopping
        </Link>
        
        </div>
        );
      }
      return(
      <div className="container" style={{paddingTop:"120px", maxWidth:"500px"}}>

<h2 className="text-center mb-4">Order form</h2>

<form onSubmit={handleSubmit}>

<div className="mb-3">
<input type="text" className="form-control" placeholder="Full name" required />
</div>

<div className="mb-3">
<input type="email" className="form-control" placeholder="Email" required />
</div>

<div className="mb-3">
<input type="tel" className="form-control" placeholder="Phone number" pattern="[0-9]{9,15}"required />
</div>

<div className="mb-3">
<input type="text" className="form-control" placeholder="City"  pattern="[A-Za-zA-Яа-я\s]+"/>
</div>

<div className="mb-3">
<input type="text" className="form-control" placeholder="Address" pattern="[A-Za-zA-Яа-я\s]+" />
</div>

<button className="btn btn-dark w-100 mt-3">
Place Order
</button>

</form>

<div className="text-center mt-4">

<Link to="/my-orders" className="btn btn-outline-dark me-2">
My Orders
</Link>

<Link to="/explore" className="btn btn-outline-dark">
Continue shopping
</Link>

</div>

</div>
    
    );
    
    }
    
    export default Checkout