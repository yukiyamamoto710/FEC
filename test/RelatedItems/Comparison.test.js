/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Comparison from '../../client/components/RelatedItems/Comparison.jsx';
import currentItem from './fixtures/currentItem.json';
import product2 from './fixtures/product2.json';
import '@testing-library/jest-dom/extend-expect';

describe('Comparison', () => {
  const togglePop = jest.fn()
  render(<Comparison id={1} currentItem={currentItem} product={product2} togglePop={togglePop}/>);

  test('should render 5 description rows', () => {
    const rows = screen.getAllByTestId("row");
    expect(rows).toHaveLength(4);
    rows.forEach((row) => {
      expect(row).toHaveClass("row");
      expect(row).toContainHTML("<td>")
    })
  });
  // fireEvent.click(screen.getByTestId("close-button"))
  // expect(togglePop).toHaveBeenCalledTimes(1);
  // })
})

