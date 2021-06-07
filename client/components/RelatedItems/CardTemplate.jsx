import React from 'react';
import Rating from './Rating.jsx';
import Comparison from './Comparison.jsx';

class CardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false
    }
    this.togglePop = this.togglePop.bind(this);
  }

  togglePop() {
    this.setState({
      seen: !this.state.seen
    })
  }

  render() {
    return (
      <li className={this.props.id === "outfit" ? "card outfit" : "card"} onClick={this.togglePop}>
        <div className="parent">
          {this.state.seen ? <Comparison /> : null}
          <img className="related-product-img" src={this.props.product.results[0].photos[0].url}/>
          <div className="product-info">
            <div>{this.props.product.category}</div>
            <div className="product-name">{this.props.product.name}</div>
            <div className="product-price">${Math.abs(Number(this.props.product.default_price))}</div>
          </div>
          <Rating rating={this.props.product.rating.ratings} />
        </div>
      </li>
    )
  }
}

export default CardTemplate;