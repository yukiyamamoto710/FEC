/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitForElement, fireEvent, cleanup, screen } from '@testing-library/react';
import RelatedItems from '../../client/components/RelatedItems/RelatedItems.jsx';
import axiosMock from 'axios';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

describe('RelatedItems component', () => {
  const { location } = window;
  delete window.location;
  window.location = { reload: jest.fn() };

  test('should render the same Outfit list after the page refresh', () => {
    render(<RelatedItems id={1}/>)
    const outfits = screen.getAllByTestId("outfit-container");
    const id = screen.get
    window.location.reload();
    const outfits2 = screen.getAllByRole("outfit-container");
    expect(outfits).toEqual(outfits2);
  });
});