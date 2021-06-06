import React from 'react';
import Sorted from './sorted.jsx'

const Rbheader = (props)=>{
  const { length, func } = props;
  return (
    <div style={style}>
      {`${length} reviews, sorted by`}
      <Sorted func={ func }/>
    </div>
  )
}

export default Rbheader;

const style = {
  display:'flex',
  fontSize:'10px',
}