/**
 * @jest-environment jsdom
 */
import {
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';
import useReview from './useReview';

jest.mock('axios');
afterEach(cleanup);

it('starClicked', () => {
  const { result } = renderHook(useReview);
  expect(result.current.countStars).toBe(5);
  act(() => {
    result.current.starClicked(3);
  });
  expect(result.current.countStars).toBe(3);
});

it('addUserReview', () => {
  const { result } = renderHook(useReview);
  expect(result.current.listUserReview).toEqual([]);
  act(() => {
    result.current.addUserReview({});
  });
  expect(result.current.listUserReview).toEqual([{}]);
});

it('addListReported', () => {
  const { result } = renderHook(useReview);
  expect(result.current.listReported).toEqual([]);
  act(() => {
    result.current.addListReported({});
  });
  expect(result.current.listReported).toEqual([{}]);
});
