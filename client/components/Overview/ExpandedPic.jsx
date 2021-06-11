/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Thumbnail from './Thumbnail.jsx';
const ExpandedPic = (props) => {

    const [order, setIndex] = useState(0);

    var left = {order} === 0 ? 'hidden' : 'smallLeftArrow';
    var right = {order} === props.thumbnailArray.length - 1 ? 'hidden' : 'smallRightArrow';

    return(
      <div>
        {props.thumbnailArray.map((item, index) => {
          //need to refactor this later - when props index and regular index are the same this highights the wrong thing
          const isHighlighted = {order} === index ? true : false;
          return(
            <Thumbnail index = {index} thumbnail = {item.photos[0].thumbnail_url} callback = {props.callback} key = {index} identifier = {isHighlighted} highlightedThumb = 'highlightedThumb' noHighlight = 'thumbnail'/>
          );
        })}
      <div className = 'bigPicture'>
        <img className ='Picture' src= {props.currentPic} alt=" Picture of Clothing"></img>
        <img className = {props.right}  src = 'right-arrow.svg' name = {props.index}></img>
        <img className = {props.left}  src = 'left-arrow.svg' name = {props.index} alt = 'left-arrow'></img>
      </div>
      <div >
        <img className ='expandedPicture' src= {props.currentPic} alt="Big Picture of Clothing"></img>
        <img className = {right} src = 'right-arrow.svg' name = {props.index}></img>
        <img className = {left} src = 'left-arrow.svg' name = {props.index}></img>
    </div>
    </div>
    )


}





export default ExpandedPic;