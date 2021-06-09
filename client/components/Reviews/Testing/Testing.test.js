/**
 * @jest-environment jsdom
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import Button from './Testing';

afterEach(cleanup);

test('render without crashing', () => {
  const { getByTestId } = render(<Button name="i am button" />);
  expect(getByTestId('Button').innerHTML).toBe('i am button');
});

it('matches snapShot', () => {
  const tree = renderer.create(<Button name="i am button" />).toJSON();
  expect(tree).toMatchSnapshot();
});
