/* eslint-disable react/prop-types */
import React from 'react';

const AddToCart = (props) => {

  var handleClick = () => {
    props.callback({
      style: props.style,
      size: props.size,
      quantity: props.quantity
    });
  }

  if(props.style !== '' && props.size !== '' && props.quantity === 0) {
    return (
      <div>Please Select Quantity</div>
    )
  }
  return (
    <button onClick = {handleClick}>Add to Cart</button>
  )
}





export default AddToCart;