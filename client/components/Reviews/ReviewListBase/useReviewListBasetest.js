// /**
//  * @jest-environment jsdom
//  */
// import axios from 'axios';
// import React from 'react';
// import renderer from 'react-test-renderer';
// import {
//   render,
//   screen,
//   cleanup,
// } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { renderHook, act } from '@testing-library/react-hooks';
// import useReviewListBase from './useReviewListBase';

// jest.mock('axios');

// it('should set sort', () => {
//   const { result } = renderHook(() => useReviewListBase('25821', [], [], 5));
//   act(() => {
//     result.current.sortBy('newest');
//   });
//   expect(result.current.sort).toBe('newest');
// });

// it('should getmorereviews', async () => {

//   const res = {
//     data: {
//       results: [{
//         body: 'Blend in to your crowd',
//         date: '2021-06-07T00:00:00.000Z',
//         helpfulness: 0,
//         photos: [],
//         rating: 5,
//         recommend: true,
//         response: null,
//         review_id: 406627,
//         reviewer_name: 'Jackets',
//         summary: 'Camo Onesie',
//       }],
//     },
//   };
//   axios.get.mockReturnValue(() => Promise.resolve(res));
//   const { result } = renderHook(() => useReviewListBase('25821', [], [], 5));
//   await act(async () => {
//     await result.current.getMoreReviews();
//   });
//   expect(await result.current.data).toEqual(res);
//   expect(result.current.isMoreReviews).toBe(true);
//   axios.get.mockImplementationOnce(() => Promise.resolve(res));
//   await act(async () => {
//     await result.current.getMoreReviews();
//   });
//   expect(result.current.isMoreReviews).toBe(false);
// });
