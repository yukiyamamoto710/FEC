import React from 'react';

const CardTemplate = (props) => {
  return (
    <li className="card">
      <img className="related-product-img" src={props.product.results[1].photos[0].url}/>
      <div className="product-info">
        <div>{props.product.category}</div>
        <div className="product-name">{props.product.name}</div>
        <div className="product-price">${Math.abs(Number(props.product.default_price))}</div>
      </div>
    </li>
  )
}

export default CardTemplate;