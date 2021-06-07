import React from 'react';
import Rating from './Rating.jsx';
import Comparison from './Comparison.jsx';

class CardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      favorite: false
    }
    this.togglePop = this.togglePop.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  togglePop() {
    this.setState({
      seen: !this.state.seen
    })
  }

  addToFavorite() {
    this.setState({
      favorite: !this.state.favorite
    })
  }

  render() {
    if (this.props.id === "outfit") {
      return (
        <li className="card outfit" onClick={this.togglePop}>
          <div className="parent">
            <span className="close" onClick={()=>this.props.deselect()}>&#9447;</span>
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
    } else {
      return (
        <li className="card" onClick={this.togglePop}>
          <div className="parent">
            {this.state.seen ? <Comparison togglePop={this.togglePop} product={this.props.product} id={this.props.id}/> : null}
            <span className="star" onClick={this.addToFavorite}>&#9734;</span>
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
}

export default CardTemplate;