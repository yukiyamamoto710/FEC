/* eslint-disable react/prop-types */
import React from 'react';
import DropDown from './DropDown.jsx';

function Description(props) {
  const { category, name, id, slogan, description, features } = props.descriptions;


  return(
    <>
     <div className = 'describe'>
      <div className = 'category'>{category}</div>
      <h2>{name}</h2>
      <div className = 'price'>${props.price}</div>
      <div>{props.salePrice}</div>
      <DropDown name = 'Select Size v' skus = {props.skus}/>
      <DropDown name = 'Quantity v'  skus = {props.skus}/>
      <DropDown name = 'Add to Bag +'  skus = {props.skus}/>
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






export default Description;