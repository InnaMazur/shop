
import staticMen from "./staticMen";
import staticWomen from "./staticWomen";

export const getProducts = async () => {

    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    
    const clothing = data
    .filter(item =>
      item.category === "men's clothing" ||
      item.category === "women's clothing"
    )
    .map(item => ({
      ...item,
      category: item.category === "men's clothing" ? "men" : "women",
    
        subcategory:
          item.title.toLowerCase().includes("shirt")
            ? "tshirt"
            : item.title.toLowerCase().includes("jacket")
            ? "jacket"
            : item.title.toLowerCase().includes("jeans")
            ? "jeans"
              : item.title.toLowerCase().includes("coat")
            ? "coat"
              : item.title.toLowerCase().includes("top")
            ? "blouse"
              : item.title.toLowerCase().includes("skirt")
            ? "skirt"
              : item.title.toLowerCase().includes("dress")
            ? "dress"
              : item.title.toLowerCase().includes("sleeve")
            ? "tshirt"
              : item.title.toLowerCase().includes("coat")
            ? "coat"
            : "other"
      }))

    return[
        ...  clothing,
        ...staticMen,
        ...staticWomen
    ];
   
    
    }