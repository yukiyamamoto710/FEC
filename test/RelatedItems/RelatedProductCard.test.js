/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import RelatedProductCard from '../../client/components/RelatedItems/RelatedProductCard.jsx';
 import product from './fixtures/product.json';
 import '@testing-library/jest-dom/extend-expect';

describe('Outfit Card', () => {
  it('should render related product', () => {
    const deselectOutfit = jest.fn();
    const changeProductId = jest.fn();

    render(<RelatedProductCard id={1} product={product} deselectOutfit={deselectOutfit} changeProductId={changeProductId}/>);

    expect(screen.getByTestId("close")).toHaveTextContent("&#9447;");
    expect(screen.getByTestId("image")).toHaveAttribute("img");
    expect(screen.getByTestId("category")).toHaveTextContent("Shirt");
    expect(screen.getByTestId("name")).toHaveTextContent("Item1");
    });
})