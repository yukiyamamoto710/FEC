import React from 'react';
import CardTemplate from './CardTemplate.jsx';

const RelatedProducts = (props) => {

  return (
    <div className="container">
      <h3 className="related-products">Related Products</h3>
      <div className="carousel">
        <ul className="slider">
          {props.relatedItemsList.map(product=>
            <CardTemplate key={product.id} product={product} />
            )}
        </ul>
      </div>
    </div>
  )
}

export default RelatedProducts;