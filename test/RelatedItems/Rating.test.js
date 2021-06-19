/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Rating from '../../client/components/RelatedItems/Rating.jsx';
import product from './fixtures/product.json';
import '@testing-library/jest-dom/extend-expect';

describe('Rating component', () => {
 test('should show the rating of 3.25', () => {
  const { getByRole } = render(<Rating rating={product.rating}/>);
  expect(getByRole("img")).toHaveAttribute('src');
  })
});
