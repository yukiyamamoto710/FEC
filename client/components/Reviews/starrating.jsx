import React from 'react';

const StarRating = (props)=>{
  const { per } = props;
  const bar = {
    border: '1px solid black',
    width:`${per}%`,
    height:'9px',
    margin:'1px',
    backgroundColor:'black'
  }
  return (
    <div style ={ container }>
      <div style = {bar}></div>
    </div>
  )
}

export default StarRating;

const container ={
  border: '1px solid rgb(240,240,240)',
  width:'130px',
  height:'10px',
  maring: '2px',
  backgroundColor:'rgb(240,240,240)'
}
