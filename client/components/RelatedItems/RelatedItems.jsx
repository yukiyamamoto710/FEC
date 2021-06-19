import React from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import Outfits from './Outfits.jsx';
import getRelatedItems from './getRelatedItems.jsx';
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
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
  }

  componentDidMount() {
    const outfit = JSON.parse(localStorage.getItem('outfit'));
    const related = Promise.resolve(getRelatedItems(this.props.id))
    related.then((response) => {
      this.setState({
        currentItem: this.props.currentItem,
        selectedItemsList: outfit ? outfit: [],
        relatedItemsList: response
      })
    }).catch((err)=>console.log(err))
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.id !== this.props.id) {
  //     const related = Promise.resolve(getRelatedItems(this.props.id))
  //     related.then((response) => {
  //       this.setState({
  //         currentItem: this.props.currentItem,
  //         relatedItemsList: response
  //       })
  //     }).catch((err)=>console.log(err))
  //   }
  // }

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
        <div data-testid="relatedItems">
          <RelatedProducts id={id} relatedItemsList={relatedItemsList} changeProductId={changeProductId} currentItem={currentItem}/>
          <Outfits selectedItemsList={selectedItemsList} addToOutfit={this.addToOutfit} removeFromOutfit={this.removeFromOutfit} changeProductId={changeProductId}/>
        </div> : null }
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