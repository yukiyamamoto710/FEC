/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Thumbnail from './Thumbnail.jsx';


class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,

    }

    this.changeThumbNail = this.changeThumbNail.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
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

  changeThumbNail(index) {
    this.setState({
      index: index,
    });
    this.props.callback(index);
  }

  handleRight() {
    var number = JSON.parse(event.target.name);
    if(number < this.props.thumbnailArray.length - 1) {
        this.changeThumbNail(number + 1);
      }
  }

  handleLeft() {
    var number = JSON.parse(event.target.name);
    if(number > 0) {
        this.changeThumbNail(number + - 1);
      }
  }

  render() {
    var currentPic = this.props.picture;
    var isHighlighted;
    var left = this.state.index === 0 ? 'hidden' : 'leftArrow';
    var right = 'rightArrow';
    if(this.props.thumbnailArray !== undefined) {
      //console.log(this.props.thumbNailArray.length - 1);
      right = this.state.index === this.props.thumbnailArray.length - 1 ? 'hidden' : 'rightArrow';
    }

    return(
      <>
      <div className = 'thumbnails'>
        {this.props.thumbnailArray.map((item, index) => {
          //need to refactor this later - when props index and regular index are the same this highights the wrong thing
          if(this.state.index === index) {
            isHighlighted = true;
          } else {
            isHighlighted = false;
          }
          return(
            <Thumbnail index = {index} thumbnail = {item.photos[0].thumbnail_url} callback = {this.changeThumbNail} key = {index} identifier = {isHighlighted}/>
          );
        })}
      </div>
      <div className = 'bigPicture'>
        <img className = 'Picture' src= {currentPic} alt="Picture of Clothing"></img>
        <img className = {right} onClick = {this.handleRight} src = 'right-arrow.svg' name = {this.state.index}></img>
        <img className = {left} onClick = {this.handleLeft} src = 'left-arrow.svg' name = {this.state.index}></img>
      </div>

      </>
    )

  }

}


export default DefaultView;