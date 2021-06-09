/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, waitForElement, fireEvent, cleanup } from '@testing-library/react';
import RelatedItems from '../client/components/RelatedItems/RelatedItems.jsx';
import axiosMock from 'axios';

afterEach(cleanup)

jest.mock('axios')

it('should display a loading text', () => {
  const { getByTestId } = render(<RelatedItems />);
  expect(getByTestId('loading')).toHaveTextContent('Loading...');
})

it('should load and display the data', async () => {
  const { getByTestId } = render(<RelatedItems id={25811}/>);
  axiosMock.get.mockResolvedValueOnce({
    data: {product: [1, 2 , 3]}
  })
  fireEvent.
})

it('should render the OutfitCard component', () => {
  const { asFragment } = render(<RelatedItems id={25811}/>);
  expect(asFragment(<RelatedItems id={25811}/>)).toMatchSnapshot()
})