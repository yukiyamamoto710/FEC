/**
 * @jest-environment jsdom
 */
import axios from 'axios';
import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
  screen,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import useReviewListBase from './useReviewListBase';

jest.mock('axios');

it('should set sort', () => {
  const { result } = renderHook(() => useReviewListBase('25821', [], [], 5));
  act(() => {
    result.current.sortBy('newest');
  });
  expect(result.current.sort).toBe('newest');
});

it('should getmorereviews', () => {
  const { result } = renderHook(() => useReviewListBase('25821', [], [], 5));
  const data = {...};

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData('react')).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `${API}/search?query=react`,
    );
  act(() => {
    result.current.getMoreReviews();
  });
  expect(result.current.isMoreReviews).toBe(true);
});
