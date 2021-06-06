import React from 'react';
import CardTemplate from './CardTemplate.jsx';
import Comparison from './Comparison.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false
    };
    this.togglePop = this.togglePop.bind(this);
  }

  togglePop() {
    this.setState({
      seen: !this.state.seen
    })
  }

  render() {
    return (
      <div className="container">
        <h3 className="related-products">RELATED PRODUCTS</h3>
        <ul className="carousel">
          {this.state.seen ? <Comparison toggle={this.togglePop} />: null}
          {this.props.relatedItemsList.map(product=>
            <CardTemplate key={product.id} product={product} toggle={this.togglePop}/>
            )}
        </ul>
        <div className="button-wrapper">
          <button className="slideLeft">Left</button>
          <button className="slideRight">Right</button>
        </div>
      </div>
    )
  }
}

export default RelatedProducts;