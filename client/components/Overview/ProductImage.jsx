import React from 'react';

function ProductImage(props) {
  return(
    <div>
    <img className = 'picture' src= {props.image.url} alt="Picture of Clothing"></img>
    <div>Price: {props.price.original_price}</div>
    </div>
  );
}






export default ProductImage;