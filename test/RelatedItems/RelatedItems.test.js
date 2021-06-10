/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, waitForElement, fireEvent, cleanup, screen } from '@testing-library/react';
import RelatedItems from '../../client/components/RelatedItems/RelatedItems.jsx';
import axiosMock from 'axios';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup)

it('should render the RelatedItems component', () => {
  const { asFragment } = render(<RelatedItems id={25811}/>);
  expect(asFragment(<RelatedItems id={25811}/>)).toMatchSnapshot()
})

it('should render the RelatedItems component', () => {
  render(<RelatedItems id={25811}/>);
  const relatedItems = [1, 2, 3, 4, 5];
  expect(screen.getByTestId("card")).toHaveTextContent("1")
})