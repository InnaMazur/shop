import React, {useEffect, useState} from "react";
import Clothes from "../components/Clothes.jsx";
import { useLocation } from "react-router-dom";

function Shop(){
    const location =useLocation();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const subcategory = queryParams.get("subcategory");
    const search = queryParams.get("search")

    return(
    
    <div>
    
    <Clothes category={category} subcategory={subcategory}  search={search} />
    
    </div>
    
    )
    
    }
    export default Shop;