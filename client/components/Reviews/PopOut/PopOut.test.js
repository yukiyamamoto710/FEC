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
import PopOut from './PopOut';

const data = {
  characteristics: {
    Size: {
      id: 86429,
      value: '3.0000000000000000',
    },
    Width: {
      id: 86430,
      value: '1.00000000000000000000',
    },
    Comfort: {
      id: 86431,
      value: '2.0000000000000000',
    },
    Quality: {
      id: 86432,
      value: '3.0000000000000000',
    },
  },
  product_id: '25748',
  ratings: {
    1: '1',
  },
  recommended: {
    false: '1',
  },
};

afterEach(cleanup);
it('render correctly', () => {
  render(<PopOut data={data} />);
  const a = screen.getByTestId('popout');
  expect(a).toBeInTheDocument();
});
