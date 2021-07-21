/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import ExpandedPic from './ExpandedPic.jsx';



class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      expanded: false,
      thumbnail: false,
      slide: 'right'
    }

    this.changeThumbNail = this.changeThumbNail.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.expandPic = this.expandPic.bind(this);
    this.closeOut = this.closeOut.bind(this);
    this.renderThumbnail = this.renderThumbnail.bind(this);
  }

  // componentDidMount() {
  //   this.setState({thumbnail: false});
  // }

  // componentWillUnmount() {
  //   this.setState({thumbnail: false});
  // }
  // componentDidUpdate(prevProps) {
  //   console.log('previous props: ', prevProps);
  //   console.log('current props: ', this.props);
  //   if(this.props.picture !== prevProps.picture) {
  //     this.setState({thumbnail: false});
  //   }
  // }
  expandPic() {
    this.setState({expanded: true});
  }

  closeOut() {
    this.setState({expanded: false});
  }

  changeThumbNail(index) {
    this.setState({
      index: index,
    });
    this.props.callback(index);
  }

  handleRight() {
    var number = JSON.parse(event.target.name);
    if(number < this.props.styleObj.photos.length - 1) {
        this.changeThumbNail(number + 1);
      }

  }

  handleLeft() {
    var number = JSON.parse(event.target.name);
    if(number > 0) {
        this.changeThumbNail(number - 1);
      }
  }

  renderThumbnail() {
    this.setState({thumbnail: !this.state.thumbnail});
  }

  render() {
    var currentPic = this.props.picture;
    var isHighlighted;
    var expand;
    var photoArray = [];

    var left = this.state.index === 0 ? 'hidden' : 'leftArrow';
    var right = this.state.index === this.props.styleObj.photos.length - 1 ? 'hidden' : 'rightArrow';
    var up = 'upArrow';
    var down = 'downArrow';
    if(this.props.styleObj.photos.length <= 7) {
      up = 'hidden';
      down = 'hidden';
    }
    if(this.state.thumbnail === false) {
      photoArray = this.props.styleObj.photos.slice(0, 7);
    } else if(this.props.styleObj.photos.length > 7){
      photoArray = this.props.styleObj.photos.slice(7, this.props.styleObj.photos.length - 1);
    } else {
      photoArray = this.props.styleObj.photos.slice(0, 7);
    }

    //probably have to set the variable expand to be its own jsx fragment instead of just changing the class
    if(this.state.expanded === true) {

      expand = <ExpandedPic currentPic = {currentPic} left = {left} right = {right} index = {this.state.index} styleObj = {this.props.styleObj.photos} callback = {this.changeThumbNail} closeOut = {this.closeOut}/>
    } else {
      expand =
      <div className = 'bigPicture'>
        <img className ='Picture' onClick = {this.expandPic} src= {currentPic} alt=" Big Picture of Clothing"></img>
        <img className = {right} onClick = {this.handleRight} src = 'small-right-arrow.svg' name = {this.state.index} alt = 'arrow'></img>
        <img className = {left} onClick = {this.handleLeft} src = 'small-left-arrow.svg' name = {this.state.index} alt = 'left-arrow'></img>
        <img className = {up} onClick = {this.renderThumbnail} src = 'up-arrow.svg' name = {this.state.index}></img>
        <img className = {down} onClick = {this.renderThumbnail} src = 'down-arrow.svg' name = {this.state.index}></img>

      </div>
    }

    return(
      <>
      <div className = 'thumbnails'>
        {photoArray.map((item, index) => {

          isHighlighted = this.props.index === index ? true : false;
          return(
            <Thumbnail index = {index} thumbnail = {item.thumbnail_url} callback = {this.changeThumbNail} key = {index} identifier = {isHighlighted} highlightedThumb = 'highlightedThumb' noHighlight = 'thumbnailE'/>
          );
        })}
      </div>
        {expand}
      </>
    )

  }

}


export default DefaultView;