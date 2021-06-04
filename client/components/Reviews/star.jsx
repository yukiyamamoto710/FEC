import React from 'react';

const Stars = (props) =>{
  const { rate } = props;
  let num = 5-rate;
  return (
    <div>
      {[...Array(rate)].map((i, index)=>{
        return <img src={'star3.svg'} key= {index} ></img>
      })}
      {[...Array(num)].map((i, index)=>{
        return <img src={'star5.svg'} key= {index}></img>
      })}
    </div>

  )
}

export default Stars

