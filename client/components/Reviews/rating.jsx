import React from 'react';
import Top from './rttop.jsx';
import Message from './message.jsx';
import SRList from './srList.jsx';

const Rating = (props) =>{
  return (
    <div>
      <Top />
      <Message text={'20'} />
      <SRList/>
    </div>
  )
}

export default Rating;