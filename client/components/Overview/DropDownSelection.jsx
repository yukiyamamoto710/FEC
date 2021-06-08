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
    this.props.callback(this.props.size, this.props.quantity);
  }

  render() {
    return(
      <option className = 'selection' value = {this.props.size} onClick = {this.handleClick}>{this.props.size}</option>
    );
  }


}









export default DropDownSelection;