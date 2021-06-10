// /**
//  * @jest-environment jsdom
//  */
//  import React from 'react';
//  import { render, screen, fireEvent } from '@testing-library/react';
//  import Price from '../../client/components/RelatedItems/Price.jsx';
//  import product from './fixtures/product.json';
//  import product2 from './fixtures/product2.json';
//  import '@testing-library/jest-dom/extend-expect';

//  it('should show the original price', () => {
//   const { getByTestId } = render(<Price product={product}/>);
//   expect(getByTestId("price")).toHaveTextContent("500.00");
//   })

//   it('should show the sale price in red and original price in strikethrough', () => {
//     const { getByTestId } = render(<Price product={product2}/>);
//     expect(getByTestId("price")).toHaveTextContent("765.00");
//     })