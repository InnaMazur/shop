
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import staticMen from "../data/staticMen";
import staticWomen from "../data/staticWomen";

function Explore() {

const [products, setProducts] = useState([]);


useEffect(() => {

fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => setProducts(data))

}, [])
const allProducts =[
    ...products,
    ...staticMen,
    ...staticWomen
]
const clothingProducts = allProducts.filter(
    product=>
        product.category ==="men's clothing"||
    product.category==="women's clothing"||
    product.category==="man"||
    product.category==="woman"
)
const shuffledProducts = [...clothingProducts].sort(() => Math.random() - 0.5)
    return (

        <div className="explore-container">
        
        <h1 style={{textAlign: "center", marginBottom:"40px"}}>
            Explore Products
            </h1>
        
        <Swiper
        modules={[Pagination]}
      pagination={{clickable: true}}
        loop={false}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
            640:{
                slidesPerView:1,
            },
            768:{
                slidesPerView: 2,
            },
            1024:{
                slidesPerView: 4,
            }
        }}

        >
        
        {shuffledProducts.map(product => (
        
        <SwiperSlide key={product.id}>
        <Link to={`/product/${product.id}`} style={{textDecoration:"none",color:"black"}}>
        <img src={product.image} width="150" />
        
        <p>{product.title}</p>
        
        <p>{product.price} €</p>
        </Link>
        
        </SwiperSlide>
        
        ))}
        
        </Swiper>
        
        </div>
        
        )

}

export default Explore