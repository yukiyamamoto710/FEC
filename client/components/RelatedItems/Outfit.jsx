import React from 'react';
import CardTemplate from './CardTemplate.jsx';

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
    return (
      <div className="container">
        <h3 className="outfit">YOUR OUTFIT</h3>
        <ul className="carousel">
          <button className="slideLeft"
            onClick={this.prevProduct}
            hidden={this.state.idx === 0}>
              &lt;
          </button>
          <li className="card empty">
              <button className="add-button" onClick={()=>this.props.addToOutfit()}>+</button>
              <p className="add-message">Add to Outfit</p>
          </li>
          {this.state.deselect ? null: this.props.selectedItemsList.map(product=>
            <CardTemplate id={"outfit"} key={product.id} product={product} deselect={this.deselectCurrentOutfit}/>
            )}
          <button className="slideRight"
            onClick={this.nextProduct}
            hidden={this.props.selectedItemsList.length < 4}
            disabled={this.state.idx === this.props.selectedItemsList.length-4}>
              &gt;
          </button>
        </ul>
      </div>
    )
  }
}

// Outfit.propTypes = {
//   selectedItemsList: [],
//   addToOutfit: 'func'
// }

export default Outfit;
