/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent, screen } from '@testing-library/react';
import RelatedItems from '../../client/components/RelatedItems/RelatedItems.jsx';
import axios from 'axios';
import relatedItemsList from './fixtures/relatedItemsList.json';
import selectedItemsList from './fixtures/relatedItemsList.json';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');

describe('RelatedItems component', () => {
  const { location } = window;
  delete window.location;
  window.location = { reload: jest.fn() };

  // test('should render the same Outfit list after the page refresh', () => {
  //   render(<RelatedItems id={1}/>)
  //   const outfits = screen.getAllByTestId("outfit-container");
  //   window.location.reload();
  //   const outfits2 = screen.getAllByTestId("outfit-container");
  //   expect(outfits).toEqual(outfits2);
  // })

  test('should render the related items list', async () => {
    axios.get.mockResolvedValueOnce({data: relatedItemsList});
    render(<RelatedItems id={1}/>);
    const textArr = ["Item1", "Item2", "Item3", "Item4"];
    const cards = await waitFor(() => screen.getAllByTestId("card"));
    cards.forEach((product, i)=>{
      expect(product).toHaveTextContent(textArr[i]);
    })
  })

  test('add the current product to outfit list', () => {
    render(<RelatedItems id={10} />);
    const before = screen.getAllByTestId("outfit-card");
    expect(before).toHaveLength(1);

    fireEvent.click(screen.getByTestId("add-button"));
    const after = screen.getAllByTestId("outfit-card");
    expect(after).toHaveLength(2);
  })

});
