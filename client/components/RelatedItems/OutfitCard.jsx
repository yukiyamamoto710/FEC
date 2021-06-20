import React from 'react';
import Price from './Price.jsx';
import Rating from './Rating.jsx';
import PropTypes from 'prop-types';

const OutfitCard = ({product, removeFromOutfit, changeProductId}) => {

  const defaultImg = (product) => {
    var defaultIdx = 0;
    for (var i = 0; i < product.results.length; i++) {
      if (product.results[i]['default?']) {
        defaultIdx = i;
      }
    }
    return product.results[defaultIdx].photos[0].url;
  }

  const changeProduct = (e) => {
    if (["card", "related-product-img", "product-info", "product-category", "product-name", "product-price"].indexOf(e.target.className) !== -1) {
      changeProductId(product.id);
    }
  }

  return (
    <li data-testid="outfit-card" className="card outfit" onClick={changeProduct}>
      <div className="parent">
        <span data-testid="close" className="close" onClick={()=>removeFromOutfit(product.id)}>&#9447;</span>
        <img data-testid="image" className="related-product-img" alt={product.name} src={defaultImg(product)}/>
        <div className="product-info">
          <div data-testid="category" className="product-category">{product.category}</div>
          <div data-testid="name" className="product-name">{product.name}</div>
          <Price product={product}/>
          <Rating rating={product.ratings} />
        </div>
      </div>
    </li>
  )
}

OutfitCard.propTypes = {
  removeFromOutfit: PropTypes.func,
  product: PropTypes.object,
  changeProductId: PropTypes.func
}

export default OutfitCard;