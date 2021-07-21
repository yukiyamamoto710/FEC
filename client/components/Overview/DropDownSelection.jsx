/* eslint-disable react/prop-types */
import React from 'react';

class DropDownSelection extends React.Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    //console.log(this.props.size);
    event.preventDefault();
    //console.log(event.target.value);
    //console.log('dropdownselection propsstyle' , this.props.style.sale_price, this.props.style.original_price, this.props.style.name)
    if(this.props.style !== undefined) {
      var currentPrice = this.props.style.sale_price === null ? this.props.style.original_price : this.props.style.sale_price;
      var styleName = this.props.style.name;
    } else {
      currentPrice = 0;
      styleName = '';
    }

    this.props.callback(this.props.size, this.props.quantity, styleName, currentPrice, this.props.sku);
  }

  render() {
    return(
      <option data-testid = 'options' className = 'selection' value = {this.props.size} onClick = {this.handleClick}>{this.props.size}

      </option>
    );
  }


}



export default DropDownSelection;