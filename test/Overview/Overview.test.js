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


 it('should show whatever is being rendered', () => {
  render(<Overview id ={25748}/>);
  expect(screen.getByText('LOADING')).toBeVisible();
  //need to ask someone tmrw about async and await

  });

//  it('should show whatever is being rendered in product image', () => {
//   //console.log((screen.getByTestId('stylesBox'));
//   render(<ProductImage image ={"https://images.unsplash.com/photo-1548369735-f548cbe6a294?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}/>);
//   expect(screen.getByTestId('image')).toBeVisible();
//   });

  it('should show the big picture of clothing being rendered in DefaultView', () => {
    //console.log((screen.getByTestId('stylesBox'));
    const mock = jest.fn();
    render(<DefaultView picture = {product.results[0].photos[0].url} thumbnailArray = {product.results} callback = {mock}/>);
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

    it('should show a function being called in Thumbnail', () => {
      //console.log((screen.getByTestId('stylesBox'));
      const mock = jest.fn();
      render(<Thumbnail thumbnail = {product.results[0].photos[0].thumbnail_url} identifier = {false} callback = {mock}/>);

      expect(screen.getByAltText("Picture of Clothing")).toBeVisible();
      fireEvent.click(screen.getByAltText("Picture of Clothing"));
      expect(mock).toHaveBeenCalled();

      });