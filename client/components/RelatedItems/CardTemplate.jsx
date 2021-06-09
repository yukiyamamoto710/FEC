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
    this.changeMainImage = this.changeMainImage.bind(this);
  }

  componentDidMount() {
    this.setState({
      mainImage: this.props.product.results[0].photos[0].url
    })
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

  changeMainImage(url) {
    this.setState({
      mainImage: url
    })
  }

  render() {
    const {cardname, product, deselect, relatedId, changeProductId, id} = this.props;
    if (cardname === "outfit") {
      // if it is an outfit card
      return (
        <li className="card outfit">
          <div className="parent">
            <span className="close" onClick={()=>deselect()}>&#9447;</span>
            <img className="related-product-img" src={this.state.mainImage}/>
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
        <li className="card" onClick={()=>changeProductId(relatedId)}>
          <div className="parent">
            {this.state.seen ?
            <Comparison togglePop={this.togglePop} product={product} id={id}/> : null}
            <span className="star" onClick={this.togglePop}>&#9734;</span>
            <img className="related-product-img" src={this.state.mainImage} onMouseOver={this.displayAdditionalImages} />
            {!this.state.display ? null: <AdditionalImages images={this.state.additionalImages} changeMainImage={this.changeMainImage}/>}
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

// additional images should be clickable
// onMouseOut={this.hideAdditionalImages}

CardTemplate.propTypes = {
  cardname: PropTypes.string,
  deselect: PropTypes.func,
  product: PropTypes.object,
  relatedId: PropTypes.number,
  changeProductId: PropTypes.func
}

export default CardTemplate;