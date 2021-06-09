/* eslint-disable react/prop-types */
import React from 'react';

const Thumbnail = (props) => {

  const handleClick = ()=> {
    //console.log(event.target.name);
    props.callback(props.index);
  }

  return(
    <>{<img className = 'thumbnail'  onClick = {handleClick} name = {props.index} src= {props.thumbnail} alt="Picture of Clothing"></img>}</>
  )
}






export default Thumbnail;