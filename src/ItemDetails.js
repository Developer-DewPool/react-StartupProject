import React, { useState, useEffect } from 'react'
import './index.css'

function ItemDetails({ match }){
    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);
    
    const [item, setItem] = useState({}); 

    const fetchItem = async () => {
        const fetchItem = await fetch (
            `https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get?id=${
                match.params.id
            }`
            );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item.items[0].name);
        
    }

    return(
        <div>
            <h1>Single Item Detail</h1>
            <h2>{item.name}</h2>
        </div>
    );
}


export default ItemDetails;
