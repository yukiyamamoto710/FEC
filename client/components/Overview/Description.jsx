/* eslint-disable react/prop-types */
import React from 'react';

function Description(props) {
  const { category, name, id, slogan, description, features } = props.descriptions;
  return(
    <div>
     <div>{category}</div>
     <div>{name} {id}</div>
     <div>{slogan}</div>
     <div>{description}</div>
     <div>{features.map((item, index) => {
       return (
         <div key = {index}>{item.feature} {item.value}</div>
       )
     })}</div>
    </div>
  );
}






export default Description;