import React from 'react';
////////////need to find 1/4 star 3/4 star icons
const Stars = (props) =>{
  const { rate, starCK, name } = props;
  let num1 = Math.floor(rate) || 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (rate < num1 + 0.25) {
    num2 = 0;
  } else if (rate < num1 + 0.5) {
    num2 = 1;
  } else if (rate < num1 + .075) {
    num3 = 1;
  } else if ( rate < num1 + 1){
    num4 = 1;
  }
  let num = 5 - num2 - num3 - num4 - num1;
  return (
    <div>
      { num1 !== 0?
        [ ...Array(num1) ].map(( i, index ) =>{
        return (
          <img
            src = { 'star3.svg' }
            key = { index }
            id = { index - num1 + 1 }
            onClick = { starCK }
            name = { name } />
        )})
      : null }
      { (num2 === 1)?
        <img src = { 'star5.svg' } />:null }
      { (num3 === 1)?
        <img src = { 'star4.svg' } /> : null }
      { (num4 === 1)?
        <img src={ 'star3.svg' } /> : null }
      { num !== 0?
        [ ...Array(num) ].map(( i, index ) =>{
        return (
          <img
            src = { 'star5.svg' }
            key = { index }
            id = { index + 1 }
            onClick = { starCK }
            name = { name } />
        )})
      : null }
    </div>
  )
}

export default Stars

