import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Description from '../../client/components/Overview/Description.jsx';
import response from '../RelatedItems/fixtures/response.json';
import descriptions from '../RelatedItems/fixtures/descriptions.json';
import product2 from '../RelatedItems/fixtures/product2.json';
import '@testing-library/jest-dom/extend-expect';

describe('Description', () => {
  var mock = jest.fn();
  test('should show the dropdown button Select Size', () => {
    render(<Description descriptions={descriptions[0]} style = {response.data.results[0]} skus = '37' price = '100' salePrice = '50' styleItem = {response.data.results.name} callback = {mock}/>);
    expect(screen.getByTestId("header")).toBeVisible();
    expect(screen.getByText(`$${100}`)).toBeVisible();
    // fireEvent.click(screen.getByText("Add to Cart"));
    //expect(mock).toHaveBeenCalled();
    })

});