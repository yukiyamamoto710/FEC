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
// import get from './qwe';

jest.mock('axios');

afterEach(cleanup);
it('isReviewsLoad false', () => {
  const testId = 25711;
  const { queryByText } = render(<Reviews id={testId} />);
  expect(queryByText('Loading...')).toBeInTheDocument();
});

it('isReviewsLoad true', async () => {
  // jest.mock('axios');
  const result = {data:'jo'}
  axios.get.mockImplementationOnce(() => Promise.resolve(result));
  const {getByTestId} = render(<Reviews id={25711}/>)
  const test = await waitForElement(()=>{ getByTestId('reviewContainer')})
  expect(await getByTestId('rating')).toBeInTheDocument();

});
