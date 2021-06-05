import React from 'react';

const Button = (props) =>{
  const { more, add } = props;
  return (
    <div style= {style}>
      <button style={button} onClick = {more}>MORE REVIEWS</button>
      <button style={button} onClick = {add}>ADD A REVIEWS +</button>
    </div>
  )
}

export default Button;

const style = {
  display:'flex',
  justifyContent: 'left',
  height: '50px',
  padding: '10px',
}

const button = {
  backgroundColor:'white',
  width: '120px',
  padding: '5px',
  fontSize: '10px',
  margin: '5px',
  fontWeight:'bold'
}