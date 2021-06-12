import React from 'react';
import PropTypes from 'prop-types';
import checkStar from '../func/checkStar/checkStar';

const Stars = (props) => {
  const {
    rate,
    classNameForSize,
    starsClicked,
  } = props;

  return (
    <div
      data-testid="stars"
      className="ratingHead"
    >
      {[...Array(5)].map((i, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          <button
            data-testid={`button${index}`}
            type="button"
            id={index + 1}
            className="starButton"
            onClick={starsClicked}
          >
            .
          </button>
          <div className={classNameForSize}>
            <div
              className={`${classNameForSize} ${checkStar(index, rate)}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

Stars.propTypes = {
  rate: PropTypes.number,
  classNameForSize: PropTypes.string,
  starsClicked: PropTypes.func,
};

Stars.defaultProps = {
  rate: 1,
  classNameForSize: '',
  starsClicked: () => 1,
};

export default Stars;
