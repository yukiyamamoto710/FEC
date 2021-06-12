/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import RelatedItems from '../../client/components/RelatedItems/RelatedItems.jsx';
 import selectedItemsList from './fixtures/relatedItemsList.json';
 import relatedItemsList from './fixtures/relatedItemsList.json';
 import '@testing-library/jest-dom/extend-expect';

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
   });

  //  test('should not add the current product more than once', () => {
  //    var items = [...selectedItemsList].slice(0, 2)
  //    render(<Outfits selectedItemsList={items}/>)
  //    expect(screen.getByTestId("slideRight")).not.toBeVisible();
  //    expect(screen.getByTestId("slideLeft")).not.toBeVisible();
  //  });

  //  test('should remove the clicked item from a list of outfit', () => {
  //     render(<RelatedItems id={1}
  //     fireEvent.click(screen.getByTestId("close"));
  //     expect(removeFromOutfit).toHaveBeenCalledWith(1);
  //  });

 })