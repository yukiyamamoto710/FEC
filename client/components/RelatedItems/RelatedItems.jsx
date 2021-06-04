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
  }

  componentDidMount() {
    console.log('componentDidMount')
    // get an array of ids that are related products
    this.fetchGET('relatedItems', 'products', `${this.props.id}/related`);
  }

  componentDidUpdate() {
    if (this.state.relatedItemsList.length === 0) {
      var promises = [];
      for (var i = 0; i < this.state.relatedItems.length; i++) {
        promises.push(axios.get('/get', {params: {endpoint: `products/${this.state.relatedItems[i]}`}}));
      }

      Promise.all(promises)
        .then((response) => {
          var list = [];
          for (var i = 0; i < response.length; i++) {
            var product = {name: response[i].data.name, category: response[i].data.category}
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

  fetchGET(key, string, id){
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
    console.log('render')
    return (
      <div>
        <RelatedProducts relatedItemsList={this.state.relatedItemsList}/>
        <Outfit selectedItemsList={this.state.relatedItemsList}/>
      </div>
    )
  }
}

export default RelatedItems;