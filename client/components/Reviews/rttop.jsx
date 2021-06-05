import React from 'react';
import Stars from './star.jsx';

const Top = (props) => {
  const { rating } = props;
    return (
      <div style ={ base }>
        <div style = { text }>{rating}</div>
        <Stars rate = {rating}/>
      </div>
    )
}
export default Top;

const base = {
  display:'flex',
}

const text = {
  fontSize: '40px',
  fontWeight:'bold'
}