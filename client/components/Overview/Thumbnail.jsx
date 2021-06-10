/* eslint-disable react/prop-types */
import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }


  // componentDidUpdate(prevProps) {
  //   console.log('previous props: ', prevProps.identifier);
  //   console.log('current props: ', this.props.identifier);
  //   if(this.props.identifier !== prevProps.identifier) {
  //     this.setState({clicked: false});
  //   }
  // }

  handleClick () {
    //console.log(event.target.name);
    this.props.callback(this.props.index);
    this.setState({clicked: true});
  }
  render() {
    const clicked = this.props.identifier ? 'highlightedThumb' : 'thumbnail'
    // if(this.state.clicked) {
    //   clicked =
    // }
    return(
      <>{<img className = {clicked} onClick = {this.handleClick} name = {this.props.index} src= {this.props.thumbnail} alt="Picture of Clothing"></img>}</>
    );
  }

}


export default Thumbnail;

// const highlighted = {
//   borderWidth: '2px',
//   borderStyle: 'solid',
//   borderColor: 'white'
// }