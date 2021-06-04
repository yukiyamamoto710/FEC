import React from 'react';
import CardTemplate from './CardTemplate.jsx';

const RelatedProducts = (props) => {
  console.log(props);

  return (
    <ul>
      <div className="container">
        <h3>Related Products</h3>
        <div>
          <ul className="slider">
            <li className="slide">
              {props.relatedItemsList.map(product=>
                <CardTemplate product={product} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </ul>
  )
}

export default RelatedProducts;