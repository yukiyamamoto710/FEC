/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import OutfitCard from '../../client/components/RelatedItems/OutfitCard.jsx';
import product from './fixtures/product.json';
import '@testing-library/jest-dom/extend-expect';


describe('Outfit Card', () => {
  const removeFromOutfit = jest.fn();

  test('should render outfit card for the given product', () => {
    render(<OutfitCard removeFromOutfit={removeFromOutfit} product={product}/>);
    expect(screen.getByTestId("category")).toHaveTextContent("Shirt");
    expect(screen.getByTestId("name")).toHaveTextContent("Item1");
  });

  test('should remove the clicked item from a list of outfits', () => {
    render(<OutfitCard removeFromOutfit={removeFromOutfit} product={product}/>);
    fireEvent.click(screen.getByTestId("close"));
    expect(removeFromOutfit).toHaveBeenCalledWith(1);
  });
})