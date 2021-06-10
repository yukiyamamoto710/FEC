import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import Outfits from './Outfits.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (!this.state.selected) {
      this.getAllProductInfo(this.props.id)
        .then((results) => {
          this.setState({
            selectedItemsList: [results, ...this.state.selectedItemsList],
            selected: true
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
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
    const {relatedItemsList, selectedItemsList} = this.state;
    return (
      <div>
        { relatedItemsList.length !== 0 ?
        <>
          <RelatedProducts id={id} relatedItemsList={relatedItemsList} changeProductId={changeProductId}/>
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