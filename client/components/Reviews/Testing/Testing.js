import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) =>{
  let { name } = props;
  return (
    <div
      data-testid='Button'>
        { name }
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string
};

export default Button;