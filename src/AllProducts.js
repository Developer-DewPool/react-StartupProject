import React, {useState, useEffect} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function AllProducts(){

  useEffect(() => {
    fetchData(); 
  },[]);

  const [items, setItems] = useState([]); 
  
  const data = new URLSearchParams();

  data.append('client_id','3SFul84QLEmRJI8kc4FkXh5Lh2wKfxSbvRgfTphSKX')
  data.append('client_secret','1ttBi7vrtwL2DVHbWFHaZE0XIk9CBJTeoXvfDLnRQh')
  data.append('grant_type','client_credentials')

  fetch('https://api.moltin.com/oauth/access_token/', {
      method: 'POST',
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            },
      body: data.toString(),
      json: true,
  }).then(function(response) {
    return response.json();
  }).then(function(myJson) {
    const access_token = myJson.access_token
    localStorage.setItem('access_token', access_token);
  });

  const moltin_token = localStorage.getItem('access_token')

  const fetchData = async() => {
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
