import React from 'react';
import CardTemplate from './CardTemplate.jsx';

const RelatedProducts = (props) => {
  console.log(props);

  return (
    <div className="container">
      <h3 className="related-products">Related Products</h3>
      <div className="carousel" data-orientation="horizontal" data-scrollable="true">
        <ul className="slider">
          {props.relatedItemsList.map(product=>
            <CardTemplate product={product} />
            )}
        </ul>
      </div>
    </div>
  )
}

export default RelatedProducts;