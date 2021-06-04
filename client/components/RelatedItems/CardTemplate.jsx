import React from 'react';

const CardTemplate = (props) => {
  return (
    <li className="slide">
      <div className="product-card">
        <figure>
          <img src="" />
          <div className="product-info">
            <div>{props.product.category}</div>
            <div>{props.product.name}</div>
          </div>
        </figure>
      </div>
    </li>
  )
}

export default CardTemplate;