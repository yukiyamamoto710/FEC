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

afterEach(cleanup);

describe('render correct', () => {
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

it('when moreBTNshow be true, AddBTN should be able to trigger', () => {
  const testfunc = jest.fn();
  const test = true;
  const { getByTestId } = render(
    <Button
      moreBTNshow={test}
      moreReview={testfunc}
    />,
  );
  fireEvent.click(getByTestId('moreBtn'));
  expect(testfunc).toHaveBeenCalledTimes(1);
});

test('should have default addReview and moreReview', () => {
  expect(Button.defaultProps.addReview()).toBeDefined();
  expect(Button.defaultProps.moreReview()).toBeDefined();
});

it('matches snapShot', () => {
  const test = true;
  const test1 = jest.fn();
  const test2 = jest.fn();
  const tree = renderer.create(
    <Button
      moreBTNshow={test}
      addReview={test1}
      moreReview={test2}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
