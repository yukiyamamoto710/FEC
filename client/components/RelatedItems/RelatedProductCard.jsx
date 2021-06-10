import React from 'react';
import Rating from './Rating.jsx';
import Comparison from './Comparison.jsx';
import Price from './Price.jsx';
import AdditionalImages from './AdditionalImages.jsx';
import PropTypes from 'prop-types';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '', // url of the main image
      seen: false, // whether a modal is displayed or not
      display: false, // whether additional images are displayed or not
      additionalImages: []
    }
    this.togglePop = this.togglePop.bind(this);
    this.displayAdditionalImages = this.displayAdditionalImages.bind(this);
    this.hideAdditionalImages = this.hideAdditionalImages.bind(this);
    this.changeMainImage = this.changeMainImage.bind(this);
    this.changeProductId = this.changeProductId.bind(this);
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

  changeProductId(e) {
    if (["card", "related-product-img", "product-info", "product-category", "product-name", "product-price"].indexOf(e.target.className) !== -1) {
      this.props.changeProductId(this.props.product.id);
    }
  }

  render() {
    const {id, product, currentItem} = this.props;
    return (
      <li className="card" onClick={this.changeProductId}>
        <div className="parent">
          {this.state.seen ?
          <Comparison togglePop={this.togglePop} product={product} id={id} currentItem={currentItem}/> : null}
          <div onMouseOver={this.displayAdditionalImages} onMouseLeave={this.hideAdditionalImages}>
            <span className="star" onClick={this.togglePop}>&#9734;</span>
            <img className="related-product-img" src={this.state.mainImage} />
            {!this.state.display ? null: <AdditionalImages images={this.state.additionalImages} changeMainImage={this.changeMainImage}/>}
          </div>
          <div className="product-info">
            <div className="product-category">{product.category}</div>
            <div multiple data-testid="product-name" className="product-name">{product.name}</div>
            <Price product={product}/>
            <Rating rating={product.rating.ratings} />
          </div>
        </div>
      </li>
    )
  }
}

RelatedProductCard.propTypes = {
  id: PropTypes.number,
  cardname: PropTypes.string,
  deselectOutfit: PropTypes.func,
  product: PropTypes.object,
  currentItem: PropTypes.object,
  changeProductId: PropTypes.func
}

export default RelatedProductCard;