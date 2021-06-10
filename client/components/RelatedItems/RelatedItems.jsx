import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import Outfits from './Outfits.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      relatedItems: [], // related products IDs
      relatedItemsList: [],
      selectedItemsList: [],
      selected: false // if the current product is added to outfit list
    }
    this.getRelatedItemsIds = this.getRelatedItemsIds.bind(this);
    this.renderRelatedItems = this.renderRelatedItems.bind(this);
    this.getAllProductInfo = this.getAllProductInfo.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  componentDidMount() {
    this.getRelatedItemsIds(this.props.id);
    this.getAllProductInfo(this.props.id)
      .then((results) => {
        this.setState({
          currentItem: results
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getRelatedItemsIds(this.props.id);
      this.getAllProductInfo(this.props.id)
        .then((results) => {
          this.setState({
            currentItem: results
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  getRelatedItemsIds (id) {
    axios.get('/get', {params: {endpoint: `products/${id}/related`}})
      .then((response) =>{
        this.setState({
          relatedItems: response.data,
          selected: false // everytime different product is displayed, change selected back to false
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
          // eventually clean up data at the server side before sending to client
          delete product.data['campus'];
          delete product.data['created_at'];
          delete product.data['description'];
          delete product.data['slogan'];
          delete product.data['updated_at'];
          delete product.data['product_id'];

          axios.get('/get', {params: {endpoint: `products/${id}/styles`}})
            .then((styles) => {
              // eventually clean up data at the server side before sending to client
              styles.data.results.map(style=> {
                delete style['skus'];
              })

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
    this.setState({
      selectedItemsList: [this.state.currentItem, ...this.state.selectedItemsList],
      selected: true
    })
  }

  removeFromOutfit(id) {
    var updated = [...this.state.selectedItemsList];
    for (var i = 0; i < updated.length; i++) {
      if (updated[i].id === id) {
        updated.splice(i, 1);
      }
    }
    this.setState({
      selectedItemsList: updated,
      selected: false
    })
  }

  render() {
    const {id, changeProductId} = this.props;
    const {relatedItemsList, selectedItemsList, currentItem} = this.state;
    return (
      <div>
        { relatedItemsList.length !== 0 ?
        <>
          <RelatedProducts id={id} relatedItemsList={relatedItemsList} changeProductId={changeProductId} currentItem={currentItem}/>
          <Outfits selectedItemsList={selectedItemsList} addToOutfit={this.addToOutfit} removeFromOutfit={this.removeFromOutfit}/>
        </> : null }
      </div>
    )
  }
}

RelatedItems.propTypes = {
  id: PropTypes.number,
  changeProductId: PropTypes.func
}

export default RelatedItems;