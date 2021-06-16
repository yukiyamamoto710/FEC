import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ratingGET from './func/ratingGet/ratingGet';
import Rating from './Rating/Rating';
import ReviewListBase from './ReviewListBase/ReviewListBase';
import useReview from './useReview';

export default function Reviews(props) {
  const { id } = props;
  const {
    isRatingLoad,
    countStars,
    rating,
    listUserReview,
    listReported,
    starClicked,
    addUserReview,
    addListReported,
  } = useReview(id);

  if (isRatingLoad) {
    return (
      <div
        data-testid="reviewContainer"
        className="reviewContainer"
      >
        <Rating
          rating={rating}
          starClicked={starClicked}
        />
        <ReviewListBase
          rating={rating}
          id={id}
          listReported={listReported}
          addListReported={addListReported}
          listUserReview={listUserReview}
          addUserReview={addUserReview}
          stars={countStars}
        />
      </div>
    );
  }
  return <div> Loading... </div>;
}

Reviews.propTypes = {
  id: PropTypes.number,
};

Reviews.defaultProps = {
  id: 25711,
};
