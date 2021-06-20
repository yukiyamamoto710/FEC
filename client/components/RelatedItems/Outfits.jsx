import React, { useState, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import PropTypes from 'prop-types';

const Outfits = (props) => {
  const {selectedItemsList, addToOutfit, removeFromOutfit, changeProductId} = props;

  const [idx, setIndex] = useState(0);
  const [displayed, setDisplay] = useState(selectedItemsList.slice(0, 4))

  useEffect(() => {
    setDisplay(selectedItemsList.slice(0, 4))
  }, [selectedItemsList])

  return (
    <div data-testid="outfit-container" className="container">
      <h3 className="outfit">YOUR OUTFIT</h3>
      <ul className="carousel">
        <button className="slideLeft"
          onClick={() => {
            setIndex(idx-1)
            setDisplay(selectedItemsList.slice(idx-1, idx+2))}}
          hidden={idx === 0}
          data-testid="slideLeft">
            &lt;
        </button>
        <li className="card empty add-button" data-testid="add-button"
          onClick={()=>addToOutfit()}>
            <p className="plus">+</p>
            <p className="add-message">Add to Outfit</p>
        </li>
        {!displayed.length ? null:
          displayed.map((product, i)=>
            <OutfitCard
              key={`${product.id}/${i}`}
              product={product}
              removeFromOutfit={removeFromOutfit}
              changeProductId={changeProductId}/>
          )}
        <button className="slideRight"
          onClick={()=> {
            setIndex(idx+1)
            setDisplay(selectedItemsList.slice(idx+1, idx+4))}}
          hidden={selectedItemsList.length < 3}
          disabled={idx === selectedItemsList.length-3}
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
  removeFromOutfit: PropTypes.func,
  changeProductId: PropTypes.func
}

export default Outfits;
