/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AdditionalImages from '../../client/components/RelatedItems/AdditionalImages.jsx';
import images from './fixtures/images.json';
import '@testing-library/jest-dom/extend-expect';

describe('Additional Images', () => {
  test('should render 4 thumbnails', () => {
    render(<AdditionalImages images={images}/>)
    const thumbnails = screen.getAllByRole("img");
    expect(thumbnails).toHaveLength(4);
    thumbnails.forEach((thumbnail) => {
      expect(thumbnail).toHaveClass("thumbnail");
    })
  });

  test('arrow buttons should be disabled if less than 4 thumbnails', () => {
    var images2 = [...images].slice(0, 3);
    render(<AdditionalImages images={images2}/>)
    const thumbnails = screen.getAllByRole("img");
    expect(thumbnails).toHaveLength(3);
    expect(screen.getByTestId("slideRight-mini")).toBeDisabled();
    expect(screen.getByTestId("slideLeft-mini")).not.toBeVisible();
  });

  test('arrow buttons should be enabled/disabled depending on what is on display', () => {
    render(<AdditionalImages images={images}/>)
    expect(screen.getByTestId("slideRight-mini")).toBeVisible();
    expect(screen.getByTestId("slideLeft-mini")).not.toBeVisible();

    fireEvent.click(screen.getByTestId("slideRight-mini"))
    expect(screen.getByTestId("slideRight-mini")).toBeDisabled();
    expect(screen.getByTestId("slideLeft-mini")).toBeEnabled();

    fireEvent.click(screen.getByTestId("slideLeft-mini"))
    expect(screen.getByTestId("slideRight-mini")).toBeEnabled();
    expect(screen.getByTestId("slideLeft-mini")).not.toBeVisible();
  });

  test('should change main image when a thumbnail is clicked', () => {
    const changeMainImage = jest.fn();
    render(<AdditionalImages images={images} changeMainImage={changeMainImage}/>);
    const thumbnails = screen.getAllByRole("img");
    thumbnails.forEach((thumbnail, i) => {
      fireEvent.click(screen.getByTestId(i));
      expect(changeMainImage).toHaveBeenCalledTimes(1)
      expect(changeMainImage).toHaveBeenCalledWith(screen.getByTestId(i));
    })
  });
})
