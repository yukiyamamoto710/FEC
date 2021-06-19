/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Price from '../../client/components/RelatedItems/Price.jsx';
import product from './fixtures/currentItem.json';
import product2 from './fixtures/product2.json';
import '@testing-library/jest-dom/extend-expect';

describe('Price component', () => {
 it('should show the original price', () => {
  render(<Price product={product}/>);
  expect(screen.getByTestId("price")).toHaveTextContent("$59");
  });

 it('should show the sale price and original price', () => {
  render(<Price product={product2}/>);
  expect(screen.getByTestId("sale-price")).toHaveTextContent("$99");
  expect(screen.getByTestId("original-price")).toHaveTextContent("$207");
  });
})