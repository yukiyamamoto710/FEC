import React from 'react';
import Rating from './Rating.jsx';

class CardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggle();
  }

  render() {
    return (
      <li className="card" onClick={this.handleClick}>
        <img className="related-product-img" src={this.props.product.results[0].photos[0].url}/>
        <div className="product-info">
          <div>{this.props.product.category}</div>
          <div className="product-name">{this.props.product.name}</div>
          <div className="product-price">${Math.abs(Number(this.props.product.default_price))}</div>
        </div>
        <Rating rating={this.props.product.rating.ratings} />
      </li>
    )
  }
}

export default CardTemplate;