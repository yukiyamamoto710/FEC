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
      relatedItemsList: [],
      selectedItemsList: []
    }
    this.getRelatedItemsIds = this.getRelatedItemsIds.bind(this);
    // this.renderRelatedItems = this.renderRelatedItems.bind(this);
    this.getAllProductInfo = this.getAllProductInfo.bind(this);
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  componentDidMount() {
    this.getRelatedItemsIds(this.props.id)
    const storage = JSON.parse(localStorage.getItem('outfit'));
    this.getAllProductInfo(this.props.id)
      .then((results) => {
        this.setState({
          currentItem: results,
          selectedItemsList: storage ? storage: []
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
      .then((response) => {
        var promises = [];
        for (var i = 0; i < response.data.length; i++) {
          promises.push(this.getAllProductInfo(response.data[i]));
        }
        Promise.all(promises)
          .then((response) => {
            this.setState({
              relatedItemsList: response
            })
          })
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  // renderRelatedItems() {
  //   var promises = [];
  //   for (var i = 0; i < this.state.relatedItems.length; i++) {
  //     promises.push(this.getAllProductInfo(this.state.relatedItems[i]));
  //   }
  //   Promise.all(promises)
  //     .then((response) => {
  //       this.setState({
  //         relatedItemsList: response
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  getAllProductInfo(id) {
    return new Promise((resolve, reject) => {
      axios.get(`/relatedItems/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  // getAllProductInfo(id) {
  //   return new Promise((resolve, reject) => {
  //     axios.get('/get', {params: {endpoint: `products/${id}`}})
  //       .then((product) => {
  //         // eventually clean up data at the server side before sending to client
  //         delete product.data['campus'];
  //         delete product.data['created_at'];
  //         delete product.data['description'];
  //         delete product.data['slogan'];
  //         delete product.data['updated_at'];
  //         delete product.data['product_id'];

  //         axios.get('/get', {params: {endpoint: `products/${id}/styles`}})
  //           .then((styles) => {
  //             // eventually clean up data at the server side before sending to client
  //             styles.data.results.map(style=> {
  //               delete style['skus'];
  //             })

  //             axios.get('/get', {params: {endpoint: `reviews/meta/?product_id=${id}`}})
  //               .then((rating) => {
  //                 var mergedList = Object.assign(product.data, styles.data)
  //                 mergedList['rating'] = rating.data
  //                 resolve(mergedList)
  //               })
  //           })
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       })
  //   })
  // }

  addToOutfit() {
    var ids = [...this.state.selectedItemsList].map(item=>item.id);
    if (ids.indexOf(this.state.currentItem.id) === -1) {
      var updated = [this.state.currentItem, ...this.state.selectedItemsList]
      this.setState({
        selectedItemsList: updated
      })
      // update a local storage
      localStorage.setItem('outfit', JSON.stringify(updated));
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
      selectedItemsList: updated
    })
    // update a local storage
    localStorage.setItem('outfit', JSON.stringify(updated));
  }

  render() {
    const {id, changeProductId} = this.props;
    const {relatedItemsList, selectedItemsList, currentItem} = this.state;
    return (
      <div>
        { relatedItemsList.length !== 0 ?
        <React.Fragment>
          <RelatedProducts id={id} relatedItemsList={relatedItemsList} changeProductId={changeProductId} currentItem={currentItem}/>
          <Outfits selectedItemsList={selectedItemsList} addToOutfit={this.addToOutfit} removeFromOutfit={this.removeFromOutfit}/>
        </React.Fragment> : null }
      </div>
    )
  }
}

RelatedItems.propTypes = {
  id: PropTypes.number,
  changeProductId: PropTypes.func
}

export default RelatedItems;