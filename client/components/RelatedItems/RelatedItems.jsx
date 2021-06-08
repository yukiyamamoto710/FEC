import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import Outfit from './Outfit.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedItemsList: [],
      selectedItemsList: []
    }
    this.getRelatedItemsIds = this.getRelatedItemsIds.bind(this);
    this.renderRelatedItems = this.renderRelatedItems.bind(this);
    this.getAllProductInfo = this.getAllProductInfo.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
  }

  componentDidMount() {
    this.getRelatedItemsIds(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getRelatedItemsIds(this.props.id);
    }
  }

  getRelatedItemsIds (id) {
    axios.get('/get', {params: {endpoint: `products/${id}/related`}})
      .then((response) =>{
        this.setState({
          relatedItems: response.data
        }, this.renderRelatedItems)
      })
      .catch(err=>{
        console.log(err)
      });
  }

  renderRelatedItems() {
    var promises = [];
    for (var i = 0; i < this.state.relatedItems.length; i++) {
      promises.push(this.getAllProductInfo(this.state.relatedItems[i]));
    }
    Promise.all(promises)
      .then((response) => {
        this.setState({
          relatedItemsList: response
        })
      })
      .catch((err) => {
        console.log(err);
      })
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

  render() {
    return (
      <div>
        {this.state.relatedItemsList.length !== 0 ?
        <>
          <RelatedProducts relatedItemsList={this.state.relatedItemsList} id={this.props.id}/>
          <Outfit selectedItemsList={this.state.selectedItemsList} addToOutfit={this.addToOutfit}/>
        </>:null}
      </div>
    )
  }
}

RelatedItems.propTypes = {
  id: PropTypes.number
}

export default RelatedItems;