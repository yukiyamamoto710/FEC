// import Mockaxios from '../__mock__/moreReviewsGet';
import axios from 'axios';
import moreReviewsGet from './moreReviewsGet';

jest.mock('axios');
it('sda', async () => {
  const result = {
    data: {
      results: [{
        body: 'Blend in to your crowd',
        date: '2021-06-07T00:00:00.000Z',
        helpfulness: 0,
        photos: [],
        rating: 5,
        recommend: true,
        response: null,
        review_id: 406627,
        reviewer_name: 'Jackets',
        summary: 'Camo Onesie',
      }],
    },
  };

  axios.get.mockImplementationOnce(() => Promise.resolve(result));

  const test = await moreReviewsGet({
    string: 'reviews',
    id: '25167',
    count: 2,
    sort: 'newest',
  });
  expect(test).toEqual(result.data.results);
  expect(axios.get).toHaveBeenCalledWith('/get', { params: { endpoint: 'reviews/?product_id=25167&count=2&sort=newest' } });
  expect(axios.get).toHaveBeenCalledTimes(1);
});
