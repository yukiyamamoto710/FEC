import React from 'react';

const Stars = (props) =>{
  const { rate } = props;
  let num1 = Math.floor(rate) || 0;
  let num2 = 0;
  if(num1 !== rate){
    num2 = 1;
  }
  let num = 5 - num2 - num1;
  return (
    <div>
      {num1 !== 0?[...Array(num1)].map((i, index)=>{
        return <img src={'star3.svg'} key= {index} ></img>
      }):null}
      {(num2 ===1)?<img src={'star4.svg'}></img>:null}
      {num !== 0?[...Array(num)].map((i, index)=>{
        return <img src={'star5.svg'} key= {index}></img>
      }):null}
    </div>

  )
}

export default Stars

