import React from 'react';

const Message = (props) => {
  const { text, style, res } = props;

  if( text !== true && res === undefined) {
    return <div style = { style }>{text}</div>
  } else if (text === true) {
    return <div style = { style }>✓ I recommend this product</div>
  } else if (res !== null) {
    return <div style = { style }>Response:<br></br><div style={space}>{ res }</div></div>
  }
}

export default Message

const space ={
  marginLeft: '10px'
}