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
      mounted: false
    }
    // this.makeStyle = this.makeStyle.bind(this);
    // this.getStyle = this.getStyle.bind(this);
    //for styles, we need to send our name into a fetch function
  }



  componentDidMount() {
    // console.log('prev props', prevProps.info);
    // console.log('current props', this.props.info);
    if(this.state.mounted === false) {
      //console.log('this props info', this.props.info);
      //this.makeStyle(this.props.info.id);
      console.log('mounted');
      this.setState({mounted: true});
    }

  }


  // getStyle(id) {
  //   axios.get('/get', {params: {endpoint: `products/${id}/styles`}})
  //   .then((response) => {
  //     this.setState({list: response.results});
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

  // makeStyle(params) {
  //   //we need to set up the styles when this component is mounted
  //   this.props.callback(`${params}/styles`);
  // }


  render() {
    //have to to map through the styles array we get back
    console.log('this is styles', this.props.styles);
    if(this.props.styles === undefined || this.props.styles.length === 0) {
      return(
        <>
         <div>{this.props.info.category}</div>
         <div>{this.props.info.name}</div>
         <div>{this.props.info.id}</div>
        </>
       );
    } else {
      //console.log(this.props.styles.results);
      return(
        <>
         {this.props.styles.results.map((item) => {
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