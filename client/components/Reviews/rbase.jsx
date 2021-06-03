import React from 'react';
import Rbheader from './rbheader.jsx';

const Rbase = (props) =>{
  const { list } = props;
  return (
    <>
      <Rbheader length = { list.length }/>
    </>
  )
}

export default Rbase;