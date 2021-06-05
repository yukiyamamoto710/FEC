import React from 'react';

const CardTemplate = (props) => {
  return (
    <li className="slide">
      <div className="product-card">
        <figure>
          <img className="related-product-img" src={props.product.results[1].photos[0].url}/>
          <div className="product-info">
            <div>{props.product.category}</div>
            <div>{props.product.name}</div>
            <div>${Math.abs(Number(props.product.default_price))}</div>
          </div>
        </figure>
      </div>
    </li>
  )
}

export default CardTemplate;