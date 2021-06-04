import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';
import axios from 'axios';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItems: [],
      relatedItemsList: [],
      selectedItemsList: []
    }
    this.fetchGET = this.fetchGET.bind(this);
    this.getAllProductInfo = this.getAllProductInfo.bind(this);
  }

  componentDidMount() {
    // get an array of ids that are related products
    this.fetchGET('relatedItems', 'products', `${this.props.id}/related`);
  }

  componentDidUpdate() {
    // there's a better comparison?
    if (this.state.relatedItemsList.length === 0) {
      var promises = [];
      console.log('function' + this.getAllProductInfo(25711))
      for (var i = 0; i < this.state.relatedItems.length; i++) {
        promises.push(axios.get('/get', {params: {endpoint: `products/${this.state.relatedItems[i]}/styles`}}));
      }
      Promise.all(promises)
        .then((response) => {
          var list = [];
          for (var i = 0; i < response[0].data.results.length; i++) {
            var product = {name: response[0].data.results[i].name, originalPrice: response[0].data.results[i].original_price, image: response[0].data.results[i].photos[0].url}
            list.push(product);
          }
          this.setState({
            relatedItemsList: list
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  getAllProductInfo(id) {
    const productInfo = axios.get('/get', {params: {endpoint: `products/${id}`}})
    const productStyle = axios.get('/get', {params: {endpoint: `products/${id}/styles`}})
    Promise.all([productInfo, productStyle])
      .then(()=> {
        console.log(productInfo)
      })
      .catch((err) => {
        console.log(err)
      })
    // axios.get('/get', {params: {endpoint: `products/${id}`}})
    //   .then((response) => {
    //     axios.get('/get', {params: {endpoint: `products/${id}/styles`}})
    //       .then((response2) => {
    //         return {name: response.data.name, category: response.data.category, price: response.data.default_price, image: response2.data.results[0].photos[0].url}
    //       })
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
  }

  fetchGET(key, string, id) {
    axios.get('/get', {params: {endpoint: `${string}/${id}`}})
      .then((response) =>{
        console.log('successful get request');
        this.setState({
          [key]: response.data
        })
      })
      .catch(err=>{
        console.log(err)
      });
  };

  render() {
    return (
      <div>
        <RelatedProducts relatedItemsList={this.state.relatedItemsList}/>
        <Outfit selectedItemsList={this.state.relatedItemsList}/>
      </div>
    )
  }
}

export default RelatedItems;