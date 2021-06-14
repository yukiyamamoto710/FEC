import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { body } = props;
  const [click, setClick] = useState(false);

  const handleClickText = () => {
    setClick(!click);
  };

  const handleKeyPressText = () => {
    setClick(!click);
  };

  if (click) {
    return (
      <div
        data-testid="textShow"
        className="msgBody1"
        role="button"
        tabIndex={0}
        onKeyPress={handleKeyPressText}
        onClick={handleClickText}
      >
        {body}
      </div>
    );
  }
  return (
    <div
      data-testid="textHidden"
      className="msgBody"
      role="button"
      tabIndex={0}
      onKeyPress={handleKeyPressText}
      onClick={handleClickText}
    >
      {body}
    </div>
  );
};

Message.propTypes = {
  body: PropTypes.string,
};

Message.defaultProps = {
  body: '',
};

export default Message;
