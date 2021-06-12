import React from 'react';
import PropTypes from 'prop-types';
import StarRatingBar from './StarRatingBar/StarRatingBar';

const StarList = (props) => {
  const { stars, perArray, starsClicked } = props;
  return (
    <div
      data-testid="starList"
      className="starListContainer"
    >
      {stars.map((i) => (
        <div key={i}>
          <div
            className="starListBase"
          >
            <button
              type="button"
              className="starListText"
              onClick={() => starsClicked(Number(i))}
            >
              {`${i} Stars`}
            </button>
            <StarRatingBar per={perArray[i - 1]} />
          </div>
        </div>
      ))}
    </div>
  );
};

StarList.propTypes = {
  stars: PropTypes.arrayOf(PropTypes.string),
  perArray: PropTypes.arrayOf(PropTypes.number),
  starsClicked: PropTypes.func,
};

StarList.defaultProps = {
  stars: [],
  perArray: [],
  starsClicked: () => 1,
};

export default StarList;
