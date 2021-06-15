/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DescriptionRow from '../../client/components/RelatedItems/DescriptionRow.jsx';
import featuresList from './fixtures/features.json';
import '@testing-library/jest-dom/extend-expect';

const features = ["Cut","Frame","Fair Trade Certified","Non-GMO","Material"]

describe('Description Row', () => {
  test('should show one description and corresponding answers', () => {
    render(<DescriptionRow feature={features[0]} relatedProduct={featuresList[0]} currentItem={featuresList[1]}/>);
    // expect(screen.getByTestId("col-1")).toHaveTextContent("Loose");
    expect(screen.getByTestId("col-2")).toHaveTextContent("Cut");
    expect(screen.getByTestId("col-3")).not.toHaveTextContent();
    })
})
