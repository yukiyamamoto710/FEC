import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating/Rating';
import ReviewListBase from './ReviewListBase/ReviewListBase';
import useReview from './useReview';

export default function Reviews(props) {
  const { id, productRating } = props;
  const {
    countStars,
    listUserReview,
    listReported,
    starClicked,
    addUserReview,
    addListReported,
  } = useReview(id);

  return (
    <div>
      <h3>Reviews & Rating</h3>
      <div
        data-testid="reviewContainer"
        className="reviewContainer"
      >
        <Rating
          rating={productRating}
          starClicked={starClicked}
        />
        <ReviewListBase
          rating={productRating}
          id={id}
          listReported={listReported}
          addListReported={addListReported}
          listUserReview={listUserReview}
          addUserReview={addUserReview}
          stars={countStars}
        />
      </div>
    </div>
  );
}

Reviews.propTypes = {
  productRating: PropTypes.shape({
    characteristics: PropTypes.shape({}),
    product_id: PropTypes.string,
    ratings: PropTypes.shape({}),
    recommended: PropTypes.shape({}),
  }),
  id: PropTypes.number,
};

Reviews.defaultProps = {
  productRating: {
    characteristics: {},
    product_id: "25711",
    ratings: {},
    recommended: {},
  },
  id: 25711,
};
