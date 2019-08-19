import React from 'react'
import './index.css'
import './product.css'


function Home(){

    return(
         <div>
        <div className="bg-image">
          <div className="center-div">
          <h1>This is Home Page</h1>
          <p>This is Demo Site</p>
          </div>
        </div>

        
      <div className="product-card">
        <div class="product-image">
          <img src="http://www.aendesign.co.uk/images/hc%20t-shirt%20mock-up%20front%401-crop-u22496.png?crc=114384536" alt="" ></img>
        </div>
      </div>
      <div className="product-details">
        <h1>Product title</h1>
        <p>Great product title for a great product and all of the extra things a product might need to make it fill an entire card.</p>
        <button type="button" class="btn">Buy Now</button>
      </div>

      </div>


    );
}


export default Home;
