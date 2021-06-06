import React from 'react';
import CardTemplate from './CardTemplate.jsx';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitAdded: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      outfitAdded: true
    })
    this.props.addToOutfit();
  }

  render() {
    if (!this.state.outfitAdded) {
      return (
        <div className="container">
          <h3 className="related-products">YOUR OUTFIT</h3>
          <ul className="carousel">
            <li className="card empty-card">
              <button className="add-button" onClick={this.handleClick}>+</button>
              Add to Outfit
            </li>
          </ul>
          <div className="button-wrapper">
            <button className="slideLeft">Left</button>
            <button className="slideRight">Right</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h3 className="related-products">YOUR OUTFIT</h3>
          <ul className="carousel">
            <li className="card empty-card">
                <button className="add-button" onClick={this.handleClick}>+</button>
                Add to Outfit
            </li>
            {this.props.selectedItemsList.map(product=>
              <CardTemplate key={product.id} product={product} />
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
}

export default Outfit;