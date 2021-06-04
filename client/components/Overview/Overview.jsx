import React from 'react';
import ProductImage from './ProductImage.jsx';
import axios from 'axios';

//stateful component
//what do i need from the API? product name, product style, review
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      mounted: false,
      index: 0
    }
    // this.makeStyle = this.makeStyle.bind(this);
    // this.getStyle = this.getStyle.bind(this);
    //for styles, we need to send our name into a fetch function
  }



  componentDidUpdate(prevProps) {
    // console.log('prev props', prevProps.info);
    // console.log('current props', this.props.info);

    var id = this.props.info.id;
    console.log(prevProps);
    if(id !== prevProps.info.id) {
      console.log(id);
      this.getStyles(id);
      this.setState({
        index: id
    })
    }


  }


  getStyles(id) {
    axios.get('/get', {params: {endpoint: `products/${id}/styles`}})
    .then((response) => {
      this.setState({list: response.data});
    })
    .catch((error) => {
      console.log(error);
    })
  }


  render() {
    //have to to map through the styles array we get back
    console.log('this is STATE', this.state.list);
    if(this.state.list.length === 0) {
      return (
       <>
        <div>{this.props.info.category}</div>
        <div>{this.props.info.name}</div>
        <div>{this.props.info.id}</div>
       </>
      );
    } else {
      return(
        <>
         {this.state.list.results.map((item) => {
           return <ProductImage image = {item.photos[0]} key = {item.style_id} price = {item}/>
         })}
         <div>{this.props.info.category}</div>
         <div>{this.props.info.name}</div>
         <div>{this.props.info.id}</div>
        </>
       );
     }
  }
}



export default Overview;