import React from 'react';
import CardTemplate from './CardTemplate.jsx';
import Comparison from './Comparison.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      displayed: []
    };
    this.nextProduct = this.nextProduct.bind(this);
    this.prevProduct = this.prevProduct.bind(this);
  }

  componentDidMount() {
    this.setState({
      displayed: [...this.props.relatedItemsList].slice(0, 4)
    })
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
    return (
      <div className="container">
        <h3 className="related-products">RELATED PRODUCTS</h3>
        <ul className="carousel">
          <button className="slideLeft"
            onClick={this.prevProduct}
            hidden={this.state.idx === 0}>
              &lt;
          </button>
          {this.state.displayed.map(product=>
            <CardTemplate key={product.id} product={product}/>
            )}
          <button className="slideRight"
            onClick={this.nextProduct}
            disabled={this.state.idx === this.props.relatedItemsList.length-4}>
              &gt;
          </button>
        </ul>
      </div>
    )
  }
}

export default RelatedProducts;
