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
      mainImage: '',
      seen: false,
      display: false,
      additionalImages: []
    }
    this.togglePop = this.togglePop.bind(this);
    this.displayAdditionalImages = this.displayAdditionalImages.bind(this);
    this.hideAdditionalImages = this.hideAdditionalImages.bind(this);
    this.changeMainImage = this.changeMainImage.bind(this);
    this.changeProductId = this.changeProductId.bind(this);
  }

  componentDidMount() {
    var defaultIdx = 0;
    for (var i = 0; i < this.props.product.results.length; i++) {
      if (this.props.product.results[i]['default?']) {
        defaultIdx = i;
      }
    }
    this.setState({
      mainImage: this.props.product.results[defaultIdx].photos[0].url
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
      <li data-testid="card" className="card" onClick={this.changeProductId}>
        <div className="parent">
          {this.state.seen ?
          <Comparison
            togglePop={this.togglePop}
            product={product} id={id}
            currentItem={currentItem}
          /> : null}
          <div data-testid="related-product-card"
            onMouseOver={this.displayAdditionalImages}
            onMouseLeave={this.hideAdditionalImages}>
            <span data-testid="star"
              className="star"
              onClick={this.togglePop}>
                &#9734;
            </span>
            <div className="related-product-img">
            <img className="related-product-img"
              src={this.state.mainImage}
              alt={product.name}
            />
            </div>
            {!this.state.display ? null:
            <AdditionalImages
              images={this.state.additionalImages}
              changeMainImage={this.changeMainImage}/>}
          </div>
          <div className="product-info">
            <div data-testid="category"
              className="product-category">
                {product.category}
            </div>
            <div data-testid="name"
              className="product-name">
                {product.name}
            </div>
            <Price product={product}/>
            <Rating ratings={product.ratings} />
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