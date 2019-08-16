import React, {useState, useEffect} from 'react'
import './index.css'


function Shop(){

    useEffect(() => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]); 

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
        
        const items = await data.json();        
        
        console.log(items.items)
        setItems(items.items)
    }


    return(
        <div>
            {items.map(items => (
                <h1 key={items.itemid}>{items.name}</h1>
            ))}
        </div>
    );
}


export default Shop;
