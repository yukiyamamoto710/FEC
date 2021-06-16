/**
 * @jest-environment jsdom
 */
import React from 'react';
import axios from 'axios';
import renderer from 'react-test-renderer';
import {
  render,
  screen,
  cleanup,
  waitFor,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Reviews from './Reviews1';
import testData1 from './RatingTestData'

jest.mock('axios');

afterEach(cleanup);
it('isRatingLoad false', () => {
  const testId = 25711;
  const { getByTestId } = render(<Reviews id={testId} productRating={testData1}/>);
  expect(getByTestId('reviewContainer')).toBeInTheDocument();
});

it('matches snapShot', () => {
  const tree = renderer.create(
    <Reviews
      id={25711}
      productRating={testData1}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

