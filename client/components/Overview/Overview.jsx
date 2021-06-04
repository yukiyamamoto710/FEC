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
      list: [],
      mounted: false,
      index: 0
    }

    this.changePic = this.changePic.bind(this);
  }

  componentDidMount() {
    console.log('this is props id', this.props.id);
    this.fetchGET('products', this.props.id, 'description');
  }



  componentDidUpdate(prevProps) {
    var id = this.props.id;
    if(this.state.list.length === 0) {
      this.getStyles(id)
      .then((response) => {
        this.setState({list: response.data});
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
  };


  getStyles(id) {
    return axios('/get', {params: {endpoint: `products/${id}/styles`}});
  }


  changePic(number) {
    this.setState({index: number})
  }


  render() {
    //have to to map through the styles array we get back
    //console.log('this is STATE', this.state.list);
    if(this.state.list.length === 0) {
      console.log(this.state.description);
      return (
       <>LOADING</>
      );
    } else {
      console.log(this.state.description);
      return(
        <>
         <div>{this.state.description.category}</div>
         <div>{this.state.description.name}</div>
         <div>{this.state.description.id}</div>
         <img className = 'bigPicture' src= {this.state.list.results[this.state.index].photos[0].url} alt="Picture of Clothing"></img>
         <div>Price: {this.state.list.results[this.state.index].original_price}</div>
         {this.state.list.results.map((item, index) => {
           return <ProductImage image = {item.photos[0]} order = {index} price = {item} callback = {this.changePic} key = {item.style_id}/>
         })}
        </>
       );
     }
  }
}



export default Overview;