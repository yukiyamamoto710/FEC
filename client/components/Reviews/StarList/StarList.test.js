/**
 * @jest-environment jsdom
 */
import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import StarList from './StarList';

afterEach(cleanup);

it('should render', () => {
  const { getByTestId } = render(<StarList />);
  expect(getByTestId('starList')).toBeInTheDocument();
});

it('should have default starsClicked()', () => {
  expect(StarList.defaultProps.starsClicked()).toBeDefined();
});

it('matches snapShot', () => {
  const tree = renderer.create(<StarList />).toJSON();
  expect(tree).toMatchSnapshot();
});
