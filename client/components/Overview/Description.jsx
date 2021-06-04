import React from 'react';

function Description(props) {
  return(
    <div>
     <div>{props.info.category}</div>
     <div>{props.info.name}</div>
     <div>{props.info.id}</div>
    </div>
  );
}






export default Description;