import axios from 'axios';

export default async function moreReviewsGet({
  string, id, count, sort,
}) {
  const result = await axios.get('/get', {
    params: {
      endpoint: `${string}/?product_id=${id}&count=${count}&sort=${sort}`,
    },
  });
  return result.data.results;
}
