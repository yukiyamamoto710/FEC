import React from 'react';
import CardTemplate from './CardTemplate.jsx';

const Outfit = (props) => {
  return (
    <div className="container">
      <h3 className="related-products">Outfit</h3>
      <div className="carousel" data-orientation="horizontal" data-scrollable="true">
        <ul className="slider">
          {props.selectedItemsList.map(product=>
            <CardTemplate product={product} />
            )}
        </ul>
      </div>
    </div>
  )
}

export default Outfit;