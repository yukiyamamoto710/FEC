import React from 'react';
import CardTemplate from './CardTemplate.jsx';

const Outfit = (props) => {
  return (
    <div className="container">
      <h3 className="related-products">YOUR OUTFIT</h3>
      <ul className="carousel">
        {props.selectedItemsList.map(product=>
          <CardTemplate key={product.id} product={product} />
          )}
      </ul>
      <div className="button-wrapper">
        <button className="slideLeft">Left</button>
        <button className="slideRight">Right</button>
      </div>
    </div>
  )
}

export default Outfit;