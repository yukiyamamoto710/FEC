/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import ProductImage from '../../client/components/Overview/ProductImage.jsx';
 import Overview from '../../client/components/Overview/Overview.jsx';
 import Thumbnail from '../../client/components/Overview/Thumbnail.jsx';
 import DefaultView from '../../client/components/Overview/DefaultView.jsx'
 import product from '../RelatedItems/fixtures/product.json';
 import product2 from '../RelatedItems/fixtures/product2.json';
 import '@testing-library/jest-dom/extend-expect';



  it('should show the big picture of clothing being rendered in DefaultView', () => {
    //console.log((screen.getByTestId('stylesBox'));
    const mock = jest.fn();
    render(<DefaultView picture = {product.results[0].photos[0].url} styleObj = {product.results[0]} callback ={mock} />);
    // fireEvent.click(screen.getByAltText("Big Picture of Clothing"));
    // expect(mock).not.toHaveBeenCalled();
    expect(screen.getByAltText("Big Picture of Clothing")).toBeVisible();
    fireEvent.click(screen.getByAltText("Big Picture of Clothing"));
    expect(mock).not.toHaveBeenCalled();
    // expect(screen.getAllByAltText("Picture of Clothing")).toBeVisible();
    //expect(mock).toHaveBeenCalled();
    });

    it('should show a function being called in DefaultView', () => {
      const mock = jest.fn();
      render(<img className ='Picture' onClick = {mock} alt=" Big Picture of Clothing"></img>)
      fireEvent.click(screen.getByAltText("Big Picture of Clothing"));
      expect(mock).toHaveBeenCalled();
      });

    it('left arrow should be hidden when index is zero', () => {
      const mock = jest.fn();
      render(<DefaultView picture = {product.results[0].photos[0].url} styleObj = {product.results[0]} callback = {mock} />);
      fireEvent.click(screen.getByAltText("left-arrow"));
      expect(screen.getByAltText("left-arrow")).not.toBeVisible();
      //?????? class is hidden. display: none. should not be visible
    });

    it('should change thumbnail on click', () => {
      //console.log((screen.getByTestId('stylesBox'));
      const mock = jest.fn();
      render(<DefaultView picture = {product.results[0].photos[0].url} styleObj = {product.results[0]} callback = {mock} />);
      // fireEvent.click(screen.getByAltText("Big Picture of Clothing"));
      // expect(mock).not.toHaveBeenCalled();
      expect(screen.getByAltText("arrow")).not.toBeVisible();
      fireEvent.click(screen.getByAltText("arrow"));
      expect(mock).toHaveBeenCalled();
      expect(screen.getAllByAltText("Picture of Clothing")).toBeVisible();
      //expect(mock).toHaveBeenCalled();
      });




