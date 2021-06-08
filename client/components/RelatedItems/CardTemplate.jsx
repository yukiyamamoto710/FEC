import React from 'react';
import Rating from './Rating.jsx';
import Comparison from './Comparison.jsx';
import Price from './Price.jsx';
import PropTypes from 'prop-types';

class CardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false // whether a modal is displayed or not
    }
    this.togglePop = this.togglePop.bind(this);
  }

  togglePop() {
    this.setState({
      seen: !this.state.seen
    })
  }

  render() {
    if (this.props.id === "outfit") {
      // if it is an outfit card
      return (
        <li className="card outfit">
          <div className="parent">
            <span className="close" onClick={()=>this.props.deselect()}>&#9447;</span>
            <img className="related-product-img" src={this.props.product.results[0].photos[0].url}/>
            <div className="product-info">
              <div>{this.props.product.category}</div>
              <div className="product-name">{this.props.product.name}</div>
              <Price product={this.props.product}/>
              <Rating rating={this.props.product.rating.ratings} />
            </div>
          </div>
        </li>
      )
    } else {
      // else it is an related item card
      return (
        <li className="card">
          <div className="parent">
            {this.state.seen ?
            <Comparison togglePop={this.togglePop} product={this.props.product} id={this.props.id}/> : null}
            <span className="star" onClick={this.togglePop}>&#9734;</span>
            <img className="related-product-img" src={this.props.product.results[0].photos[0].url}/>
            <div className="product-info">
              <div>{this.props.product.category}</div>
              <div className="product-name">{this.props.product.name}</div>
              <Price product={this.props.product}/>
              <Rating rating={this.props.product.rating.ratings} />
            </div>
          </div>
        </li>
      )
    }
  }
}

CardTemplate.propTypes = {
  id: PropTypes.number,
  deselect: PropTypes.func,
  product: PropTypes.string
}

export default CardTemplate;