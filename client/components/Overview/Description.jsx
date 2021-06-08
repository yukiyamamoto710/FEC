/* eslint-disable react/prop-types */
import React from 'react';

function Description(props) {
  const { category, name, id, slogan, description, features } = props.descriptions;

  return(
    <>
     <div className = 'describe'>
      <div className = 'category'>{category}</div>
      <h2>{name}</h2>
      <div className = 'price'>$ {props.price}</div>
      <div>{props.salePrice}</div>
      <h3>STYLES</h3>
     </div>
     <div>{slogan}</div>
     <div className = 'description'>{description}</div>
     <div>{features.map((item, index) => {
        return (
          <div key = {index}>{item.feature} {item.value}</div>
        )
      })}</div>

    </>
  );
}






export default Description;