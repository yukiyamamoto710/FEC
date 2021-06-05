import React from 'react';
import Rbheader from './rbheader.jsx';
import MessageList from './rbmessage.jsx';

const Rbase = ({ list, func, func1, func2 }) =>{
  return (
    <div style={ style }>
      <Rbheader length = { list.length } func = { func }/>
      <MessageList list = { list } func1 ={func1} func2 ={func2}/>
    </div>
  )
}

export default Rbase;

const style ={
  display:'flex',
  flexDirection: 'column',
}