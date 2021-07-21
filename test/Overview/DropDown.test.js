import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropDown from '../../client/components/Overview/DropDown.jsx';
import response from '../RelatedItems/fixtures/response.json';
import product2 from '../RelatedItems/fixtures/product2.json';
import '@testing-library/jest-dom/extend-expect';

describe('DropDown Button', () => {
  var mock = jest.fn();
  test('should show the dropdown button Select Size', () => {
    render(<DropDown name= 'Select Size' style={response.data.results[0]} skus = {response.data.skus} callback = {mock}/>);
    // expect(screen.getByTestId("col-1")).toHaveTextContent("Loose");
    expect(screen.getByText("Select Size")).toBeVisible();
    })

  test('should show the dropdown button Quantity', () => {
    // render(<DropDown name= 'Select Size' style={response.data.results[0]} skus = {response.data.skus} callback = {mock}/>);
    // fireEvent.click(screen.getByText("Select Size"));
    render(<DropDown name= 'Quantity' quant={37} callback = {mock}/>);
    expect(screen.getByTestId("dropdown")).toHaveTextContent('Quantity');
    })

});