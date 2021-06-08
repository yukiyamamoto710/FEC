import React from 'react';
import PropTypes from 'prop-types';

const pop = {
  height: '40%',
  width: '40%',
  overflow: 'visible',
  border: '5px solid Red',
  position: 'absolute',
  backgroundColor: 'white',
  zIndex: '99',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px',
};

const btn = {
  width: '100px',
  justifyContent: 'center',
};

const text = {
  margin: '10px',
};

const Warning = (props) => {
  const { warningItems, show } = props;
  return (
    <div
      style={pop}
    >
      You must enter the following:
      { warningItems.map((i) => (
        <div
          className="hi"
          key={i}
          style={text}
        >
          {i}
        </div>
      ))}
      <button
        type="button"
        style={btn}
        onClick={show}
      >
        Back
      </button>
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
