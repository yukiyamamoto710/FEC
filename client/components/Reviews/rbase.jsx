import React from 'react';
import Rbheader from './rbheader.jsx';
import MessageList from './rbmessage.jsx';

const Rbase = (props) =>{
  const { list } = props;
  return (
    <div style={ style }>
      <Rbheader length = { list.length }/>
      <MessageList list = { list }/>
    </div>
  )
}

export default Rbase;

const style ={
  display:'flex',
  flexDirection: 'column',
}