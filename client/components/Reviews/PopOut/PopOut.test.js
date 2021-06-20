/**
 * @jest-environment jsdom
 */
import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import PopOut from './PopOut';
import { testData1 } from '../RatingTestData';
import { msg } from '../data';

afterEach(cleanup);

it('render correctly', () => {
  const { getByTestId } = render(<PopOut data={testData1} />);
  expect(getByTestId('popout')).toBeInTheDocument();
});

it('render correctly', () => {
  const { getByTestId } = render(<PopOut data={testData1} />);
  fireEvent.click(getByTestId('submitBtn'));
  expect(getByTestId('WarningContainer')).toBeInTheDocument();
});

it('render correctly', () => {
  const { getByTestId } = render(<PopOut data={testData1} />);
  fireEvent.click(getByTestId('recommendNo'));
  expect(getByTestId('recommendNo').classList.contains('clickedButton')).toBe(true);
});

it('render correctly', () => {
  const { getByTestId, queryByText } = render(<PopOut data={testData1} />);
  fireEvent.change(getByTestId('formText1'), { target: { value: 'd' } });
  fireEvent.change(getByTestId('body'), { target: { value: 'd' } });
  expect(queryByText(msg[1])).toBeInTheDocument();
});

it('should get default addUserReview and cancelAddReview', () => {
  expect(PopOut.defaultProps.addUserReview()).toBeDefined();
  expect(PopOut.defaultProps.cancelAddReview()).toBeDefined();
});

it('matches snapShot', () => {
  const tree = renderer.create(
    <PopOut
      data={testData1}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
