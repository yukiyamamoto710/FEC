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
    this.handleClick = this.handleClick.bind(this);
    this.changePic = this.changePic.bind(this);
  }



  componentDidUpdate(prevProps) {
    // console.log('prev props', prevProps.info);
    // console.log('current props', this.props.info);

    var id = this.props.info.id;
    console.log(prevProps);
    if(id !== prevProps.info.id) {
      console.log(id);
      this.getStyles(id);
      // this.setState({
      //   index: id
      // })
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

  handleClick() {
    this.setState({index: this.state.index + 1});
  }

  changePic(number) {
    this.setState({index: number})
  }


  render() {
    //have to to map through the styles array we get back
    console.log('this is STATE', this.state.list);
    if(this.state.list.length === 0) {
      return (
       <>LOADING
        <div>{this.props.info.category}</div>
        <div>{this.props.info.name}</div>
        <div>{this.props.info.id}</div>
       </>
      );
    } else {
      return(
        <>
         <img className = 'bigPicture' src= {this.state.list.results[this.state.index].photos[0].url} alt="Picture of Clothing"></img>
         <div>Price: {this.state.list.results[this.state.index].original_price}</div>
         {this.state.list.results.map((item, index) => {
           return <ProductImage image = {item.photos[0]} order = {index} price = {item} callback = {this.changePic} key = {item.style_id}/>
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