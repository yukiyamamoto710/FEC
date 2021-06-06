import React from 'react';
import Rbheader from './rbheader.jsx';
import MessageList from './rbmessage.jsx';
import Form from './form.jsx';
import Button from './button.jsx';

const Rbase = (props) =>{
  const { list, func, func1, func2, add, func3, func4, func5, func6 } = props;
  return (
    <div style={ style }>
      <Rbheader length = { list.length } func = { func }/>
      <MessageList list = { list } func1 ={ func1 } func2 ={ func2 }/>
      <br></br>
      {add === true?<Form func = { func5 } submit = {func6}/> : null}
      <Button more = { func3 } add ={ func4 } />
    </div>
  )
}

export default Rbase;

const style ={
  display:'flex',
  flexDirection: 'column',
  width:'100%'
}