/**
* @jest-environment jsdom
*/
import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
  cleanup,
  fireEvent,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import Reviews from '../Reviews';
import Rbase from '../rbase';

afterEach(cleanup);

describe('render correct', () => {
  afterEach(cleanup);
  it('when moreBTNshow be true addBTN should show', () => {
    const test1 = true;
    render(<Button moreBTNshow={test1} />);
    const test = screen.queryByText('MORE REVIEWS');
    expect(test).toBeInTheDocument();
  });

  it('when moreBTNshow be fale addBTN should not show', () => {
    const test2 = false;
    render(<Button moreBTNshow={test2} />);
    const test = screen.queryByText('MORE REVIEWS');
    expect(test).not.toBeInTheDocument();
  });
});

describe('click should trigger func', () => {
  const test1 = true;
  const test2 = false;
  it('when moreBTNshow be true, moreBTN should be able to trigger', () => {
    const testfunc = jest.fn();
    const { getByTestId } = render(
      <Button
        moreBTNshow={test1}
        moreReview={testfunc}
      />,
    );
    fireEvent.click(getByTestId('moreBtn'));
    expect(testfunc).toHaveBeenCalledTimes(1);
    fireEvent.click(getByTestId('moreBtn'));
    expect(testfunc).toHaveBeenCalledTimes(2);
  });

  it('when moreBTNshow be true, AddBTN should be able to trigger', () => {
    const testfunc = jest.fn();
    const { getByTestId } = render(
      <Button
        moreBTNshow={test1}
        addReview={testfunc}
      />,
    );
    fireEvent.click(getByTestId('AddBtn'));
    expect(testfunc).toHaveBeenCalledTimes(1);
    fireEvent.click(getByTestId('AddBtn'));
    expect(testfunc).toHaveBeenCalledTimes(2);
  });

  it('when moreBTNshow be false, AddBTN should be able to trigger', () => {
    const addReview = jest.fn();
    const { getByTestId } = render(
      <Button
        moreBTNshow={test2}
        addReview={addReview}
      />,
    );
    fireEvent.click(getByTestId('AddBtn'));
    expect(addReview).toHaveBeenCalledTimes(1);
    fireEvent.click(getByTestId('AddBtn'));
    expect(addReview).toHaveBeenCalledTimes(2);
  });
});

it('when moreBTNshow be false, AddBTN should be able to trigger', () => {
  // jest.enableAutomock();
  // jest.spyOn(Reviews.moreReview);
  const testfunc = jest.fn();
  const { getByTestId } = render(
    <Button
      moreBTNshow={true}
      moreReview={() => {testfunc}}
    />,
  );
  fireEvent.click(getByTestId('moreBtn'));
  expect(testfunc).toHaveBeenCalledTimes(1);
});