import React from 'react';
import Top from './rttop.jsx';
import Message from './message.jsx';
import SRList from './srList.jsx';

const Rating = (props) =>{
  const { rating } = props;
  let obj = {...rating.ratings}
  let key = Object.keys(obj);
  let size = key.reduce((sum, i)=>(sum + Number(obj[i])),0);
  let total = key.reduce((sum, i)=>(sum + Number(i) * Number(obj[i])), 0);
  let ave  = total/size;
  let tNum = Number(rating.recommended.true);
  let fNum = Number(rating.recommended.false);
  let rAve = Math.floor(tNum / ( tNum + fNum ) * 100);
  let text = `${rAve}% of reviews recommend this product`;
  return (
    <div style = {style}>
      <Top rating = { ave }/>
      <Message text={ text } />
      <SRList/>
    </div>
  )
}

export default Rating;

const style = {
  width:'30%'
}