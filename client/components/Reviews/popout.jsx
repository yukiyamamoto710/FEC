import React from 'react';
import Form from './form.jsx'

const PopOut = (props) =>{
  const { cancel } = props;
    return (
      <div style = { pop }>
        <div style = { cancelBTN }>
          <button
            onClick = { cancel }>
            X
          </button>
        </div>
      </div>
    )
}
export default PopOut;

const pop = {
  height:'80%',
  width: '80%',
  overflow: 'visible',
  border:'1px solid black',
  position: 'absolute',
  backgroundColor:'white',
  zIndex:'99',
}

const cancelBTN = {
  display: 'flex',
  margin: '10px',
  justifyContent: 'flex-end',
}