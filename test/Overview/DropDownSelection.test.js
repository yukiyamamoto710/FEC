import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DropDownSelection from '../../client/components/Overview/DropDownSelection.jsx';
import response from '../RelatedItems/fixtures/response.json';
import product2 from '../RelatedItems/fixtures/product2.json';
import '@testing-library/jest-dom/extend-expect';

describe('DropDown Selection', () => {
  var mock = jest.fn();
  test('should show the dropdown button Select Size', () => {
    render(<DropDownSelection style={response.data.results[0]} quantity = '8' callback = {mock}/>);
    // expect(screen.getByTestId("col-1")).toHaveTextContent("Loose");
    expect(screen.getByTestId("options")).toBeVisible();
    fireEvent.click(screen.getByTestId("options"));
    expect(mock).toHaveBeenCalled();
    })

});