/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import RelatedProducts from '../../client/components/RelatedItems/RelatedProducts.jsx';
 import relatedItemsList from './fixtures/relatedItemsList.json';
 import '@testing-library/jest-dom/extend-expect';

//  it('renders the RelatedProducts component', () => {
//    render(<RelatedProducts id={1} relatedItemsList={relatedItemsList}/>);
//    screen.getByText("RELATED PRODUCTS");
//    expect(getByTestId("slideRight")).toBeDisabled();
//  })

 it('arrow buttons should be enabled/disabled depending on the displayed products', () => {
   const { getByTestId } = render(<RelatedProducts id={25811} relatedItemsList={relatedItemsList}/>);
   expect(getByTestId("slideRight")).toBeVisible();
   expect(getByTestId("slideLeft")).not.toBeVisible();

   fireEvent.click(getByTestId("slideRight"))
   expect(getByTestId("slideRight")).toBeDisabled();
   expect(getByTestId("slideLeft")).toBeEnabled();

   fireEvent.click(getByTestId("slideLeft"))
   expect(getByTestId("slideRight")).toBeEnabled();
   expect(getByTestId("slideLeft")).not.toBeVisible();
 })

 it('should only display four products at a time', () => {
  const { getAllByTestId } = render(<RelatedProducts id={25811} relatedItemsList={relatedItemsList}/>);

  expect(getAllByTestId("product-name")).toHaveTextContent(["Item1", "Item2", "Item3", "Item4"]);
})
