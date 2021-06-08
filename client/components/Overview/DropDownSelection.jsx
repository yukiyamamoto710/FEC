/* eslint-disable react/prop-types */
import React from 'react';

function DropDownSelection(props) {

  var handleClick = (size) => {
    props.callback(size);
  }

  return(
    <div onClick = {handleClick(props.size)}>{props.size}</div>
  )


}









export default DropDownSelection;