import React from 'react';
import OutfitCard from './OutfitCard.jsx';
import PropTypes from 'prop-types';

class Outfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      displayed: [] // a list of outfits. display four at a time
    }
    this.nextProduct = this.nextProduct.bind(this);
    this.prevProduct = this.prevProduct.bind(this);
  }

  componentDidMount() {
    this.setState({
      displayed: [...this.props.selectedItemsList].slice(0, 3)
    })
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.selectedItemsList) !== JSON.stringify(this.props.selectedItemsList)) {
      this.setState({
        displayed: [...this.props.selectedItemsList].slice(0, 3)
      })
    }
  }

  nextProduct() {
    this.setState({
      idx: this.state.idx+1,
      displayed: [...this.props.selectedItemsList].slice(this.state.idx+1, this.state.idx+4)
    })
  }

  prevProduct() {
    this.setState({
      idx: this.state.idx-1,
      displayed: [...this.props.selectedItemsList].slice(this.state.idx-1, this.state.idx+2)
    })
  }

  render() {
    const {selectedItemsList, addToOutfit, removeFromOutfit} = this.props;
    const {idx, displayed} = this.state;
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
          {!displayed.length ? null: displayed.map(product=>
            <OutfitCard key={product.id} product={product} removeFromOutfit={removeFromOutfit}/>
            )}
          <button className="slideRight"
            onClick={this.nextProduct}
            hidden={selectedItemsList.length < 3}
            disabled={idx === selectedItemsList.length-3}>
              &gt;
          </button>
        </ul>
      </div>
    )
  }
}

Outfits.propTypes = {
  selectedItemsList: PropTypes.array,
  addToOutfit: PropTypes.func,
  removeFromOutfit: PropTypes.func
}

export default Outfits;
