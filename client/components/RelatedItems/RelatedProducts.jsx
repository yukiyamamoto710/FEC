import React from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import PropTypes from 'prop-types';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0, // keep track of which products are currently displaying
      displayed: [] // display only four at a time
    };
    this.nextProduct = this.nextProduct.bind(this);
    this.prevProduct = this.prevProduct.bind(this);
  }

  componentDidMount() {
    this.setState({
      displayed: [...this.props.relatedItemsList].slice(0, 4)
    })
  }

  componentDidUpdate(prevProps) {
    // does JSON.stringify affect performance?
    if (JSON.stringify(prevProps.relatedItemsList) !== JSON.stringify(this.props.relatedItemsList)) {
      this.setState({
        displayed: [...this.props.relatedItemsList].slice(0, 4)
      })
    }
  }

  nextProduct() {
    this.setState({
      idx: this.state.idx+1,
      displayed: [...this.props.relatedItemsList].slice(this.state.idx+1, this.state.idx+5)
    })
  }

  prevProduct() {
    this.setState({
      idx: this.state.idx-1,
      displayed: [...this.props.relatedItemsList].slice(this.state.idx-1, this.state.idx+3)
    })
  }

  render() {
    const {relatedItemsList, id, changeProductId, currentItem} = this.props;
    const {idx, displayed} = this.state;
    return (
      <div className="container">
        <h3 className="related-products">RELATED PRODUCTS</h3>
        <ul className="carousel">
          <button className="slideLeft"
            onClick={this.prevProduct}
            hidden={idx === 0}
            data-testid="slideLeft">
              &lt;
          </button>
          {displayed.map(product=>
            <RelatedProductCard key={product.id} product={product} id={id} changeProductId={changeProductId} currentItem={currentItem}/>
            )}
          <button className="slideRight"
            onClick={this.nextProduct}
            disabled={relatedItemsList.length < 4 || idx === relatedItemsList.length-4}
            data-testid="slideRight">
              &gt;
          </button>
        </ul>
      </div>
    )
  }
}

RelatedProducts.propTypes = {
  id: PropTypes.number,
  relatedItemsList: PropTypes.array,
  changeProductId: PropTypes.func,
  currentItem: PropTypes.object
}

export default RelatedProducts;
