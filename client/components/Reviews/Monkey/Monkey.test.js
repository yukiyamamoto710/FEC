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
import Monkey from './Monkey';

it('should render',() => {
  const { getByTestId } = render(<Monkey/>)
  expect(getByTestId('monkey')).toBeInTheDocument();
})

it('matches snapShot', () => {
  const tree = renderer.create(
    <Monkey />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});