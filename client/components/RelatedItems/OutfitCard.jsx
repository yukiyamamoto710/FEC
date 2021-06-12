import React from 'react';
import Price from './Price.jsx';
import Rating from './Rating.jsx';
import PropTypes from 'prop-types';

const OutfitCard = ({product, removeFromOutfit}) => {
  return (
    <li className="card outfit">
      <div className="parent">
        <span data-testid="close" className="close" onClick={()=>removeFromOutfit(product.id)}>&#9447;</span>
        <img data-testid="image" className="related-product-img" src={product.results[0].photos[0].url}/>
        <div className="product-info">
          <div data-testid="category" className="product-category">{product.category}</div>
          <div data-testid="name" className="product-name">{product.name}</div>
          <Price product={product}/>
          <Rating ratings={product.ratings} />
        </div>
      </div>
    </li>
  )
}

OutfitCard.propTypes = {
  removeFromOutfit: PropTypes.func,
  product: PropTypes.object
}

export default OutfitCard;