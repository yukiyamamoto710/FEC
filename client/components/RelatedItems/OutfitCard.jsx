import React from 'react';
import Price from './Price.jsx';
import Rating from './Rating.jsx';
import PropTypes from 'prop-types';

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {product, removeFromOutfit} = this.props;
    return (
      <li className="card outfit">
        <div className="parent">
          <span className="close" onClick={()=>removeFromOutfit(product.id)}>&#9447;</span>
          <img className="related-product-img" src={product.results[0].photos[0].url}/>
          <div className="product-info">
            <div>{product.category}</div>
            <div className="product-name">{product.name}</div>
            <Price product={product}/>
            <Rating rating={product.rating.ratings} />
          </div>
        </div>
      </li>
    )
  }
}

OutfitCard.propTypes = {
  removeFromOutfit: PropTypes.func,
  product: PropTypes.object
}

export default OutfitCard;