import React from 'react';
import PropTypes from 'prop-types';
import ReviewListHeader from './ReviewListHeader/ReviewListHeader';
import ReviewMSGList from './ReviewMSGList/ReviewMSGList';
import Button from '../Button/Button';
import useReviewListBase from './useReviewListBase';
import Monkey from '../Monkey/Monkey';

const ReviewListBase = (props) => {
  const {
    listUserReview,
    listReported,
    addListReported,
    addUserReview,
    rating,
    id,
    stars,
  } = props;

  const {
    isMoreReviews,
    isReviewsLoad,
    listReviews,
    getMoreReviews,
    sortBy,
  } = useReviewListBase(id, listReported, listUserReview, stars);
  if (isReviewsLoad) {
    if (listReviews.length !== 0) {
      return (
        <div
          data-testid="reviewListBase"
          className="reviewListBase"
        >
          <ReviewListHeader
            len={listReviews.length}
            sortBy={sortBy}
          />
          <ReviewMSGList
            listReviews={listReviews}
            reported={addListReported}
          />
          <br />
          <Button
            addUserReview={addUserReview}
            rating={rating}
            isMoreReviews={isMoreReviews}
            getMoreReviews={getMoreReviews}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Monkey />
          <Button
            addUserReview={addUserReview}
            rating={rating}
            isMoreReviews={isMoreReviews}
            getMoreReviews={getMoreReviews}
          />
        </div>
      )
    }
  }
  return <div>loading...</div>;
};

ReviewListBase.propTypes = {
  listUserReview: PropTypes.arrayOf(PropTypes.shape({})),
  listReported: PropTypes.arrayOf(PropTypes.number),
  addListReported: PropTypes.func,
  addUserReview: PropTypes.func,
  rating: PropTypes.shape({
    product_id: PropTypes.string,
  }),
  id: PropTypes.number,
  stars: PropTypes.number,
};

ReviewListBase.defaultProps = {
  listUserReview: [],
  listReported: [],
  addListReported: () => 1,
  addUserReview: () => 1,
  rating: {},
  id: 25711,
  stars: 1,
};
export default ReviewListBase;
