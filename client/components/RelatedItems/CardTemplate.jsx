import React from 'react';
import Rating from './Rating.jsx';
import Comparison from './Comparison.jsx';
import Price from './Price.jsx';
import AdditionalImages from './AdditionalImages.jsx';
import PropTypes from 'prop-types';

class CardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false, // whether a modal is displayed or not
      display: false, // whether additional images are displayed or not
      additionalImages: []
    }
    this.togglePop = this.togglePop.bind(this);
    this.displayAdditionalImages = this.displayAdditionalImages.bind(this);
    this.hideAdditionalImages = this.hideAdditionalImages.bind(this);
  }

  togglePop() {
    this.setState({
      seen: !this.state.seen
    })
  }

  displayAdditionalImages() {
    var photosArr = this.props.product.results.map(style=>style.photos[0].thumbnail_url);
    this.setState({
      display: true,
      additionalImages: photosArr
    })
  }

  hideAdditionalImages() {
    this.setState({
      display: false
    })
  }

  render() {
    const {id, product, deselect} = this.props;
    if (id === "outfit") {
      // if it is an outfit card
      return (
        <li className="card outfit">
          <div className="parent">
            <span className="close" onClick={()=>deselect()}>&#9447;</span>
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
    } else {
      // else it is an related item card
      return (
        <li className="card">
          <div className="parent">
            {this.state.seen ?
            <Comparison togglePop={this.togglePop} product={product} id={id}/> : null}
            <span className="star" onClick={this.togglePop}>&#9734;</span>
            <img className="related-product-img" src={product.results[0].photos[0].url} onMouseOver={this.displayAdditionalImages} onMouseOut={this.hideAdditionalImages}/>
            {!this.state.display ? null: <AdditionalImages images={this.state.additionalImages}/>}
            <div className="product-info">
              <div className="product-category">{product.category}</div>
              <div className="product-name">{product.name}</div>
              <Price product={product}/>
              <Rating rating={product.rating.ratings} />
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
  product: PropTypes.object
}

export default CardTemplate;