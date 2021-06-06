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
    this.addToOutfit = this.addToOutfit.bind(this);
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
              axios.get('/get', {params: {endpoint: `reviews/meta/?product_id=${id}`}})
                .then((rating) => {
                  var mergedList = Object.assign(product.data, styles.data)
                  mergedList['rating'] = rating.data
                  console.log(mergedList)
                  resolve(mergedList)
                })
            })
        })
        .catch((err) => {
          reject(err);
        })
    })
  }

  addToOutfit() {
    this.getAllProductInfo(this.props.id)
      .then((results) => {
        var list = [];
        list.push(results)
        this.setState({
          selectedItemsList: list
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  fetchGET(key, string, id) {
    axios.get('/get', {params: {endpoint: `${string}/${id}`}})
      .then((response) =>{
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
        <Outfit selectedItemsList={this.state.selectedItemsList} addToOutfit={this.addToOutfit}/>
      </div>
    )
  }
}

export default RelatedItems;