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
import Stars from './Stars';

afterEach(cleanup);

it('Stars will trigger when clicked', () => {
  const testFunc = jest.fn();
  render(<Stars starsClicked={testFunc} />);
  fireEvent.click(screen.getByTestId('button0'));
  fireEvent.click(screen.getByTestId('button1'));
  fireEvent.click(screen.getByTestId('button2'));
  fireEvent.click(screen.getByTestId('button3'));
  fireEvent.click(screen.getByTestId('button4'));
  expect(testFunc).toHaveBeenCalledTimes(5);
});

it('should have default starsClicked()', () => {
  expect(Stars.defaultProps.starsClicked()).toBeDefined();
});

it('matches snapShot', () => {
  const tree = renderer.create(
    <Stars
      rate={1}
      classNameForSize="hi"
      starsClicked={jest.fn}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
