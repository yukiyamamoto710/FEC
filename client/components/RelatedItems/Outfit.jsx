import React from 'react';
import CardTemplate from './CardTemplate.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      displayed: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.nextProduct = this.nextProduct.bind(this);
    this.prevProduct = this.prevProduct.bind(this);
  }

  handleClick() {
    this.props.addToOutfit();
  }

  nextProduct() {
    this.setState({
      idx: this.state.idx+1,
      displayed: [...this.props.selectedItemsList].slice(this.state.idx+1, this.state.idx+5)
    })
  }

  prevProduct() {
    this.setState({
      idx: this.state.idx-1,
      displayed: [...this.props.selectedItemsList].slice(this.state.idx-1, this.state.idx+3)
    })
  }

  render() {
    return (
      <div className="container">
        <h3 className="related-products">YOUR OUTFIT</h3>
        <ul className="carousel">
          <button className="slideLeft"
            onClick={this.prevProduct}
            disabled={this.state.idx === 0}
            hidden={this.props.selectedItemsList.length < 4}>
              &lt;
          </button>
          <li className="card empty-card">
              <button className="add-button" onClick={this.handleClick}>+</button>
              Add to Outfit
          </li>
          {this.props.selectedItemsList.map(product=>
            <CardTemplate key={product.id} product={product} />
            )}
          <button className="slideRight"
            onClick={this.nextProduct}
            disabled={this.state.idx === this.props.selectedItemsList.length-4}
            hidden={this.props.selectedItemsList.length < 4}>
              &gt;
          </button>
        </ul>
      </div>
    )
  }
}

export default Outfit;
