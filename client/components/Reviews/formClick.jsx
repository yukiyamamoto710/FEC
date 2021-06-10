import React from 'react';
import Stars from './star.jsx';
import { Data } from './data.js';

const FormStarCK = (props) => {
  const {
    name,
    info,
    starCK,
  } = props;
  return (
    <div className="topSmallContainer">
      <div>
        { name }
      </div>
      <Stars
        className="formStar"
        rate={info}
        starCK={starCK}
        name={name}
      />
      <div className="formDetail">
        {Data[name][info - 1]}
      </div>
    </div>
  );
}

export default FormStarCK;
