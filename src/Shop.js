import React, {useState, useEffect} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function Shop(){

    useEffect(() => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]); 

    const fetchItems = async () => {
        const data = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get`);
        
        const items = await data.json();        
        
        console.log(items.items)
        setItems(items.items)
    }


    return(
        <div>
            {items.map(items => (
                <h1 key={items.itemid}>
                <Link to={`/shop/${items.itemid}`}>{items.name}</Link>
                </h1>
            ))}
        </div>
    );
}


export default Shop;
