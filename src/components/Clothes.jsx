
import { useEffect, useState } from "react"
import { getProducts } from "../data/api"
import { Link } from "react-router-dom"

function Clothes({category, subcategory, search}) {

const [products, setProducts] = useState([])

useEffect(() => {

getProducts().then(apiProducts => {

const allProducts = apiProducts;


setProducts(allProducts);

})
.catch(error => {
console.error("Error fetching products:", error);
});

}, [category])

 const query=search?.toLowerCase().trim() || ""

const filteredProducts = products.filter(product => {

  
 
        // if( query.length >=2  && !product.title.toLowerCase().includes(query)){
        //      return false
        // }

        if(query.length >= 3){
if(!product.title || !product.title.toLowerCase().includes(query)){
    return false
}}
    if (product.title.toLowerCase().includes("backpack")){
        return false
    }

    if (subcategory ==="popular" && !product.popular) {
        return false
    }
    if (category && product.category !== category) {
    return false
    }
    if (subcategory && product.subcategory !== subcategory) {
    return false
    }
    return true
    
    })
    const visibleProducts =
subcategory === "popular"
? filteredProducts.slice(0,6)
: filteredProducts
if(query.length>= 3 && visibleProducts.length === 0){
    return(
<div style={{padding:"40px", textAlign:"center", marginTop:"120px"}}>
    <h1> No products found for "{query}"</h1>
    <h2>Try another search.</h2>

    <Link to="/" style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "grey",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px"
        }}>
          Continue shopping
        </Link>

</div>
    )}
return (

<div className="products-grid">

{visibleProducts.map(product => (

<Link to={`/product/${product.id}`} key={product.id}>

<div className="product-card">

<div className="product-image">
<img src={product.image} alt={product.title} />
</div>


<h3 className="product-title">{product.title}</h3>

<p className="product-price">{product.price} €</p>

</div>
</Link>

))}

</div>


);

}

export default Clothes;

