/* eslint-disable react/prop-types */
import React from 'react';
import DropDown from './DropDown.jsx';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skuQuant: ''
    }
    this.changeSKU = this.changeSKU.bind(this);
  }

  changeSKU(size) {
    this.setState({
      skuQuant: size,
    });
  }

  render() {
    const { category, name, slogan, description, features } = this.props.descriptions;
    return(
      <>
       <div className = 'describe'>
        <div className = 'category'>{category}</div>
        <h2>{name}</h2>
        <div className = 'price'>${this.props.price}</div>
        <div>{this.props.salePrice}</div>
        <DropDown name = 'Select Size v' skus = {this.props.skus} callback = {this.changeSKU}/>
        <DropDown name = 'Quantity v'  quant = {this.state.skuQuant}/>
        <DropDown name = 'Add to Bag +'  skus = {this.props.skus}/>
       </div>
       <div>{slogan}</div>
       <div className = 'description'>{description}</div>
       <div>{features.map((item, index) => {
          return (
            <div key = {index}>{item.feature} {item.value}</div>
          )
        })}</div>

      </>
    );
  }

}






export default Description;