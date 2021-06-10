/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import RelatedProducts from '../../client/components/RelatedItems/RelatedProducts.jsx';
 import relatedItemsList from './fixtures/relatedItemsList.json';

 it('renders the RelatedProducts component', () => {
   render(<RelatedProducts id={1} relatedItemsList={relatedItemsList}/>);
   screen.getByText("RELATED PRODUCTS");
   expect(getByTestId("slideRight")).toBeDisabled();
   expect()
 })

 it('should show the fifth product in list and hide the first one', () => {
   const { getByTestId } = render(<RelatedProducts id={25811} relatedItemsList={relatedItemsList}/>);
   fireEvent.click(getByTestId("slideRight"))
   expect(getByTestId("id")).toHaveTextContent("1");
   expect(getByTestId("slideRight")).toBeVisible();
   expect(getByTestId("slideLeft")).toBeEnabled();
 })

 it('should show the ')