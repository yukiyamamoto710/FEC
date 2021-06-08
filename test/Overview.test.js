const sum = require('../client/components/Overview/Overview.jsx');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('some test', () => {
  console.log(sum.renderItems());
})