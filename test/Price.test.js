import React from 'react';
import { render } from '@testing-library/react';
import Price from '../client/components/RelatedItems/Price.jsx';
import '@jest-environment jsdom';

// it('should take a snapshot', () => {
//   const { asFragment } = render(<Price />)
//   expect(asFragment(<Price />)).toMatchSnapshot()
// });

// import '@jest-environment jsdom';

 test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});