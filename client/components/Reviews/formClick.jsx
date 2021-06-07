import React from 'react';
import Stars from './star.jsx';
import { Data } from './data.js';

const FormCK = (props) =>{
  const { name, info, style, starCK } = props;
  return (
    <div
      style = { style }>
      <div>
        { name }
      </div>
      <Stars
        rate = { info }
        starCK = { starCK }
        name = { name }/>
      <div
        style = { data }>
          { Data[name][info - 1] }
      </div>
    </div>
  )
}
export default FormCK;

const data = {
  fontSize: '10px',
}