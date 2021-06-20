/* eslint-disable react/prop-types */
import React from 'react';
import DropDownSelection from './DropDownSelection.jsx'

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      style: '',
      price: 0,
      name: '',
      quant: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.showSize = this.showSize.bind(this);
    this.showQuantity = this.showQuantity.bind(this);
    this.storeSize = this.storeSize.bind(this);
    this.storeQuantity = this.storeQuantity.bind(this);
  }

  componentDidMount() {
    this.setState({name: this.props.name});
  }

  componentDidUpdate (prevProps) {
    if(this.props.changed !== prevProps.changed) {
      this.setState({name: this.props.name});
    }

  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  storeSize(size, quantity, style, price, sku) {

    this.props.callback(size, style, sku);
    this.setState({name: size});
  }

  storeQuantity(quantity) {
    this.props.callback(quantity);
    this.setState({
      name: quantity,
      quant: quantity,
    });
  }

  storeStyle(style, price) {
    this.props.callback(style, price);
  }

  showSize(name) {
    var objKeys = Object.keys(this.props.skus);

    return(
      <div className = 'dropdown'>
        <button data-testid = 'dropdown' onClick = {this.handleClick} className = 'dropbtn'>{this.state.name}
          <div className = {name}>
            {objKeys.map((item, index) => {
              return(
                <DropDownSelection key = {index} style = {this.props.style} size = {this.props.skus[item].size} quantity = {this.props.skus[item].quantity} callback = {this.storeSize} sku = {item}/>
              )
            })}
          </div>
        </button>
      </div>
    )
  }

  showQuantity(name) {
    var quantity = this.props.quant <= 16 ? this.props.quant : 16;
    var selectArray = [];
    for(var i = 0; i < quantity; i++) {
      selectArray.push(i);
    }
    return(
      <div className = 'dropdown'>
        <button data-testid = 'dropdown' onClick = {this.handleClick} className = 'dropbtn'>{this.state.name}
          <div className = {name}>
            {selectArray.map((item, index) => {
              return(
                <DropDownSelection key = {index} size = {item} quantity = {item} callback = {this.storeQuantity}/>
              )
            })}
          </div>
        </button>
      </div>
    )
  }

  render() {
    var name;
    //console.log('this is skus', this.props.skus);
    if(this.state.clicked === false) {
      name = 'dropdown-content'
    } else {
      name = 'show-content'
    }
    if(this.props.name === 'Select Size') {
      return(
        this.showSize(name)
      );
    } else {
      return(
        this.showQuantity(name)
      );
    }

  }
}


export default DropDown;


/*

return(
      <form className = 'dropdown'>
        <label htmlFor = {name}>{this.state.name}</label>
          <select name = {name} id = {name}>
            {objKeys.map((item, index) => {
              return(
                <DropDownSelection key = {index} size = {this.props.skus[item].size} callback = {this.storeSize}/>
              )
            })}
          </select>
      </form>
    )

*/