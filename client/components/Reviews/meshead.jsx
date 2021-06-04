import React from 'react';

const Head = (props)=> {
  const { user, date, rate }  = props;
  let datestr = date.slice(0, 10)
  return (
    <div style={ base }>
      <div>STARS!!!!!</div>
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
