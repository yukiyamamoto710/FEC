import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import putHelpQA from './putHelpQA';

const QAHelp = (props) => {
  const {
    target,
    countHelpful,
    handleClick,
    reviewId,
  } = props;

  const [isClicked, setIsClicked] = useState(false);
  const [countYes, setCountYes] = useState(countHelpful);

  useEffect(() => {
    setCountYes(countHelpful);
    setIsClicked(false);
  }, [reviewId]);

  useEffect(() => {
    if (isClicked) {
      putHelpQA(target, reviewId);
    }
  }, [isClicked]);

  const handleClickYes = () => {
    if (!isClicked) {
      setIsClicked(true);
      setCountYes(countYes + 1);
    }
  };

  return (
    <div>
      <button
        data-testid="helpfulButton"
        className="helpfulButton"
        type="button"
        onClick={handleClickYes}
      >
        {`Helpful? Yes (${countYes}) `}
      </button>
      {target === "answers"
      ?
        <button
          data-testid="report"
          className="helpfulButton"
          type="button"
          onClick={()=>handleClick(reviewId)}
        >
          {' | report'}
        </button>
      :
        <button
          data-testid="report"
          className="helpfulButton"
          type="button"
          onClick={()=>handleClick(reviewId)}
        >
          {'add Answer'}
        </button>
      }

    </div>
  );
};

QAHelp.propTypes = {
  countHelpful: PropTypes.number,
  handleClick: PropTypes.func,
  reviewId: PropTypes.number,
  target: PropTypes.string,
};

QAHelp.defaultProps = {
  countHelpful: 0,
  handleClick: ()=>1,
  reviewId: 25711,
  target:'',
};

export default QAHelp;
