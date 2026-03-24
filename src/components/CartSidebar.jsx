
import { Link } from "react-router-dom"

function CartSidebar({ cartOpen, closeCart, cart = [], setCart }) {

const increaseQty = (id) => {

const updatedCart = cart.map(item =>
item.id === id
? { ...item, quantity: item.quantity + 1 }
: item
)

setCart(updatedCart)

}

const decreaseQty = (id) => {

const updatedCart = cart.map(item =>
item.id  === id && item.quantity > 1
? { ...item, quantity: item.quantity - 1 }
: item
)

setCart(updatedCart)
localStorage.setItem("cart", JSON.stringify(updatedCart))

}

const removeItem = (id) => {

const updatedCart = cart.filter(item => item.id !== id)

setCart(updatedCart)
localStorage.setItem("cart", JSON.stringify(updatedCart))

}

const totalPrice = (cart || []).reduce((total, item) =>{
    return total + item.price * item.quantity;
}, 0);

return (
<>
<div className={`cart-overlay ${cartOpen ? "active" : ""}`} onClick={closeCart}></div>

<div className={`cart-sidebar ${cartOpen ? "open" : ""}`} onClick={(e)=>e.stopPropagation()}>
    <button className="cart-close" onClick={closeCart}>
        x
    </button>

<h2>Your Cart</h2>

{(!cart || cart.length === 0) &&(
    <div className="empty-cart">
 <p>Your cart is empty</p>

 <Link to="/shop">

 <button className="continue-shopping-btn" onClick={closeCart}>
    Continue shopping
 </button>
</Link>
</div>
)}
{(cart || []).map(item => (

<div className="cart-item" key={item.id}>

<img src={item.image} alt={item.title} />

<div className="cart-info">

<h4>{item.title}</h4>

<p>{item.price} €</p>

<div className="cart-quantity">

<button onClick={()=>decreaseQty(item.id)}>-</button>

<span>{item.quantity}</span>

<button onClick={()=>increaseQty(item.id)}>+</button>

</div>

<button className="remove-btn" onClick={()=>removeItem(item.id)}>
Remove
</button>

</div>

</div>

))}
{cart.length > 0 && (

<div className="cart-footer">

<h3>Total: {totalPrice.toFixed(2)} €</h3>

<Link to="/checkout" onClick={closeCart} className="checkout-btn">
Checkout
</Link>

</div>
)}
</div>
</>
)
}

export default CartSidebar