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
     const outfits = screen.getAllByRole("listitem");
     const id = screen.get
     window.location.reload();
     const outfits2 = screen.getAllByRole("listitem");
     expect(outfits).toEqual(outfits2);
   });

   test('arrow buttons should be disabled if less than 3 outfit cards', () => {
     var items = [...selectedItemsList].slice(0, 2)
     render(<Outfits selectedItemsList={items}/>)
     expect(screen.getByTestId("slideRight")).not.toBeVisible();
     expect(screen.getByTestId("slideLeft")).not.toBeVisible();
   });

   // should not add the current product more than once
   test('arrow buttons should be enabled/disabled depending on what is on display', () => {
     var items = [...selectedItemsList].slice(0, 4)
     render(<Outfits selectedItemsList={items}/>)
     expect(screen.getByTestId("slideRight")).toBeVisible();
     expect(screen.getByTestId("slideLeft")).not.toBeVisible();

     fireEvent.click(screen.getByTestId("slideRight"))
     expect(screen.getByTestId("slideRight")).toBeDisabled();
     expect(screen.getByTestId("slideLeft")).toBeEnabled();

     fireEvent.click(screen.getByTestId("slideLeft"))
     expect(screen.getByTestId("slideRight")).toBeEnabled();
     expect(screen.getByTestId("slideLeft")).not.toBeVisible();
   });

   // should remove the 
 })