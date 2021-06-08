/* eslint-disable react/prop-types */
import React from 'react';
import DropDown from './DropDown.jsx';
import AddToCart from './AddToCart.jsx';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSelected: '',
      skuSizeSelected: '',
      skuQuantSelected: 0,
      inCart: 0,
      cart: []
    }
    this.changeSKU = this.changeSKU.bind(this);
    this.changeQuant = this.changeQuant.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  changeSKU(size, style) {
    this.setState({
      styleSelected: style,
      skuSizeSelected: size,
    });
  }

  changeQuant(quant) {
    this.setState({
      skuQuantSelected: quant
    });
  }

  addItem(obj) {
    //probably have to add a cart component to this later
    var number = this.state.inCart + 1;
    var copy = this.state.cart.slice();
    copy.push(obj);
    this.setState({
      inCart: number,
      cart: copy,
      styleSelected: '',
      skuSizeSelected: '',
      skuQuantSelected: 0
    })
  }



  render() {
    const { category, name, slogan, description, features } = this.props.descriptions;
    //console.log('thispropsstyle in descroption', this.props.style);
    const {styleSelected, skuSizeSelected, skuQuantSelected} = this.state;
    return(
      <>
       <div className = 'describe'>
         <div className = 'category'>{category}</div>
         <h2>{name}</h2>
         <div className = 'price'>${this.props.price}</div>
         <div>{this.props.salePrice}</div>
         <DropDown name = 'Select Size v' style = {this.props.style} skus = {this.props.skus} callback = {this.changeSKU}/>
         <DropDown name = 'Quantity v'  quant = {this.state.skuSizeSelected} callback = {this.changeQuant}/>
         <AddToCart style = {styleSelected} size = {skuSizeSelected} quantity = {skuQuantSelected} callback = {this.addItem}/>
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