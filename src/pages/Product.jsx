
import { useParams } from "react-router-dom";
import {getProducts} from "../data/api.js";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom"

function Product({ addToCart}) {

const { id } = useParams();
const [product, setProduct] = useState(null);
const [showMessage, setShowMessage]=useState(false);
useEffect(() => {
    const loadProduct = async () => {
        const products = await getProducts();
        const foundProduct = products.find(
            p => p.id === Number(id)
        );
        setProduct(foundProduct);
    };

    loadProduct();
}, [id]);


if (!product) {
return <h2>Product not found</h2>;
}

    const handleAddToCart = () => {
        addToCart(product);
      
        setShowMessage(true);
      
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      };

return (
<div className="container mt-4">
<div className="product-page">
<Link to="/shop" className="back-to-products">
 Back to products
</Link>
 <div className="product-page-image">
 <img src={product.image} alt={product.title} />
 </div>

 <div className="product-page-info">
 <h1>{product.title}</h1>

 <p className="product-page-price">
 {product.price} €
 </p>

 <p className="product-page-description">
 {product.description}
 </p>

 <button className="add-to-cart-btn" onClick={handleAddToCart}>
 Add to cart
 </button>

 {showMessage && (
  <div className="cart-message">
    ✓ Added to cart
  </div>
)}

 </div>

 </div>  
 </div>
);

}

export default Product;