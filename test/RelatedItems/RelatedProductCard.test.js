/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RelatedProductCard from '../../client/components/RelatedItems/RelatedProductCard.jsx';
import product from './fixtures/product.json';
import product2 from './fixtures/product2.json';
import '@testing-library/jest-dom/extend-expect';


describe('Related Product Card', () => {
  const deselectOutfit = jest.fn();
  const changeProductId = jest.fn();

  test('should render related product', () => {
    render(<RelatedProductCard id={25811} product={product} changeProductId={changeProductId}/>);
    expect(screen.getByTestId("category")).toHaveTextContent("Shirt");
    expect(screen.getByTestId("name")).toHaveTextContent("Item1");
  });

  test('should change the currently displayed product for the page', () => {
    render(<RelatedProductCard id={25811} product={product} changeProductId={changeProductId}/>);
    fireEvent.click(screen.getByTestId("card"));
    expect(changeProductId).toHaveBeenCalledWith(1);
  });

  test('hovering the image should make additional images appear', () => {
    render(<RelatedProductCard id={25811} product={product} changeProductId={changeProductId}/>);
    fireEvent.mouseOver(screen.getByTestId("related-product-card"));
    const additional = screen.getAllByTestId("additional-images");
    expect(additional).toHaveLength(1);
  });

  test('hovering out of the image should hide additional images', () => {
    render(<RelatedProductCard id={25811} product={product} changeProductId={changeProductId}/>);
    fireEvent.mouseLeave(screen.getByTestId("related-product-card"));
    const additional = screen.queryByTestId("additional-images");
    expect(additional).toBeNull();
  })

  test('a modal should pop up when a star is clicked', () => {
    render(<RelatedProductCard id={25811} product={product} changeProductId={changeProductId} currentItem={product2}/>);
    fireEvent.click(screen.getByTestId("star"));
    expect(screen.getByTestId("modal")).toBeVisible();
  });
})