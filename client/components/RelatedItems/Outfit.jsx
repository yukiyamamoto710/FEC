import React from 'react';
import CardTemplate from './CardTemplate.jsx';
import PropTypes from 'prop-types';

class Outfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      displayed: [], // currently displayed outfit products
      deselect: false
    }
    this.nextProduct = this.nextProduct.bind(this);
    this.prevProduct = this.prevProduct.bind(this);
    this.deselectCurrentOutfit = this.deselectCurrentOutfit.bind(this);
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

  deselectCurrentOutfit() {
    this.setState({
      deselect: true
    })
  }

  render() {
    const {selectedItemsList, addToOutfit} = this.props;
    const {idx, deselect} = this.state;
    return (
      <div className="container">
        <h3 className="outfit">YOUR OUTFIT</h3>
        <ul className="carousel">
          <button className="slideLeft"
            onClick={this.prevProduct}
            hidden={idx === 0}>
              &lt;
          </button>
          <li className="card empty">
              <button className="add-button" onClick={()=>addToOutfit()}>+</button>
              <p className="add-message">Add to Outfit</p>
          </li>
          {deselect ? null: selectedItemsList.map(product=>
            <CardTemplate cardname={"outfit"} key={product.id} product={product} deselect={this.deselectCurrentOutfit}/>
            )}
          <button className="slideRight"
            onClick={this.nextProduct}
            hidden={selectedItemsList.length < 4}
            disabled={idx === selectedItemsList.length-4}>
              &gt;
          </button>
        </ul>
      </div>
    )
  }
}

Outfit.propTypes = {
  selectedItemsList: PropTypes.array,
  addToOutfit: PropTypes.func
}

export default Outfit;
