import React from 'react';

const CardTemplate = (props) => {
  return (
    <div className="product-card">
      <figure>
        <div>img</div>
        <div>
          <div>{props.product.category}</div>
          <div>{props.product.name}</div>
        </div>
      </figure>
    </div>
  )
}

export default CardTemplate;