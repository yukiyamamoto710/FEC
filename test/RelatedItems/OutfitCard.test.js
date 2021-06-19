/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OutfitCard from '../../client/components/RelatedItems/OutfitCard.jsx';
import currentItem from './fixtures/currentItem.json';
import '@testing-library/jest-dom/extend-expect';

describe('Outfit Card', () => {
  const removeFromOutfit = jest.fn();

  test('should render outfit card for the given product', () => {
    render(<OutfitCard removeFromOutfit={removeFromOutfit} product={currentItem}/>);
    expect(screen.getByTestId("category")).toHaveTextContent("Kicks");
    expect(screen.getByTestId("name")).toHaveTextContent("Summer Shoes");
  });

  test('should remove the clicked item from a list of outfits', () => {
    render(<OutfitCard removeFromOutfit={removeFromOutfit} product={currentItem}/>);
    const before = screen.getAllByTestId("outfit-card");
    const beforeLength = before.length
    expect(beforeLength).toBe(1);
    fireEvent.click(screen.getByTestId("close"));
    expect(removeFromOutfit).toHaveBeenCalledWith(25175);
    const outfitlist = screen.getAllByTestId("outfit-card");
    expect(outfitlist.length).toBe(beforeLength - 1);
  });
})