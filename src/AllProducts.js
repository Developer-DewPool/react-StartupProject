import React, {useState, useEffect} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
let access = require("./access.js")

function AllProducts(){

  useEffect(() => {
    fetchData(); 
  },[]);

  const [items, setItems] = useState([]); 
  
  const fetchData = async() => {
    const moltin_token = await access.Access()
    const fetchData = await fetch('https://api.moltin.com/v2/products', {
    method: 'GET',
    headers:{
          Authorization: 'Bearer '+  moltin_token,
          }
    })
    const allproducts = await fetchData.json()
    setItems(allproducts.data)
    console.log(allproducts.data)
  }

    return(
        <div>
            {items.map(item => (
              <h3 key={item.id}>
              <Link to={`/products/${item.id}`}>{item.name}</Link>
              </h3>
            ))}
        </div>
    );
}


export default AllProducts;
