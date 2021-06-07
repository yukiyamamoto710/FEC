import React from 'react';
import ProductImage from './ProductImage.jsx';
import axios from 'axios';

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


  render() {
    //have to to map through the styles array we get back
    //console.log('this is STATE', this.state.stylesList);
    if(this.state.stylesList.length === 0) {
      console.log(this.state.description);
      return (
       <>LOADING</>
      );
    } else {
      //console.log(this.state.description);
      const { category, name, id } = this.state.description;
      const currentItem = this.state.stylesList.results;
      var price;
      var salePrice;
      if(currentItem[this.state.index].sale_price !== null) {
        salePrice = <div>Sale Price: {currentItem[this.state.index].sale_price}</div>;
        price = <div style = {crossed}>Current Price: {currentItem[this.state.index].original_price}</div>
      } else {
        salePrice = <div></div>
        price = <div>Current Price: {currentItem[this.state.index].original_price}</div>

      }
      return(
        <>
         <div>{category}</div>
         <div>{name}</div>
         <div>{id}</div>
         <img className = 'bigPicture' src= {this.state.stylesList.results[this.state.index].photos[0].url} alt="Picture of Clothing"></img>
         <div>{price}</div>
         <div>{salePrice}</div>
         {this.state.stylesList.results.map((item, index) => {
           return <ProductImage image = {item.photos[0]} order = {index} price = {item} callback = {this.changePic} key = {item.style_id}/>
         })}
        </>
       );
     }
  }
}



export default Overview;

const crossed = {
  'text-decoration': 'line-through',
  color: 'red'
}