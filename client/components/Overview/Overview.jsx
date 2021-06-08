/* eslint-disable react/prop-types */
import React from 'react';
import ProductImage from './ProductImage.jsx';
import axios from 'axios';
import Description from './Description.jsx';

//stateful component
//what do i need from the API? product name, product style, review
class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: [],
      stylesList: [],
      mounted: false,
      index: 0
    }

    this.changePic = this.changePic.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    console.log('this is props id', this.props.id);
    this.fetchGET('products', this.props.id, 'description');
  }



  componentDidUpdate() {
    var id = this.props.id;
    if(this.state.stylesList.length === 0) {
      this.getStyles(id)
      .then((response) => {
        this.setState({stylesList: response.data});
      })
      .catch((error) => {
        console.log(error);
      })
      }

  }

  fetchGET(string, id, name){
    axios.get('/get', {params: {endpoint: `${string}/${id}`}})
      .then((response) =>{
        console.log('successful get request', response.data);
        this.setState({
          [name]: response.data,
          mounted: true
          //has to set state for data.[whatever key we need from data]
        })
      })
      .catch(err=>{
        console.log(err)
      });
  }


  getStyles(id) {
    return axios('/get', {params: {endpoint: `products/${id}/styles`}});
  }


  changePic(number) {
    this.setState({index: number})
  }

  renderItems() {
      //const { category, name, id, slogan, description, features } = this.state.description;
      const currentItem = this.state.stylesList.results;
      var price;
      var salePrice;
      if(currentItem[this.state.index].sale_price !== null) {
        salePrice = <div>{currentItem[this.state.index].sale_price}</div>;
        price = <div style = {crossed}>{currentItem[this.state.index].original_price}</div>
      } else {
        salePrice = <div></div>
        price = <div>{currentItem[this.state.index].original_price}</div>
      }
      return(
        <>
         <img className = 'bigPicture' src= {currentItem[this.state.index].photos[0].url} alt="Picture of Clothing"></img>
         <Description descriptions = {this.state.description} style = {currentItem[this.state.index]} skus = {currentItem[this.state.index].skus} price = {price} salePrice = {salePrice}/>
         <div className = 'stylesBox'>
         {this.state.stylesList.results.map((item, index) => {
           return <ProductImage image = {item.photos[0]} order = {index} price = {item} callback = {this.changePic} key = {item.style_id}/>
         })}
         </div>
        </>
       );
  }


  render() {
    //have to to map through the styles array we get back
    //console.log('this is STATE', this.state.stylesList);
    if(this.state.stylesList.length === 0) {
      console.log(this.state.description);
      return (
       <>LOADING</>
      );
    } else {
      return (
        this.renderItems()
      );
     }
  }
}



export default Overview;

const crossed = {
  textDecoration: 'line-through',
  color: 'red'
}