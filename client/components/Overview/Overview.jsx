import React from 'react';
import Product from './Product.jsx';

//stateful component
//what do i need from the API? product name, product style, review
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.makeStyle = this.makeStyle.bind(this);
    //for styles, we need to send our name into a fetch function
  }



  makeStyle() {
    //we need to set up the styles when this component is mounted
    this.props.callback(this.props.info.name, this.props.info.id);
  }


  render() {
    //have to to map through the styles array we get back
    return(
      <>
      <img className = 'picture' src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Picture of Clothing"></img>
      <div>{this.props.info.category}</div>
      <div>{this.props.info.name}</div>
      <div>{this.props.info.id}</div>
      </>
    );
  }
}



export default Overview;