import React from 'react';
import PropTypes from 'prop-types';

const Warning = (props) => {
  const { warningItems, show } = props;
  return (
    <div
      data-testid="WarningContainer"
      className="warningContainer"
    >
      You must enter the following:
      { warningItems.map((i) => (
        <div
          key={i}
          data-testid="WarningItems"
        >
          <div className="warningItems">
            {i}
          </div>
        </div>
      ))}
      <div>
        <div className="warningButtonBG" />
        <button
          data-testid="WarningButton"
          type="button"
          className="warningButton"
          onClick={show}
        >
          Back
        </button>
        <div className="warningButtonPart1" />
        <div className="warningButtonPart2" />
      </div>
    </div>
  );
};

Warning.propTypes = {
  warningItems: PropTypes.instanceOf(Array),
  show: PropTypes.func,
};

Warning.defaultProps = {
  warningItems: [],
  show: () => {},
};

export default Warning;
