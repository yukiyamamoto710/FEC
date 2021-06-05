import React from 'react';
import Sorted from './sorted.jsx'

const Rbheader = ({ length, func })=>{

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