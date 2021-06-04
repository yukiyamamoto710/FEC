import React from 'react';
import Stars from './star.jsx';

const Head = (props)=> {
  const { user, date, rate }  = props;
  let datestr = date.slice(0, 10)
  return (
    <div style={ base }>
      <Stars rate = {rate}/>
      <div>{user}, {datestr}</div>
    </div>
  )
}

export default Head

const base = {
  display:'flex',
  justifyContent:'space-between',
  fontSize: '10px'
}
