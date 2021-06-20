import React from 'react';
import Stars from '../Reviews/Stars/Stars';
import PropTypes from 'prop-types';

const Rating = ({ratings}) => {
  var rates = Object.keys(ratings).sort();
  var size = rates.reduce((sum, i)=>(sum + Number(ratings[i])),0);
  var total = rates.reduce((sum, i)=>(sum + Number(i) * Number(ratings[i])), 0);
  var ave  = total/size;

  return (
    <div>
     <Stars rate={ave} name={'name'} classNameForSize={'msgStar'}/>
    </div>
  )
}

Rating.propTypes = {
  ratings: PropTypes.object
}

export default Rating;
