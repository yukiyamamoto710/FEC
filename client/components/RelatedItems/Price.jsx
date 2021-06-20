import React from 'react';

const Price = ({product}) => {
  if (product.results[0].sale_price) {
    return (
      <div className="product-price">
        <span data-testid="sale-price"
          className="discounted-price">
          ${Math.abs(Number(product.results[0].sale_price))}
        </span>
        <span data-testid="original-price"
          className="original-price">
          ${Math.abs(Number(product.results[0].original_price))}
        </span>
      </div>
    );
  } else {
    return (
      <div data-testid="price"
        className="product-price">
        ${Math.abs(Number(product.results[0].original_price))}
      </div>
    );
  }
}

export default Price;