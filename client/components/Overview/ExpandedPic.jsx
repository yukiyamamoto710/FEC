/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Thumbnail from './Thumbnail.jsx';
const ExpandedPic = (props) => {

    const [order, setIndex] = useState(0);
    const [zoomed, zoomState] = useState(false);
    //const [expand, expandState] = useState(true);

    var left = order === 0 ? 'hidden' : 'smallLeftArrow';
    var right = order === props.styleObj.length - 1 ? 'hidden' : 'smallRightArrow';
    const zoomedPicture = 'zoomedPicture';
    const expandedPicture = 'expandedPicture';




    const changeThumbNail = (index)  => {
      setIndex(index)

      props.callback(index);

    }

    const handleRight = () => {

      var number = JSON.parse(event.target.name);
      if(number < props.styleObj.length - 1) {
          props.callback(number + 1);
          setIndex(order + 1);
        }
    }

    const handleLeft = () => {
      var number = JSON.parse(event.target.name);
      if(number > 0) {
          props.callback(number - 1);
          setIndex(order - 1);
        }

    }

    const zoomIn = () => {
      zoomState(!zoomed);
    }

    const move = (e) => {
      //console.log(event);
      const mover = document.querySelector('.zoomedPicture');
      if(mover !== undefined && mover !== null) {
        //console.log(mover);

        var bbox = e.target.getBoundingClientRect();
        var mouseX = e.clientX - bbox.left;
        var mouseY = e.clientY - bbox.top;

        // var xPercent = (mouseX / bbox.width) * 100;
        // var yPercent = (mouseY / bbox.height) * 100;

        // var mouseX = e.clientX;
        // var mouseY = e.clientY;

        var xPercent = (mouseX / bbox.width) * 100;
        var yPercent = (mouseY / bbox.height) * 100;
        //mover.setAttribute('style', 'top:' + e.pageX, e.pageY);
        //mover.style.backgroundPositionY = -e.offsetY + "px";
        e.target.style.transformOrigin = xPercent + '% ' + yPercent + '%';

        //mover.setAttribute('style','top:'+ newX +'px; left:'+ newY +'px;');
      }
    }

    // if(zoomed) {
    //   zoom = zoomedPicture;
    // } else {
    //   zoom = expandedPicture;
    // }

    return(
      <div>

      <div className = 'expandedPictureContainer'>
        <button className = 'exit' onClick = {props.closeOut}>X</button>
        <img className = {zoomed ? zoomedPicture: expandedPicture} onMouseMove = {move} onClick = {zoomIn} src= {props.currentPic} alt="Big Picture of Clothing"></img>
        <div className = 'thumbnailsIcons'>
          {props.styleObj.map((item, index) => {
            const isHighlighted = props.index === index ? true : false;
            return(
              <Thumbnail index = {index} thumbnail = {item.thumbnail_url} callback = {changeThumbNail} key = {index} identifier = {isHighlighted} highlightedThumb = 'highlightedThumbnailIcon' noHighlight = 'thumbnailIcon'/>
            );
          })}
        </div>
        <img className = {right} onClick = {handleRight} src = 'small-right-arrow.svg' name = {order} alt = 'arrow'></img>
        <img className = {left} onClick = {handleLeft} src = 'small-left-arrow.svg' name = {order}></img>
     </div>
    </div>
    )


}


export default ExpandedPic;