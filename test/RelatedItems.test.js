/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import RelatedItems from '../client/components/RelatedItems/RelatedItems.jsx';

it('should render the OutfitCard component', () => {
  const { asFragment } = render(<RelatedItems id={25811}/>);
  expect(asFragment(<RelatedItems id={25811}/>)).toMatchSnapshot()
})