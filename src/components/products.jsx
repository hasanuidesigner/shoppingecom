import React, { useEffect, useState } from "react";
import { apilink } from "../apiUrl";
import axios from 'axios'

function Products(){
    const[products,setProducts]=useState([]);

    const getProduct = async () => {
        const prodcutList = await axios.get(apilink);
        setProducts(prodcutList.data);
      }
    
      useEffect(() => {
        getProduct();
      },[])  

return <>

</>
}

export default Products