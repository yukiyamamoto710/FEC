/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import DescriptionRow from '../../client/components/RelatedItems/DescriptionRow.jsx';
//  import product from './fixtures/product.json';
//  import product2 from './fixtures/product2.json';
 import '@testing-library/jest-dom/extend-expect';

 const features = ["Cut","Frame","Fair Trade Certified","Non-GMO","Material"]

 describe('Description Row', () => {
  const product = [
    {
      "feature": "Cut",
      "value": "\"Loose\""
    },
    {
      "feature": "Frame",
      "value": "\"DuraResin\""
    },
    {
      "feature": "Fair Trade Certified",
      "value": null
    },
    {
      "feature": "Non-GMO",
      "value": null
    }
  ];
  const product2 = [
    {
      "feature": "Fair Trade Certified",
      "value": null
    },
    {
      "feature": "Non-GMO",
      "value": null
    },
    {
      "feature": "Material",
      "value": "\"FullSupport Hybrid Compound\""
    }
  ];

  test('should show one description and corresponding answers', () => {
    render(<DescriptionRow feature={features[0]} relatedProduct={product2} currentItem={product}/>);
    // expect(screen.getByTestId("col-1")).toHaveTextContent("Loose");
    expect(screen.getByTestId("col-2")).toHaveTextContent("Cut");
    expect(screen.getByTestId("col-3")).not.toHaveTextContent();
    })

 })
