import React, { useState, useEffect } from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';
import PropTypes from 'prop-types';

const RelatedProducts = (props) => {
  const {relatedItemsList, id, changeProductId, currentItem} = props;

  const [idx, setIndex] = useState(0);
  const [displayed, setDisplay] = useState(relatedItemsList.slice(0, 4))

  useEffect(() => {
    setDisplay(relatedItemsList.slice(0, 4))
  }, [relatedItemsList])

  return (
    <div className="container">
      <h3 className="related-products">RELATED PRODUCTS</h3>
      <ul className="carousel">
        <button className="slideLeft"
          onClick={() => {
            setIndex(idx-1)
            setDisplay(relatedItemsList.slice(idx-1, idx+3))}}
          hidden={idx === 0}
          data-testid="slideLeft">
            &lt;
        </button>
        {displayed.map((product, i)=>
          <RelatedProductCard
            key={`${product.id}/${i}`}
            product={product} id={id}
            changeProductId={changeProductId}
            currentItem={currentItem}/>
          )}
        <button className="slideRight"
          onClick={()=> {
            setIndex(idx+1)
            setDisplay(relatedItemsList.slice(idx+1, idx+5))}}
          disabled={relatedItemsList.length < 4 || idx === relatedItemsList.length-4}
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
