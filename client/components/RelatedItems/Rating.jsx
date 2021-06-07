import React from 'react';
import Stars from '../Reviews/star.jsx';

const Rating = (props) => {
  var rates = Object.keys(props.rating).sort();
  let size = rates.reduce((sum, i)=>(sum + Number(props.rating[i])),0);
  var total = rates.reduce((sum, i)=>(sum + Number(i) * Number(props.rating[i])), 0);
  let ave  = total/size;

  return (
    <Stars rate={ave} />
  )
}

// Rating.propTypes = {
//   rating: 'number'
// }

export default Rating;