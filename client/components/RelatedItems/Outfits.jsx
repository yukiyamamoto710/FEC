import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import PropTypes from 'prop-types';

const Outfits = (props) => {
  const {selectedItemsList, addToOutfit, removeFromOutfit} = props;

  const [state, setState] = useState({idx: 0, displayed: []});

  useEffect(() => {
    setState({idx: 0, displayed: [...selectedItemsList].slice(0, 3)})
  }, [selectedItemsList])

  return (
    <div data-testid="outfit-container" className="container">
      <h3 className="outfit">YOUR OUTFIT</h3>
      <ul className="carousel">
        <button className="slideLeft"
          onClick={()=>setState({idx: state.idx-1, displayed: [...selectedItemsList].slice(state.idx-1, state.idx+2)})}
          hidden={state.idx === 0}
          data-testid="slideLeft">
            &lt;
        </button>
        <li className="card empty">
            <button className="add-button" onClick={()=>addToOutfit()}>+</button>
            <p className="add-message">Add to Outfit</p>
        </li>
        {!state.displayed.length ? null: state.displayed.map(product=>
          <OutfitCard key={product.id} product={product} removeFromOutfit={removeFromOutfit}/>
          )}
        <button className="slideRight"
          onClick={()=>{setState({idx: state.idx+1, displayed: [...selectedItemsList].slice(state.idx+1, state.idx+4)})}}
          hidden={selectedItemsList.length < 3}
          disabled={state.idx === selectedItemsList.length-3}
          data-testid="slideRight">
            &gt;
        </button>
      </ul>
    </div>
  )
}

Outfits.propTypes = {
  selectedItemsList: PropTypes.array,
  addToOutfit: PropTypes.func,
  removeFromOutfit: PropTypes.func
}

export default Outfits;
