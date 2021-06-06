import React from 'react';
import Top from './rttop.jsx';
import Message from './message.jsx';
import SRList from './srList.jsx';
import Size from './size.jsx';
import Comfort from './comfort.jsx';

const Rating = (props) =>{
  const { rating } = props;
  let obj = {...rating.ratings}
  let key = Object.keys(obj).sort();
  let biggest = Number(key[key.length-1]);
  let num =1;
  let keyArray = [...Array(biggest)].map((i)=>(String(num++)))
  let valueArray =keyArray.map(i=>{
    if(obj[i] !== undefined){
      return Number(obj[i])
    } else {
      return 0;
    }
  })
  let size = key.reduce((sum, i)=>(sum + Number(obj[i])),0);
  let perArray = valueArray.map(i=>(Math.floor(i / size * 100)));
  let total = key.reduce((sum, i)=>(sum + Number(i) * Number(obj[i])), 0);
  let ave  = total/size;
  let tNum = Number(rating.recommended.true);
  let fNum = Number(rating.recommended.false);
  let rAve = Math.floor(tNum / ( tNum + fNum ) * 100);
  let text = `${rAve}% of reviews recommend this product`;
  return (
    <div style = {style}>
      <Top rating = { ave }/>
      <Message text={ text } style ={ msg }/>
      <SRList star={keyArray.reverse()} per={perArray.reverse()}/>
      <Size value = {rating.characteristics.Size.value}/>
      <Comfort value = {rating.characteristics.Comfort.value}/>
    </div>
  )
}

export default Rating;

const style = {
  width:'30%',
  marginTop:'20px'
}

const msg = {
  fontSize:'10px',
  marginTop:'10px'
}