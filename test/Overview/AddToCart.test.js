import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddToCart from '../../client/components/Overview/AddToCart.jsx';
import response from '../RelatedItems/fixtures/response.json';
import product2 from '../RelatedItems/fixtures/product2.json';
import '@testing-library/jest-dom/extend-expect';

describe('DropDown Selection', () => {
  var mock = jest.fn();
  test('should show Add to cart and invoke callback function when clicked', () => {
    render(<AddToCart style={response.data.results[0]} quantity = '8' callback = {mock}/>);
    expect(screen.getByText("ADD TO CART")).toBeInTheDocument();
    fireEvent.click(screen.getByText("ADD TO CART"));
    expect(mock).toHaveBeenCalled();
    })

});