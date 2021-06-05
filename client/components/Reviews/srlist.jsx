import React from 'react';
import StarRating from './starrating.jsx';

const SRList = (props)=>{
  const { star, per } = props;
  return (
    <div>
      {star.map(i=>{
        return(
          <div key = {i} style ={base}>
            <div style = {text}>{i} Stars</div>
            <StarRating per = {per[i-1]}/>
          </div>
        )
      })}
    </div>
  )
}

export default SRList;
const base = {
  display:'flex',
  marginTop:'10px'
}
const text ={
  fontSize:'10px',
  borderBottom:'1px solid black',
  marginRight:'10px'
}