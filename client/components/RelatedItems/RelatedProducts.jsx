import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import PropTypes from 'prop-types';

const RelatedProducts = (props) => {
  const {relatedItemsList, id, changeProductId, currentItem} = props;

  const [state, setState] = useState({idx: 0, displayed: []});

  useEffect(() => {
    setState({idx: 0, displayed: [...relatedItemsList].slice(0, 4)})
  }, [relatedItemsList])

  return (
    <div className="container">
      <h3 className="related-products">RELATED PRODUCTS</h3>
      <ul className="carousel">
        <button className="slideLeft"
          onClick={()=>setState({idx: state.idx-1, displayed: [...relatedItemsList].slice(state.idx-1, state.idx+3)})}
          hidden={state.idx === 0}
          data-testid="slideLeft">
            &lt;
        </button>
        {state.displayed.map(product=>
          <RelatedProductCard key={product.id} product={product} id={id} changeProductId={changeProductId} currentItem={currentItem}/>
          )}
        <button className="slideRight"
          onClick={()=>setState({idx: state.idx+1, displayed: [...relatedItemsList].slice(state.idx+1, state.idx+5)})}
          disabled={relatedItemsList.length < 4 || state.idx === relatedItemsList.length-4}
          data-testid="slideRight">
            &gt;
        </button>
      </ul>
    </div>
  )
}

RelatedProducts.propTypes = {
  id: PropTypes.number,
  relatedItemsList: PropTypes.array,
  changeProductId: PropTypes.func,
  currentItem: PropTypes.object
}

export default RelatedProducts;
