import React from 'react';
import PropTypes from 'prop-types';

const ButtonQA = (props) => {
  const {
    getMoreReviews,
    addUserReview,
    isMoreReviews,
  } = props;

  const handleClickMoreReview =()=>{
    getMoreReviews()
  }

  const handleClickAddReview =()=>{
    addUserReview()
  }

  return (
    <div
      data-testid="addmoreBtn"
      className="add_moreBTNContainer"
    >
      {isMoreReviews === true
        ? (
          <button
            data-testid="moreBtn"
            className="add_moreBTN"
            type="button"
            onClick={handleClickMoreReview}
          >
            MORE QUESTIONS
          </button>
        ) : null }
      <button
        data-testid="AddBtn"
        className="add_moreBTN"
        type="button"
        onClick={handleClickAddReview}
      >
        ADD QUESTION
      </button>
    </div>
  );
};

ButtonQA.propTypes = {
  isMoreReviews: PropTypes.bool,
  addUserReview: PropTypes.func,
  getMoreReviews: PropTypes.func,
};

ButtonQA.defaultProps = {
  isMoreReviews: true,
  addUserReview: () => (1),
  getMoreReviews: () => (1),
};

export default ButtonQA;
