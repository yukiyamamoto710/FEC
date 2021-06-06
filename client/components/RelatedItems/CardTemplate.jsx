import React from 'react';
import Rating from './Rating.jsx';

const CardTemplate = (props) => {
  return (
    <li className="card">
      <img className="related-product-img" src={props.product.results[0].photos[0].url}/>
      <div className="product-info">
        <div>{props.product.category}</div>
        <div className="product-name">{props.product.name}</div>
        <div className="product-price">${Math.abs(Number(props.product.default_price))}</div>
      </div>
      <Rating rating={props.product.rating.ratings} />
    </li>
  )
}

export default CardTemplate;