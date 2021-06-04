import React from 'react';

class ProductImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.callback(this.props.order);
  }


  render() {
    return(
      <div>
      <img onClick = {this.handleClick} className = 'picture' src= {this.props.image.url} alt="Picture of Clothing"></img>
      </div>
    );
  }

}






export default ProductImage;