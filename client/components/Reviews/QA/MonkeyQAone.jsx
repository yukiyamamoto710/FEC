import React from 'react';
import PropTypes from 'prop-types';

const MonkeyQAone = (props) => {
  const { text, classSize } = props;
  return (
    <div>
      <div className={classSize} data-testid="monkey">
        <div className="noReview1">
          {text}
        </div>
        <div className="noReview2" />
        <div className="noReview3" />
        <div className="noReview4" />
        <div className="noReview5" />
        <div className="noReview6" />
        <div className="noReview7" />
        <div className="noReview8" />
        <div className="noReview9" />
        <div className="noReview10" />
        <div className="noReview11" />
        <div className="noReview12" />
        <div className="noReview13" />
        <div className="noReview14" />
        <div className="QAmonkey4" />
        <div className="noReview16" />
        <div className="noReview17" />
        <div className="noReview18" />
        <div className="noReview19" />
        <div className="noReview20" />
        <div className="noReview21" />
        <div className="noReview22" />
        <div className="QAmonkey3" />
      </div>
    </div>
  )
}
MonkeyQAone.propTypes = {
  text: PropTypes.string,
  classSize: PropTypes.string,
}

MonkeyQAone.defaultProps = {
  text: '',
  classSize: '',
}

export default MonkeyQAone;