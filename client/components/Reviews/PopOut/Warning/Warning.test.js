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
import Warning from './Warning';

afterEach(cleanup);

const testArray = ['A', 'B', 'C'];
const testFunc = () => { testArray.push('D'); };

it('Waring will render all the warnings', () => {
  const { getAllByTestId } = render(<Warning warningItems={testArray} />);
  const mapArray = getAllByTestId('WarningItems').map((i) => i.innerHTML);
  expect(JSON.stringify(mapArray.length)).toEqual(JSON.stringify(testArray.length));
});

it('Warning will trigger when clicked', () => {
  const handleClick = jest.fn();
  // const { getByTestId } = render(<Warning show={handleClick} />);
  render(<Warning show={handleClick} />);
  fireEvent.click(screen.getByTestId('WarningButton'));
  // fireEvent.click(getByTestId('WarningButton'));
  expect(handleClick).toHaveBeenCalledTimes(1);
  // expect(testArray.length).toBe(4);
});

it('should have default show()', () => {
  expect(Warning.defaultProps.show()).toBeDefined();
});

it('matches snapShot', () => {
  const tree = renderer.create(<Warning warningItems={testArray} show={testFunc} />).toJSON();
  expect(tree).toMatchSnapshot();
});
