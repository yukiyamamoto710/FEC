import React from 'react';

const CardTemplate = (props) => {
  return (
    <li className="slide">
      <div className="product-card">
        <figure>
          <img className="related-product-img" src={props.product.image} />
          <div className="product-info">
            <div>{props.product.name}</div>
            <div>${Math.abs(Number(props.product.originalPrice))}</div>
          </div>
        </figure>
      </div>
    </li>
  )
}

export default CardTemplate;