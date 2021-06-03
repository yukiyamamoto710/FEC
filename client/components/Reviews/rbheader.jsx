import React from 'react';

const Rbheader = (props)=>{
  const { length, func } = props;
  return (
    <div style={style}>{`${length} reviews, sorted by ${func}`}</div>
  )
}

export default Rbheader;

const style = {
  fontSize:'10px'
}