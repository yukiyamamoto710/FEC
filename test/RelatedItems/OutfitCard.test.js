/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import OutfitCard from '../../client/components/RelatedItems/OutfitCard.jsx';
 import product from './fixtures/product.json';
 import '@testing-library/jest-dom/extend-expect';

describe('Outfit Card', () => {
  it('should render outfit card for the given product', () => {
    const removeFromOutfit = jest.fn();

    render(<OutfitCard removeFromOutfit={removeFromOutfit} product={product}/>);
    expect(screen.getByTestId("close")).toHaveTextContent("&#9447;");
    expect(screen.getByTestId("image")).toHaveAttribute("img");
    expect(screen.getByTestId("category")).toHaveTextContent("Shirt");
    expect(screen.getByTestId("name")).toHaveTextContent("Item1");
    });
})
