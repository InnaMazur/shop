
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import staticMen from "../data/staticMen";
import staticWomen from "../data/staticWomen";


function Explore() {

  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(5);
  const [shuffledProducts,setShuffledProducts]=useState([]);
    const [min, setMin] = useState("");
      const [max, setMax] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error =>{
        console.error("Error loading products:", error);
      });
  }, []);

  const allProducts = [
    ...products,
    ...staticMen,
    ...staticWomen
  ];
     useEffect(()=>{

     
  const clothingProducts = allProducts.filter(product =>
  ["men's clothing", "women's clothing", "men", "women"].includes(product.category)
   
  );


  const shuffled = [...clothingProducts].sort(() => Math.random() - 0.5);
  setShuffledProducts(shuffled);
}, [products]);

  return (

    <div className="explore-container">

    <div style={{textAlign:"center", marginTop:"90px"}}>
    <p style={{marginBottom:"10px", fontWeight:"bold"}}>
     Price filter
     </p>
     <div className="filter-container">
      <input
        type="number"
        placeholder="Min price"
        value={min}
        onChange={(e)=>setMin(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max price"
        value={max}
        onChange={(e)=>setMax(e.target.value)}
       />
      </div>
   
    </div>

      <h1 style={{ textAlign: "center", marginTop:"80px" }}>
        Explore Products
      </h1>

      <div className="products-grid"  style={{marginTop:"-80px"}} >

      {shuffledProducts
.filter(product => {
  if (min && product.price < min) return false
  if (max && product.price > max) return false
  return true
})
.slice(0, visible)
.map(product => (

            <div key={product.id} className="product-card"
>

            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >

              <img src={product.image} width="150" />

              <p>{product.title}</p>

              <p>{product.price} €</p>

            </Link>

          </div>

        ))}

      </div>

      {visible < shuffledProducts.length ? (

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button onClick={() => setVisible(visible + 5)}>
            Show more
          </button>
        </div>
      )
       : (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top
          </button>
        </div>

      )}

    </div>
  
  );
 
}

export default Explore;


        

        
        