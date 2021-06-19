/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import ExpandedPic from '../../client/components/Overview/ExpandedPic.jsx';
 import product from '../RelatedItems/fixtures/product.json';
 import product2 from '../RelatedItems/fixtures/product2.json';
 import '@testing-library/jest-dom/extend-expect';



  it('should not call change Thumbnail when clicked', () => {
    //console.log((screen.getByTestId('stylesBox'));
    const mock = jest.fn();
    render(<ExpandedPic picture = {product.results[0].photos[0].url} styleObj = {product.results[0].photos} callback ={mock} />);
    // fireEvent.click(screen.getByAltText("Big Picture of Clothing"));
    // expect(mock).not.toHaveBeenCalled();
    expect(screen.getByAltText("Big Picture of Clothing")).toBeVisible();
    fireEvent.click(screen.getByAltText("Big Picture of Clothing"));
    expect(mock).not.toHaveBeenCalled();
    // expect(screen.getAllByAltText("Picture of Clothing")).toBeVisible();
    //expect(mock).toHaveBeenCalled();
    });

    it('should have the classname properly changed on click', () => {
      //console.log((screen.getByTestId('stylesBox'));
      const mock = jest.fn();
      render(<ExpandedPic picture = {product.results[0].photos[0].url} styleObj = {product.results[0].photos} callback ={mock} />);
      // fireEvent.click(screen.getByAltText("Big Picture of Clothing"));
      // expect(mock).not.toHaveBeenCalled();
      expect(screen.getByAltText("arrow")).toBeVisible();
      fireEvent.click(screen.getByAltText("arrow"));
      expect(mock).toHaveBeenCalled();
      // expect(screen.getAllByAltText("Picture of Clothing")).toBeVisible();
      //expect(mock).toHaveBeenCalled();
      });



