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
      selectedItemsList: [],
      listLoaded: false
    }
    this.fetchGET = this.fetchGET.bind(this);
    this.getAllProductInfo = this.getAllProductInfo.bind(this);
  }

  componentDidMount() {
    this.fetchGET('relatedItems', 'products', `${this.props.id}/related`)
  }

  componentDidUpdate() {
    // there's a better comparison?
    if (!this.state.listLoaded) {
      var promises = [];
      for (var i = 0; i < this.state.relatedItems.length; i++) {
        promises.push(this.getAllProductInfo(this.state.relatedItems[i]));
      }
      Promise.all(promises)
        .then((response) => {
          this.setState({
            relatedItemsList: response
          }, ()=> {this.setState({listLoaded: true})})
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  getAllProductInfo(id) {
    return new Promise((resolve, reject) => {
      axios.get('/get', {params: {endpoint: `products/${id}`}})
        .then((product) => {
          axios.get('/get', {params: {endpoint: `products/${id}/styles`}})
            .then((styles) => {
              var mergedList = Object.assign(product.data, styles.data)
              resolve(mergedList)
            })
        })
        .catch((err) => {
          reject(err);
        })
    })
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