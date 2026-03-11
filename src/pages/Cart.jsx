
import { useEffect, useState } from "react"

function Cart(){

const [cart,setCart] = useState([])

useEffect(()=>{

const savedCart = JSON.parse(localStorage.getItem("cart")) || []
setCart(savedCart)

},[])

const removeItem = (id)=>{

const updatedCart = cart.filter(item => item.id !== id)

setCart(updatedCart)
localStorage.setItem("cart",JSON.stringify(updatedCart))

}

const increaseQty = (id)=>{

const updatedCart = cart.map(item => {

if(item.id === id){
return {...item, quantity:item.quantity + 1}
}

return item
})

setCart(updatedCart)
localStorage.setItem("cart",JSON.stringify(updatedCart))

}

const decreaseQty = (id)=>{

const updatedCart = cart.map(item => {

if(item.id === id && item.quantity > 1){
return {...item, quantity:item.quantity - 1}
}

return item
})

setCart(updatedCart)
localStorage.setItem("cart",JSON.stringify(updatedCart))

}

const totalPrice = cart.reduce((total,item)=>{

return total + item.price * item.quantity

},0)

return(

<div className="container mt-4">

<h2>Your Cart</h2>

{cart.length === 0 && <p>Your cart is empty</p>}

{cart.map(item => (

<div key={item.id} className="cart-item d-flex align-items-center gap-3 mb-3">

<img src={item.image} width="80"/>

<div style={{flex:1}}>

<h5>{item.title}</h5>

<p>{item.price} €</p>

<div>

<button onClick={()=>decreaseQty(item.id)}>-</button>

<span style={{margin:"0 10px"}}>{item.quantity}</span>

<button onClick={()=>increaseQty(item.id)}>+</button>

</div>

</div>

<button onClick={()=>removeItem(item.id)}>
Remove
</button>

</div>

))}

<hr/>

<h4>Total: {totalPrice.toFixed(2)} €</h4>

</div>

)
}
export default Cart