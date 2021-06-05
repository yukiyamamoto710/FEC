import React from 'react';
import Rbheader from './rbheader.jsx';
import MessageList from './rbmessage.jsx';

const Rbase = ({ list, func }) =>{
  return (
    <div style={ style }>
      <Rbheader length = { list.length } func = { func }/>
      <MessageList list = { list }/>
    </div>
  )
}

export default Rbase;

const style ={
  display:'flex',
  flexDirection: 'column',
}