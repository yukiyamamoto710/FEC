import React from 'react';
import Form from './form.jsx'

const PopOut = (props) =>{
  const arr = [ 'Stars', 'recommend', 'Size', 'Width','Comfort', 'Quality',
  'Lenght', 'Fit', 'Title', 'Description', 'Photo', 'Name', 'Email' ];

  const { cancel } = props;
    return (
      <div style = { pop }>
        <div style = { cancelBTN }>
          <button
            onClick = { cancel }>
            X
          </button>
        </div>
        <div >
          <div style ={{display:'flex'}}>
            {arr.slice(0,4).map( i => <div key = { i } style = { name }>{ i }</div>)}
          </div>
          <div>

          </div>
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

const name = {
  border: '1px solid black',
  margin: '5px',
  padding: '2px',
  width: '20%',
}