/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import Comparison from '../../client/components/RelatedItems/Comparison.jsx';
 import product from './fixtures/product.json';
 import product2 from './fixtures/product2.json';
 import '@testing-library/jest-dom/extend-expect';

 const features = ["Cut","Frame","Fair Trade Certified","Non-GMO","Material"]

 test('should show the rating of 3.25', () => {
  const togglePop = jest.fn()
  render(<Comparison id={1} currentItem={product} product={product2} togglePop={togglePop}/>);
  fireEvent.click(screen.getByTestId("close-button"))
  expect(togglePop).toHaveBeenCalledTimes(1);
  })
