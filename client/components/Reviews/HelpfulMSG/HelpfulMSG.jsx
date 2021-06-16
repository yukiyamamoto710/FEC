import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import putHelpfulReview from '../func/putHelpfulReview/putHelpfulReview';
import putReportReview from '../func/putReportReview/putReportReview';

const HelpfulMSG = (props) => {
  const {
    countHelpful,
    countNotHelpful,
    reported,
    reviewId,
  } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [countYes, setCountYes] = useState(countHelpful);
  const [countNo, setCountNo] = useState(countNotHelpful);

  useEffect(() => {
    setCountYes(countHelpful);
    setCountNo(countNotHelpful);
    setIsClicked(false);
  }, [reviewId]);

  useEffect(() => {
    if (isClicked) {
      putHelpfulReview({ review_id: Number(reviewId) }, reviewId);
      // axios.put('/reviews/helpful', { review_id: Number(reviewId) })
      //   .then()
      //   .catch();
    }
  }, [isClicked]);

  const handleClickYes = () => {
    if (!isClicked) {
      setIsClicked(true);
      setCountYes(countYes + 1);
    }
  };

  const handleClickNo = () => {
    if (!isClicked) {
      setIsClicked(true);
      setCountNo(countNo + 1);
    }
  };

  const handleClickReport = () => {
    putReportReview({ review_id: Number(reviewId) }, reviewId);
    reported(reviewId);
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
      <button
        data-testid="nothelpfulButton"
        className="helpfulButton"
        type="button"
        onClick={handleClickNo}
      >
        {` No (${countNo}) `}
      </button>
      <button
        data-testid="report"
        className="helpfulButton"
        type="button"
        onClick={handleClickReport}
      >
        {' | report'}
      </button>
    </div>
  );
};

HelpfulMSG.propTypes = {
  countHelpful: PropTypes.number,
  countNotHelpful: PropTypes.number,
  reviewId: PropTypes.number,
  reported: PropTypes.func,
};

HelpfulMSG.defaultProps = {
  countHelpful: 0,
  countNotHelpful: 0,
  reported: () => 1,
  reviewId: 25711,
};

export default HelpfulMSG;
