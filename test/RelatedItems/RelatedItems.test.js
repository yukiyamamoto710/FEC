/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitFor, fireEvent, screen, within } from '@testing-library/react';
import RelatedItems from '../../client/components/RelatedItems/RelatedItems.jsx';
import axios from 'axios';
import currentItem from './fixtures/currentItem.json';
import relatedItemsList from './fixtures/relatedItemsList.json';
import selectedItemsList from './fixtures/relatedItemsList.json';
import getRelatedItems from '../../client/components/RelatedItems/getRelatedItems.jsx'
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../client/components/RelatedItems/getRelatedItems.jsx');
getRelatedItems.mockResolvedValue(relatedItemsList);

describe('RelatedItems component', () => {
  const { location } = window;
  delete window.location;
  window.location = { reload: jest.fn() };

  test('should render the same Outfit list after the page refresh', () => {
    render(<RelatedItems id={1} currentItem={currentItem}/>)
    const outfits = screen.queryByTestId("outfit-container");
    window.location.reload();
    const outfits2 = screen.queryByTestId("outfit-container");
    expect(outfits).toEqual(outfits2);
  })

  test('should render the related items list', async () => {
    render(<RelatedItems id={25175} currentItem={currentItem}/>);
    const textArr = ["Item1", "Item2", "Item3", "Item4"];

    await waitFor(() => expect(screen.getByTestId("outfit-container")).toBeInTheDocument());
    const cards = screen.getAllByTestId("card");
    cards.forEach((product, i)=>{
      expect(product).toHaveTextContent(textArr[i]);
    })
  })

  test('add the current product to outfit list', async () => {
    render(<RelatedItems id={25175} currentItem={currentItem} />);
    await waitFor(() => screen.queryByTestId("outfit-card"));
    expect(screen.queryByTestId("outfit-card")).toBeNull();

    fireEvent.click(screen.getByTestId("add-button"));
    expect(screen.getByTestId("outfit-card")).toHaveTextContent("Summer Shoes");
  })

  test('remove the clicked product from outfit list', async () => {
    render(<RelatedItems id={25175} currentItem={currentItem} />);
    await waitFor(() => screen.queryByTestId("add-button"));
    fireEvent.click(screen.getByTestId("add-button"));
    expect(screen.getByTestId("outfit-card")).toHaveTextContent("Summer Shoes");

    fireEvent.click(screen.getByTestId("close"));
    expect(screen.queryByTestId("outfit-card")).toBeNull();
  })

});
