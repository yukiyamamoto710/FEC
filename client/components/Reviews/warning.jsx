import React from 'react';

const Warning = (props) =>{
  const { arr, func } = props;
  return (
    <div style = { pop }>
      You must enter the following:
      { arr.map(( i, index ) =>
          <div key = { index } style = {text}>{i}</div>
      )}
      <button
        style = { btn }
        onClick = { func }>
          Back
      </button>
    </div>
  )
}

export default Warning

const pop = {
  height:'40%',
  width: '40%',
  overflow: 'visible',
  border:'5px solid Red',
  position: 'absolute',
  backgroundColor:'white',
  zIndex:'99',
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems:'center',
  margin:'50px',
}

const btn = {
  width: '100px',
  justifyContent:'center'
}

const text = {
  margin: '10px'
}