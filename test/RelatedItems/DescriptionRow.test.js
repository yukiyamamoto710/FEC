/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import DescriptionRow from '../../client/components/RelatedItems/DescriptionRow.jsx';
 import product from './fixtures/product.json';
 import product2 from './fixtures/product2.json';
 import '@testing-library/jest-dom/extend-expect';

 const features = ["Cut","Frame","Fair Trade Certified","Non-GMO","Material"]

 test('should show the rating of 3.25', () => {
  const { getByRole } = render(<DescriptionRow feature={features} relatedProduct={product2} currentItem={product}/>);
  expect(getByRole("imag")).toHaveAttribute('src');
  })
