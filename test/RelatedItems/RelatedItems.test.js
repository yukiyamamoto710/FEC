/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import RelatedItems from '../../client/components/RelatedItems/RelatedItems.jsx';
import axios from 'axios';
import relatedItemsList from './fixtures/relatedItemsList.json';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

describe('RelatedItems component', () => {
  const { location } = window;
  delete window.location;
  window.location = { reload: jest.fn() };

  test('should render the same Outfit list after the page refresh', () => {
    render(<RelatedItems id={1}/>)
    const outfits = screen.getAllByTestId("outfit-container");
    const id = screen.get
    window.location.reload();
    const outfits2 = screen.getAllByRole("outfit-container");
    expect(outfits).toEqual(outfits2);
  })

  test('should render the related items list', async() => {
    axios.get.mockResolvedValue({data: relatedItemsList});
    render(<RelatedItems id={1}/>);
    const list = await waitFor(() => screen.find)
  })

  // adding the current product to outfit
  // if it is already in the list it does not add

  // remove the clicked product from outfit
});