import React, { useState, useEffect } from 'react'
import './index.css'
import AllProducts from './AllProducts'

function ProductDetail({ match }){

    useEffect(() => {
        fetchProduct();
    }, []);
    
    const [item, setItem] = useState({}); 
    const moltin_token = localStorage.getItem('access_token')
    const fetchProduct = async () => {

    const fetchProduct = await fetch(`https://api.moltin.com/v2/products/${match.params.id}`, {
        method: 'GET',
        headers:{
              Authorization: 'Bearer '+  moltin_token,
              },
      })
      const product = await fetchProduct.json();
    console.log(product.data);
    setItem(product.data)
 
    }
    return(
        <div>
            <h2>{item.name}</h2>
            <p>
                {item.product_description_en}
                {item.product_image}
            </p>
            {/* <img src={item.product_image} alt='' /> */}
        </div>
    );
}


export default ProductDetail;
