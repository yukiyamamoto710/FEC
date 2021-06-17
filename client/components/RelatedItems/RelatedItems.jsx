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
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  componentDidMount() {
    this.getRelatedItemsIds(this.props.id)
    const outfit = JSON.parse(localStorage.getItem('outfit'));
      this.setState({
        currentItem: this.props.currentItem,
        selectedItemsList: outfit ? outfit: []
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getRelatedItemsIds(this.props.id)
        this.setState({
          currentItem: this.props.currentItem
        })
    }
  }

  getRelatedItemsIds (id) {
    axios.get('/get', {params: {endpoint: `products/${id}/related`}})
      .then((response) => {
        var promises = [];
        for (var i = 0; i < response.data.length; i++) {
          promises.push(axios.get(`getAll/${response.data[i]}`).then((res)=>res.data));
        }
        Promise.all(promises)
          .then((response) => {
            this.setState({
              relatedItemsList: response
            })
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  addToOutfit() {
    var ids = [];
    if (this.state.selectedItemsList.length) {
      ids = this.state.selectedItemsList.map(item=>item.id);
    }
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
  changeProductId: PropTypes.func,
  currentItem: PropTypes.object
}

export default RelatedItems;