/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import RelatedProducts from '../client/components/RelatedItems/RelatedProducts.jsx';

 const relatedItemsList = [{{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}}]

 it('change displayed list of products when clicked' () =? {
   const { getByTestId } = render(<RelatedProducts id={25811} relatedItemsList={relatedItemsList}/>);
   expect(getByTestId())
 })