/* eslint-disable react/prop-types */
import React from 'react';

class ExpandedPic extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div >
        <img className ='expandedPicture' src= {this.props.currentPic} alt="Picture of Clothing"></img>
        <img className = {this.props.right}  src = 'right-arrow.svg' name = {this.props.index}></img>
        <img className = {this.props.left}  src = 'left-arrow.svg' name = {this.props.index}></img>
    </div>
    )
  }


}





export default ExpandedPic;