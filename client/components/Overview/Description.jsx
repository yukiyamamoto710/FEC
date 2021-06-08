/* eslint-disable react/prop-types */
import React from 'react';
import DropDown from './DropDown.jsx';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skuSizeQuant: '',
      skuQuantSelected: 0
    }
    this.changeSKU = this.changeSKU.bind(this);
    this.changeQuant = this.changeQuant.bind(this);
  }

  changeSKU(size) {
    this.setState({
      skuSizeQuant: size,
    });
  }

  changeQuant(quant) {
    this.setState({
      skuQuantSelected: quant
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
        <DropDown name = 'Quantity v'  quant = {this.state.skuSizeQuant} callback = {this.changeQuant}/>
        <button>Add to Bag +</button>
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