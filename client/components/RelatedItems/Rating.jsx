import React from 'react';
import Stars from '../Reviews/star.jsx';
import PropTypes from 'prop-types';

const Rating = ({rating}) => {
  var rates = Object.keys(rating).sort();
  let size = rates.reduce((sum, i)=>(sum + Number(rating[i])),0);
  var total = rates.reduce((sum, i)=>(sum + Number(i) * Number(rating[i])), 0);
  let ave  = total/size;

  return (
    <Stars rate={ave} />
  )
}

Rating.propTypes = {
  rating: PropTypes.number
}

export default Rating;