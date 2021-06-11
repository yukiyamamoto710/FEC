import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    moreReview,
    addReview,
    moreBTNshow,
  } = props;
  return (
    <div
      data-testid="addmoreBtn"
      className="add_moreBTNContainer"
    >
      {moreBTNshow === true
        ? (
          <button
            data-testid="moreBtn"
            className="add_moreBTN"
            type="button"
            onClick={moreReview}
          >
            MORE REVIEWS
          </button>
        ) : null }
      <button
        data-testid="AddBtn"
        className="add_moreBTN"
        type="button"
        onClick={addReview}
      >
        ADD A REVIEWS
      </button>
    </div>
  );
};

Button.propTypes = {
  moreBTNshow: PropTypes.bool,
  addReview: PropTypes.func,
  moreReview: PropTypes.func,
};

Button.defaultProps = {
  moreBTNshow: true,
  addReview: () => (1),
  moreReview: () => (1),
};

export default Button;
