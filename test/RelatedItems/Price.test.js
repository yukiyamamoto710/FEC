/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import Price from '../../client/components/RelatedItems/Price.jsx';
 import product from './fixtures/product.json';
 import product2 from './fixtures/product2.json';
 import '@testing-library/jest-dom/extend-expect';

 it('should show the original price', () => {
  render(<Price product={product}/>);
  expect(screen.getByTestId("price")).toHaveTextContent("$756");
  });

 it('should show the sale price and original price', () => {
  render(<Price product={product2}/>);
  expect(screen.getByTestId("sale-price")).toHaveTextContent("$500");
  expect(screen.getByTestId("original-price")).toHaveTextContent("$756");
  });