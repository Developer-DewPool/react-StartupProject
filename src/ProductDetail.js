import React, { useState, useEffect } from 'react'
import './index.css'
let access = require("./access.js")

function ProductDetail({ match }){
    
    useEffect(() => {
        fetchProduct();
    })
    
    const [item, setItem] = useState({}); 

    const fetchProduct = async () => {
    const moltin_token = await access.Access()
    const fetchProduct = await fetch(`https://api.moltin.com/v2/products/${match.params.id}`, {
        method: 'GET',
        headers:{
              Authorization: 'Bearer '+  moltin_token,
              },
      })
      const product = await fetchProduct.json();
    // console.log(product.data);
    setItem(product.data)
    }
    return(
        <div>
            <h2>{item.name}</h2>
            <p>
                {item.product_description_en}
            </p>


        </div>
        
    )
}


export default ProductDetail;
